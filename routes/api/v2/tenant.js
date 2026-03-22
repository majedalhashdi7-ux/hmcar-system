// [[ARABIC_HEADER]] مسارات API لنظام Multi-Tenant - إدارة المعارض

/**
 * @file routes/api/v2/tenant.js
 * @description مسارات إدارة المعارض المتعددة
 * 
 * المسارات العامة (للزوار):
 *   GET /api/v2/tenant/info        → معلومات المعرض الحالي (الاسم، الثيم، الشعار)
 * 
 * المسارات المحمية (Super Admin فقط):
 *   GET /api/v2/tenant/list         → قائمة كل المعارض
 *   POST /api/v2/tenant/create      → إنشاء معرض جديد
 *   PUT /api/v2/tenant/:id          → تحديث بيانات معرض
 *   GET /api/v2/tenant/connections   → حالة اتصالات قواعد البيانات
 */

const express = require('express');
const router = express.Router();
const { getAllTenants, getTenantById, addTenant, updateTenant, clearTenantsCache } = require('../../../tenants/tenant-resolver');
const { getConnectionsStatus } = require('../../../tenants/tenant-db-manager');
const { requireAuthAPI, requireAdmin } = require('../../../middleware/auth');

// ══════════════════════════════════════════
// المسارات العامة
// ══════════════════════════════════════════

/**
 * GET /api/v2/tenant/info
 * معلومات المعرض الحالي (يُحدَّد تلقائياً من الدومين)
 * يُستخدم في الواجهة الأمامية لتحميل الثيم والاسم والشعار
 */
router.get('/info', (req, res) => {
  try {
    if (!req.tenant) {
      return res.status(404).json({
        success: false,
        message: 'لم يتم تحديد المعرض',
      });
    }

    res.json({
      success: true,
      data: {
        id: req.tenant.id,
        name: req.tenant.name,
        nameEn: req.tenant.nameEn,
        description: req.tenant.description,
        logo: req.tenant.logo,
        favicon: req.tenant.favicon,
        theme: req.tenant.theme,
        contact: req.tenant.contact,
        settings: req.tenant.settings,
      },
    });
  } catch (error) {
    console.error('خطأ في جلب معلومات المعرض:', error);
    res.status(500).json({
      success: false,
      message: 'فشل في جلب معلومات المعرض',
    });
  }
});

// ══════════════════════════════════════════
// المسارات المحمية (Super Admin)
// ══════════════════════════════════════════

/**
 * GET /api/v2/tenant/list
 * قائمة كل المعارض المسجلة
 */
router.get('/list', requireAuthAPI, requireAdmin, (req, res) => {
  try {
    const tenants = getAllTenants();
    res.json({
      success: true,
      count: tenants.length,
      data: tenants,
    });
  } catch (error) {
    console.error('خطأ في جلب قائمة المعارض:', error);
    res.status(500).json({
      success: false,
      message: 'فشل في جلب قائمة المعارض',
    });
  }
});

/**
 * POST /api/v2/tenant/create
 * إنشاء معرض جديد
 * 
 * Body:
 * {
 *   "id": "luxury",
 *   "name": "معرض الفخامة",
 *   "nameEn": "Luxury Cars",
 *   "domains": ["luxury.vercel.app"],
 *   "mongoUri": "mongodb+srv://...",
 *   "theme": { "primaryColor": "#2563eb", ... },
 *   "contact": { "whatsapp": "+966...", ... }
 * }
 */
router.post('/create', requireAuthAPI, requireAdmin, async (req, res) => {
  try {
    const { id, name, nameEn, domains, mongoUri, theme, contact, settings, description } = req.body;

    // التحقق من البيانات المطلوبة
    if (!id || !name || !mongoUri) {
      return res.status(400).json({
        success: false,
        message: 'الحقول المطلوبة: id, name, mongoUri',
      });
    }

    // التحقق من صحة المعرف (حروف إنجليزية صغيرة وأرقام وشرطة فقط)
    if (!/^[a-z0-9-]+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: 'معرف المعرض يجب أن يحتوي على حروف إنجليزية صغيرة وأرقام وشرطات فقط',
      });
    }

    addTenant(id, {
      name,
      nameEn: nameEn || name,
      description: description || '',
      domains: domains || [],
      mongoUri,
      logo: `/uploads/tenants/${id}/logo.png`,
      favicon: `/uploads/tenants/${id}/favicon.ico`,
      theme: theme || {
        primaryColor: '#D4AF37',
        secondaryColor: '#1a1a2e',
        accentColor: '#e94560',
        backgroundColor: '#0f0f23',
        textColor: '#ffffff',
      },
      contact: contact || {},
      settings: settings || {
        currency: 'SAR',
        language: 'ar',
        direction: 'rtl',
      },
    });

    res.status(201).json({
      success: true,
      message: `تم إنشاء المعرض "${name}" بنجاح`,
      data: getTenantById(id),
    });
  } catch (error) {
    console.error('خطأ في إنشاء المعرض:', error);
    res.status(error.message.includes('موجود بالفعل') ? 409 : 500).json({
      success: false,
      message: error.message || 'فشل في إنشاء المعرض',
    });
  }
});

/**
 * PUT /api/v2/tenant/:id
 * تحديث بيانات معرض
 */
router.put('/:id', requireAuthAPI, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // لا نسمح بتغيير المعرف
    delete updates.id;

    updateTenant(id, updates);
    clearTenantsCache();

    res.json({
      success: true,
      message: `تم تحديث المعرض "${id}" بنجاح`,
      data: getTenantById(id),
    });
  } catch (error) {
    console.error('خطأ في تحديث المعرض:', error);
    res.status(error.message.includes('غير موجود') ? 404 : 500).json({
      success: false,
      message: error.message || 'فشل في تحديث المعرض',
    });
  }
});

/**
 * GET /api/v2/tenant/connections
 * حالة اتصالات قواعد البيانات لكل المعارض (للمراقبة)
 */
router.get('/connections', requireAuthAPI, requireAdmin, (req, res) => {
  try {
    const connections = getConnectionsStatus();
    res.json({
      success: true,
      count: connections.length,
      data: connections,
    });
  } catch (error) {
    console.error('خطأ في جلب حالة الاتصالات:', error);
    res.status(500).json({
      success: false,
      message: 'فشل في جلب حالة الاتصالات',
    });
  }
});

module.exports = router;
