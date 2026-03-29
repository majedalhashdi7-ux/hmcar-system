# 🌐 دليل ربط الدومين - HM CAR

## 📋 المعلومات الحالية

**الدومين الحالي:** `hmcar.okigo.net`  
**الدومين الجديد:** [أدخل الدومين الجديد هنا]

---

## 🚀 خطوات ربط الدومين

### 1️⃣ إعدادات DNS

قم بإضافة السجلات التالية في لوحة تحكم الدومين:

#### للنشر على Vercel:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

#### أو استخدم CNAME مباشرة:

```
Type: CNAME
Name: @
Value: [your-project].vercel.app
TTL: Auto

Type: CNAME
Name: www
Value: [your-project].vercel.app
TTL: Auto
```

---

### 2️⃣ إضافة الدومين في Vercel

1. افتح مشروعك في Vercel Dashboard
2. اذهب إلى **Settings** → **Domains**
3. أضف الدومين الجديد
4. اتبع التعليمات للتحقق من الملكية

---

### 3️⃣ تحديث متغيرات البيئة

#### في Vercel Dashboard:

اذهب إلى **Settings** → **Environment Variables** وحدّث:

```env
BASE_URL=https://[your-domain.com]
ALLOWED_ORIGINS=https://[your-domain.com],https://www.[your-domain.com]
NEXT_PUBLIC_API_URL=https://[your-domain.com]
NEXT_PUBLIC_SOCKET_URL=https://[your-domain.com]
```

---

### 4️⃣ تحديث الملفات المحلية

#### تحديث `.env`:

```bash
BASE_URL="https://[your-domain.com]"
ALLOWED_ORIGINS="https://[your-domain.com],https://www.[your-domain.com]"
```

#### تحديث `client-app/.env.production`:

```bash
NEXT_PUBLIC_API_URL=https://[your-domain.com]
NEXT_PUBLIC_SOCKET_URL=https://[your-domain.com]
NODE_ENV=production
```

---

### 5️⃣ تحديث إعدادات CORS

تأكد من أن `ALLOWED_ORIGINS` يتضمن الدومين الجديد في:

- ملف `.env`
- Vercel Environment Variables
- إعدادات CORS في `vercel-server.js`

---

### 6️⃣ إعادة النشر

بعد تحديث الإعدادات:

```bash
# إعادة النشر على Vercel
vercel --prod

# أو استخدم Git
git add .
git commit -m "Update domain configuration"
git push origin main
```

---

## ✅ التحقق من الإعدادات

### 1. فحص DNS:

```bash
# Windows
nslookup [your-domain.com]

# Linux/Mac
dig [your-domain.com]
```

### 2. فحص SSL:

- تأكد من أن الموقع يعمل على `https://`
- Vercel يوفر SSL تلقائياً

### 3. فحص API:

```bash
curl https://[your-domain.com]/api/health
```

### 4. فحص الموقع:

- افتح `https://[your-domain.com]`
- تحقق من عمل جميع الصفحات
- تحقق من عمل تسجيل الدخول
- تحقق من عمل الصور والملفات

---

## 🔧 إعدادات إضافية

### تحديث Google Analytics:

إذا كنت تستخدم Google Analytics، حدّث:
- Property Settings
- Data Streams
- أضف الدومين الجديد

### تحديث Firebase (إن وجد):

- Authorized domains في Firebase Console
- OAuth redirect URIs

### تحديث Cloudinary:

- Allowed domains في Cloudinary Settings

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الدومين لا يعمل

**الحل:**
- انتظر 24-48 ساعة لانتشار DNS
- تحقق من إعدادات DNS
- امسح cache المتصفح

### المشكلة: SSL Error

**الحل:**
- انتظر بضع دقائق لإصدار الشهادة
- تحقق من إعدادات Vercel
- تأكد من صحة سجلات DNS

### المشكلة: CORS Error

**الحل:**
- تحقق من `ALLOWED_ORIGINS`
- أعد نشر المشروع
- امسح cache Vercel

### المشكلة: API لا يعمل

**الحل:**
- تحقق من `BASE_URL` و `NEXT_PUBLIC_API_URL`
- تحقق من Environment Variables في Vercel
- راجع Logs في Vercel Dashboard

---

## 📝 قائمة التحقق النهائية

- [ ] إضافة سجلات DNS
- [ ] إضافة الدومين في Vercel
- [ ] تحديث Environment Variables في Vercel
- [ ] تحديث الملفات المحلية
- [ ] إعادة النشر
- [ ] فحص DNS
- [ ] فحص SSL
- [ ] فحص API
- [ ] فحص الموقع
- [ ] فحص تسجيل الدخول
- [ ] فحص الصور
- [ ] تحديث Google Analytics
- [ ] تحديث Firebase
- [ ] تحديث Cloudinary

---

## 🆘 الدعم

إذا واجهت أي مشاكل:

1. راجع Vercel Logs: `vercel logs`
2. راجع Browser Console
3. راجع Network Tab في Developer Tools
4. تحقق من Status Page: https://www.vercel-status.com/

---

## 📞 معلومات الاتصال

**الدومين الحالي:** https://hmcar.okigo.net  
**Vercel Project:** [اسم المشروع]  
**تاريخ الإعداد:** 2026-03-28

---

**ملاحظة:** احتفظ بنسخة احتياطية من جميع الإعدادات قبل إجراء أي تغييرات.
