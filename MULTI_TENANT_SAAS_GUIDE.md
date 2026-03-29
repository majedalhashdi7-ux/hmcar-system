# 🚀 دليل استخدام النظام كـ SaaS Platform

## 📌 المفهوم

هذا المشروع مُصمم ليكون **منصة SaaS** - تستطيع بيعه لعملاء متعددين، كل عميل يحصل على:

✅ **دومين خاص به** (مثل: alwaha-cars.com)  
✅ **قاعدة بيانات منفصلة تماماً**  
✅ **ألوان وشعار خاص**  
✅ **معلومات تواصل خاصة**  
✅ **بيانات منفصلة 100%** (لا يرى بيانات العملاء الآخرين)

**المميز:** نفس الكود يعمل لكل العملاء! عند إضافة ميزة جديدة، تظهر لكل العملاء تلقائياً.

---

## 🎯 سيناريو عملي

### لديك 3 عملاء:

#### العميل 1: معرض الواحة
- **الدومين:** alwaha-cars.com
- **القاعدة:** alwaha_db
- **الألوان:** أخضر
- **الشعار:** logo-alwaha.png
- **الواتساب:** +966501234567

#### العميل 2: معرض الفخامة
- **الدومين:** luxury-motors.com
- **القاعدة:** luxury_db
- **الألوان:** أسود وذهبي
- **الشعار:** logo-luxury.png
- **الواتساب:** +966507654321

#### العميل 3: معرض النجوم
- **الدومين:** stars-auto.com
- **القاعدة:** stars_db
- **الألوان:** أزرق
- **الشعار:** logo-stars.png
- **الواتساب:** +966509876543

---

## 📋 خطوات إضافة عميل جديد

### الخطوة 1: إنشاء قاعدة بيانات MongoDB

```bash
# في MongoDB Atlas:
1. اذهب إلى: https://cloud.mongodb.com
2. اضغط "Browse Collections"
3. اضغط "Create Database"
4. اسم Database: alwaha_db
5. اسم Collection الأولى: cars
6. اضغط "Create"
7. اذهب إلى "Database Access" وأنشئ مستخدم جديد
8. انسخ Connection String
```

**مثال Connection String:**
```
mongodb+srv://alwaha_user:password123@cluster0.mongodb.net/alwaha_db?retryWrites=true&w=majority
```

---

### الخطوة 2: إضافة العميل في `tenants/tenants.json`

افتح الملف وأضف:

```json
{
  "tenants": {
    "alwaha": {
      "id": "alwaha",
      "name": "معرض الواحة",
      "nameEn": "Al Waha Cars",
      "description": "معرض الواحة للسيارات",
      "descriptionEn": "Al Waha Cars Showroom",
      "domains": [
        "alwaha-cars.com",
        "www.alwaha-cars.com"
      ],
      "mongoUri": "mongodb+srv://alwaha_user:password123@cluster0.mongodb.net/alwaha_db?retryWrites=true&w=majority",
      "logo": "/uploads/tenants/alwaha/logo.png",
      "favicon": "/uploads/tenants/alwaha/favicon.ico",
      "theme": {
        "primaryColor": "#2ecc71",
        "secondaryColor": "#27ae60",
        "accentColor": "#3498db",
        "backgroundColor": "#ecf0f1",
        "textColor": "#2c3e50"
      },
      "contact": {
        "whatsapp": "+966501234567",
        "email": "info@alwaha-cars.com",
        "phone": "+966501234567"
      },
      "settings": {
        "currency": "SAR",
        "language": "ar",
        "direction": "rtl"
      },
      "enabled": true
    }
  }
}
```

---

### الخطوة 3: رفع الشعار والأيقونة

```bash
# أنشئ المجلد:
mkdir -p uploads/tenants/alwaha

# ضع الملفات:
uploads/tenants/alwaha/logo.png      (الشعار - يُفضل 200x200px)
uploads/tenants/alwaha/favicon.ico   (الأيقونة - 32x32px)
```

---

### الخطوة 4: إعداد الدومين

