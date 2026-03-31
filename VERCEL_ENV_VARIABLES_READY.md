# 🔐 متغيرات البيئة المطلوبة في Vercel

## 🎯 للنشر الفوري - استخدم هذه القيم:

### HM CAR Project:
```
MONGO_URI=mongodb+srv://car-auction:YOUR_ACTUAL_PASSWORD@cluster0.1bqjdzp.mongodb.net/?appName=Cluster0
NEXTAUTH_SECRET=hmcar-ultra-secure-secret-2024-production
NEXTAUTH_URL=https://daood.okigo.net
ADMIN_EMAIL=dawoodalhash@gmail.com
WHATSAPP_NUMBER=+967781007805
USD_TO_SAR=3.75
USD_TO_KRW=1300
NODE_ENV=production
```

### CAR X Project:
```
MONGO_URI=mongodb+srv://car-auction:YOUR_ACTUAL_PASSWORD@cluster0.1bqjdzp.mongodb.net/?appName=Cluster0
NEXTAUTH_SECRET=carx-ultra-secure-secret-2024-production
NEXTAUTH_URL=https://daood.okigo.net
ADMIN_EMAIL=dawoodalhash@gmail.com
WHATSAPP_NUMBER=+967781007805
USD_TO_SAR=3.75
USD_TO_KRW=1300
NODE_ENV=production
```

## 🔥 خطوات النشر السريع:

### 1. نشر HM CAR:
```bash
cd client-app
vercel --prod
```

### 2. نشر CAR X:
```bash
cd carx-system
vercel --prod
```

## ⚠️ مهم:
- استبدل `YOUR_ACTUAL_PASSWORD` بكلمة السر الحقيقية لقاعدة البيانات
- Connection String الأساسي: mongodb+srv://car-auction:<db_password>@cluster0.1bqjdzp.mongodb.net/?appName=Cluster0
- فقط غيّر `<db_password>` بكلمة السر الحقيقية

## 🎉 النتيجة:
- HM CAR: https://your-hmcar-domain.vercel.app
- CAR X: https://your-carx-domain.vercel.app
