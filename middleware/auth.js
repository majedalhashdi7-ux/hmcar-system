// [[ARABIC_HEADER]] هذا الملف (middleware/auth.js) جزء من مشروع HM CAR

const jwt = require('jsonwebtoken');

// middleware/auth.js - يستخدم JWT فقط (بدون session) في Vercel
const requireAuth = (req, res, next) => {
  // حارس: يمنع الوصول إذا لم يكن المستخدم مسجل دخول
  const session = req.session || {};
  if (!session.user) return res.redirect('/auth/login');
  next();
};

// For API routes - JWT-first, fallback to session
const requireAuthAPI = (req, res, next) => {
  // التحقق من JWT في Authorization header (الأولوية)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        return res.status(500).json({ error: 'Server configuration error', code: 'MISSING_JWT_SECRET' });
      }
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid or expired', details: err.message });
    }
  }

  // Fallback إلى session (آمن من undefined)
  const session = req.session || {};
  if (!session.user) {
    return res.status(401).json({ error: 'يجب تسجيل الدخول', code: 'UNAUTHORIZED' });
  }
  req.user = session.user;
  next();
};

// Simple auth middleware
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) return res.status(500).json({ error: 'Server configuration error' });
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
  }

  const session = req.session || {};
  if (!session.user) {
    return res.status(401).json({ error: 'يجب تسجيل الدخول' });
  }
  req.user = session.user;
  next();
};

// Permission check
const requirePermissionAPI = (permission) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'يجب تسجيل الدخول' });
    }

    if (req.user.role === 'super_admin') {
      return next();
    }

    const userPermissions = req.user.permissions || [];
    if (userPermissions.includes(permission)) {
      return next();
    }

    return res.status(403).json({
      error: 'ليس لديك صلاحية للوصول',
      message: `عذراً، لا تملك صلاحية (${permission}) المطلوبة`
    });
  };
};

// Require admin
const requireAdmin = (req, res, next) => {
  // دعم session آمن
  const session = req.session || {};
  if (!req.user && session.user) {
    req.user = session.user;
  }

  if (!req.user) {
    if (req.originalUrl && req.originalUrl.startsWith('/api')) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    return res.redirect('/auth/login');
  }

  if (req.user.role !== 'admin' && req.user.role !== 'super_admin') {
    if (req.originalUrl && req.originalUrl.startsWith('/api')) {
      return res.status(403).json({ error: 'Admin privileges required' });
    }
    return res.status(403).send('Forbidden');
  }
  next();
};

module.exports = { requireAuth, requireAuthAPI, auth, requirePermissionAPI, requireAdmin };