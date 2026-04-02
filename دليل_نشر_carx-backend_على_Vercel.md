# 🚀 دليل نشر carx-backend على Vercel

## الخطوة 1: استيراد المشروع في Vercel

### 1. افتح Vercel:
اذهب إلى: https://vercel.com/new

### 2. اختر المستودع:
- ابحث عن: `carx-backend`
- اضغط **Import** بجانب المستودع

### 3. إعدادات المشروع:
- **Project Name**: `carx-backend` (سيتم ملؤه تلقائياً)
- **Framework Preset**: Other
- **Root Directory**: `./` (اتركه كما هو)
- **Build Command**: اتركه فارغاً
- **Output Directory**: اتركه فارغاً

---

## الخطوة 2: إضافة Environment Variables

**مهم جداً!** قبل الضغط على Deploy، أضف هذه المتغيرات:

### اضغط على "Environment Variables"

### المتغير 1: MONGO_URI
```
Name: MONGO_URI
Value: [ضع Connection String لقاعدة بيانات carx_production هنا]
Environment: ✅ Production ✅ Preview ✅ Development
```

**مثال**:
```
mongodb+srv://username:password@cluster.mongodb.net/carx_production?retryWrites=true&w=majority
```

### المتغير 2: MONGODB_URI
```
Name: MONGODB_URI
Value: [نفس Connection String أعلاه]
Environment: ✅ Production ✅ Preview ✅ Development
```

### المتغير 3: JWT_SECRET
```
Name: JWT_SECRET
Value: carx-super-secret-jwt-key-2026-production-v1
Environment: ✅ Production ✅ Preview ✅ Development
```

### المتغير 4: NODE_ENV
```
Name: NODE_ENV
Value: production
Environment: ✅ Production فقط
```

### المتغير 5: ALLOWED_ORIGINS
```
Name: ALLOWED_ORIGINS
Value: https://carx-system.vercel.app
Environment: ✅ Production ✅ Preview ✅ Development
```

### المتغير 6: DEFAULT_TENANT
```
Name: DEFAULT_TENANT
Value: carx
Environment: ✅ Production ✅ Preview ✅ Development
```

---

## الخطوة 3: Deploy

### 1. اضغط **Deploy**
بعد إضافة جميع المتغيرات، اضغط Deploy

### 2. انتظر (2-3 دقائق)
Vercel سيبني وينشر المشروع

### 3. احصل على الرابط
بعد اكتمال النشر، ستحصل على رابط مثل:
```
https://carx-backend.vercel.app
```

أو قد يكون:
```
https://carx-backend-[random].vercel.app
```

**احفظ هذا الرابط!**

---

## الخطوة 4: اختبر Backend

### افتح في المتصفح:
```
https://carx-backend.vercel.app/api/v2/health
```

### يجب أن يظهر:
```json
{
  "status": "ok",
  "database": "connected",
  "message": "Server is running"
}
```

### إذا ظهر خطأ:
- تحقق من Build Logs في Vercel
- تأكد من أن Connection String صحيح
- تأكد من أن IP Address مسموح في MongoDB Atlas

---

## الخطوة 5: السماح بـ Vercel IP في MongoDB Atlas

### مهم جداً!
MongoDB Atlas يجب أن يسمح بـ Vercel IPs:

1. اذهب إلى MongoDB Atlas
2. اختر Cluster
3. اضغط **Network Access**
4. اضغط **Add IP Address**
5. اختر **Allow Access from Anywhere**
6. IP Address: `0.0.0.0/0`
7. اضغط **Confirm**

**ملاحظة**: هذا يسمح لجميع IPs. للأمان الأفضل، يمكنك إضافة Vercel IPs فقط لاحقاً.

---

## الخطوة 6: ربط carx-system بالـ Backend الجديد

### 1. اذهب إلى Vercel Dashboard:
https://vercel.com/dashboard

### 2. اختر مشروع: carx-system

### 3. اذهب إلى Settings → Environment Variables

### 4. عدّل NEXT_PUBLIC_API_URL:
- ابحث عن: `NEXT_PUBLIC_API_URL`
- اضغط **Edit**
- غيّر القيمة من:
  ```
  https://hmcar-system.vercel.app/api/v2
  ```
  إلى:
  ```
  https://carx-backend.vercel.app/api/v2
  ```
  (استخدم الرابط الذي حصلت عليه من carx-backend)
- اضغط **Save**

### 5. Redeploy carx-system:
- اذهب إلى **Deployments**
- اختر آخر deployment
- اضغط **...** (ثلاث نقاط)
- اضغط **Redeploy**
- انتظر 2-3 دقائق

---

## الخطوة 7: الاختبار النهائي

### 1. اختبر Backend:
```
https://carx-backend.vercel.app/api/v2/health
```
يجب أن يعمل ✅

### 2. اختبر carx-system:
```
https://carx-system.vercel.app
```

**يجب أن يظهر**:
- ✅ "CAR X" في الـ header (وليس "HM CAR")
- ✅ الموقع يعمل بدون أخطاء
- ✅ البيانات من Backend الجديد

---

## 📊 النتيجة النهائية:

```
┌──────────────────────────────────────────────┐
│         HM CAR Backend                       │
│   https://hmcar-system.vercel.app/api/v2    │
│   Database: hmcar_production                 │
└──────────────────────────────────────────────┘
                    ↓
        ┌───────────────────────┐
        │   HM CAR Client       │
        │  hmcar-client-app     │
        └───────────────────────┘

┌──────────────────────────────────────────────┐
│         CAR X Backend ⭐ (جديد)              │
│   https://carx-backend.vercel.app/api/v2    │
│   Database: carx_production                  │
└──────────────────────────────────────────────┘
                    ↓
        ┌───────────────────────┐
        │   CAR X System        │
        │  carx-system          │
        └───────────────────────┘
```

---

## ✅ Checklist:

- [ ] استيراد carx-backend في Vercel
- [ ] إضافة Environment Variables (6 متغيرات)
- [ ] Deploy
- [ ] السماح بـ Vercel IP في MongoDB Atlas
- [ ] اختبار Backend (`/api/v2/health`)
- [ ] تحديث NEXT_PUBLIC_API_URL في carx-system
- [ ] Redeploy carx-system
- [ ] اختبار carx-system

---

## ⏰ الوقت المتوقع:

- استيراد وإضافة متغيرات: 5 دقائق
- Deploy وانتظار: 3 دقائق
- السماح بـ IP: 2 دقيقة
- اختبار Backend: 1 دقيقة
- تحديث carx-system: 3 دقائق
- Redeploy وانتظار: 3 دقائق
- اختبار نهائي: 2 دقيقة

**المجموع**: 19 دقيقة

---

## 🎯 ابدأ الآن!

1. افتح: https://vercel.com/new
2. استورد `carx-backend`
3. أضف Environment Variables
4. اضغط Deploy

**أخبرني عندما يكتمل النشر!** 🚀
