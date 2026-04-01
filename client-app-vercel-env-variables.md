# 🔧 Environment Variables لـ client-app على Vercel

**المشكلة:** خطأ 404 عند فتح الموقع  
**السبب:** Environment Variables غير صحيحة على Vercel  
**الحل:** تحديث Environment Variables

---

## ⚠️ المشكلة الحالية

الـ `.env.local` المحلي يشير إلى:
```
NEXT_PUBLIC_API_URL=https://daood.okigo.net/api
```

لكن على Vercel يجب أن يشير إلى Backend الجديد:
```
NEXT_PUBLIC_API_URL=https://hmcar-system.vercel.app/api/v2
```

---

## ✅ الحل - تحديث Environment Variables على Vercel

### الخطوة 1: افتح إعدادات المشروع

1. اذهب إلى: https://vercel.com/dashboard
2. اختر المشروع: `hmcar-client-app`
3. اذهب إلى: **Settings** → **Environment Variables**

---

### الخطوة 2: أضف/حدّث المتغيرات التالية

**انسخ والصق هذه المتغيرات:**

```env
NEXT_PUBLIC_API_URL=https://hmcar-system.vercel.app/api/v2
NEXT_PUBLIC_TENANT=hmcar
NEXT_PUBLIC_APP_NAME=HM CAR
NEXT_PUBLIC_WHATSAPP=+967781007805
NODE_ENV=production
```

---

### الخطوة 3: إعدادات كل متغير

**1. NEXT_PUBLIC_API_URL**
```
Name:  NEXT_PUBLIC_API_URL
Value: https://hmcar-system.vercel.app/api/v2
Environment: Production, Preview, Development (اختر الكل)
```

**2. NEXT_PUBLIC_TENANT**
```
Name:  NEXT_PUBLIC_TENANT
Value: hmcar
Environment: Production, Preview, Development (اختر الكل)
```

**3. NEXT_PUBLIC_APP_NAME**
```
Name:  NEXT_PUBLIC_APP_NAME
Value: HM CAR
Environment: Production, Preview, Development (اختر الكل)
```

**4. NEXT_PUBLIC_WHATSAPP**
```
Name:  NEXT_PUBLIC_WHATSAPP
Value: +967781007805
Environment: Production, Preview, Development (اختر الكل)
```

**5. NODE_ENV**
```
Name:  NODE_ENV
Value: production
Environment: Production فقط
```

---

### الخطوة 4: إعادة النشر (Redeploy)

بعد إضافة المتغيرات:

**الطريقة 1: من Vercel Dashboard**
1. اذهب إلى: **Deployments**
2. اختر آخر deployment
3. انقر على الثلاث نقاط (...)
4. اختر: **Redeploy**
5. تأكد من تفعيل: **Use existing Build Cache** (اختياري)
6. انقر: **Redeploy**

**الطريقة 2: Push جديد على GitHub**
```powershell
cd C:\hmcar-client-app
git commit --allow-empty -m "Trigger redeploy with new env vars"
git push origin main
```

---

## 🔍 التحقق من الإعدادات

### بعد إعادة النشر، تحقق من:

**1. افتح الموقع:**
```
https://hmcar-client-app.vercel.app
```

**2. افتح Developer Console (F12):**
```javascript
// في Console، اكتب:
console.log(process.env.NEXT_PUBLIC_API_URL)
// يجب أن يظهر: https://hmcar-system.vercel.app/api/v2
```

**3. تحقق من Network Tab:**
- افتح Network tab
- حدّث الصفحة
- ابحث عن طلبات API
- يجب أن تذهب إلى: `hmcar-system.vercel.app/api/v2/...`

---

## 🎯 المتغيرات الكاملة (اختيارية)

إذا أردت إضافة متغيرات إضافية للميزات المتقدمة:

```env
# Required (مطلوبة)
NEXT_PUBLIC_API_URL=https://hmcar-system.vercel.app/api/v2
NEXT_PUBLIC_TENANT=hmcar
NEXT_PUBLIC_APP_NAME=HM CAR
NEXT_PUBLIC_WHATSAPP=+967781007805
NODE_ENV=production

# Optional (اختيارية)
NEXT_PUBLIC_SOCKET_URL=https://hmcar-system.vercel.app
NEXT_PUBLIC_APP_URL=https://hmcar-client-app.vercel.app
NEXT_PUBLIC_DEFAULT_CURRENCY=SAR
NEXT_PUBLIC_SUPPORTED_CURRENCIES=SAR,USD,KRW
```

---

## 🔧 إصلاح CORS (إذا لزم الأمر)

إذا استمرت المشكلة بعد تحديث Environment Variables، قد تحتاج لتحديث CORS في Backend:

### في Backend (C:\car-auction):

**1. افتح:** `middleware/cors.js` أو أنشئه إذا لم يكن موجوداً

**2. أضف:**
```javascript
const allowedOrigins = [
  'https://hmcar-client-app.vercel.app',
  'https://client-app-hmcar.vercel.app',
  'https://carx-system.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001'
];

module.exports = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
};
```

**3. في `server.js` أو `vercel-server.js`:**
```javascript
const corsMiddleware = require('./middleware/cors');
app.use(corsMiddleware);
```

**4. Commit & Push:**
```powershell
cd C:\car-auction
git add .
git commit -m "تحديث CORS لدعم client-app المنفصل"
git push origin main
```

---

## 📋 Checklist

### قبل إعادة النشر:
- [ ] إضافة `NEXT_PUBLIC_API_URL` على Vercel
- [ ] إضافة `NEXT_PUBLIC_TENANT` على Vercel
- [ ] إضافة `NEXT_PUBLIC_APP_NAME` على Vercel
- [ ] إضافة `NEXT_PUBLIC_WHATSAPP` على Vercel
- [ ] إضافة `NODE_ENV` على Vercel
- [ ] حفظ جميع المتغيرات

### بعد إعادة النشر:
- [ ] فتح الموقع والتحقق من عدم وجود 404
- [ ] فتح Developer Console والتحقق من API URL
- [ ] فتح Network Tab والتحقق من الطلبات
- [ ] تجربة تصفح السيارات
- [ ] تجربة تسجيل الدخول

---

## 🎉 النتيجة المتوقعة

بعد تحديث Environment Variables وإعادة النشر:

```
✅ الموقع يفتح بدون 404
✅ الصفحة الرئيسية تظهر
✅ السيارات تظهر
✅ API يعمل بشكل صحيح
✅ تسجيل الدخول يعمل
✅ جميع الميزات تعمل
```

---

## 🔗 الروابط النهائية

**Frontend (Client App):**
```
https://hmcar-client-app.vercel.app
```

**Backend (API):**
```
https://hmcar-system.vercel.app/api/v2
```

**GitHub:**
```
https://github.com/majedalhashdi7-ux/hmcar-client-app
```

---

**ابدأ الآن بتحديث Environment Variables على Vercel! 🚀**
