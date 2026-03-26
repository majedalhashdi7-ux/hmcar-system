// vercel-server.js - المدخل الرئيسي لبيئة Vercel Serverless
// مُحسَّن بالكامل لتجنب أخطاء الـ Cold Start و DB Connection

const mongoose = require('mongoose');

// ── 1. ثوابت ──
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
const DB_OPTIONS = {
  maxPoolSize: 5,
  serverSelectionTimeoutMS: 20000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 20000,
  bufferCommands: true,
  retryWrites: true,
  w: 'majority',
};

// ── 2. كاش مشترك بين invocations (Warm Lambda) ──
let cachedApp = null;
let connectionPromise = null;

// ── 3. إنشاء اتصال DB آمن مع Promise caching ──
async function connectDB() {
  // إذا كان الاتصال قائماً، لا تعيد الاتصال
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // إذا كان هناك اتصال جاري، انتظره
  if (connectionPromise) {
    return connectionPromise;
  }

  // إنشاء اتصال جديد
  connectionPromise = mongoose.connect(MONGO_URI, DB_OPTIONS)
    .then(() => {
      console.log('[Vercel] ✅ MongoDB connected successfully');
      connectionPromise = null;
    })
    .catch((err) => {
      console.error('[Vercel] ❌ MongoDB connection failed:', err.message);
      connectionPromise = null;
      throw err;
    });

  return connectionPromise;
}

// ── 4. بناء تطبيق Express ──
function buildApp() {
  if (cachedApp) return cachedApp;

  const express = require('express');
  const cors = require('cors');
  const helmet = require('helmet');
  const compression = require('compression');
  const path = require('path');
  const { tenantMiddleware } = require('./middleware/tenantMiddleware');

  const app = express();

  // Security
  app.use(helmet({
    contentSecurityPolicy: false, // تعطيل CSP لتسهيل Vercel
  }));

  app.use(compression());

  // CORS
  app.use(cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      const allowed = [
        'https://hmcar.okigo.net',
        'https://car-auction-sand.vercel.app',
        'https://client-app-iota-eight.vercel.app',
      ];
      const isOk = allowed.includes(origin)
        || origin.endsWith('.vercel.app')
        || origin.endsWith('.okigo.net')
        || origin.includes('localhost');
      callback(isOk ? null : new Error('CORS blocked'), isOk);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Tenant-ID'],
  }));

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Uploads (static)
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  app.use('/public', express.static(path.join(__dirname, 'public')));

  // Multi-Tenant Middleware
  app.use(tenantMiddleware({ required: false, connectDb: true }));

  // ── Routes ──
  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      env: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  });

  // Load API v2 routes
  try {
    const apiV2Router = require('./routes/api/v2/index');
    app.use('/api/v2', apiV2Router);
    app.use('/v2', apiV2Router);
    app.use('/api', apiV2Router);
    console.log('[Vercel] ✅ API routes loaded successfully');
  } catch (err) {
    console.error('[Vercel] ❌ Failed to load API routes:', err.message);
    console.error('[Vercel] ❌ Stack trace:', err.stack);
    // تقديم route بديل لإعطاء رسالة واضحة
    app.use('/api', (req, res) => {
      res.status(503).json({
        success: false,
        message: 'API routes failed to load',
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    });
  }

  // 404 Handler
  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found', path: req.path });
  });

  // Error Handler
  app.use((err, req, res, next) => {
    console.error('[Vercel] Express error:', err.message);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  });

  cachedApp = app;
  return app;
}

// ── 5. الـ Handler الرئيسي ──
module.exports = async (req, res) => {
  try {
    // اتصال DB
    if (!MONGO_URI) {
      return res.status(500).json({
        success: false,
        message: 'MONGO_URI environment variable is not set',
        code: 'MISSING_ENV',
      });
    }

    // حاول الاتصال بقاعدة البيانات
    try {
      await connectDB();
    } catch (dbError) {
      console.error('[Vercel] DB connection error:', dbError.message);
      // لا نوقف التطبيق - نستمر وقد يعمل من الـ connection pool
    }

    // بناء التطبيق (مرة واحدة)
    const app = buildApp();

    // تمرير الطلب لـ Express
    return app(req, res);

  } catch (fatalError) {
    console.error('[Vercel] FATAL ERROR:', fatalError.message, fatalError.stack);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: 'Server initialization failed',
        code: 'INIT_ERROR',
      });
    }
  }
};
