# 🌐 إعداد الدومين - HM CAR

## 📚 الأدلة المتوفرة

### 1. [DOMAIN_QUICK_START.md](./DOMAIN_QUICK_START.md) ⚡
**للبدء السريع (5 دقائق)**
- خطوات مختصرة
- للمستخدمين ذوي الخبرة

### 2. [VERCEL_DOMAIN_SETUP.md](./VERCEL_DOMAIN_SETUP.md) 🚀
**دليل Vercel المفصل**
- خطوات مصورة
- إعدادات Vercel
- حل المشاكل

### 3. [DOMAIN_SETUP_GUIDE.md](./DOMAIN_SETUP_GUIDE.md) 📖
**الدليل الشامل**
- جميع التفاصيل
- إعدادات DNS
- Environment Variables
- قائمة التحقق

---

## 🛠️ الأدوات المساعدة

### تحديث الدومين تلقائياً:

```bash
npm run domain:update
```

يقوم بـ:
- ✅ تحديث `.env`
- ✅ تحديث `client-app/.env.production`
- ✅ تحديث `client-app/.env.local`
- ✅ عرض الخطوات التالية

---

### فحص الدومين:

```bash
npm run domain:verify
```

يفحص:
- ✅ DNS Records
- ✅ HTTPS/SSL
- ✅ API Endpoints
- ✅ WWW Subdomain

---

## 🎯 ما هو الدومين الجديد؟

**الدومين الحالي:** `hmcar.okigo.net`

أخبرني بالدومين الجديد وسأساعدك في:
1. تحديث جميع الملفات
2. إنشاء قائمة خطوات مخصصة
3. التحقق من الإعدادات

---

## 📋 قائمة سريعة

### في لوحة تحكم الدومين:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### في Vercel:

1. Settings → Domains → Add Domain
2. Settings → Environment Variables → Update:
   - `BASE_URL`
   - `ALLOWED_ORIGINS`
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_SOCKET_URL`
3. Redeploy

---

## ✅ التحقق

```bash
# فحص DNS
nslookup [your-domain.com]

# فحص API
curl https://[your-domain.com]/api/health

# فحص شامل
npm run domain:verify
```

---

## 🆘 المساعدة

### مشاكل شائعة:

1. **DNS لا يعمل**
   - انتظر 24-48 ساعة
   - تحقق من السجلات

2. **SSL Error**
   - انتظر 5 دقائق
   - تحقق من Vercel Dashboard

3. **CORS Error**
   - تحقق من `ALLOWED_ORIGINS`
   - أعد النشر

4. **API لا يعمل**
   - تحقق من Environment Variables
   - راجع Vercel Logs

---

## 📞 الدعم الفني

راجع:
- [VERCEL_DOMAIN_SETUP.md](./VERCEL_DOMAIN_SETUP.md) - قسم حل المشاكل
- Vercel Logs في Dashboard
- Browser Console (F12)

---

**آخر تحديث:** 2026-03-28
