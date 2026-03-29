# 🚀 دليل النشر على VPS - HM CAR

## 📋 معلومات السيرفر

**IP Address:** `216.198.79.1`  
**نوع النشر:** VPS/Dedicated Server  
**الدومين:** [أدخل الدومين هنا]

---

## 🎯 متطلبات السيرفر

### البرامج المطلوبة:

```bash
# Node.js (v22.x)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# MongoDB (إذا لم يكن موجود)
# أو استخدم MongoDB Atlas

# Nginx (للـ Reverse Proxy)
sudo apt-get install nginx

# PM2 (لإدارة العمليات)
sudo npm install -g pm2

# Git
sudo apt-get install git
```

---

## 📦 الخطوة 1: رفع المشروع للسيرفر

### خيار 1: استخدام Git (موصى به)

```bash
# على السيرفر
cd /var/www
sudo git clone [your-repo-url] hmcar
cd hmcar
sudo chown -R $USER:$USER /var/www/hmcar
```

### خيار 2: استخدام SCP/SFTP

```bash
# من جهازك المحلي
scp -r ./car-auction root@216.198.79.1:/var/www/hmcar
```

---

## 🔧 الخطوة 2: إعداد Environment Variables

### إنشاء ملف .env على السيرفر:

```bash
cd /var/www/hmcar
nano .env
```

### أضف المتغيرات التالية:

```env
# الدومين
BASE_URL="https://[your-domain.com]"
ALLOWED_ORIGINS="https://[your-domain.com],https://www.[your-domain.com]"

# MongoDB
MONGO_URI="mongodb+srv://hmcar_user:Daood11223345@cluster0.tirfqnb.mongodb.net/car-auction?retryWrites=true&w=majority&appName=Cluster0"

# Redis/Upstash
REDIS_URL="rediss://default:gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg@brave-drake-83668.upstash.io:6379"
KV_URL="rediss://default:gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg@brave-drake-83668.upstash.io:6379"
KV_REST_API_URL="https://brave-drake-83668.upstash.io"
KV_REST_API_TOKEN="gQAAAAAAAUbUAAIncDE3YzM0YTAxMDEyYjM0YzdhOWYwNDM2MWFkNTk3MzUwZHAxODM2Njg"
KV_REST_API_READ_ONLY_TOKEN="ggAAAAAAAUbUAAIgcDHUES2f7K_PvusZ7tEuFph0aRVLXpLOpwllFh8XS444UA"

# Cloudinary
CLOUDINARY_CLOUD_NAME="dndy0luqc"
CLOUDINARY_API_KEY="972165144124738"
CLOUDINARY_API_SECRET="MhvHGsOgAtuURenr_H9cMUOBpx4"

# Email
EMAIL_SERVICE="gmail"
EMAIL_USER="divdhash9@gmail.com"
EMAIL_PASS="nakdvllltbaxwbpd"

# Security
JWT_SECRET="5a7c12c08ba86c78b6fafda82c4bf621122a6c98aa331c6bedb0bd7b7d7cba22dcdd78d57ac6833b03b41918e3280117"
SESSION_SECRET="fed2f48619b92bb38236503548d11686ab9cde64c856d0d49a157a439df7645be9969d9fe508ba3c66998e497a87fc0e"
BCRYPT_ROUNDS="8"

# Admin
PROD_ADMIN_EMAIL="admin@hmcar.com"
PROD_ADMIN_NAME="HM Car Admin"
PROD_ADMIN_PASSWORD="HmCar@2026!"

# Server
NODE_ENV="production"
PORT="4001"
```

### إعداد Frontend Environment:

```bash
cd /var/www/hmcar/client-app
nano .env.production
```

```env
NEXT_PUBLIC_API_URL=https://[your-domain.com]
NEXT_PUBLIC_SOCKET_URL=https://[your-domain.com]
NODE_ENV=production
```

---

## 📦 الخطوة 3: تثبيت Dependencies

```bash
# Backend
cd /var/www/hmcar
npm install --production

# Frontend
cd /var/www/hmcar/client-app
npm install
npm run build
```

---

## 🔧 الخطوة 4: إعداد Nginx

### إنشاء ملف إعداد Nginx:

```bash
sudo nano /etc/nginx/sites-available/hmcar
```

