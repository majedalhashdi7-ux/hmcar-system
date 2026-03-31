# 🗄️ دليل قواعد البيانات المنفصلة

## ✅ قاعدتا بيانات منفصلتان تماماً

### 📊 HM CAR Database:
```
Database Name: hmcar_production
Connection String: mongodb+srv://car-auction:jyT24fgC7TXfyKEt@cluster0.1bqjdzp.mongodb.net/hmcar_production?retryWrites=true&w=majority
User: car-auction
Password: jyT24fgC7TXfyKEt
```

**المجموعات (Collections):**
- cars (سيارات HM CAR)
- parts (قطع غيار HM CAR)
- brands (وكالات HM CAR)
- users (مستخدمو HM CAR)
- auctions (مزادات HM CAR)
- orders (طلبات HM CAR)

---

### 📊 CAR X Database:
```
Database Name: carx_production
Connection String: mongodb+srv://car-auction:jyT24fgC7TXfyKEt@cluster0.1bqjdzp.mongodb.net/carx_production?retryWrites=true&w=majority
User: car-auction
Password: jyT24fgC7TXfyKEt
```

**المجموعات (Collections):**
- cars (سيارات CAR X)
- parts (قطع غيار CAR X)
- brands (وكالات CAR X)
- users (مستخدمو CAR X)
- orders (طلبات CAR X)

---

## 🔐 الفصل التام:

### ✅ ما تم:
- **قاعدتا بيانات منفصلتان**: hmcar_production و carx_production
- **بيانات منفصلة تماماً**: لا يوجد تداخل بين النظامين
- **مستخدمون منفصلون**: كل نظام له مستخدموه الخاصون
- **طلبات منفصلة**: كل نظام له طلباته الخاصة

### 🎯 الفائدة:
- **أمان أعلى**: فصل تام بين البيانات
- **أداء أفضل**: كل نظام مستقل
- **إدارة أسهل**: يمكن إدارة كل قاعدة بيانات بشكل منفصل
- **نسخ احتياطي منفصل**: لكل نظام نسخه الاحتياطية الخاصة

---

## 🚀 متغيرات البيئة للنشر:

### HM CAR (client-app):
```
MONGO_URI=mongodb+srv://car-auction:jyT24fgC7TXfyKEt@cluster0.1bqjdzp.mongodb.net/hmcar_production?retryWrites=true&w=majority
NEXTAUTH_SECRET=hmcar-secure-secret-2024-production-final
NEXTAUTH_URL=https://your-hmcar-domain.vercel.app
ADMIN_EMAIL=dawoodalhash@gmail.com
ADMIN_PASSWORD=daood@112233
WHATSAPP_NUMBER=+967781007805
USD_TO_SAR=3.75
USD_TO_KRW=1300
NODE_ENV=production
```

### CAR X (carx-system):
```
MONGO_URI=mongodb+srv://car-auction:jyT24fgC7TXfyKEt@cluster0.1bqjdzp.mongodb.net/carx_production?retryWrites=true&w=majority
NEXTAUTH_SECRET=carx-ultra-secure-secret-2024-production-final
NEXTAUTH_URL=https://your-carx-domain.vercel.app
ADMIN_EMAIL=dawoodalhash@gmail.com
ADMIN_PASSWORD=daood@112233
WHATSAPP_NUMBER=+967781007805
USD_TO_SAR=3.75
USD_TO_KRW=1300
NODE_ENV=production
```

---

## 📝 ملاحظات مهمة:

1. **كل نظام له قاعدة بيانات خاصة**
2. **لا يوجد تداخل في البيانات**
3. **يمكن نقل أي نظام لخادم منفصل بسهولة**
4. **كل نظام مستقل تماماً عن الآخر**

---

## 🎉 النتيجة:

**نظامان منفصلان تماماً بقاعدتي بيانات منفصلتين!**

- ✅ HM CAR → hmcar_production
- ✅ CAR X → carx_production
- ✅ فصل تام وأمان عالي
