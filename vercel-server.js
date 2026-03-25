// [[ARABIC_HEADER]] هذا الملف (vercel-server.js) هو المدخل الرئيسي لبيئة Vercel
// يعتمد الآن بالكامل على بنية النظام الأساسية (modules/app.js) لضمان التوافق التام

const App = require('./modules/app');
const database = require('./modules/core/database');

// تخزين مثيل التطبيق وحالة التهيئة في "الكاش" لتجنب إعادة البناء مع كل طلب
let cachedAppInstance = null;
let isInitialized = false;

/**
 * معالج الطلبات (Vercel Serverless Handler)
 */
module.exports = async (req, res) => {
    try {
        // ── 1. التأكد من الاتصال بقاعدة البيانات ──
        // قاعدة البيانات Atlas تتطلب اتصالاً مستقراً قبل معالجة أي طلب
        if (!database.isReady()) {
            console.log('[Vercel] Connecting to Database...');
            await database.connect();
        }

        // ── 2. بناء مثيل التطبيق (إذا لم يتم بناؤه مسبقاً) ──
        if (!cachedAppInstance) {
            console.log('[Vercel] Initializing HM CAR Core Engine...');
            const hmApp = new App();
            cachedAppInstance = hmApp.app;
        }

        // ── 3. تهيئة البيانات الأساسية (لمرة واحدة فقط عند تشغيل الـ Lambda) ──
        if (!isInitialized) {
            console.log('[Vercel] Skipping database seeding in production...');
            isInitialized = true;
        }

        // ── 4. معالجة الطلب عبر Express ──
        // ملاحظة: يتم تمرير req و res لمثيل Express الذي يقوم بالتوجيه (Route Management)
        return cachedAppInstance(req, res);

    } catch (error) {
        console.error('❌ CRITICAL VERCEL ERROR:', error.message);
        console.error(error.stack);
        
        // إرجاع رسالة خطأ منظمة في حال فشل البدء
        if (!res.headersSent) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Initialization Error',
                error: (process.env.NODE_ENV === 'development') ? error.message : 'SERVICE_UNAVAILABLE',
                engine: 'HM-CAR-PLATFORM'
            });
        }
    }
};
