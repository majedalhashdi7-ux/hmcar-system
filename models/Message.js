// [[ARABIC_HEADER]] هذا الملف (models/Message.js) جزء من مشروع HM CAR ويحتوي تعليقات عربية لضمان الوضوح.

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // معرّف المستأجر (Tenant ID) للفصل بين بيانات المستأجرين
  tenantId: {
    type: String,
    required: true,
    default: 'default',
    index: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'file'],
    default: 'text'
  },
  fileUrl: String,
  relatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'relatedToModel'
  },
  relatedToModel: {
    type: String,
    enum: ['Car', 'SparePart', 'Auction']
  },
  read: {
    type: Boolean,
    default: false
  },
  readAt: Date
}, {
  timestamps: true
});

// Index for faster queries
// Composite indexes for multi-tenant queries
messageSchema.index({ tenantId: 1, sender: 1 });
messageSchema.index({ tenantId: 1, receiver: 1 });
messageSchema.index({ tenantId: 1, createdAt: -1 });
messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });
messageSchema.index({ receiver: 1, read: false });

module.exports = mongoose.model('Message', messageSchema);