### أضف الإعدادات التالية:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name [your-domain.com] www.[your-domain.com];
    
    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name [your-domain.com] www.[your-domain.com];

    # SSL Configuration (سيتم إضافتها بعد Certbot)
    # ssl_certificate /etc/letsencrypt/live/[your-domain.com]/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/[your-domain.com]/privkey.pem;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Client Max Body Size (for file uploads)
    client_max_body_size 50M;

    # API Backend (Node.js)
    location /api {
        proxy_pass http://localhost:4001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Socket.IO
    location /socket.io {
        proxy_pass http://localhost:4001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Uploads
    location /uploads {
        proxy_pass http://localhost:4001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Next.js Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### تفعيل الإعدادات:

```bash
# إنشاء رابط رمزي
sudo ln -s /etc/nginx/sites-available/hmcar /etc/nginx/sites-enabled/

# حذف الإعداد الافتراضي
sudo rm /etc/nginx/sites-enabled/default

# اختبار الإعدادات
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

---

## 🔒 الخطوة 5: إعداد SSL (Let's Encrypt)

```bash
# تثبيت Certbot
sudo apt-get install certbot python3-certbot-nginx

# الحصول على شهادة SSL
sudo certbot --nginx -d [your-domain.com] -d www.[your-domain.com]

# اختبار التجديد التلقائي
sudo certbot renew --dry-run
```

---

## 🚀 الخطوة 6: تشغيل التطبيق

### استخدام PM2:

```bash
# Backend
cd /var/www/hmcar
pm2 start server.js --name "hmcar-backend" --env production

# Frontend
cd /var/www/hmcar/client-app
pm2 start npm --name "hmcar-frontend" -- start

# حفظ الإعدادات
pm2 save

# تفعيل التشغيل التلقائي عند إعادة التشغيل
pm2 startup
```

---

## 📊 الخطوة 7: المراقبة والصيانة

### أوامر PM2 المفيدة:

```bash
# عرض حالة التطبيقات
pm2 status

# عرض السجلات
pm2 logs

# عرض سجلات تطبيق معين
pm2 logs hmcar-backend
pm2 logs hmcar-frontend

# إعادة تشغيل
pm2 restart hmcar-backend
pm2 restart hmcar-frontend

# إيقاف
pm2 stop hmcar-backend
pm2 stop hmcar-frontend

# حذف
pm2 delete hmcar-backend
pm2 delete hmcar-frontend

# مراقبة الأداء
pm2 monit
```

### فحص Nginx:

```bash
# حالة Nginx
sudo systemctl status nginx

# سجلات Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# إعادة تحميل الإعدادات
sudo nginx -s reload
```

---

## 🔄 الخطوة 8: التحديثات المستقبلية

### سكريبت التحديث:

```bash
cd /var/www/hmcar
nano deploy.sh
```

```bash
#!/bin/bash

echo "🔄 جاري تحديث HM CAR..."

# Pull latest changes
git pull origin main

# Backend
echo "📦 تحديث Backend..."
npm install --production

# Frontend
echo "📦 تحديث Frontend..."
cd client-app
npm install
npm run build
cd ..

# Restart services
echo "🔄 إعادة تشغيل الخدمات..."
pm2 restart hmcar-backend
pm2 restart hmcar-frontend

echo "✅ تم التحديث بنجاح!"
```

```bash
# جعل السكريبت قابل للتنفيذ
chmod +x deploy.sh

# تشغيل التحديث
./deploy.sh
```

---

## 🔥 Firewall Configuration

```bash
# تفعيل UFW
sudo ufw enable

# السماح بـ SSH
sudo ufw allow 22/tcp

# السماح بـ HTTP و HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# عرض الحالة
sudo ufw status
```

---

## 📋 قائمة التحقق

- [ ] Node.js مثبت (v22.x)
- [ ] MongoDB متصل
- [ ] Redis/Upstash متصل
- [ ] Environment Variables محدثة
- [ ] Dependencies مثبتة
- [ ] Frontend مبني (npm run build)
- [ ] Nginx مُعد ويعمل
- [ ] SSL مُعد (Let's Encrypt)
- [ ] PM2 يدير التطبيقات
- [ ] Firewall مُعد
- [ ] الدومين يشير إلى 216.198.79.1
- [ ] الموقع يعمل على HTTPS
- [ ] API يعمل
- [ ] Socket.IO يعمل
- [ ] رفع الصور يعمل

---

## 🐛 حل المشاكل

### المشكلة: Port already in use

```bash
# إيقاف العملية على Port 4001
sudo lsof -ti:4001 | xargs kill -9

# إيقاف العملية على Port 3000
sudo lsof -ti:3000 | xargs kill -9
```

### المشكلة: Nginx 502 Bad Gateway

```bash
# تحقق من تشغيل التطبيقات
pm2 status

# تحقق من السجلات
pm2 logs
sudo tail -f /var/log/nginx/error.log
```

### المشكلة: SSL Certificate Error

```bash
# إعادة إصدار الشهادة
sudo certbot renew --force-renewal
sudo systemctl restart nginx
```

---

## 📞 الدعم

### السجلات المهمة:

```bash
# Application Logs
pm2 logs

# Nginx Access Log
sudo tail -f /var/log/nginx/access.log

# Nginx Error Log
sudo tail -f /var/log/nginx/error.log

# System Log
sudo journalctl -xe
```

---

**تاريخ الإنشاء:** 2026-03-28  
**IP Address:** 216.198.79.1  
**آخر تحديث:** 2026-03-28