#### أ. في مزود الدومين (GoDaddy, Namecheap, إلخ):

```
Type: A
Name: @
Value: [IP السيرفر أو Vercel IP]
TTL: 3600

Type: A
Name: www
Value: [IP السيرفر أو Vercel IP]
TTL: 3600
```

#### ب. في Vercel (إذا كنت تستخدم Vercel):

```bash
1. اذهب إلى Vercel Dashboard
2. اختر المشروع
3. Settings > Domains
4. أضف: alwaha-cars.com
5. أضف: www.alwaha-cars.com
```

---

### الخطوة 5: اختبار العميل الجديد

#### الطريقة 1: عبر الدومين (بعد إعداد DNS)
```
https://alwaha-cars.com
```

#### الطريقة 2: عبر Query Parameter (للاختبار قبل DNS)
```
https://hmcar.xyz?tenant=alwaha
```

#### الطريقة 3: عبر Header (للـ API)
```bash
curl -H "X-Tenant-ID: alwaha" https://hmcar.xyz/api/v2/cars
```

---

## 🎨 كيف يعمل النظام؟

### عندما يدخل مستخدم على `alwaha-cars.com`:

```
1. المستخدم يفتح: alwaha-cars.com
         ↓
2. tenant-resolver يحدد المعرض من الدومين
         ↓
3. tenant-db-manager يفتح اتصال قاعدة بيانات alwaha_db
         ↓
4. tenantMiddleware يضيف البيانات للطلب:
   - req.tenant.name = "معرض الواحة"
   - req.tenant.theme.primaryColor = "#2ecc71"
   - req.tenantModels.Car = Car model من alwaha_db
         ↓
5. الصفحة تعرض:
   - شعار معرض الواحة
   - ألوان خضراء
   - سيارات من قاعدة بيانات الواحة فقط
   - رقم واتساب الواحة
```

---

## 💻 في الكود

### Backend (Express Routes):

```javascript
// routes/api/v2/cars.js
router.get('/cars', async (req, res) => {
  // معلومات المعرض
  console.log(req.tenant.name);  // "معرض الواحة"
  console.log(req.tenant.theme.primaryColor);  // "#2ecc71"
  
  // جلب السيارات من قاعدة بيانات هذا المعرض فقط
  const Car = req.getModel('Car');
  const cars = await Car.find();  // من alwaha_db فقط!
  
  res.json({ 
    success: true, 
    tenant: req.tenant.name,
    data: cars 
  });
});
```

### Frontend (Next.js):

```typescript
// client-app/src/app/page.tsx
'use client';

import { useTenant } from '@/lib/TenantContext';

export default function HomePage() {
  const tenant = useTenant();
  
  return (
    <div style={{ 
      backgroundColor: tenant.theme.backgroundColor,
      color: tenant.theme.textColor 
    }}>
      <img src={tenant.logo} alt={tenant.name} />
      <h1>{tenant.name}</h1>
      <p>{tenant.description}</p>
      
      <a href={`https://wa.me/${tenant.contact.whatsapp}`}>
        تواصل معنا
      </a>
    </div>
  );
}
```

---

## 🔒 الأمان والعزل

### كل عميل معزول تماماً:

✅ **قاعدة بيانات منفصلة** - لا يمكن لعميل رؤية بيانات عميل آخر  
✅ **اتصال منفصل** - كل معرض له Connection Pool خاص  
✅ **Models منفصلة** - كل معرض له Models مرتبطة بقاعدته  
✅ **Middleware يتحقق** - كل طلب يُفحص ويُربط بالمعرض الصحيح

### مثال على العزل:

```javascript
// عميل الواحة يطلب:
GET https://alwaha-cars.com/api/v2/cars
→ يجلب من alwaha_db فقط

// عميل الفخامة يطلب:
GET https://luxury-motors.com/api/v2/cars
→ يجلب من luxury_db فقط

