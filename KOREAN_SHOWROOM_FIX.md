# حل مشكلة عدم ظهور السيارات في المعرض الكوري

## المشكلة
السيارات لا تظهر للعملاء في المعرض الكوري على الرغم من وجود البيانات.

## الأسباب المحتملة

### 1. عدم وجود سيارات كورية في قاعدة البيانات
السيارات يجب أن تكون مصنفة بشكل صحيح:
- `source: 'korean_import'`
- `listingType: 'showroom'`
- `isActive: true`
- `isSold: false`

### 2. رابط Encar غير محفوظ في الإعدادات
يجب أن يكون هناك رابط Encar محفوظ في `SiteSettings.showroomSettings.encarUrl`

### 3. السيارات موجودة لكن غير مصنفة بشكل صحيح
بعض السيارات قد تحتوي على:
- رابط Encar في `externalUrl`
- سعر بالوون الكوري في `priceKrw`
لكن `source` ليس `korean_import`

## الحلول

### الحل 1: التحقق من حالة المعرض

```bash
node scripts/check-korean-showroom.js
```

هذا السكريبت سيعرض:
- إعدادات المعرض الحالية
- عدد السيارات الكورية
- عينة من السيارات النشطة
- السيارات التي تحتاج إلى إعادة تصنيف
- توصيات للإصلاح

### الحل 2: إعداد المعرض الكوري

```bash
node scripts/setup-korean-showroom.js
```

هذا السكريبت سيقوم بـ:
- إضافة رابط Encar الافتراضي إذا لم يكن موجودًا
- تفعيل عرض المعرض الكوري في الإعلانات
- إعداد جميع الإعدادات المطلوبة

### الحل 3: إصلاح تصنيف السيارات

```bash
node scripts/fix-korean-cars.js
```

هذا السكريبت سيقوم بـ:
- البحث عن السيارات التي تحتوي على مؤشرات كورية
- تحديث `source` إلى `korean_import`
- تحديث `listingType` إلى `showroom`
- تفعيل السيارات (`isActive: true`)

### الحل 4: جلب سيارات جديدة من Encar

#### من لوحة الأدمن:
1. اذهب إلى: الإعدادات > المعرض الكوري
2. تأكد من وجود رابط Encar
3. اضغط على "جلب السيارات"

#### من API:
```bash
POST /api/v2/showroom/scrape
Authorization: Bearer YOUR_ADMIN_TOKEN
```

## التحقق من الحل

### 1. من المتصفح
افتح: `https://hmcar.xyz/showroom`
يجب أن تظهر السيارات الكورية

### 2. من API
```bash
GET /api/v2/showroom/cars?page=1
```

يجب أن ترجع:
```json
{
  "success": true,
  "data": [...],
  "total": 10,
  "page": 1,
  "totalPages": 1
}
```

### 3. من قاعدة البيانات
```javascript
db.cars.find({
  source: 'korean_import',
  isActive: true,
  isSold: false
}).count()
```

## الخطوات الموصى بها

### خطوة 1: التشخيص
```bash
node scripts/check-korean-showroom.js
```

### خطوة 2: الإعداد (إذا لزم الأمر)
```bash
node scripts/setup-korean-showroom.js
```

### خطوة 3: الإصلاح (إذا وجدت سيارات غير مصنفة)
```bash
node scripts/fix-korean-cars.js
```

### خطوة 4: جلب سيارات جديدة (إذا لم توجد سيارات)
من لوحة الأدمن أو عبر API

### خطوة 5: التحقق
افتح `/showroom` وتأكد من ظهور السيارات

## ملاحظات مهمة

### 1. الفلترة في API
API المعرض الكوري (`/api/v2/showroom/cars`) يبحث عن:
```javascript
{
  isActive: true,
  isSold: false,
  $or: [
    { source: 'korean_import' },
    { source: { $exists: false }, listingType: 'showroom' }
  ]
}
```

### 2. Fallback إلى Encar مباشرة
إذا لم توجد سيارات في قاعدة البيانات، API يحاول جلب البيانات مباشرة من Encar كـ Fallback

### 3. التصنيف التلقائي
عند حفظ سيارة جديدة، النظام يحاول تصنيفها تلقائيًا بناءً على:
- وجود رابط Encar في `externalUrl`
- وجود سعر في `priceKrw`
- `listingType === 'showroom'`

## استكشاف الأخطاء

### المشكلة: "لا توجد سيارات"
**الحل:**
1. تحقق من الإعدادات: `node scripts/check-korean-showroom.js`
2. أضف رابط Encar: `node scripts/setup-korean-showroom.js`
3. اجلب سيارات جديدة من لوحة الأدمن

### المشكلة: "السيارات موجودة لكن لا تظهر"
**الحل:**
1. تحقق من التصنيف: `node scripts/check-korean-showroom.js`
2. أصلح التصنيف: `node scripts/fix-korean-cars.js`

### المشكلة: "خطأ في جلب البيانات من Encar"
**الحل:**
1. تحقق من رابط Encar في الإعدادات
2. تأكد من أن الرابط صحيح وليس منتهي الصلاحية
3. جرب رابط Encar الافتراضي

## الدعم

إذا استمرت المشكلة بعد تطبيق جميع الحلول:
1. تحقق من سجلات الخادم (Server Logs)
2. تحقق من سجلات المتصفح (Browser Console)
3. تحقق من اتصال قاعدة البيانات

## الملفات المتأثرة

- `routes/api/v2/showroom.js` - API المعرض الكوري
- `routes/api/v2/cars.js` - API السيارات
- `models/Car.js` - نموذج السيارة
- `models/SiteSettings.js` - نموذج الإعدادات
- `client-app/src/app/showroom/page.tsx` - صفحة المعرض
- `client-app/src/lib/api.ts` - API الواجهة الأمامية
