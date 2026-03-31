# 🔐 دليل متغيرات البيئة في Vercel

## المتغيرات المطلوبة في Vercel Dashboard

### 1. قاعدة البيانات
```
MONGO_URI=mongodb+srv://hmcar_user:SECURE_PASSWORD@cluster.mongodb.net/hmcar_production
MONGO_URI_CARX=mongodb+srv://carx_user:SECURE_PASSWORD@cluster.mongodb.net/carx_production
```

### 2. المصادقة
```
NEXTAUTH_SECRET=your-ultra-secure-secret-key-here
NEXTAUTH_URL=https://your-domain.com
```

### 3. كلمة سر الإدارة
```
ADMIN_PASSWORD=your-secure-admin-password
```

## كيفية إضافة المتغيرات في Vercel:

1. اذهب إلى Vercel Dashboard
2. اختر المشروع
3. Settings → Environment Variables
4. أضف كل متغير بشكل منفصل
5. اختر Environment: Production, Preview, Development

## ⚠️ تحذير أمني:
- لا تضع كلمات السر في ملفات .env المرفوعة على GitHub
- استخدم كلمات سر قوية ومعقدة
- غيّر كلمات السر بانتظام
