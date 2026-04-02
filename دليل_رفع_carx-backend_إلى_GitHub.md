# 📤 دليل رفع carx-backend إلى GitHub

## الخطوة 1: إنشاء مستودع GitHub

### افتح المتصفح:
اذهب إلى: https://github.com/new

### املأ المعلومات:
- **Repository name**: `carx-backend`
- **Description**: `Backend API for CAR X System - Separate backend with independent database`
- **Visibility**: اختر **Private** (موصى به)
- **لا تضف**: README, .gitignore, license (لأنها موجودة بالفعل)

### اضغط:
**Create repository**

---

## الخطوة 2: رفع الكود

بعد إنشاء المستودع، ستظهر لك صفحة بها أوامر. استخدم هذه الأوامر:

### افتح PowerShell:
اضغط `Win + X` واختر **Windows PowerShell**

### شغّل هذه الأوامر:

```powershell
# 1. اذهب إلى مجلد carx-backend
cd C:\carx-backend

# 2. تأكد من أن Git repository موجود
git status

# 3. غيّر اسم الـ branch إلى main
git branch -M main

# 4. أضف remote (استبدل USERNAME باسم المستخدم الخاص بك)
git remote add origin https://github.com/majedalhashdi7-ux/carx-backend.git

# 5. ارفع الكود
git push -u origin main
```

---

## الخطوة 3: إدخال بيانات GitHub

عند تشغيل `git push`، سيطلب منك:

### Username:
```
majedalhashdi7-ux
```

### Password:
**لا تستخدم كلمة المرور العادية!** استخدم **Personal Access Token**

#### كيف تحصل على Token:
1. اذهب إلى: https://github.com/settings/tokens
2. اضغط **Generate new token** → **Generate new token (classic)**
3. اسم Token: `carx-backend-deploy`
4. اختر Expiration: **90 days**
5. اختر Scopes:
   - ✅ **repo** (كل الخيارات تحته)
6. اضغط **Generate token**
7. **انسخ Token فوراً** (لن تراه مرة أخرى!)
8. الصقه في PowerShell عند طلب Password

---

## إذا واجهت مشكلة:

### مشكلة: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/majedalhashdi7-ux/carx-backend.git
git push -u origin main
```

### مشكلة: "Authentication failed"
- تأكد من استخدام Personal Access Token وليس كلمة المرور
- تأكد من أن Token لديه صلاحيات `repo`

---

## بعد الرفع بنجاح:

ستظهر رسالة مثل:
```
Enumerating objects: 100, done.
Counting objects: 100% (100/100), done.
Writing objects: 100% (100/100), done.
Total 100 (delta 0), reused 0 (delta 0)
To https://github.com/majedalhashdi7-ux/carx-backend.git
 * [new branch]      main -> main
```

✅ **تم رفع الكود بنجاح!**

---

## الخطوة التالية:

بعد رفع الكود، أخبرني وسأساعدك في:
1. إنشاء قاعدة بيانات MongoDB
2. النشر على Vercel
3. ربط carx-system بالـ Backend الجديد

**جاهز؟ ابدأ الآن!** 🚀
