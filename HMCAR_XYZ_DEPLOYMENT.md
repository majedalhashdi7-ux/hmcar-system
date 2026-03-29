# 🚀 دليل النشر - hmcar.xyz

## 📋 معلومات المشروع

**الدومين:** `hmcar.xyz`  
**IP Address:** `216.198.79.1`  
**تاريخ الإعداد:** 2026-03-28

---

## ✅ تم تحديث جميع الإعدادات!

### الملفات المحدثة:

- ✅ `.env` - BASE_URL و ALLOWED_ORIGINS
- ✅ `client-app/.env.production` - API URLs
- ✅ `nginx-hmcar.conf` - إعدادات Nginx

---

## 🚀 خطوات النشر السريعة

### 1️⃣ الاتصال بالسيرفر

```bash
ssh root@216.198.79.1
```

### 2️⃣ إعداد السيرفر (مرة واحدة فقط)

```bash
# تحميل سكريبت الإعداد
cd /root
# انسخ محتوى scripts/vps-setup.sh من المشروع

# تشغيل السكريبت
chmod +x vps-setup.sh
./vps-setup.sh
```

هذا سيثبت:
- Node.js v22
- Nginx
- PM2
- Certbot
- Firewall

### 3️⃣ رفع المشروع

**خيار A: استخدام Git (موصى به)**

```bash
cd /var/www
git clone [your-repo-url] hmcar
cd hmcar
```

**خيار B: استخدام SCP من جهازك**

```bash
# من جهازك المحلي (Windows)
scp -r C:\car-auction root@216.198.79.1:/var/www/hmcar
```

### 4️⃣ نسخ ملفات Environment

```bash
cd /var/www/hmcar

# Backend - انسخ المحتوى من .env في مشروعك
nano .env
```

انسخ هذا المحتوى:

```env
ALLOWED_ORIGINS="https://hmcar.xyz,https://www.hmcar.xyz"
BASE_URL="https://hmcar.xyz"
BCRYPT_ROUNDS="8"
CLOUDINARY_API_KEY="972165144124738"
CLOUDINARY_API_SECRET="MhvHGsOgAtuURenr_H9cMUOBpx4"
CLOUDINARY_CLOUD_NAME="dndy0luqc"
EMAIL_PASS="nakdvllltbaxwbpd"
EMAIL_SERVICE="gmail"
EMAIL_USER="divdhash9@gmail.com"
ENABLE_DEV_ADMIN="false"
JWT_SECRET="5a7c12c08ba86c78b6fafda82c4bf621122a6c98aa331c6bedb0bd7b7d7cba22dcdd78d57ac6833b03b41918e3280117"
KV_REST_API_READ_ONLY_TOKEN="ggAAAAAAAUbUAAIgcDHUES2f7K_PvusZ7tEuFph0aRVLXpLOpwllFh8XS444UA"
KV_REST_API_TOKEN="gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg"
KV_REST_API_URL="https://brave-drake-83668.upstash.io"
KV_URL="rediss://default:gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg@brave-drake-83668.upstash.io:6379"
MONGO_URI="mongodb+srv://hmcar_user:Daood11223345@cluster0.tirfqnb.mongodb.net/car-auction?retryWrites=true&w=majority&appName=Cluster0"
NODE_ENV="production"
PORT="4001"
PROD_ADMIN_EMAIL="admin@hmcar.com"
PROD_ADMIN_NAME="HM Car Admin"
PROD_ADMIN_PASSWORD="HmCar@2026!"
REDIS_URL="rediss://default:gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg@brave-drake-83668.upstash.io:6379"
SESSION_SECRET="fed2f48619b92bb38236503548d11686ab9cde64c856d0d49a157a439df7645be9969d9fe508ba3c66998e497a87fc0e"
VERCEL="1"
VERCEL_ENV="production"
```

```bash
# Frontend
cd client-app
nano .env.production
```

انسخ هذا:

```env
NEXT_PUBLIC_API_URL=https://hmcar.xyz
NEXT_PUBLIC_SOCKET_URL=https://hmcar.xyz
NODE_ENV=production
```

### 5️⃣ تثبيت Dependencies والبناء

```bash
cd /var/www/hmcar

# Backend
npm install --production

# Frontend
cd client-app
npm install
npm run build
cd ..
```

### 6️⃣ إعداد Nginx

```bash
# نسخ ملف الإعداد (الملف محدث بالفعل بـ hmcar.xyz)
sudo cp nginx-hmcar.conf /etc/nginx/sites-available/hmcar

# إنشاء symlink
sudo ln -s /etc/nginx/sites-available/hmcar /etc/nginx/sites-enabled/

# حذف الإعداد الافتراضي
sudo rm /etc/nginx/sites-enabled/default

# اختبار الإعدادات
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

### 7️⃣ الحصول على SSL Certificate

```bash
sudo certbot --nginx -d hmcar.xyz -d www.hmcar.xyz
```

اتبع التعليمات:
- أدخل بريدك الإلكتروني
- اقبل الشروط
- اختر Redirect (خيار 2)

### 8️⃣ تشغيل التطبيق

```bash
cd /var/www/hmcar

