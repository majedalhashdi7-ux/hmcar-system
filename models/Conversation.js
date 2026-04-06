// [[ARABIC_HEADER]] هذا الملف (models/Conversation.js) جزء من مشروع HM CAR ويحتوي تعليقات عربية لضمان الوضوح.

const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  // معرّف المستأجر (Tenant ID) للفصل بين بيانات المستأجرين
  tenantId: {
    type: String,
    required: true,
    default: 'default',
    index: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  relatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'relatedToModel'
  },
  relatedToModel: {
    type: String,
    enum: ['Car', 'SparePart', 'Auction']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  archivedBy: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    archivedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Index for faster queries
// Composite indexes for multi-tenant queries
conversationSchema.index({ tenantId: 1, participants: 1 });
conversationSchema.index({ tenantId: 1, isActive: 1 });
conversationSchema.index({ participants: 1 });
conversationSchema.index({ 'archivedBy.user': 1 });

module.exports = mongoose.model('Conversation', conversationSchema);
