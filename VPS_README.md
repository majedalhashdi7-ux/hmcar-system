# 🚀 النشر على VPS - HM CAR

## 📋 معلومات السيرفر

**IP Address:** `216.198.79.1`  
**نوع الاستضافة:** VPS/Dedicated Server  
**الدومين:** [أدخل الدومين هنا]

---

## 📚 الأدلة المتوفرة

### 1. [VPS_QUICK_START.md](./VPS_QUICK_START.md) ⚡
**للبدء السريع (15 دقيقة)**
- خطوات مختصرة ومباشرة
- للمستخدمين ذوي الخبرة
- استخدام السكريبتات التلقائية

### 2. [VPS_DEPLOYMENT_GUIDE.md](./VPS_DEPLOYMENT_GUIDE.md) 📖
**الدليل الشامل**
- شرح مفصل لكل خطوة
- إعدادات Nginx كاملة
- حل المشاكل الشائعة
- أوامر الصيانة

### 3. [VPS_DEPLOYMENT_CHECKLIST.md](./VPS_DEPLOYMENT_CHECKLIST.md) ✅
**قائمة التحقق**
- تتبع التقدم خطوة بخطوة
- التأكد من عدم نسيان شيء
- للمراجعة النهائية

---

## 🛠️ الملفات والسكريبتات

### ملفات الإعداد:

1. **nginx-hmcar.conf** - إعدادات Nginx الجاهزة
2. **scripts/vps-setup.sh** - سكريبت الإعداد التلقائي
3. **scripts/vps-deploy.sh** - سكريبت النشر والتحديث

### كيفية الاستخدام:

```bash
# 1. الإعداد الأولي (مرة واحدة)
./scripts/vps-setup.sh

# 2. النشر الأول
# (راجع VPS_QUICK_START.md)

# 3. التحديثات المستقبلية
./scripts/vps-deploy.sh
```

---

## 🎯 الخطوات الرئيسية

### 1️⃣ إعداد السيرفر

```bash
ssh root@216.198.79.1
./scripts/vps-setup.sh
```

يقوم بتثبيت:
- Node.js v22
- Nginx
- PM2
- Certbot
- Firewall

### 2️⃣ رفع المشروع

```bash
# استخدام Git
git clone [repo] /var/www/hmcar

# أو SCP
scp -r ./car-auction root@216.198.79.1:/var/www/hmcar
```

### 3️⃣ إعداد Environment Variables

```bash
cd /var/www/hmcar
nano .env  # Backend
cd client-app
nano .env.production  # Frontend
```

### 4️⃣ البناء والتثبيت

```bash
# Backend
npm install --production

# Frontend
cd client-app
npm install
npm run build
```

### 5️⃣ إعداد Nginx

```bash
sudo cp nginx-hmcar.conf /etc/nginx/sites-available/hmcar
sudo nano /etc/nginx/sites-available/hmcar  # حدّث الدومين
sudo ln -s /etc/nginx/sites-available/hmcar /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6️⃣ SSL Certificate

```bash
sudo certbot --nginx -d [domain] -d www.[domain]
```

### 7️⃣ تشغيل التطبيق

```bash
pm2 start server.js --name hmcar-backend
cd client-app
pm2 start npm --name hmcar-frontend -- start
pm2 save
pm2 startup
```

---

## ✅ التحقق السريع

```bash
# حالة التطبيقات
pm2 status

# فحص API
curl https://[domain]/api/health

# فحص الموقع
curl https://[domain]

# السجلات
pm2 logs
```

---

## 🔄 التحديثات

```bash
cd /var/www/hmcar
./scripts/vps-deploy.sh
```

---

## 📊 المراقبة

```bash
# PM2 Monitoring
pm2 monit

# Nginx Logs
sudo tail -f /var/log/nginx/hmcar-access.log
sudo tail -f /var/log/nginx/hmcar-error.log

# Application Logs
pm2 logs hmcar-backend
pm2 logs hmcar-frontend
```

---

## 🐛 حل المشاكل السريع

### التطبيق لا يعمل:
```bash
pm2 restart all
pm2 logs
```

### Nginx Error:
```bash
sudo nginx -t
sudo systemctl restart nginx
sudo tail -f /var/log/nginx/error.log
```

### SSL Error:
```bash
sudo certbot renew --force-renewal
sudo systemctl restart nginx
```

### Port مشغول:
```bash
sudo lsof -ti:4001 | xargs kill -9
sudo lsof -ti:3000 | xargs kill -9
```

---

## 📞 الدعم

### الأدلة التفصيلية:
- [VPS_QUICK_START.md](./VPS_QUICK_START.md)
- [VPS_DEPLOYMENT_GUIDE.md](./VPS_DEPLOYMENT_GUIDE.md)
- [VPS_DEPLOYMENT_CHECKLIST.md](./VPS_DEPLOYMENT_CHECKLIST.md)

### السجلات:
```bash
pm2 logs                                    # Application
sudo tail -f /var/log/nginx/error.log      # Nginx
sudo journalctl -xe                         # System
```

---

## 🎯 الفرق بين VPS و Vercel

| الميزة | VPS | Vercel |
|--------|-----|--------|
| التحكم | كامل | محدود |
| الإعداد | يدوي | تلقائي |
| التكلفة | ثابتة | حسب الاستخدام |
| SSL | يدوي (Certbot) | تلقائي |
| Scaling | يدوي | تلقائي |
| الصيانة | مطلوبة | غير مطلوبة |

---

## 🚀 البدء الآن

1. **اختر الدليل المناسب:**
   - سريع؟ → [VPS_QUICK_START.md](./VPS_QUICK_START.md)
   - مفصل؟ → [VPS_DEPLOYMENT_GUIDE.md](./VPS_DEPLOYMENT_GUIDE.md)

2. **اتبع الخطوات**

3. **استخدم قائمة التحقق:**
   - [VPS_DEPLOYMENT_CHECKLIST.md](./VPS_DEPLOYMENT_CHECKLIST.md)

---

**IP Address:** 216.198.79.1  
**تاريخ الإنشاء:** 2026-03-28  
**آخر تحديث:** 2026-03-28
