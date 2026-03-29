# إصلاح المعرض الكوري الآن - خطوات سريعة

## 🚀 التنفيذ الفوري (دقيقة واحدة)

### الخطوة 1: التشخيص
```bash
node scripts/check-korean-showroom.js
```

### الخطوة 2: الإصلاح الشامل
```bash
# إعداد الإعدادات
node scripts/setup-korean-showroom.js

# إصلاح التصنيف
node scripts/fix-korean-cars.js

# إصلاح الصور
node scripts/fix-korean-images.js
```

### الخطوة 3: التحقق
افتح: https://hmcar.xyz/showroom

---

## 📋 ماذا تفعل السكريبتات؟

### `setup-korean-showroom.js`
- ✅ يضيف رابط Encar الافتراضي
- ✅ يفعل عرض المعرض الكوري
- ✅ يضبط جميع الإعدادات

### `fix-korean-cars.js`
- ✅ يبحث عن السيارات الكورية
- ✅ يصلح التصنيف (`source`, `listingType`)
- ✅ يفعل السيارات

### `fix-korean-images.js`
- ✅ يصلح روابط الصور المعطوبة
- ✅ يضيف صور افتراضية للسيارات بدون صور
- ✅ يزيل التكرار في الروابط

---

## 🎯 النتيجة المتوقعة

بعد تشغيل السكريبتات:
- ✅ السيارات الكورية تظهر في `/showroom`
- ✅ الصور تظهر بشكل صحيح
- ✅ الإعدادات مضبوطة بشكل صحيح
- ✅ التصنيف صحيح لجميع السيارات

---

## 🔄 إذا لم توجد سيارات بعد الإصلاح

### من لوحة الأدمن:
1. اذهب إلى: **الإعدادات** > **المعرض الكوري**
2. اضغط: **جلب السيارات من Encar**
3. انتظر حتى تكتمل العملية (30-60 ثانية)

### من API (للمطورين):
```bash
curl -X POST https://hmcar.xyz/api/v2/showroom/scrape \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

---

## ✅ التحقق النهائي

```bash
# 1. تحقق من الإعدادات
node scripts/check-korean-showroom.js

# 2. افتح المتصفح
# https://hmcar.xyz/showroom

# 3. يجب أن ترى السيارات الكورية
```

---

## 🆘 إذا استمرت المشكلة

راجع الملف الكامل: `KOREAN_SHOWROOM_FIX.md`

أو شغل التشخيص الكامل:
```bash
node scripts/check-korean-showroom.js
```

وسيعطيك توصيات محددة حسب المشكلة.
