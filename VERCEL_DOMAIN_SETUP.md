# 🚀 إعداد الدومين على Vercel - دليل مصور

## 📋 المتطلبات

- ✅ حساب Vercel نشط
- ✅ المشروع منشور على Vercel
- ✅ الدومين جاهز ولديك صلاحية تعديل DNS

---

## 🎯 الخطوة 1: إضافة الدومين في Vercel

### 1. افتح Vercel Dashboard

اذهب إلى: https://vercel.com/dashboard

### 2. اختر المشروع

- ابحث عن مشروع `car-auction` أو `hmcar`
- اضغط عليه

### 3. اذهب إلى Domains

```
Settings → Domains → Add Domain
```

### 4. أدخل الدومين

أدخل الدومين بدون `https://`:
```
example.com
```

### 5. اضغط Add

Vercel سيعطيك تعليمات DNS

---

## 🎯 الخطوة 2: إعداد DNS

### خيار 1: استخدام Vercel Nameservers (موصى به)

إذا اخترت هذا الخيار، Vercel سيدير DNS بالكامل:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**المميزات:**
- ✅ إعداد تلقائي
- ✅ SSL تلقائي
- ✅ لا حاجة لإعدادات إضافية

**الخطوات:**
1. انسخ Nameservers من Vercel
2. اذهب إلى لوحة تحكم الدومين
3. غيّر Nameservers إلى nameservers Vercel
4. انتظر 24-48 ساعة

---

### خيار 2: استخدام A Record و CNAME (سريع)

إذا أردت الإبقاء على DNS الحالي:

#### في لوحة تحكم الدومين:

**للدومين الرئيسي:**
```
Type: A
Name: @ (أو اتركه فارغاً)
Value: 76.76.21.21
TTL: Auto أو 3600
```

**للـ www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto أو 3600
```

**المميزات:**
- ✅ سريع (5-10 دقائق)
- ✅ تحتفظ بإعدادات DNS الأخرى
- ✅ SSL تلقائي من Vercel

---

## 🎯 الخطوة 3: تحديث Environment Variables

### في Vercel Dashboard:

```
Settings → Environment Variables
```

### أضف/حدّث المتغيرات التالية:

```env
# الدومين الأساسي
BASE_URL=https://[your-domain.com]

# الدومينات المسموحة لـ CORS
ALLOWED_ORIGINS=https://[your-domain.com],https://www.[your-domain.com]

# API URLs للـ Frontend
NEXT_PUBLIC_API_URL=https://[your-domain.com]
NEXT_PUBLIC_SOCKET_URL=https://[your-domain.com]

# إعدادات الإنتاج
NODE_ENV=production
VERCEL_ENV=production
```

### ملاحظات مهمة:

- ✅ استبدل `[your-domain.com]` بدومينك الفعلي
- ✅ تأكد من استخدام `https://`
- ✅ لا تضع `/` في نهاية URL
- ✅ اضغط Save لكل متغير

---

## 🎯 الخطوة 4: إعادة النشر

### خيار 1: من Dashboard

```
Deployments → [Latest Deployment] → Redeploy
```

### خيار 2: من Terminal

```bash
vercel --prod
```

### خيار 3: من Git

```bash
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

---

## ✅ الخطوة 5: التحقق

### 1. انتظر SSL Certificate

- Vercel يصدر شهادة SSL تلقائياً
- يستغرق 1-5 دقائق
- ستظهر علامة ✅ بجانب الدومين

### 2. افتح الموقع

```
https://[your-domain.com]
```

### 3. تحقق من:

- ✅ الموقع يفتح بدون أخطاء
- ✅ SSL يعمل (قفل أخضر)
- ✅ الصفحة الرئيسية تظهر
- ✅ تسجيل الدخول يعمل
- ✅ الصور تظهر

### 4. فحص API:

```bash
curl https://[your-domain.com]/api/health
```

يجب أن ترى:
```json
{
  "status": "ok",
  "timestamp": "..."
}
```

---

## 🔧 إعدادات متقدمة

### إعادة التوجيه من www إلى non-www (أو العكس)

في Vercel Dashboard:

```
Settings → Domains → [your-domain] → Redirect
```

اختر:
- `Redirect www to non-www` (موصى به)
- أو `Redirect non-www to www`

---

### إعداد Subdomain

لإضافة subdomain مثل `api.example.com`:

1. أضف الـ subdomain في Vercel:
   ```
   Settings → Domains → Add → api.example.com
   ```

2. أضف CNAME في DNS:
   ```
   Type: CNAME
   Name: api
   Value: cname.vercel-dns.com
   ```

---

## 🐛 حل المشاكل

### المشكلة: "Domain is not configured correctly"

**الحل:**
1. تحقق من DNS Records
2. انتظر 5-10 دقائق
3. اضغط Refresh في Vercel

---

### المشكلة: "SSL Certificate Pending"

**الحل:**
1. انتظر 5 دقائق
2. تحقق من DNS Records
3. تأكد من أن الدومين يشير إلى Vercel

---

### المشكلة: "CORS Error"

**الحل:**
1. تحقق من `ALLOWED_ORIGINS` في Environment Variables
2. تأكد من تضمين الدومين الجديد
3. أعد النشر

---

### المشكلة: "API Not Working"

**الحل:**
1. تحقق من `BASE_URL` و `NEXT_PUBLIC_API_URL`
2. تأكد من أنها تشير للدومين الجديد
3. أعد النشر
4. امسح Cache المتصفح

---

## 📊 فحص DNS

### Windows:

```bash
nslookup [your-domain.com]
```

### Linux/Mac:

```bash
dig [your-domain.com]
```

### Online Tools:

- https://dnschecker.org/
- https://www.whatsmydns.net/

---

## 🎉 تم الإعداد بنجاح!

إذا اتبعت جميع الخطوات، يجب أن يكون الدومين يعمل الآن!

### الخطوات التالية:

1. ✅ اختبر جميع صفحات الموقع
2. ✅ اختبر تسجيل الدخول والتسجيل
3. ✅ اختبر رفع الصور
4. ✅ اختبر المزادات
5. ✅ اختبر الدفع (إن وجد)

---

## 📞 الدعم

إذا واجهت أي مشاكل:

1. راجع Vercel Logs:
   ```
   Deployments → [Latest] → View Function Logs
   ```

2. راجع Browser Console:
   ```
   F12 → Console
   ```

3. استخدم أداة الفحص:
   ```bash
   npm run domain:verify
   ```

---

**تاريخ الإنشاء:** 2026-03-28  
**آخر تحديث:** 2026-03-28  
**الإصدار:** 1.0
