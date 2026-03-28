// vercel-server.js - المدخل الرئيسي لبيئة Vercel Serverless

const mongoose = require('mongoose');

// ── ثوابت ──
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
const IS_VERCEL = !!(process.env.VERCEL || process.env.VERCEL_ENV);

const DB_OPTIONS = {
  maxPoolSize: 10, // زيادة للـ serverless
  minPoolSize: 2,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 30000,
  bufferCommands: false, // أفضل للـ serverless
  retryWrites: true,
  w: 'majority',
  maxIdleTimeMS: 10000, // إغلاق الاتصالات الخاملة
};

let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  if (connectionPromise) return connectionPromise;
  connectionPromise = mongoose.connect(MONGO_URI, DB_OPTIONS)
    .then(() => { connectionPromise = null; })
    .catch((err) => { connectionPromise = null; throw err; });
  return connectionPromise;
}

// قائمة الـ origins المسموح بها
const ALLOWED_ORIGINS = [
  'https://hmcar.okigo.net',
  'https://www.hmcar.okigo.net',
  'https://car-auction-sand.vercel.app',
  'https://client-app-iota-eight.vercel.app',
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim()).filter(Boolean) : []),
];

function isOriginAllowed(origin) {
  if (!origin) return true;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  
  // السماح فقط للدومينات الموثوقة
  if (origin.endsWith('.okigo.net')) return true;
  if (origin.includes('localhost') || origin.includes('127.0.0.1')) return true;
  
  // Vercel domains - فقط للمشروع الحالي
  if (origin.includes('car-auction') && origin.endsWith('.vercel.app')) return true;
  if (origin.includes('client-app') && origin.endsWith('.vercel.app')) return true;
  
  return false;
}

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;
  if (origin && isOriginAllowed(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With,X-Tenant-ID');
  res.setHeader('Access-Control-Max-Age', '86400');
}

function buildApp() {
  const express = require('express');
  const helmet = require('helmet');
  const compression = require('compression');
  const path = require('path');
  const { tenantMiddleware } = require('./middleware/tenantMiddleware');

  const app = express();

  // CORS middleware - أول شيء
  app.use((req, res, next) => {
    setCorsHeaders(req, res);
    if (req.method === 'OPTIONS') return res.status(204).end();
    next();
  });

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(compression());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use(tenantMiddleware({ required: false, connectDb: true }));

  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      env: (process.env.NODE_ENV || '').trim(),
      isVercel: IS_VERCEL,
      timestamp: new Date().toISOString(),
    });
  });

  try {
    const apiV2Router = require('./routes/api/v2/index');
    app.use('/api/v2', apiV2Router);
    app.use('/v2', apiV2Router);
    app.use('/api', apiV2Router);
  } catch (err) {
    console.error('[Vercel] ❌ Failed to load API routes:', err.message);
    app.use('/api', (req, res) => {
      res.status(503).json({ success: false, message: 'API routes failed to load', error: err.message });
    });
  }

  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found', path: req.path });
  });

  app.use((err, req, res, next) => {
    console.error('[Vercel] Express error:', err.message);
    res.status(err.status || 500).json({ success: false, message: err.message || 'Internal Server Error' });
  });

  return app;
}

// ── Handler الرئيسي ──
module.exports = async (req, res) => {
  // CORS على مستوى الـ handler - قبل أي شيء
  setCorsHeaders(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (!MONGO_URI) {
      return res.status(500).json({ success: false, message: 'MONGO_URI is not set', code: 'MISSING_ENV' });
    }

    try { await connectDB(); } catch (dbError) {
      console.error('[Vercel] DB error:', dbError.message);
    }

    const app = buildApp();
    return app(req, res);

  } catch (fatalError) {
    console.error('[Vercel] FATAL:', fatalError.message);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: 'Server initialization failed' });
    }
  }
};
