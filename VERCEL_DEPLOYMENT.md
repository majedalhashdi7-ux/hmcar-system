# دليل النشر على Vercel
تاريخ: 28 مارس 2026

---

## 🚀 خطوات النشر

### الطريقة الأولى: النشر التلقائي (موصى به)
Vercel متصل بـ GitHub ويقوم بالنشر تلقائياً عند كل push:

1. ✅ التغييرات تم push إلى GitHub (مكتمل)
2. ⏳ انتظر 2-3 دقائق حتى يكتمل النشر التلقائي
3. 🔍 تحقق من حالة النشر في [Vercel Dashboard](https://vercel.com/dashboard)

### الطريقة الثانية: النشر اليدوي
إذا لم يحدث النشر التلقائي:

```bash
# 1. تثبيت Vercel CLI (إذا لم يكن مثبتاً)
npm install -g vercel

# 2. تسجيل الدخول
vercel login

# 3. النشر
vercel --prod
```

---

## 📋 التحقق من النشر

### 1. فحص حالة النشر
افتح [Vercel Dashboard](https://vercel.com/dashboard) وتحقق من:
- ✅ آخر deployment نجح
- ✅ لا توجد أخطاء في Build
- ✅ الوقت يطابق آخر commit

### 2. فحص الموقع المباشر
افتح الموقع وتحقق من:
- ✅ صفحة الوكالات: https://hmcar.okigo.net/brands
- ✅ اللوجو الدائري الكبير (128x128px)
- ✅ ترتيب وكالتين جنب بعض
- ✅ التأثيرات المتوهجة عند التمرير

### 3. فحص زر التطبيق
- ✅ افتح الصفحة الرئيسية
- ✅ اضغط على أيقونة الهاتف (أسفل يمين)
- ✅ اضغط على X - يجب أن تتصغر النافذة (لا تغلق)
- ✅ اضغط على الأيقونة مرة أخرى - يجب أن تفتح النافذة

---

## 🔧 حل المشاكل

### المشكلة: التغييرات لا تظهر

**الحل 1: مسح الكاش**
```bash
# في المتصفح
Ctrl + Shift + R  (Windows)
Cmd + Shift + R   (Mac)
```

**الحل 2: مسح كاش Vercel**
1. افتح [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر المشروع
3. اذهب إلى Settings → Data Cache
4. اضغط على "Purge Everything"

**الحل 3: إعادة النشر يدوياً**
1. افتح [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر المشروع
3. اذهب إلى Deployments
4. اضغط على "..." بجانب آخر deployment
5. اختر "Redeploy"

**الحل 4: مسح Service Worker**
افتح Console في المتصفح (F12) واكتب:
```javascript
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
  location.reload();
});
```

---

## 📊 التغييرات الأخيرة

### Commit: 9d3cee2 - تحسينات واجهة المستخدم

**صفحة الوكالات:**
- لوجو دائري 128x128px (كان 96x96px)
- ارتفاع البطاقة 224px (كان 192px)
- gap-8 بين البطاقات (كان gap-6)
- حلقات متوهجة حول اللوجو
- تأثيرات إضاءة عند التمرير
- خط متوهج في الأسفل

**زر التطبيق:**
- X يصغر النافذة (لا يغلقها)
- نقطة ذهبية عند التصغير
- إعادة فتح بالضغط على الأيقونة

### Commit: 53c174a - إصلاح مشاكل الاتصال

**Service Worker:**
- تخزين مؤقت للصفحات
- العمل Offline
- إعادة محاولة تلقائية

**NetworkStatus:**
- مراقبة الاتصال
- إشعارات فورية
- صفحة Offline مخصصة

---

## 🌐 الروابط المهمة

- **الموقع المباشر**: https://hmcar.okigo.net
- **صفحة الوكالات**: https://hmcar.okigo.net/brands
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: https://github.com/majedalhashdi7-ux/hmcar-system

---

## ⏱️ الجدول الزمني المتوقع

| الخطوة | الوقت المتوقع |
|--------|---------------|
| Push إلى GitHub | ✅ مكتمل |
| Vercel يكتشف التغيير | 10-30 ثانية |
| Build يبدأ | فوري |
| Build ينتهي | 2-3 دقائق |
| النشر على Production | 30 ثانية |
| **المجموع** | **3-4 دقائق** |

---

## 📱 اختبار على الأجهزة المختلفة

### Desktop
- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

### Mobile
- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Samsung Internet

---

## 🔍 فحص سريع

افتح Terminal واكتب:
```bash
# فحص آخر commit
git log -1 --oneline

# فحص الفرق بين Local و Remote
git status

# فحص آخر push
git log origin/main -1 --oneline
```

يجب أن ترى:
```
9d3cee2 ✨ تحسينات واجهة المستخدم
```

---

## 💡 نصائح

1. **انتظر 5 دقائق** بعد Push قبل التحقق
2. **امسح الكاش** دائماً عند التحقق من التغييرات
3. **استخدم Incognito Mode** للتأكد من عدم تأثير الكاش
4. **تحقق من Vercel Dashboard** لمعرفة حالة النشر
5. **راجع Build Logs** إذا كانت هناك مشاكل

---

## 🆘 الدعم

إذا استمرت المشكلة:
1. تحقق من Build Logs في Vercel
2. تأكد من عدم وجود أخطاء في Console
3. جرب النشر اليدوي
4. تواصل مع دعم Vercel

---

تم إنشاء هذا الدليل: 28 مارس 2026
