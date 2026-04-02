# Bugfix Requirements Document

## Introduction

موقع hmcar-client-app المنشور على Vercel يظهر خطأ 404 NOT_FOUND عند محاولة الوصول إليه عبر الرابط https://hmcar-client-app.vercel.app. المشكلة تحدث بسبب عدم توفر المتغيرات البيئية (Environment Variables) المطلوبة في لوحة تحكم Vercel أثناء عملية البناء (build time)، مما يؤدي إلى فشل التطبيق في التهيئة الصحيحة.

التطبيق عبارة عن Next.js application تم فصله من المستودع الرئيسي إلى مستودع مستقل وتم استيراده في Vercel. على الرغم من وجود ملف `.env.production` في الكود، إلا أن Vercel يتطلب إضافة المتغيرات البيئية يدوياً في Dashboard لتكون متاحة أثناء عملية البناء.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN المستخدم يفتح الرابط https://hmcar-client-app.vercel.app THEN النظام يعرض خطأ 404 NOT_FOUND

1.2 WHEN عملية البناء (build) تتم على Vercel بدون المتغيرات البيئية THEN التطبيق يفشل في التهيئة الصحيحة ولا يتم نشر الصفحات بشكل صحيح

1.3 WHEN التطبيق يحاول الاتصال بالـ API THEN يفشل الاتصال بسبب عدم توفر NEXT_PUBLIC_API_URL

1.4 WHEN التطبيق يحاول تحميل إعدادات Tenant THEN يفشل في تحديد الـ tenant الصحيح بسبب عدم توفر NEXT_PUBLIC_TENANT

### Expected Behavior (Correct)

2.1 WHEN المستخدم يفتح الرابط https://hmcar-client-app.vercel.app THEN النظام SHALL يعرض الصفحة الرئيسية للتطبيق بشكل صحيح

2.2 WHEN عملية البناء (build) تتم على Vercel مع المتغيرات البيئية المطلوبة THEN التطبيق SHALL يتم بناؤه ونشره بنجاح مع جميع الصفحات

2.3 WHEN التطبيق يحاول الاتصال بالـ API THEN النظام SHALL يتصل بنجاح بـ https://hmcar-system.vercel.app/api/v2

2.4 WHEN التطبيق يحاول تحميل إعدادات Tenant THEN النظام SHALL يحدد tenant "hmcar" بشكل صحيح ويحمل الإعدادات المناسبة

2.5 WHEN المتغيرات البيئية التالية موجودة في Vercel Dashboard THEN التطبيق SHALL يعمل بشكل صحيح:
- NEXT_PUBLIC_API_URL=https://hmcar-system.vercel.app/api/v2
- NEXT_PUBLIC_TENANT=hmcar
- NEXT_PUBLIC_APP_NAME=HM CAR
- NEXT_PUBLIC_WHATSAPP=+967781007805
- NODE_ENV=production

### Unchanged Behavior (Regression Prevention)

3.1 WHEN المستخدم يصل إلى التطبيق بعد الإصلاح THEN النظام SHALL CONTINUE TO يعرض نفس واجهة المستخدم والميزات كما كانت مصممة

3.2 WHEN التطبيق يتصل بالـ Backend API THEN النظام SHALL CONTINUE TO يستخدم نفس endpoints والبروتوكولات المعرفة مسبقاً

3.3 WHEN المستخدم يتفاعل مع ميزات التطبيق (تصفح السيارات، تسجيل الدخول، إلخ) THEN النظام SHALL CONTINUE TO يعمل بنفس الطريقة المتوقعة

3.4 WHEN التطبيق يعمل في بيئة development أو preview THEN النظام SHALL CONTINUE TO يستخدم المتغيرات البيئية المناسبة لكل بيئة

3.5 WHEN ملف `.env.production` موجود في الكود THEN النظام SHALL CONTINUE TO يستخدمه كمرجع للمتغيرات المطلوبة (لكن Vercel Dashboard له الأولوية)