# Backend
pm2 start server.js --name "hmcar-backend" --env production

# Frontend
cd client-app
pm2 start npm --name "hmcar-frontend" -- start
cd ..

# حفظ الإعدادات
pm2 save

# تفعيل التشغيل التلقائي
pm2 startup
# انسخ الأمر الذي يظهر ونفذه
```

---

## ✅ التحقق من التشغيل

### 1. حالة التطبيقات

```bash
pm2 status
```

يجب أن ترى:
```
┌─────┬──────────────────┬─────────┬─────────┬──────────┐
│ id  │ name             │ status  │ restart │ uptime   │
├─────┼──────────────────┼─────────┼─────────┼──────────┤
│ 0   │ hmcar-backend    │ online  │ 0       │ 5s       │
│ 1   │ hmcar-frontend   │ online  │ 0       │ 3s       │
└─────┴──────────────────┴─────────┴─────────┴──────────┘
```

### 2. فحص API

```bash
curl https://hmcar.xyz/api/health
```

يجب أن ترى:
```json
{"status":"ok","timestamp":"..."}
```

### 3. فحص الموقع

افتح المتصفح:
```
https://hmcar.xyz
```

يجب أن ترى:
- ✅ الموقع يفتح
- ✅ SSL يعمل (قفل أخضر)
- ✅ الصفحة الرئيسية تظهر

### 4. السجلات

```bash
# عرض السجلات
pm2 logs

# سجلات Backend فقط
pm2 logs hmcar-backend

# سجلات Frontend فقط
pm2 logs hmcar-frontend

# Nginx logs
sudo tail -f /var/log/nginx/hmcar-access.log
sudo tail -f /var/log/nginx/hmcar-error.log
```

---

## 🔄 التحديثات المستقبلية

### سكريبت التحديث السريع:

```bash
cd /var/www/hmcar

# Pull changes (إذا كنت تستخدم Git)
git pull origin main

# Backend
npm install --production

# Frontend
cd client-app
npm install
npm run build
cd ..

# إعادة تشغيل
pm2 restart hmcar-backend
pm2 restart hmcar-frontend
```

أو استخدم السكريبت الجاهز:

```bash
cd /var/www/hmcar
./scripts/vps-deploy.sh
```

---

## 🐛 حل المشاكل

### المشكلة: Port already in use

```bash
# إيقاف العملية على Port 4001
sudo lsof -ti:4001 | xargs kill -9

# إيقاف العملية على Port 3000
sudo lsof -ti:3000 | xargs kill -9

# إعادة تشغيل التطبيقات
pm2 restart all
```

### المشكلة: Nginx 502 Bad Gateway

```bash
# تحقق من تشغيل التطبيقات
pm2 status

# إعادة تشغيل
pm2 restart all

# تحقق من السجلات
pm2 logs
sudo tail -f /var/log/nginx/error.log
```

### المشكلة: SSL Certificate Error

```bash
# إعادة إصدار الشهادة
sudo certbot renew --force-renewal

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

### المشكلة: التطبيق لا يعمل بعد إعادة تشغيل السيرفر

```bash
# تحقق من PM2
pm2 status

# إذا لم تكن التطبيقات تعمل
pm2 resurrect

# أو أعد تشغيلها يدوياً
cd /var/www/hmcar
pm2 start server.js --name hmcar-backend
cd client-app && pm2 start npm --name hmcar-frontend -- start
pm2 save
```

---

## 📊 المراقبة

### PM2 Monitoring

```bash
# واجهة المراقبة
pm2 monit

# معلومات مفصلة
pm2 show hmcar-backend
pm2 show hmcar-frontend
```

### استخدام الموارد

```bash
# CPU و Memory
htop

# Disk Space
df -h

# Network
netstat -tulpn | grep LISTEN
```

---

## 🔒 الأمان

### Firewall Status

```bash
sudo ufw status
```

يجب أن ترى:
```
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443/tcp                    ALLOW       Anywhere
```

### SSL Certificate Auto-Renewal

```bash
# اختبار التجديد التلقائي
sudo certbot renew --dry-run
```

---

## 📞 معلومات الاتصال

**الدومين:** https://hmcar.xyz  
**IP Address:** 216.198.79.1  
**Backend Port:** 4001  
**Frontend Port:** 3000

**Admin Panel:** https://hmcar.xyz/admin  
**API Health:** https://hmcar.xyz/api/health

---

## 📚 المراجع

- [VPS_DEPLOYMENT_GUIDE.md](./VPS_DEPLOYMENT_GUIDE.md) - دليل مفصل
- [VPS_DEPLOYMENT_CHECKLIST.md](./VPS_DEPLOYMENT_CHECKLIST.md) - قائمة تحقق
- [nginx-hmcar.conf](./nginx-hmcar.conf) - إعدادات Nginx

---

**تاريخ الإنشاء:** 2026-03-28  
**آخر تحديث:** 2026-03-28  
**الحالة:** ✅ جاهز للنشر
