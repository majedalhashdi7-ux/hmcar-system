// [[ARABIC_HEADER]] هذا الملف (models/Favorite.js) جزء من مشروع HM CAR ويحتوي تعليقات عربية لضمان الوضوح.

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  // معرّف المستأجر (Tenant ID) للفصل بين بيانات المستأجرين
  tenantId: {
    type: String,
    required: true,
    default: 'default',
    index: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// منع تكرار نفس السيارة في المفضلة لنفس المستخدم
// Composite indexes for multi-tenant queries
favoriteSchema.index({ tenantId: 1, user: 1, car: 1 }, { unique: true });
favoriteSchema.index({ user: 1, car: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
