# ⚡ دليل سريع لربط الدومين

## 🎯 ما هو الدومين الجديد؟

أخبرني بالدومين الجديد وسأساعدك في إعداده بالكامل!

---

## 🚀 خطوات سريعة (5 دقائق)

### 1. إعدادات DNS (في لوحة تحكم الدومين)

أضف هذه السجلات:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 2. في Vercel Dashboard

1. اذهب إلى: https://vercel.com/dashboard
2. افتح مشروعك
3. Settings → Domains
4. أضف الدومين الجديد

### 3. تحديث Environment Variables

في Vercel → Settings → Environment Variables:

```
BASE_URL=https://[دومينك]
ALLOWED_ORIGINS=https://[دومينك],https://www.[دومينك]
NEXT_PUBLIC_API_URL=https://[دومينك]
NEXT_PUBLIC_SOCKET_URL=https://[دومينك]
```

### 4. إعادة النشر

```bash
vercel --prod
```

---

## ✅ التحقق

بعد 5-10 دقائق:

1. افتح `https://[دومينك]`
2. تحقق من عمل الموقع
3. جرب تسجيل الدخول

---

## 🔧 أدوات مساعدة

### تحديث الدومين تلقائياً:

```bash
node scripts/update-domain.js
```

### فحص الدومين:

```bash
node scripts/verify-domain.js
```

---

## 📞 هل تحتاج مساعدة؟

أخبرني بالدومين الجديد وسأقوم بـ:
- ✅ تحديث جميع الملفات
- ✅ إنشاء قائمة بالخطوات المطلوبة
- ✅ التحقق من الإعدادات

---

**الدومين الحالي:** `hmcar.okigo.net`  
**الدومين الجديد:** [أدخله هنا]
