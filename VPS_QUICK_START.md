# ⚡ دليل سريع للنشر على VPS

## 📋 معلومات السيرفر

**IP:** `216.198.79.1`  
**الدومين:** [أدخل الدومين هنا]

---

## 🚀 خطوات سريعة (15 دقيقة)

### 1️⃣ الاتصال بالسيرفر

```bash
ssh root@216.198.79.1
```

### 2️⃣ تشغيل سكريبت الإعداد التلقائي

```bash
# تحميل السكريبت
wget https://raw.githubusercontent.com/[your-repo]/scripts/vps-setup.sh

# أو انسخه يدوياً من المشروع

# جعله قابل للتنفيذ
chmod +x vps-setup.sh

# تشغيله
./vps-setup.sh
```

هذا السكريبت سيقوم بـ:
- ✅ تحديث النظام
- ✅ تثبيت Node.js v22
- ✅ تثبيت Nginx
- ✅ تثبيت PM2
- ✅ تثبيت Certbot
- ✅ إعداد Firewall
- ✅ إنشاء مجلد المشروع

### 3️⃣ رفع المشروع

**خيار 1: استخدام Git**
```bash
cd /var/www
git clone [your-repo-url] hmcar
cd hmcar
```

**خيار 2: استخدام SCP من جهازك**
```bash
# من جهازك المحلي
scp -r ./car-auction root@216.198.79.1:/var/www/hmcar
```

### 4️⃣ إعداد Environment Variables

```bash
cd /var/www/hmcar
nano .env
```

انسخ المحتوى من `.env.example` وحدّث:
- `BASE_URL` → دومينك
- `ALLOWED_ORIGINS` → دومينك

```bash
# Frontend
cd client-app
nano .env.production
```

حدّث:
- `NEXT_PUBLIC_API_URL` → دومينك
- `NEXT_PUBLIC_SOCKET_URL` → دومينك

### 5️⃣ تثبيت وبناء المشروع

```bash
# Backend
cd /var/www/hmcar
npm install --production

# Frontend
cd client-app
npm install
npm run build
cd ..
```

### 6️⃣ إعداد Nginx

```bash
# نسخ ملف الإعداد
sudo cp nginx-hmcar.conf /etc/nginx/sites-available/hmcar

# تعديل الدومين
sudo nano /etc/nginx/sites-available/hmcar
# استبدل YOUR_DOMAIN.com بدومينك

# تفعيل الإعداد
sudo ln -s /etc/nginx/sites-available/hmcar /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# اختبار وإعادة التشغيل
sudo nginx -t
sudo systemctl restart nginx
```

### 7️⃣ الحصول على SSL

```bash
sudo certbot --nginx -d [your-domain.com] -d www.[your-domain.com]
```

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
pm2 startup
```

---

## ✅ التحقق

```bash
# حالة التطبيقات
pm2 status

# السجلات
pm2 logs

# فحص الموقع
curl https://[your-domain.com]/api/health
```

---

## 🔄 التحديثات المستقبلية

```bash
cd /var/www/hmcar
./scripts/vps-deploy.sh
```

---

## 📞 المساعدة

راجع الدليل الكامل: [VPS_DEPLOYMENT_GUIDE.md](./VPS_DEPLOYMENT_GUIDE.md)

---

**IP:** 216.198.79.1  
**تاريخ الإنشاء:** 2026-03-28
