# 🌐 إعداد DNS لـ hmcar.xyz

## 📋 معلومات DNS

**الدومين:** `hmcar.xyz`  
**IP Address:** `216.198.79.1`

---

## ⚡ الإعداد السريع

### في لوحة تحكم الدومين:

#### الطريقة 1: استخدام A Records (موصى به)

```
Type: A
Name: @
Value: 216.198.79.1
TTL: 3600 (أو Auto)

Type: A
Name: www
Value: 216.198.79.1
TTL: 3600 (أو Auto)
```

#### الطريقة 2: A Record + CNAME

```
Type: A
Name: @
Value: 216.198.79.1
TTL: 3600

Type: CNAME
Name: www
Value: hmcar.xyz
TTL: 3600
```

---

## 📝 خطوات التطبيق

### 1. تسجيل الدخول

اذهب إلى لوحة تحكم الدومين (حسب المزود):
- Namecheap: https://ap.www.namecheap.com/
- GoDaddy: https://dcc.godaddy.com/
- Cloudflare: https://dash.cloudflare.com/

### 2. إدارة DNS

ابحث عن:
- "DNS Management"
- "DNS Settings"
- "Advanced DNS"
- "Manage DNS"

### 3. إضافة السجلات

أضف السجلات كما في الأعلى.

### 4. حذف السجلات القديمة

احذف أي سجلات A أو CNAME قديمة تشير إلى عناوين أخرى.

---

## ✅ التحقق من DNS

### Windows:

```bash
nslookup hmcar.xyz
nslookup www.hmcar.xyz
```

يجب أن ترى:
```
Server:  ...
Address:  ...

Name:    hmcar.xyz
Address:  216.198.79.1
```

### Linux/Mac:

```bash
dig hmcar.xyz
dig www.hmcar.xyz
```

### Online Tools:

- https://dnschecker.org/#A/hmcar.xyz
- https://www.whatsmydns.net/#A/hmcar.xyz

---

## ⏱️ وقت الانتشار

- **محلياً:** 5-10 دقائق
- **عالمياً:** 24-48 ساعة
- **عادة:** 1-2 ساعة

---

## 🔧 إعدادات إضافية (اختيارية)

### MX Records (للبريد الإلكتروني)

إذا كنت تريد استخدام بريد مخصص:

```
Type: MX
Name: @
Value: mail.hmcar.xyz
Priority: 10
```

### TXT Records (للتحقق)

```
Type: TXT
Name: @
Value: "v=spf1 include:_spf.google.com ~all"
```

---

## 🐛 حل المشاكل

### المشكلة: DNS لا يعمل

**الحل:**
1. تحقق من السجلات في لوحة التحكم
2. انتظر 1-2 ساعة
3. امسح DNS Cache:

**Windows:**
```bash
ipconfig /flushdns
```

**Linux/Mac:**
```bash
sudo systemd-resolve --flush-caches
# أو
sudo dscacheutil -flushcache
```

### المشكلة: www لا يعمل

**الحل:**
تأكد من إضافة سجل للـ www (A أو CNAME)

### المشكلة: انتشار بطيء

**الحل:**
- قلل TTL إلى 300 (5 دقائق)
- انتظر 24 ساعة
- استخدم DNS Checker للتحقق

---

## 📊 حالة DNS

### فحص سريع:

```bash
# Windows
nslookup hmcar.xyz 8.8.8.8

# Linux/Mac
dig @8.8.8.8 hmcar.xyz
```

### فحص شامل:

```bash
# جميع السجلات
dig hmcar.xyz ANY

# Trace
dig +trace hmcar.xyz
```

---

## 🎯 الخطوة التالية

بعد إعداد DNS:

1. ✅ انتظر 10-30 دقيقة
2. ✅ تحقق من DNS: `nslookup hmcar.xyz`
3. ✅ ابدأ النشر على السيرفر: [HMCAR_XYZ_DEPLOYMENT.md](./HMCAR_XYZ_DEPLOYMENT.md)

---

**الدومين:** hmcar.xyz  
**IP:** 216.198.79.1  
**تاريخ الإعداد:** 2026-03-28
