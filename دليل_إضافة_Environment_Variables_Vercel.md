# 🔧 دليل إضافة Environment Variables على Vercel - خطوة بخطوة

**المشكلة:** خطأ 404 مستمر  
**السبب:** Environment Variables غير موجودة على Vercel  
**الحل:** إضافتها يدوياً (5 دقائق)

---

## 📋 الخطوات بالتفصيل

### الخطوة 1: افتح Vercel Dashboard

1. افتح المتصفح
2. اذهب إلى: **https://vercel.com/dashboard**
3. سجل دخول إذا لم تكن مسجلاً

---

### الخطوة 2: اختر المشروع

1. في Dashboard، ابحث عن: **hmcar-client-app**
2. اضغط على المشروع لفتحه

---

### الخطوة 3: اذهب إلى Settings

1. في أعلى الصفحة، اضغط على: **Settings**
2. من القائمة الجانبية اليسرى، اختر: **Environment Variables**

---

### الخطوة 4: أضف المتغيرات (واحد تلو الآخر)

#### المتغير 1: NEXT_PUBLIC_API_URL

1. في حقل **Key**، اكتب:
   ```
   NEXT_PUBLIC_API_URL
   ```

2. في حقل **Value**، اكتب:
   ```
   https://hmcar-system.vercel.app/api/v2
   ```

3. في **Environment**، اختر الثلاثة:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. اضغط: **Save**

---

#### المتغير 2: NEXT_PUBLIC_TENANT

1. في حقل **Key**، اكتب:
   ```
   NEXT_PUBLIC_TENANT
   ```

2. في حقل **Value**، اكتب:
   ```
   hmcar
   ```

3. في **Environment**، اختر الثلاثة:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. اضغط: **Save**

---

#### المتغير 3: NEXT_PUBLIC_APP_NAME

1. في حقل **Key**، اكتب:
   ```
   NEXT_PUBLIC_APP_NAME
   ```

2. في حقل **Value**، اكتب:
   ```
   HM CAR
   ```

3. في **Environment**، اختر الثلاثة:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. اضغط: **Save**

---

#### المتغير 4: NEXT_PUBLIC_WHATSAPP

1. في حقل **Key**، اكتب:
   ```
   NEXT_PUBLIC_WHATSAPP
   ```

2. في حقل **Value**، اكتب:
   ```
   +967781007805
   ```

3. في **Environment**، اختر الثلاثة:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. اضغط: **Save**

---

#### المتغير 5: NODE_ENV

1. في حقل **Key**، اكتب:
   ```
   NODE_ENV
   ```

2. في حقل **Value**، اكتب:
   ```
   production
   ```

3. في **Environment**، اختر **Production فقط**:
   - ✅ Production
   - ❌ Preview
   - ❌ Development

4. اضغط: **Save**

---

### الخطوة 5: تحقق من المتغيرات

بعد إضافة جميع المتغيرات، يجب أن ترى:

```
✅ NEXT_PUBLIC_API_URL (Production, Preview, Development)
✅ NEXT_PUBLIC_TENANT (Production, Preview, Development)
✅ NEXT_PUBLIC_APP_NAME (Production, Preview, Development)
✅ NEXT_PUBLIC_WHATSAPP (Production, Preview, Development)
✅ NODE_ENV (Production)
```

---

### الخطوة 6: إعادة النشر (Redeploy)

**مهم جداً:** بعد إضافة المتغيرات، يجب إعادة النشر!

1. اضغط على: **Deployments** (في الأعلى)
2. اختر آخر deployment (الأول في القائمة)
3. اضغط على الثلاث نقاط **...** على اليمين
4. اختر: **Redeploy**
5. في النافذة المنبثقة، اضغط: **Redeploy** مرة أخرى
6. انتظر 2-3 دقائق حتى ينتهي الـ build

---

### الخطوة 7: اختبار الموقع

1. بعد انتهاء الـ deployment، افتح:
   ```
   https://hmcar-client-app.vercel.app
   ```

2. يجب أن ترى:
   - ✅ الصفحة الرئيسية تظهر
   - ✅ لا يوجد خطأ 404
   - ✅ الموقع يعمل بشكل صحيح

---

## 🔍 إذا استمرت المشكلة

### تحقق من Build Logs:

1. في Vercel Dashboard
2. اذهب إلى: **Deployments**
3. اختر آخر deployment
4. اضغط على: **Building**
5. ابحث عن أي أخطاء في الـ logs

### الأخطاء الشائعة:

**خطأ: "Missing environment variable"**
- الحل: تأكد من إضافة جميع المتغيرات الخمسة

**خطأ: "Build failed"**
- الحل: تحقق من الـ build logs وابحث عن الخطأ المحدد

**خطأ: "404 مستمر"**
- الحل: تأكد من عمل Redeploy بعد إضافة المتغيرات

---

## 📊 Checklist النهائي

قبل إعادة النشر:
- [ ] أضفت NEXT_PUBLIC_API_URL
- [ ] أضفت NEXT_PUBLIC_TENANT
- [ ] أضفت NEXT_PUBLIC_APP_NAME
- [ ] أضفت NEXT_PUBLIC_WHATSAPP
- [ ] أضفت NODE_ENV
- [ ] اخترت Environments الصحيحة لكل متغير
- [ ] حفظت كل متغير (Save)

بعد إعادة النشر:
- [ ] انتظرت انتهاء الـ build (2-3 دقائق)
- [ ] فتحت الموقع: https://hmcar-client-app.vercel.app
- [ ] الموقع يعمل بدون 404 ✅

---

## 🎯 النتيجة المتوقعة

بعد اتباع جميع الخطوات:

```
✅ https://hmcar-client-app.vercel.app يفتح بنجاح
✅ الصفحة الرئيسية تظهر
✅ السيارات تظهر من Backend
✅ تسجيل الدخول يعمل
✅ جميع الميزات تعمل
```

---

## 📞 روابط مهمة

**Vercel Dashboard:**
```
https://vercel.com/dashboard
```

**المشروع:**
```
https://vercel.com/[your-username]/hmcar-client-app
```

**الموقع:**
```
https://hmcar-client-app.vercel.app
```

**Backend API:**
```
https://hmcar-system.vercel.app/api/v2
```

---

## ⚠️ ملاحظة مهمة

**Environment Variables يجب إضافتها يدوياً على Vercel Dashboard.**

ملف `.env.production` في الكود **لا يكفي** - Vercel يحتاج المتغيرات في Dashboard أيضاً.

---

**ابدأ الآن! المدة: 5 دقائق فقط 🚀**

**الخطوة الأولى:**
```
https://vercel.com/dashboard
```
