# حل مشكلة عدم ظهور صور السيارات الكورية

## المشكلة
الصور لا تظهر في المعرض الكوري (للأدمن والعملاء) على الرغم من وجود روابط الصور في قاعدة البيانات.

## السبب
روابط الصور من Encar تأتي بأشكال مختلفة وتحتاج إلى معالجة:

### أنواع الروابط المعطوبة:

1. **روابط تنتهي بـ `_`**
   ```
   /carpicture/2024/01/15/abc123_
   ```
   يجب إضافة: `001.jpg`

2. **روابط نسبية بدون نطاق**
   ```
   /carpicture/2024/01/15/abc123.jpg
   ```
   يجب إضافة: `https://ci.encar.com`

3. **روابط مكررة**
   ```
   https://ci.encar.comhttps://ci.encar.com/carpicture/...
   ```
   يجب إزالة التكرار

4. **روابط فارغة أو null**
   يجب استخدام صورة افتراضية

## الحل

### 1. إصلاح الصور في قاعدة البيانات

```bash
node scripts/fix-korean-images.js
```

هذا السكريبت سيقوم بـ:
- ✅ فحص جميع السيارات الكورية
- ✅ إصلاح روابط الصور المعطوبة
- ✅ إضافة صور افتراضية للسيارات بدون صور
- ✅ إزالة التكرار في الروابط

### 2. التحديثات في الكود

تم تحديث `CarCard.tsx` لمعالجة الصور بشكل أفضل:

```typescript
// معالجة رابط الصورة
const getImageUrl = (url: string | undefined): string => {
    if (!url) return 'صورة افتراضية';
    
    // إزالة التكرار
    if (url.includes('https://ci.encar.comhttps://ci.encar.com')) {
        url = url.replace('https://ci.encar.comhttps://ci.encar.com', 'https://ci.encar.com');
    }
    
    // إصلاح الروابط التي تنتهي بـ _
    if (url.endsWith('_')) {
        return url.startsWith('http') 
            ? `${url}001.jpg` 
            : `https://ci.encar.com${url}001.jpg`;
    }
    
    // إضافة النطاق للروابط النسبية
    if (url.startsWith('/carpicture')) {
        return `https://ci.encar.com${url}`;
    }
    
    return url;
};
```

### 3. معالجة أخطاء التحميل

تم إضافة معالج `onError` لمكون الصورة:

```typescript
<Image
    src={imageUrl}
    onError={(e) => {
        // استخدام صورة افتراضية عند الفشل
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop';
    }}
/>
```

## التنفيذ السريع

### الخطوة 1: إصلاح الصور الموجودة
```bash
node scripts/fix-korean-images.js
```

### الخطوة 2: التحقق من النتيجة
افتح لوحة الأدمن:
```
https://hmcar.xyz/admin/cars?source=korean_import
```

يجب أن تظهر الصور الآن! ✅

## التحقق من الإصلاح

### 1. من لوحة الأدمن
- اذهب إلى: **المعرض** > **المعرض الكوري**
- يجب أن تظهر صور جميع السيارات

### 2. من صفحة المعرض للعملاء
- افتح: `/showroom`
- يجب أن تظهر صور السيارات الكورية

### 3. من قاعدة البيانات
```javascript
db.cars.findOne({
  source: 'korean_import'
}, {
  images: 1,
  title: 1
})
```

يجب أن تكون الروابط كاملة وصحيحة

## أمثلة على الإصلاح

### قبل الإصلاح:
```json
{
  "images": [
    "/carpicture/2024/01/15/abc123_",
    "https://ci.encar.comhttps://ci.encar.com/carpicture/xyz.jpg",
    null
  ]
}
```

### بعد الإصلاح:
```json
{
  "images": [
    "https://ci.encar.com/carpicture/2024/01/15/abc123_001.jpg",
    "https://ci.encar.com/carpicture/xyz.jpg",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
  ]
}
```

## الوقاية من المشكلة مستقبلاً

### في API الجلب (`/api/v2/showroom/scrape`)
تأكد من أن دالة `normalizeImage` تعمل بشكل صحيح:

```javascript
const normalizeImage = (value) => {
    if (!value) return null;
    let raw = typeof value === 'string' ? value : (value.location || value.url || '');
    
    if (!raw) return null;
    const trimmed = raw.trim();
    
    // إصلاح الروابط
    if (trimmed.endsWith('_')) {
        return trimmed.startsWith('http') 
            ? `${trimmed}001.jpg` 
            : `https://ci.encar.com${trimmed}001.jpg`;
    }
    
    if (trimmed.startsWith('/carpicture')) {
        return `https://ci.encar.com${trimmed}`;
    }
    
    return trimmed.startsWith('http') ? trimmed : `https://ci.encar.com/carpicture${trimmed}`;
};
```

## استكشاف الأخطاء

### المشكلة: الصور لا تزال لا تظهر بعد الإصلاح

**الحل:**
1. تحقق من أن السكريبت تم تشغيله بنجاح
2. امسح الكاش في المتصفح (Ctrl+Shift+R)
3. تحقق من console المتصفح للأخطاء
4. تحقق من أن روابط الصور صحيحة في قاعدة البيانات

### المشكلة: بعض الصور تظهر وبعضها لا

**الحل:**
1. شغل السكريبت مرة أخرى
2. تحقق من روابط الصور المحددة في قاعدة البيانات
3. قد تكون بعض الصور محذوفة من Encar

### المشكلة: الصور بطيئة في التحميل

**الحل:**
1. هذا طبيعي لأن الصور تأتي من خوادم Encar
2. يمكن تحسين الأداء بتحميل الصور محليًا (لكن يحتاج مساحة تخزين)

## ملاحظات مهمة

1. **الصور من Encar:** الصور تُحمّل مباشرة من خوادم Encar، لذا قد تكون بطيئة أحيانًا

2. **الصور المحذوفة:** بعض الصور قد تُحذف من Encar بعد فترة، في هذه الحالة ستظهر الصورة الافتراضية

3. **التحديث التلقائي:** عند جلب سيارات جديدة من Encar، الصور ستُعالج تلقائيًا

4. **الصور الافتراضية:** السيارات بدون صور ستحصل على صورة افتراضية من Unsplash

## الملفات المتأثرة

- `scripts/fix-korean-images.js` - سكريبت الإصلاح
- `client-app/src/app/admin/cars/_components/CarCard.tsx` - مكون بطاقة السيارة
- `routes/api/v2/showroom.js` - API المعرض الكوري

---

**آخر تحديث:** 2026-03-29