// لا يمكن لعميل الواحة رؤية سيارات الفخامة!
```

---

## 📊 إدارة العملاء

### تفعيل/تعطيل عميل:

```json
{
  "tenants": {
    "alwaha": {
      "enabled": true   // ← غيرها إلى false لتعطيل العميل
    }
  }
}
```

### حذف عميل:

```bash
1. احذف السطر من tenants.json
2. احذف قاعدة البيانات من MongoDB
3. احذف مجلد الشعار: uploads/tenants/alwaha/
```

### تحديث بيانات عميل:

```bash
# فقط عدّل في tenants.json وأعد تشغيل السيرفر
# أو استخدم API endpoint (إذا أضفته)
```

---

## 🚀 النشر

### نشر واحد لكل العملاء:

```bash
# 1. رفع الكود
git push origin main

# 2. Vercel ينشر تلقائياً
# 3. كل الدومينات تعمل من نفس النشر!
```

### إضافة دومين جديد في Vercel:

```bash
1. Vercel Dashboard > Settings > Domains
2. Add Domain: alwaha-cars.com
3. Add Domain: www.alwaha-cars.com
4. Vercel يعطيك DNS records
5. أضفها في مزود الدومين
6. انتظر 5-30 دقيقة
```

---

## 💰 نموذج الأعمال

### خيارات التسعير:

#### الخيار 1: اشتراك شهري
```
- باقة أساسية: 500 ريال/شهر
  - دومين خاص
  - قاعدة بيانات 5GB
  - 1000 سيارة
  
- باقة متقدمة: 1000 ريال/شهر
  - دومين خاص
  - قاعدة بيانات 20GB
  - سيارات غير محدودة
  - دعم فني
```

#### الخيار 2: رسوم إعداد + اشتراك
```
- رسوم إعداد: 2000 ريال (مرة واحدة)
- اشتراك شهري: 300 ريال/شهر
```

#### الخيار 3: بيع مباشر
```
- سعر البيع: 10,000 ريال
- العميل يستضيف بنفسه
```

---

## 📈 إضافة ميزات جديدة

### الميزة تُضاف مرة واحدة وتظهر لكل العملاء:

```bash
# مثال: إضافة ميزة "المقارنة بين السيارات"

1. أضف الكود في المشروع
2. git push
3. الميزة تظهر تلقائياً لـ:
   - معرض الواحة
   - معرض الفخامة
   - معرض النجوم
   - كل العملاء الآخرين!
```

---

## 🛠️ الصيانة

### تحديث النظام:

```bash
# تحديث واحد يُطبق على كل العملاء
git pull
npm install
git push
```

### النسخ الاحتياطي:

```bash
# كل عميل له نسخة احتياطية منفصلة
mongodump --uri="mongodb://...alwaha_db" --out=backup/alwaha/
mongodump --uri="mongodb://...luxury_db" --out=backup/luxury/
```

---

## 📞 الدعم الفني

### لوحة تحكم العملاء (مستقبلاً):

يمكنك إضافة لوحة تحكم للعملاء لإدارة:
- تغيير الألوان
- رفع الشعار
- تحديث معلومات التواصل
- إضافة مستخدمين
- عرض الإحصائيات

---

## ✅ الخلاصة

### ما لديك الآن:

✅ نظام Multi-Tenant كامل  
✅ عزل تام بين العملاء  
✅ قاعدة بيانات منفصلة لكل عميل  
✅ ثيم مخصص لكل عميل  
✅ دومين خاص لكل عميل  
✅ كود واحد لكل العملاء  

### لإضافة عميل جديد:

1. أنشئ قاعدة بيانات MongoDB (5 دقائق)
2. أضف في `tenants.json` (2 دقيقة)
3. ارفع الشعار (1 دقيقة)
4. اربط الدومين (5 دقائق + انتظار DNS)

**المجموع: ~15 دقيقة لكل عميل جديد!**

---

## 🎯 الخطوات التالية

1. ✅ جرب إضافة عميل تجريبي
2. ✅ اختبر العزل بين العملاء
3. ✅ أضف لوحة تحكم للعملاء (اختياري)
4. ✅ ابدأ التسويق للعملاء!

---

تم إنشاء هذا الدليل: 29 مارس 2026
