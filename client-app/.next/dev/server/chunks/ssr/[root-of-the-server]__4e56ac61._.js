;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="782a1445-d190-102e-373e-7fa53115d836")}catch(e){}}();
module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق اللغة والترجمة (LanguageContext)
 * المسؤول عن إدارة لغات التطبيق (العربية، الإنجليزية، الكورية).
 * يحتوي على قاموس الترجمات ووظائف التبديل بين اللغات.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const translations = {
    // Common
    appName: {
        AR: "إتش إم كار",
        EN: "HM CAR",
        KR: "HM 카"
    },
    auction: {
        AR: "مزاد",
        EN: "AUCTION",
        KR: "경매"
    },
    login: {
        AR: "دخول",
        EN: "LOGIN",
        KR: "로그인"
    },
    logout: {
        AR: "خروج",
        EN: "LOGOUT",
        KR: "로그아웃"
    },
    home: {
        AR: "الرئيسية",
        EN: "HOME",
        KR: "홈"
    },
    dashboard: {
        AR: "لوحة التحكم",
        EN: "DASHBOARD",
        KR: "대시보드"
    },
    register: {
        AR: "إنشاء حساب",
        EN: "REGISTER",
        KR: "회원가입"
    },
    back: {
        AR: "عودة",
        EN: "BACK",
        KR: "뒤로"
    },
    save: {
        AR: "حفظ",
        EN: "SAVE",
        KR: "저장"
    },
    delete: {
        AR: "حذف",
        EN: "DELETE",
        KR: "삭제"
    },
    edit: {
        AR: "تعديل",
        EN: "EDIT",
        KR: "편집"
    },
    buyNow: {
        AR: "شراء الآن",
        EN: "BUY NOW",
        KR: "지금 구매"
    },
    // Navbar
    showroom: {
        AR: "المعرض",
        EN: "SHOWROOM",
        KR: "전시장"
    },
    auctions: {
        AR: "المزادات",
        EN: "AUCTIONS",
        KR: "경매"
    },
    spareParts: {
        AR: "قطع الغيار",
        EN: "PARTS",
        KR: "부품"
    },
    about: {
        AR: "عن الشركة",
        EN: "ABOUT",
        KR: "회사 소개"
    },
    // Auth
    loginTitle: {
        AR: "مرحباً بعودتك",
        EN: "WELCOME BACK",
        KR: "환영합니다"
    },
    loginSubtitle: {
        AR: "سجل الدخول للوصول إلى ساحة المزادات",
        EN: "Login to access the auction arena",
        KR: "경매장에 입장하려면 로그인하세요"
    },
    registerTitle: {
        AR: "انضم إلى النخبة",
        EN: "JOIN THE ELITE",
        KR: "정회원 가입"
    },
    registerSubtitle: {
        AR: "أنشئ حسابك لبدء تجربة اقتناء السيارات الفاخرة",
        EN: "Create your account to start your luxury automotive journey",
        KR: "럭셔리 자동차 여정을 시작하려면 계정을 만드세요"
    },
    email: {
        AR: "البريد الإلكتروني",
        EN: "EMAIL ADDRESS",
        KR: "이메일 주소"
    },
    password: {
        AR: "كلمة المرور",
        EN: "PASSWORD",
        KR: "비밀번호"
    },
    fullName: {
        AR: "الاسم الكامل",
        EN: "FULL NAME",
        KR: "성함"
    },
    orContinueWith: {
        AR: "أو المتابعة بواسطة",
        EN: "OR CONTINUE WITH",
        KR: "또는 다음으로 계속"
    },
    loginAsAdmin: {
        AR: "حساب مدير",
        EN: "ADMIN LOGIN",
        KR: "관리자 로그인"
    },
    loginAsCustomer: {
        AR: "حساب عميل",
        EN: "CLIENT LOGIN",
        KR: "고객 로그인"
    },
    dontHaveAccount: {
        AR: "ليس لديك حساب؟",
        EN: "DON'T HAVE AN ACCOUNT?",
        KR: "계정이 없으신가요?"
    },
    alreadyHaveAccount: {
        AR: "لديك حساب بالفعل؟",
        EN: "ALREADY HAVE AN ACCOUNT?",
        KR: "이미 계정이 있으신가요?"
    },
    // Home Page
    heroTitle: {
        AR: "الوجهة الأمثل للسيارات الفاخرة",
        EN: "Ultimate Destination for luxury cars",
        KR: "럭셔리 자동차의 궁극적인 목적지"
    },
    heroSubtitle: {
        AR: "استكشف عالم المزادات الحصرية والقطع النادرة",
        EN: "Explore exclusive auctions and rare components",
        KR: "독점 경매 및 희귀 부품 세계 탐험"
    },
    searchPlaceholder: {
        AR: "ابحث عن سيارة أحلامك...",
        EN: "Search for your dream car...",
        KR: "꿈의 자동차를 검색하세요..."
    },
    allBrands: {
        AR: "جميع الماركات",
        EN: "All Brands",
        KR: "모든 브랜드"
    },
    priceRange: {
        AR: "النطاق السعري",
        EN: "Price Range",
        KR: "가격 도면"
    },
    searchBtn: {
        AR: "بحث",
        EN: "SEARCH",
        KR: "검색"
    },
    // Showroom
    inventoryTitle: {
        AR: "معرض النخبة",
        EN: "ELITE INVENTORY",
        KR: "엘리트 인벤토리"
    },
    inventorySubtitle: {
        AR: "تصفح مجموعتنا المختارة من السيارات الفاخرة",
        EN: "Browse our curated selection of luxury vehicles",
        KR: "엄선된 럭셔리 자동차 컬렉션을 둘러보세요"
    },
    filterAll: {
        AR: "الكل",
        EN: "ALL",
        KR: "전체"
    },
    filterSport: {
        AR: "رياضية",
        EN: "SPORT",
        KR: "스포츠"
    },
    filterLuxury: {
        AR: "فاخرة",
        EN: "LUXURY",
        KR: "럭셔리"
    },
    filterSuv: {
        AR: "دفع رباعي",
        EN: "SUV",
        KR: "SUV"
    },
    viewDetails: {
        AR: "عرض التفاصيل",
        EN: "VIEW DETAILS",
        KR: "상세 보기"
    },
    bidNow: {
        AR: "زايد الآن",
        EN: "BID NOW",
        KR: "지금 입찰"
    },
    // Auctions
    arenaTitle: {
        AR: "ساحة المزادات الحية",
        EN: "LIVE AUCTION ARENA",
        KR: "라이브 경매장"
    },
    arenaSubtitle: {
        AR: "زايد في الوقت الفعلي على أندر السيارات في العالم",
        EN: "Bid in real-time on the world's most exclusive machinery",
        KR: "세계에서 가장 독점적인 차량에 실시간으로 입찰하세요"
    },
    currentBid: {
        AR: "المزايدة الحالية",
        EN: "CURRENT BID",
        KR: "현재 입찰가"
    },
    timeLeft: {
        AR: "الوقت المتبقي",
        EN: "TIME LEFT",
        KR: "남은 시간"
    },
    activeBidders: {
        AR: "المزايدون النشطون",
        EN: "ACTIVE BIDDERS",
        KR: "활성 입찰자"
    },
    startingPrice: {
        AR: "سعر البداية",
        EN: "STARTING PRICE",
        KR: "시작 가격"
    },
    ended: {
        AR: "انتهى المزاد",
        EN: "ENDED",
        KR: "경매 종료"
    },
    // Parts
    partsTitle: {
        AR: "كتالوج قطع الغيار",
        EN: "COMPONENTS CATALOG",
        KR: "부품 카탈로그"
    },
    partsSubtitle: {
        AR: "قطع أصلية مصممة لأداء استثنائي لسيارات النخبة",
        EN: "Genuine components engineered for elite performance",
        KR: "엘리트 성능을 위해 설계된 순정 부품"
    },
    categoryEngine: {
        AR: "المحرك",
        EN: "ENGINE",
        KR: "엔진"
    },
    categoryBody: {
        AR: "الهيكل",
        EN: "BODY",
        KR: "바디"
    },
    categoryInterior: {
        AR: "المقصورة",
        EN: "INTERIOR",
        KR: "인테리어"
    },
    categoryElectric: {
        AR: "الكهرباء",
        EN: "ELECTRIC",
        KR: "전기"
    },
    stockStatus: {
        AR: "حالة المخزون",
        EN: "STOCK STATUS",
        KR: "재고 상태"
    },
    inStock: {
        AR: "متوفر",
        EN: "IN STOCK",
        KR: "재고 있음"
    },
    // About
    aboutTitle: {
        AR: "قصتنا وعالمنا",
        EN: "OUR STORY & WORLD",
        KR: "우리의 이야기와 세계"
    },
    aboutSubtitle: {
        AR: "تجسيد للفخامة في عالم السيارات بالمملكة العربية السعودية",
        EN: "Exbodying luxury in the Saudi Arabian automotive landscape",
        KR: "사우디아라비아 자동차 환경의 럭셔리 구현"
    },
    historyTitle: {
        AR: "تاريخنا",
        EN: "HISTORY",
        KR: "연혁"
    },
    historyDesc: {
        AR: "بدأنا بشغف بسيط للسيارات النادرة وتحولنا اليوم إلى أكبر منصة مزادات في المنطقة.",
        EN: "We started with a simple passion for rare cars and have grew into the region's largest auction platform.",
        KR: "희귀 자동차에 대한 소박한 열정으로 시작하여 오늘날 지역 최대의 경매 플랫폼으로 성장했습니다."
    },
    // Dashboard Client
    welcome: {
        AR: "مرحباً",
        EN: "Welcome",
        KR: "환영합니다"
    },
    liveAuctions: {
        AR: "مزادات مباشرة",
        EN: "Live Auctions",
        KR: "라이브 경매"
    },
    availableCars: {
        AR: "سيارات متاحة",
        EN: "Available Cars",
        KR: "이용 가능한 차량"
    },
    myOrders: {
        AR: "طلباتي",
        EN: "My Orders",
        KR: "내 주문"
    },
    inProgress: {
        AR: "قيد المعالجة",
        EN: "In Progress",
        KR: "진행 중"
    },
    eliteMember: {
        AR: "عضوية النخبة",
        EN: "ELITE MEMBER",
        KR: "우수 회원"
    },
    recentBids: {
        AR: "أحدث المزايدات",
        EN: "Recent Bids",
        KR: "최근 입찰"
    },
    quickActions: {
        AR: "إجراءات سريعة",
        EN: "Quick Actions",
        KR: "빠른 메뉴"
    },
    // Admin Dashboard
    adminTitle: {
        AR: "لوحة التحكم الذهبية",
        EN: "GOLDEN CONTROL PANEL",
        KR: "골든 제어판"
    },
    activeInventory: {
        AR: "المخزون النشط",
        EN: "Active Inventory",
        KR: "활성 재고"
    },
    totalUsers: {
        AR: "إجمالي المستخدمين",
        EN: "Total Users",
        KR: "총 사용자"
    },
    urgentAlerts: {
        AR: "تنبيهات عاجلة",
        EN: "Urgent Alerts",
        KR: "긴급 알림"
    },
    successRate: {
        AR: "معدل النجاح",
        EN: "Success Rate",
        KR: "성공률"
    },
    addCar: {
        AR: "إضافة سيارة",
        EN: "Add Car",
        KR: "차량 추가"
    },
    createAuction: {
        AR: "إنشاء مزاد",
        EN: "Create Auction",
        KR: "경매 생성"
    },
    manageCategories: {
        AR: "إدارة الفئات",
        EN: "Manage Categories",
        KR: "카테고리 관리"
    },
    notifications: {
        AR: "الإشعارات",
        EN: "Notifications",
        KR: "알림"
    },
    orders: {
        AR: "الطلبات",
        EN: "Orders",
        KR: "주문"
    },
    settings: {
        AR: "الإعدادات",
        EN: "Settings",
        KR: "설정"
    },
    serverStatus: {
        AR: "حالة السيرفر",
        EN: "Server Status",
        KR: "서버 상태"
    },
    // Social
    social: {
        AR: "التواصل الاجتماعي",
        EN: "Social",
        KR: "소셜"
    },
    socialSettings: {
        AR: "إعدادات التواصل",
        EN: "Social Settings",
        KR: "소셜 설정"
    },
    whatsappNumber: {
        AR: "رقم واتساب",
        EN: "WhatsApp Number",
        KR: "WhatsApp 번호"
    },
    socialLinks: {
        AR: "روابط التواصل",
        EN: "Social Links",
        KR: "소셜 링크"
    },
    addLink: {
        AR: "إضافة رابط",
        EN: "Add Link",
        KR: "링크 추가"
    },
    platform: {
        AR: "المنصة",
        EN: "Platform",
        KR: "플랫폼"
    },
    url: {
        AR: "الرابط",
        EN: "URL",
        KR: "URL"
    },
    saveChanges: {
        AR: "حفظ التغييرات",
        EN: "Save Changes",
        KR: "변경 사항 저장"
    },
    publicSocialPage: {
        AR: "صفحتنا الاجتماعية",
        EN: "Our Social Page",
        KR: "공식 소셜 페이지"
    },
    followUs: {
        AR: "تابعنا",
        EN: "Follow Us",
        KR: "팔로우"
    },
    contactUs: {
        AR: "تواصل معنا",
        EN: "Contact Us",
        KR: "문의하기"
    },
    supportChat: {
        AR: "دعم العملاء",
        EN: "Customer Support",
        KR: "고객 지원"
    },
    describeIssue: {
        AR: "اكتب مشكلتك هنا...",
        EN: "Describe your issue...",
        KR: "여기에 문제를 설명하세요..."
    },
    send: {
        AR: "إرسال",
        EN: "Send",
        KR: "보내기"
    },
    submitted: {
        AR: "تم الإرسال",
        EN: "Submitted",
        KR: "제출됨"
    },
    failed: {
        AR: "فشل الإرسال",
        EN: "Failed to submit",
        KR: "제출 실패"
    },
    brands: {
        AR: "الوكالات",
        EN: "Agencies",
        KR: "대리점"
    },
    addBrand: {
        AR: "إضافة وكالة",
        EN: "Add Agency",
        KR: "대리점 추가"
    },
    brandName: {
        AR: "اسم الوكالة",
        EN: "Agency Name",
        KR: "대리점 이름"
    },
    brandLogo: {
        AR: "شعار الوكالة",
        EN: "Agency Logo",
        KR: "대리점 로고"
    },
    brandCategory: {
        AR: "تصنيف الوكالة",
        EN: "Agency Category",
        KR: "대리점 카테고리"
    },
    brandCars: {
        AR: "معرض السيارات",
        EN: "Car Showroom",
        KR: "차량 전시장"
    },
    brandParts: {
        AR: "قطع الغيار",
        EN: "Spare Parts",
        KR: "예비 부품"
    },
    brandBoth: {
        AR: "كلاهما",
        EN: "Both",
        KR: "둘 다"
    },
    browseCars: {
        AR: "معرض HM CAR",
        EN: "HM CAR SHOWROOM",
        KR: "HM CAR 전시장"
    },
    // Admin Car Management
    carManagement: {
        AR: "إدارة السيارات",
        EN: "CAR MANAGEMENT",
        KR: "차량 관리"
    },
    carName: {
        AR: "اسم السيارة",
        EN: "Car Name",
        KR: "차량 이름"
    },
    carBrand: {
        AR: "الماركة",
        EN: "Brand",
        KR: "브랜드"
    },
    carPrice: {
        AR: "السعر",
        EN: "Price",
        KR: "가격"
    },
    carStatus: {
        AR: "الحالة",
        EN: "Status",
        KR: "상태"
    },
    uploadImage: {
        AR: "تحميل صورة",
        EN: "Upload Image",
        KR: "이미지 업로드"
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    // تهيئة اللغة مباشرة من المتصفح أو التخزين المحلي لتجنب التحديث المتأخر عند التحميل
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return 'AR';
        //TURBOPACK unreachable
        ;
        const cookieMatch = undefined;
        const cookieLang = undefined;
        const storedLang = undefined;
    });
    /**
     * حفظ اللغة المختارة في التخزين المحلي وملفات البريد (Cookies)
     */ const persistLang = (value)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        persistLang(lang);
    }, [
        lang
    ]);
    const toggleLanguage = ()=>{
        // التنقل التتابعي بين اللغات (عربي -> إنجليزي -> كوري -> عربي)
        const nextLang = {
            'AR': 'EN',
            'EN': 'KR',
            'KR': 'AR'
        };
        setLang(nextLang[lang]);
    };
    const t = (key)=>{
        return translations[key]?.[lang] || String(key);
    };
    const rawText = (text)=>text;
    const isRTL = lang === 'AR'; // هل اللغة الحالية تدعم الكتابة من اليمين لليسار؟
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            toggleLanguage,
            t,
            rawText,
            isRTL
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            dir: isRTL ? 'rtl' : 'ltr',
            className: isRTL ? 'font-arabic' : 'font-sans',
            children: children
        }, void 0, false, {
            fileName: "[project]/client-app/src/lib/LanguageContext.tsx",
            lineNumber: 219,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/client-app/src/lib/LanguageContext.tsx",
        lineNumber: 218,
        columnNumber: 9
    }, this);
}
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}),
"[project]/client-app/src/lib/api-cache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiCache",
    ()=>apiCache
]);
/**
 * نظام ذاكرة التخزين المؤقت للعميل (Client-side API Cache)
 * يساعد في جعل التنقل بين الصفحات "لحظياً" عبر تخزين استجابات الـ API.
 */ const cache = new Map();
const DEFAULT_TTL = 30000; // 30 ثانية كحد أقصى للتخزين المؤقت للبيانات المسبقة
const apiCache = {
    set: (key, data, ttl = DEFAULT_TTL)=>{
        cache.set(key, {
            data,
            timestamp: Date.now() + ttl
        });
    },
    get: (key)=>{
        const entry = cache.get(key);
        if (!entry) return null;
        if (Date.now() > entry.timestamp) {
            cache.delete(key);
            return null;
        }
        return entry.data;
    },
    clear: ()=>cache.clear()
};
}),
"[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "fetchAPI",
    ()=>fetchAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api-cache.ts [app-ssr] (ecmascript)");
// [[ARABIC_HEADER]] هذا الملف (client-app/src/lib/api.ts) المسؤول عن جميع طلبات التواصل مع الخادم (API).
/**
 * نظام التواصل مع API
 * يحتوي على الدوال الأساسية لإرسال واستقبال البيانات من الخادم (Backend).
 */ // الأفضل استخدام الرابط الثابت في الإنتاج إذا كان العميل والارسال منفصلين
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'https://car-auction-sand.vercel.app';
;
async function fetchAPI(endpoint, options = {}, retries = 2) {
    // [[ARABIC_COMMENT]] التحقق من الكاش المحلي أولاً للسرعة القصوى
    if (options.useCache && options.method === 'GET' || !options.method) {
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiCache"].get(endpoint);
        if (cached) return cached;
    }
    const url = `${API_BASE_URL}${endpoint}`;
    // التحقق مما إذا كان الطلب يحتوي على ملفات (FormData)
    const isFormData = options.body instanceof FormData;
    // تعيين الترويسات الافتراضية (Headers)
    const defaultHeaders = isFormData ? {
        'Accept': 'application/json'
    } : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    // إذا كان المستخدم مسجلاً، نقوم بإضافة التوكن للطلب (Bearer Token)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // [[ARABIC_COMMENT]] إعداد مهلة زمنية للطلب (Timeout) لضمان عدم تعليق المتصفح (مرفوع لـ 60 ثانية للعمليات الثقيلة)
    const controller = new AbortController();
    const customTimeout = options.timeout || 60000;
    const timeoutId = setTimeout(()=>controller.abort(), customTimeout); // 60 seconds timeout
    const defaultOptions = {
        ...options,
        cache: 'no-store',
        signal: controller.signal,
        headers: {
            ...defaultHeaders,
            ...options.headers || {}
        }
    };
    try {
        const response = await fetch(url, defaultOptions);
        clearTimeout(timeoutId);
        const data = await response.json().catch(()=>({}));
        if (!response.ok) {
            let message = data.message || data.error || `فشل الطلب: ${response.status}`;
            if (response.status === 429) {
                message = 'لقد قمت بعدد كبير من المحاولات. يرجى الانتظار قليلاً قبل المحاولة مرة أخرى.';
            }
            const customError = new Error(message);
            customError.status = response.status;
            throw customError;
        }
        // [[ARABIC_COMMENT]] حفظ في الكاش إذا تم طلب ذلك
        if (options.useCache) {
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiCache"].set(endpoint, data);
        }
        return data;
    } catch (error) {
        clearTimeout(timeoutId);
        // [[ARABIC_COMMENT]] إعادة المحاولة تلقائياً في حالة فشل الشبكة أو المهلة
        if (retries > 0 && (error.name === 'AbortError' || error.message.includes('fetch'))) {
            console.warn(`[API Retry] Retrying ${url}... Attempts left: ${retries}`);
            return fetchAPI(endpoint, options, retries - 1);
        }
        console.error(`[API Error] ${url}:`, error);
        throw error;
    }
}
const api = {
    auth: {
        login: (credentials)=>fetchAPI('/api/v2/auth/login', {
                method: 'POST',
                body: JSON.stringify(credentials)
            }),
        // التسجيل/الدخول التلقائي للعملاء
        autoLogin: (data)=>fetchAPI('/api/v2/auth/auto-login', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        sendOtp: (payload)=>fetchAPI('/api/v2/auth/otp/send', {
                method: 'POST',
                body: JSON.stringify(payload)
            }),
        verifyOtp: (payload)=>fetchAPI('/api/v2/auth/otp/verify', {
                method: 'POST',
                body: JSON.stringify(payload)
            }),
        register: (data)=>fetchAPI('/api/v2/auth/register', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        verify: ()=>fetchAPI('/api/v2/auth/verify'),
        logout: ()=>fetchAPI('/api/v2/auth/logout', {
                method: 'POST'
            }),
        changePassword: (data)=>fetchAPI('/api/v2/auth/change-password', {
                method: 'POST',
                body: JSON.stringify(data)
            })
    },
    // --- خدمات التحليلات والإحصائيات (Analytics) ---
    analytics: {
        // الحصول على الملخص العام
        getSummary: (period)=>fetchAPI(`/api/v2/analytics${period ? `?period=${period}` : ''}`),
        // عرض أحدث العمليات والأنشطة
        getActivities: (limit = 10)=>fetchAPI(`/api/v2/analytics/activities?limit=${limit}`),
        // الإحصائيات التفصيلية بالرسوم البيانية
        getDetailed: (period)=>fetchAPI(`/api/v2/analytics/detailed${period ? `?period=${period}` : ''}`)
    },
    users: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/users?${query}`);
        },
        heartbeat: ()=>fetchAPI('/api/v2/users/heartbeat', {
                method: 'POST',
                body: JSON.stringify({})
            }),
        getProfile: ()=>fetchAPI('/api/v2/users/profile'),
        updateProfile: (data)=>fetchAPI('/api/v2/users/profile', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        create: (data)=>fetchAPI('/api/v2/users', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/users/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        updateRole: (id, role)=>fetchAPI(`/api/v2/users/${id}/role`, {
                method: 'PATCH',
                body: JSON.stringify({
                    role
                })
            }),
        ban: (id, banned)=>fetchAPI(`/api/v2/users/${id}/ban`, {
                method: 'PATCH',
                body: JSON.stringify({
                    banned
                })
            }),
        delete: (id)=>fetchAPI(`/api/v2/users/${id}`, {
                method: 'DELETE'
            })
    },
    // --- خدمات إدارة السيارات والمعرض (Cars) ---
    cars: {
        // جلب قائمة السيارات المتوفرة
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/cars?${query}`);
        },
        getById: (id)=>fetchAPI(`/api/v2/cars/${id}`),
        create: (data)=>fetchAPI('/api/v2/cars', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/cars/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        delete: (id)=>fetchAPI(`/api/v2/cars/${id}`, {
                method: 'DELETE'
            }),
        getStyles: ()=>fetchAPI('/api/v2/cars/makes'),
        // تحديد السيارة كمباعة وبأي سعر
        markSold: (id, soldPrice)=>fetchAPI(`/api/v2/cars/${id}/sold`, {
                method: 'PATCH',
                body: JSON.stringify({
                    soldPrice
                })
            })
    },
    auctions: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/auctions?${query}`);
        },
        getById: (id)=>fetchAPI(`/api/v2/auctions/${id}`),
        placeBid: (id, amount)=>fetchAPI(`/api/v2/auctions/${id}/bid`, {
                method: 'POST',
                body: JSON.stringify({
                    amount
                })
            }),
        create: (data)=>fetchAPI('/api/v2/auctions', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        delete: (id)=>fetchAPI(`/api/v2/auctions/${id}`, {
                method: 'DELETE'
            }),
        update: (id, data)=>fetchAPI(`/api/v2/auctions/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            })
    },
    parts: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/parts?${query}`);
        },
        create: (data)=>fetchAPI('/api/v2/parts', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/parts/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        delete: (id)=>fetchAPI(`/api/v2/parts/${id}`, {
                method: 'DELETE'
            }),
        scrape: ()=>fetchAPI('/api/v2/parts/scrape/brands', {
                method: 'POST'
            }),
        toggleStock: (id)=>fetchAPI(`/api/v2/parts/${id}/toggle-stock`, {
                method: 'PATCH'
            })
    },
    dashboard: {
        getClientData: ()=>fetchAPI('/api/v2/dashboard/client'),
        getAdminData: ()=>fetchAPI('/api/v2/dashboard/admin')
    },
    orders: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/orders?${query}`);
        },
        getById: (id)=>fetchAPI(`/api/v2/orders/${id}`),
        create: (data)=>fetchAPI('/api/v2/orders', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        updateStatus: (id, status)=>fetchAPI(`/api/v2/orders/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status
                })
            }),
        delete: (id)=>fetchAPI(`/api/v2/orders/${id}`, {
                method: 'DELETE'
            })
    },
    // --- خدمات الفواتير (Invoices) ---
    invoices: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/invoices?${query}`);
        },
        getNextNumber: ()=>fetchAPI('/api/v2/invoices/next-number'),
        getById: (id)=>fetchAPI(`/api/v2/invoices/${id}`),
        create: (data)=>fetchAPI('/api/v2/invoices', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        updateStatus: (id, status)=>fetchAPI(`/api/v2/invoices/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status
                })
            }),
        delete: (id)=>fetchAPI(`/api/v2/invoices/${id}`, {
                method: 'DELETE'
            })
    },
    upload: {
        image: async (formData)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return fetchAPI('/api/v2/upload', {
                method: 'POST',
                body: formData
            });
        }
    },
    brands: {
        list: (category, options)=>{
            const params = new URLSearchParams();
            if (category) params.set('category', category);
            if (options?.targetShowroom) params.set('targetShowroom', options.targetShowroom);
            if (options?.includeInactive) params.set('includeInactive', 'true');
            const query = params.toString();
            return fetchAPI(`/api/v2/brands${query ? `?${query}` : ''}`);
        },
        create: (data)=>fetchAPI('/api/v2/brands', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/brands/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        delete: (id)=>fetchAPI(`/api/v2/brands/${id}`, {
                method: 'DELETE'
            })
    },
    favorites: {
        list: ()=>fetchAPI('/api/v2/favorites'),
        check: (carId)=>fetchAPI(`/api/v2/favorites/check/${carId}`),
        add: (carId)=>fetchAPI('/api/v2/favorites', {
                method: 'POST',
                body: JSON.stringify({
                    carId
                })
            }),
        remove: (carId)=>fetchAPI(`/api/v2/favorites/${carId}`, {
                method: 'DELETE'
            }),
        clear: ()=>fetchAPI('/api/v2/favorites', {
                method: 'DELETE'
            })
    },
    bids: {
        myBids: ()=>fetchAPI('/api/v2/bids/my'),
        auctionBids: (auctionId, limit)=>fetchAPI(`/api/v2/bids/auction/${auctionId}?limit=${limit || 20}`),
        place: (auctionId, amount)=>fetchAPI('/api/v2/bids', {
                method: 'POST',
                body: JSON.stringify({
                    auctionId,
                    amount
                })
            }),
        highest: (auctionId)=>fetchAPI(`/api/v2/bids/highest/${auctionId}`)
    },
    reviews: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/reviews?${query}`);
        },
        carReviews: (carId)=>fetchAPI(`/api/v2/reviews/car/${carId}`),
        add: (carId, rating, comment)=>fetchAPI('/api/v2/reviews', {
                method: 'POST',
                body: JSON.stringify({
                    carId,
                    rating,
                    comment
                })
            }),
        delete: (id)=>fetchAPI(`/api/v2/reviews/${id}`, {
                method: 'DELETE'
            })
    },
    messages: {
        conversations: ()=>fetchAPI('/api/v2/messages/conversations'),
        conversation: (userId, page)=>fetchAPI(`/api/v2/messages/conversation/${userId}?page=${page || 1}`),
        send: (receiverId, content)=>fetchAPI('/api/v2/messages', {
                method: 'POST',
                body: JSON.stringify({
                    receiverId,
                    content
                })
            }),
        getSupportMessages: ()=>fetchAPI('/api/v2/messages/support'),
        sendSupportMessage: (content)=>fetchAPI('/api/v2/messages/support', {
                method: 'POST',
                body: JSON.stringify({
                    content
                })
            }),
        markRead: (messageId)=>fetchAPI(`/api/v2/messages/${messageId}/read`, {
                method: 'PATCH'
            }),
        unreadCount: ()=>fetchAPI('/api/v2/messages/unread-count')
    },
    comparisons: {
        get: ()=>fetchAPI('/api/v2/comparisons'),
        add: (carId)=>fetchAPI('/api/v2/comparisons/add', {
                method: 'POST',
                body: JSON.stringify({
                    carId
                })
            }),
        remove: (carId)=>fetchAPI(`/api/v2/comparisons/remove/${carId}`, {
                method: 'DELETE'
            }),
        clear: ()=>fetchAPI('/api/v2/comparisons/clear', {
                method: 'DELETE'
            }),
        compare: (carIds)=>fetchAPI('/api/v2/comparisons/compare', {
                method: 'POST',
                body: JSON.stringify({
                    carIds
                })
            })
    },
    contact: {
        send: (data)=>fetchAPI('/api/v2/contact', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/contact?${query}`);
        },
        updateStatus: (id, status)=>fetchAPI(`/api/v2/contact/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status
                })
            }),
        delete: (id)=>fetchAPI(`/api/v2/contact/${id}`, {
                method: 'DELETE'
            })
    },
    liveAuctions: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/live-auctions?${query}`);
        },
        getById: (id)=>fetchAPI(`/api/v2/live-auctions/${id}`),
        create: (data)=>fetchAPI('/api/v2/live-auctions', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/live-auctions/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        delete: (id)=>fetchAPI(`/api/v2/live-auctions/${id}`, {
                method: 'DELETE'
            }),
        start: (id)=>fetchAPI(`/api/v2/live-auctions/${id}/start`, {
                method: 'POST'
            }),
        end: (id)=>fetchAPI(`/api/v2/live-auctions/${id}/end`, {
                method: 'POST'
            })
    },
    liveAuctionRequests: {
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/live-auction-requests?${query}`);
        },
        create: (data)=>fetchAPI('/api/v2/live-auction-requests', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        updateStatus: (id, data)=>fetchAPI(`/api/v2/live-auction-requests/${id}/status`, {
                method: 'PUT',
                body: JSON.stringify(data)
            })
    },
    smartAlerts: {
        list: ()=>fetchAPI('/api/v2/smart-alerts'),
        stats: ()=>fetchAPI('/api/v2/smart-alerts/stats'),
        create: (data)=>fetchAPI('/api/v2/smart-alerts', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        update: (id, data)=>fetchAPI(`/api/v2/smart-alerts/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        toggle: (id)=>fetchAPI(`/api/v2/smart-alerts/${id}/toggle`, {
                method: 'PATCH'
            }),
        delete: (id)=>fetchAPI(`/api/v2/smart-alerts/${id}`, {
                method: 'DELETE'
            })
    },
    settings: {
        // جلب الإعدادات العامة (بدون توثيق)
        getPublic: ()=>fetchAPI('/api/v2/settings/public'),
        // جلب كل الإعدادات (للأدمن)
        getAll: ()=>fetchAPI('/api/v2/settings'),
        // تحديث روابط التواصل الاجتماعي
        updateSocialLinks: (data)=>fetchAPI('/api/v2/settings/social-links', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // تحديث معلومات الاتصال
        updateContactInfo: (data)=>fetchAPI('/api/v2/settings/contact-info', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // تحديث معلومات الموقع
        updateSiteInfo: (data)=>fetchAPI('/api/v2/settings/site-info', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // تحديث إعدادات العملة
        updateCurrencySettings: (data)=>fetchAPI('/api/v2/settings/currency-settings', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // تحديث ميزات "لماذا تختارنا"
        updateFeatures: (data)=>fetchAPI('/api/v2/settings/features', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // تحديث محتوى الصفحة الرئيسية
        updateHomeContent: (data)=>fetchAPI('/api/v2/settings/home-content', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        // ── جلب إعدادات الإعلانات (للأدمن) ──
        getAdvertising: ()=>fetchAPI('/api/v2/settings/advertising'),
        // ── تحديث إعدادات الإعلانات (للأدمن) ──
        updateAdvertising: (data)=>fetchAPI('/api/v2/settings/advertising', {
                method: 'PUT',
                body: JSON.stringify(data)
            })
    },
    // ── الطلبات الخاصة (Concierge) ──
    concierge: {
        // إرسال طلب جديد (سيارة أو قطع غيار)
        create: (data)=>fetchAPI('/api/v2/concierge', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        // جلب جميع الطلبات (للأدمن)
        list: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/concierge?${query}`);
        },
        // إحصائيات الطلبات الخاصة
        stats: ()=>fetchAPI('/api/v2/concierge/stats'),
        // تحديث حالة طلب
        updateStatus: (id, status, data = {})=>fetchAPI(`/api/v2/concierge/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status,
                    ...data
                })
            }),
        // حذف طلب
        delete: (id)=>fetchAPI(`/api/v2/concierge/${id}`, {
                method: 'DELETE'
            })
    },
    // ── المعرض الكوري (Encar) ──
    showroom: {
        // جلب سيارات المعرض (الصفحة رقم page)
        getCars: (page = 1)=>fetchAPI(`/api/v2/showroom/cars?page=${page}`),
        // جلب إعدادات المعرض (للأدمن)
        getSettings: ()=>fetchAPI('/api/v2/showroom/settings'),
        // تحديث رابط Encar (للأدمن)
        updateSettings: (data)=>fetchAPI('/api/v2/showroom/settings', {
                method: 'PUT',
                body: JSON.stringify(data)
            }),
        scrape: ()=>fetchAPI('/api/v2/showroom/scrape', {
                method: 'POST'
            })
    },
    // ── الإشعارات (Notifications) ──
    notifications: {
        list: ()=>fetchAPI('/api/v2/notifications'),
        // تعيين كل الإشعارات كمقروءة (بدون id) أو إشعار واحد (بـ id)
        markRead: (id)=>id ? fetchAPI(`/api/v2/notifications/${id}/read`, {
                method: 'PATCH'
            }) : fetchAPI('/api/v2/notifications/read', {
                method: 'POST'
            }),
        deleteNotification: (id)=>fetchAPI(`/api/v2/notifications/${id}`, {
                method: 'DELETE'
            }),
        send: (data)=>fetchAPI('/api/v2/notifications/send', {
                method: 'POST',
                body: JSON.stringify(data)
            }),
        broadcast: (title, message, url)=>fetchAPI('/api/v2/notifications/broadcast', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    message,
                    url
                })
            }),
        // [[ARABIC_COMMENT]] تسجيل اشتراك جديد لإشعارات PWA
        subscribePush: (subscription, deviceInfo)=>fetchAPI('/api/v2/notifications/push/subscribe', {
                method: 'POST',
                body: JSON.stringify({
                    subscription,
                    deviceInfo
                })
            }),
        // [[ARABIC_COMMENT]] إلغاء اشتراك إشعارات PWA
        unsubscribePush: (endpoint)=>fetchAPI('/api/v2/notifications/push/unsubscribe', {
                method: 'POST',
                body: JSON.stringify({
                    endpoint
                })
            })
    },
    // ── الأمن والحماية (Security) ──
    security: {
        getDashboard: ()=>fetchAPI('/api/v2/security/dashboard'),
        getDevices: (params = {})=>{
            const query = new URLSearchParams(params).toString();
            return fetchAPI(`/api/v2/security/devices?${query}`);
        },
        getDeviceDetails: (id)=>fetchAPI(`/api/v2/security/devices/${id}`),
        toggleBan: (id, data)=>fetchAPI(`/api/v2/security/toggle-ban/${id}`, {
                method: 'POST',
                body: JSON.stringify(data || {})
            }),
        toggleExempt: (id, data)=>fetchAPI(`/api/v2/security/toggle-exempt/${id}`, {
                method: 'POST',
                body: JSON.stringify(data || {})
            }),
        updateTrust: (id, action)=>fetchAPI(`/api/v2/security/trust/${id}`, {
                method: 'POST',
                body: JSON.stringify({
                    action
                })
            }),
        addNote: (id, note)=>fetchAPI(`/api/v2/security/add-note/${id}`, {
                method: 'POST',
                body: JSON.stringify({
                    note
                })
            }),
        getSessions: (params)=>{
            const query = params ? new URLSearchParams(params).toString() : '';
            return fetchAPI(`/api/v2/security/sessions?${query}`);
        },
        terminateSession: (id)=>fetchAPI(`/api/v2/security/sessions/${id}/terminate`, {
                method: 'POST'
            }),
        terminateAllSessions: (userId)=>fetchAPI(`/api/v2/security/sessions/terminate-all/${userId}`, {
                method: 'POST'
            }),
        getReport: ()=>fetchAPI('/api/v2/security/report'),
        cleanup: (daysOld)=>fetchAPI('/api/v2/security/cleanup', {
                method: 'POST',
                body: JSON.stringify({
                    daysOld: daysOld || 90
                })
            }),
        bulkAction: (ids, action)=>fetchAPI('/api/v2/security/bulk-action', {
                method: 'POST',
                body: JSON.stringify({
                    ids,
                    action
                })
            }),
        deleteDevice: (id)=>fetchAPI(`/api/v2/security/devices/${id}`, {
                method: 'DELETE'
            })
    }
};
}),
"[project]/client-app/src/lib/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق الهوية والتوثيق (AuthContext)
 * المسؤول عن إدارة بيانات المستخدم المسجل، الصلاحيات، وعمليات تسجيل الخروج.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // حاله المستخدم الحالي
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // حالة التحميل أثناء التحقق من الجلسة
    const isLoggedIn = !!user; // تحويل حالة المستخدم إلى قيمة منطقية (هل هو مسجل دخول؟)
    const isAdmin = user?.role === 'admin' || user?.role === 'super_admin' || user?.role === 'manager'; // هل المستخدم لديه صلاحيات إدارية؟
    /**
     * مسح ملفات تعريف الارتباط (Cookies) الخاصة بالتوثيق
     */ const clearCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (typeof document !== 'undefined') {
            document.cookie = 'hm_token=; path=/; max-age=0; SameSite=Lax';
            document.cookie = 'hm_user_role=; path=/; max-age=0; SameSite=Lax';
        }
    }, []);
    /**
     * مسح جميع بيانات التوثيق من التخزين المحلي والمتصفح
     */ const clearAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        localStorage.removeItem('hm_token');
        localStorage.removeItem('hm_user');
        localStorage.removeItem('hm_user_role');
        clearCookies();
        setUser(null);
    }, [
        clearCookies
    ]);
    /**
     * التحقق من وجود جلسة دخول سابقة عند تحميل الموقع
     */ const checkExistingLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsLoading(true);
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                setIsLoading(false);
                return;
            }
            //TURBOPACK unreachable
            ;
            const token = undefined;
            const userStr = undefined;
        } catch (error) {
            console.error('Auth check failed:', error);
            clearAuth();
        } finally{
            setIsLoading(false);
        }
    }, [
        clearAuth,
        clearCookies
    ]);
    // التحقق من الجلسة وتحديث نبض الاتصال (Heartbeat)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkExistingLogin();
        // إرسال إشارة نبضكل دقيقة لإبلاغ السيرفر أن المستخدم متصل (Online)
        let heartbeatInterval;
        if (user) {
            const sendHeartbeat = ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].users.heartbeat().catch(()=>{});
            };
            sendHeartbeat(); // إرسال نبض فوري عند تسجيل الدخول أو التحديث
            heartbeatInterval = setInterval(sendHeartbeat, 60000); // 60 ثانية
        }
        return ()=>{
            if (heartbeatInterval) clearInterval(heartbeatInterval);
        };
    }, [
        checkExistingLogin,
        user
    ]);
    function refreshUser() {
        checkExistingLogin();
    }
    /**
     * تسجيل الخروج
     */ function logout() {
        clearAuth();
        // إعادة توجيه للصفحة الرئيسية بعد الخروج
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoggedIn,
            isLoading,
            isAdmin,
            logout,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client-app/src/lib/AuthContext.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/client-app/src/lib/SocketContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocketProvider",
    ()=>SocketProvider,
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق الاتصال الفوري (SocketContext)
 * المسؤول عن إنشاء وإدارة اتصال WebSockets مع الخادم لتلقي الإشعارات والتحديثات الحية.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    socket: null,
    isConnected: false
});
const useSocket = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SocketContext);
const SocketProvider = ({ children })=>{
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // حالة كائن السوكت
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // حالة الاتصال
    const { user, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // جلب بيانات المستخدم لربط الاتصال به
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // الاتصال بالخادم (استبدل بالرابط الفعلي في الإنتاج)
        const socketInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(("TURBOPACK compile-time value", "http://localhost:4000") || 'http://localhost:4002', {
            transports: [
                'websocket'
            ],
            reconnection: true
        });
        socketInstance.on('connect', ()=>{
            console.log('✅ Connected to Real-time Server');
            setIsConnected(true);
            // إذا كان المستخدم مديراً (Admin)، ينضم لغرفة الإدارة لتلقي تنبيهات النظام والتحكم
            if (user?.role === 'admin') {
                socketInstance.emit('join_room', 'admin_room');
            }
        });
        socketInstance.on('disconnect', ()=>{
            console.log('❌ Disconnected from Real-time Server');
            setIsConnected(false);
        });
        // الاستماع للإشعارات الجديدة القادمة من الخادم
        socketInstance.on('new_notification', (data)=>{
            console.log('⚡ New Real-time Notification:', data);
            // [[ARABIC_COMMENT]] إرسال حدث مخصص لتشغيل مكون الـ Smart Island في الواجهة لعرض الإشعار للمستخدم
            window.dispatchEvent(new CustomEvent('hm_smart_alert', {
                detail: {
                    id: data.id || Math.random().toString(),
                    title: data.title || 'تنبيه جديد',
                    message: data.message || '',
                    type: data.type || 'info',
                    actionLabel: data.actionLabel,
                    onAction: data.actionUrl ? ()=>window.location.href = data.actionUrl : undefined
                }
            }));
        });
        setSocket(socketInstance);
        return ()=>{
            socketInstance.disconnect();
        };
    }, [
        user?.role
    ]);
    // إرسال حدث (User Login) عند استقرار الاتصال لتوثيق المستخدم في السوكت
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoggedIn && user && socket && isConnected) {
            socket.emit('user_login', {
                id: user._id || user.id,
                name: user.name,
                role: user.role,
                timestamp: new Date()
            });
        }
    }, [
        isLoggedIn,
        user,
        socket,
        isConnected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocketContext.Provider, {
        value: {
            socket,
            isConnected
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client-app/src/lib/SocketContext.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/client-app/src/lib/SettingsContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsProvider",
    ()=>SettingsProvider,
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق الإعدادات (SettingsContext)
 * المسؤول عن جلب وإدارة إعدادات الموقع العامة من الخادم، بما في ذلك أسعار العملات،
 * معلومات التواصل، ومحتوى الصفحة الرئيسية.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SettingsProvider({ children }) {
    // محلياً نقوم بجلب التخزين السابق لتجنب تأخير ظهور البيانات (الكاش)
    const getInitialCache = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    };
    const cachedData = getInitialCache();
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.currencySettings || {
        usdToSar: 3.75,
        usdToKrw: 1350,
        activeCurrency: 'SAR',
        partsMultiplier: 1.0,
        auctionMultiplier: 1.0
    });
    const [siteInfo, setSiteInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.siteInfo || {
        siteName: 'HM CAR',
        siteDescription: '',
        logoUrl: '',
        faviconUrl: ''
    });
    const [socialLinks, setSocialLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.socialLinks || {});
    const [homeContent, setHomeContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.homeContent || {
        showLiveMarket: true,
        showAdvertising: true,
        showTrustHub: true,
        showTestimonials: true,
        showBrandCatalog: true
    });
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.features || []);
    const [marketingPixels, setMarketingPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cachedData?.marketingPixels || {
        googleAnalyticsId: '',
        metaPixelId: '',
        snapchatPixelId: '',
        tiktokPixelId: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!cachedData); // إذا كان هناك كاش، لا نحتاج لشاشة تحميل
    const [displayCurrency, setDisplayCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('SAR');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    /**
     * تحديث الإعدادات من الخادم بصمت في الخلفية لدعم التغييرات المباشرة
     */ const refreshSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].settings.getPublic();
            if (res.success && res.data) {
                // حفظ في الكاش لضمان الظهور الفوري المرة القادمة (حل مشكلة تأخر ظهور البيانات)
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (res.data.currencySettings) setCurrency(res.data.currencySettings);
                if (res.data.siteInfo) setSiteInfo(res.data.siteInfo);
                if (res.data.socialLinks) setSocialLinks(res.data.socialLinks);
                if (res.data.homeContent) setHomeContent(res.data.homeContent);
                if (res.data.features) setFeatures(res.data.features);
                if (res.data.marketingPixels) setMarketingPixels(res.data.marketingPixels);
                const stored = localStorage.getItem('displayCurrency');
                if (stored === 'USD' || stored === 'SAR' || stored === 'KRW') {
                    setDisplayCurrency(stored);
                } else {
                    setDisplayCurrency(res.data.currencySettings?.activeCurrency === 'USD' ? 'USD' : res.data.currencySettings?.activeCurrency === 'KRW' ? 'KRW' : 'SAR');
                }
            }
        } catch (err) {
            console.error('Failed to fetch settings', err);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refreshSettings();
    }, [
        refreshSettings
    ]);
    const handleSetDisplayCurrency = (c)=>{
        setDisplayCurrency(c);
        localStorage.setItem('displayCurrency', c);
    };
    /**
     * دالة داخلية لتنسيق الرقم حسب العملة واللغة (Intl.NumberFormat)
     */ const formatByCurrency = (amount, activeCurr)=>{
        let locale = 'ar-SA';
        if (activeCurr === 'USD') locale = 'en-US';
        if (activeCurr === 'KRW') locale = 'ko-KR';
        // استخدام واجهة برمجة تطبيقات التنسيق الدولية (Intl) لتنسيق الرقم حسب الدولة
        const formatter = new Intl.NumberFormat(locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: activeCurr === 'USD' ? 2 : 0
        });
        const formattedNumber = formatter.format(amount);
        const symbols = {
            'SAR': 'ر.س',
            'USD': '$',
            'KRW': '₩'
        };
        return `${symbols[activeCurr]} ${formattedNumber}`;
    };
    /**
     * تنسيق السعر بناءً على العملة المختارة
     * السعر الأساسي في المتغير هو "ريال سعودي"
     */ const formatPrice = (priceInSar, forcedCurrency, type)=>{
        const activeCurr = forcedCurrency || displayCurrency;
        let safeSar = Number(priceInSar || 0);
        // تطبيق معاملات الربح بناءً على نوع المنتج (قطع غيار أو مزاد)
        if (type === 'part' && currency.partsMultiplier) {
            safeSar *= currency.partsMultiplier;
        } else if (type === 'auction' && currency.auctionMultiplier) {
            safeSar *= currency.auctionMultiplier;
        }
        const priceInUsd = safeSar / Number(currency.usdToSar || 1);
        let finalPrice = safeSar;
        if (activeCurr === 'USD') {
            finalPrice = priceInUsd;
        } else if (activeCurr === 'KRW') {
            finalPrice = priceInUsd * Number(currency.usdToKrw || 0);
        }
        return formatByCurrency(finalPrice, activeCurr);
    };
    /**
     * تنسيق السعر عندما يكون السعر الأساسي بالدولار
     */ const formatPriceFromUsd = (priceInUsd, forcedCurrency, type)=>{
        const activeCurr = forcedCurrency || displayCurrency;
        let safeUsd = Number(priceInUsd || 0);
        // Apply multipliers if applicable
        if (type === 'part' && currency.partsMultiplier) {
            safeUsd *= currency.partsMultiplier;
        } else if (type === 'auction' && currency.auctionMultiplier) {
            safeUsd *= currency.auctionMultiplier;
        }
        let finalPrice = safeUsd;
        if (activeCurr === 'SAR') {
            finalPrice = safeUsd * Number(currency.usdToSar || 0);
        } else if (activeCurr === 'KRW') {
            finalPrice = safeUsd * Number(currency.usdToKrw || 0);
        }
        return formatByCurrency(finalPrice, activeCurr);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            currency,
            siteInfo,
            socialLinks,
            homeContent,
            features,
            marketingPixels,
            loading,
            refreshSettings,
            displayCurrency,
            setDisplayCurrency: handleSetDisplayCurrency,
            formatPrice,
            formatPriceFromUsd
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client-app/src/lib/SettingsContext.tsx",
        lineNumber: 260,
        columnNumber: 9
    }, this);
}
const useSettings = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
}),
"[project]/client-app/src/lib/ToastContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق رسائل التنبيه (ToastContext)
 * المسؤول عن إظهار رسائل منبثقة سريعة للمستخدم (نجاح، خطأ، معلومات) في زاوية الشاشة.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        // حذف التنبيه من القائمة بناءً على معرفه
        setToasts((prev)=>prev.filter((toast)=>toast.id !== id));
    }, []);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = 'success')=>{
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    type
                }
            ]);
        // إخفاء التنبيه تلقائياً بعد 4 ثوانٍ
        setTimeout(()=>removeToast(id), 4000);
    }, [
        removeToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 100,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                x: 100,
                                scale: 0.9
                            },
                            className: "pointer-events-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                                flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border min-w-[300px]
                                ${toast.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : toast.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}
                            `,
                                children: [
                                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-5 h-5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                        lineNumber: 60,
                                        columnNumber: 62
                                    }, this),
                                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-5 h-5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                        lineNumber: 61,
                                        columnNumber: 60
                                    }, this),
                                    (toast.type === 'info' || toast.type === 'warning') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "w-5 h-5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                        lineNumber: 62,
                                        columnNumber: 89
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[13px] font-bold uppercase tracking-wide flex-grow",
                                        children: toast.message
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                        lineNumber: 64,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeToast(toast.id),
                                        className: "p-1 hover:bg-white/5 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                        lineNumber: 68,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                                lineNumber: 54,
                                columnNumber: 29
                            }, this)
                        }, toast.id, false, {
                            fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/client-app/src/lib/ToastContext.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client-app/src/lib/ToastContext.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
function useToast() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}
}),
"[project]/client-app/src/lib/UIContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UIProvider",
    ()=>UIProvider,
    "useUI",
    ()=>useUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * سياق واجهة المستخدم (UIContext)
 * المسؤول عن إدارة حالة العناصر التفاعلية في الواجهة مثل فتح وإغلاق القوائم الجانبية (Drawers).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const UIContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function UIProvider({ children }) {
    const [isFavoritesOpen, setFavoritesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // حالة درج المفضلة
    const [isNotificationsOpen, setNotificationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // حالة درج الإشعارات
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UIContext.Provider, {
        value: {
            isFavoritesOpen,
            setFavoritesOpen,
            isNotificationsOpen,
            setNotificationsOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client-app/src/lib/UIContext.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function useUI() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(UIContext);
    if (!context) throw new Error('useUI must be used within UIProvider');
    return context;
}
}),
"[project]/client-app/src/components/PWAUpdater.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PWAUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function PWAUpdater() {
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) return;
        //TURBOPACK unreachable
        ;
        const showUpdateAlert = undefined;
        // [[ARABIC_COMMENT]] الاستماع لرسالة التحديث من Service Worker
        const handleMessage = undefined;
        // [[ARABIC_COMMENT]] فحص التحديثات
        const checkUpdate = undefined;
        // فحص أولي بعد 5 ثوانٍ
        const initialTimeout = undefined;
        // فحص دوري كل 15 دقيقة (للمستخدمين اللي يتركون التطبيق مفتوح لفترة طويلة)
        const pollInterval = undefined;
    }, [
        isRTL
    ]);
    return null; // لا نحتاج واجهة محلية، نستخدم Smart Island
}
}),
"[project]/client-app/src/components/PushNotificationManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PushNotificationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * مدير إشعارات الـ Push لنظام PWA
 * يقوم بطلب الصلاحية وتسجيل اشتراك الجهاز في الخلفية
 */ const VAPID_PUBLIC_KEY = 'BNghi5tZPhPvYdmdEEPQPn6M5xuonh0cUsBRpdKjPsy1a9MusGgJuVFZcaE_-t38LfJmeHdIznWWQKfjuUviRVc';
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+') // تحويل تنسيق Base64 الخاص بالعناوين إلى تنسيق قياسي
    .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for(let i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
function PushNotificationManager() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function sendSubscriptionToBackend(subscription) {
            try {
                const deviceInfo = {
                    browser: navigator.userAgent,
                    os: navigator.platform,
                    deviceId: localStorage.getItem('hm_device_id') || 'web-pwa'
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].notifications.subscribePush(subscription, deviceInfo);
            } catch (error) {
                console.error('[Push] Failed to sync with backend:', error);
            }
        }
        async function requestAndSubscribe(registration) {
            try {
                // طلب الإذن من المستخدم
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') return;
                // إنشاء اشتراك جديد
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
                });
                await sendSubscriptionToBackend(subscription);
                console.log('[Push] User successfully subscribed');
            } catch (error) {
                console.error('[Push] Failed to subscribe user:', error);
            }
        }
        // التحقق من دعم المتصفح لنظام الإشعارات واستمرارية الاشتراك الفعال
        async function initPush() {
            if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator) || !('PushManager' in window)) {
                console.warn('[Push] Browser does not support push notifications');
                return;
            }
            //TURBOPACK unreachable
            ;
            // التحقق مما إذا كان المستخدم مسجل دخول
            const user = undefined;
        }
        // تأخير بسيط لضمان استقرار باقي الكومبوننتس
        const timeout = setTimeout(initPush, 5000);
        return ()=>clearTimeout(timeout);
    }, []);
    // هذا الكومبوننت لا يظهر شيئاً في الواجهة، يعمل في الخلفية
    return null;
}
}),
"[project]/client-app/src/components/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SocketContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/SocketContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/ToastContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$UIContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/UIContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$PWAUpdater$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/PWAUpdater.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$PushNotificationManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/PushNotificationManager.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$UIContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UIProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SocketContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketProvider"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$PWAUpdater$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/client-app/src/components/Providers.tsx",
                                    lineNumber: 28,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$PushNotificationManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/client-app/src/components/Providers.tsx",
                                    lineNumber: 29,
                                    columnNumber: 33
                                }, this),
                                children
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client-app/src/components/Providers.tsx",
                            lineNumber: 27,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client-app/src/components/Providers.tsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client-app/src/components/Providers.tsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/client-app/src/components/Providers.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client-app/src/components/Providers.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/client-app/src/components/Providers.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/client-app/src/components/GoogleAnalytics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/react-ga4/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/SettingsContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function GoogleAnalytics() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { marketingPixels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ── Google Analytics 4 ──
        const GA_ID = marketingPixels?.googleAnalyticsId || process.env.NEXT_PUBLIC_GA_ID;
        if (GA_ID && !initialized) {
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].initialize(GA_ID);
            console.log('✅ GA4 Initialized:', GA_ID);
            setInitialized(true);
        }
    }, [
        marketingPixels,
        initialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // إرسال الأحداث عند تغيير الصفحة
        if (initialized) {
            const url = pathname + searchParams.toString();
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].send({
                hitType: 'pageview',
                page: url
            });
        }
    }, [
        pathname,
        searchParams,
        initialized
    ]);
    return null;
}
}),
"[project]/client-app/src/lib/useStandalone.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStandalone",
    ()=>useStandalone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useStandalone() {
    const [isStandalone, setIsStandalone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>{
            const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
            setIsStandalone(standalone);
        };
        check();
        const mediaQuery = window.matchMedia('(display-mode: standalone)');
        mediaQuery.addEventListener('change', check);
        return ()=>mediaQuery.removeEventListener('change', check);
    }, []);
    return isStandalone;
}
}),
"[project]/client-app/src/components/BottomTabBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * شريط التنقل السفلي (Bottom Tab Bar) الواسع
 * مخصص لواجهة الجوال (PWA) ليوفر تجربة أسهل في القراءة والتمرير
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// قائمة التبويبات (Tabs) والروابط المرتبطة بها - معدلة حسب طلب المستخدم
const TABS = [
    {
        href: '/gallery',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        labelAr: 'السيارات',
        labelEn: 'Cars',
        matchPaths: [
            '/gallery',
            '/showroom',
            '/cars'
        ]
    },
    {
        href: '/parts',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        labelAr: 'قطع الغيار',
        labelEn: 'Parts',
        matchPaths: [
            '/parts'
        ]
    },
    {
        href: '/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        labelAr: 'الرئيسية',
        labelEn: 'Home',
        matchPaths: [
            '/'
        ],
        exact: true
    },
    {
        href: '/notifications',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
        labelAr: 'الإشعارات',
        labelEn: 'Notifications',
        matchPaths: [
            '/notifications'
        ]
    },
    {
        href: '/client/dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        labelAr: 'حسابي',
        labelEn: 'Account',
        matchPaths: [
            '/client',
            '/profile',
            '/orders'
        ]
    }
];
function BottomTabBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isActive = (tab)=>{
        // التحقق مما إذا كان المسار الحالي يطابق التبويب (سواء مطابقة تامة أو بداية المسار)
        if (tab.exact) return pathname === tab.href;
        return tab.matchPaths.some((p)=>pathname.startsWith(p));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        // جعلنا حجم الشريط وأزراره أكبر قليلاً، وأضفنا تأثيرات تجعل التمرير والضغط سلساً
        className: "fixed bottom-0 left-0 right-0 z-[100] bg-[#0A0A0A] border-t border-white/10 backdrop-blur-3xl shadow-2xl",
        style: {
            paddingBottom: 'env(safe-area-inset-bottom, 12px)'
        },
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around px-2 pt-4 pb-3 max-w-lg mx-auto overflow-hidden touch-pan-x",
            children: TABS.map((tab)=>{
                const active = isActive(tab);
                const Icon = tab.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: tab.href,
                    className: "flex-1 group",
                    prefetch: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileTap: {
                            scale: 0.9
                        },
                        className: "flex flex-col items-center gap-1.5 cursor-pointer relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "tab-bg",
                                        className: "absolute -inset-3 rounded-xl bg-cinematic-neon-gold/10",
                                        transition: {
                                            type: 'spring',
                                            damping: 25,
                                            stiffness: 400
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-7 h-7 relative z-10 transition-all duration-300 ease-in-out ${active ? 'text-cinematic-neon-gold scale-110 drop-shadow-[0_0_8px_rgba(255,184,0,0.4)]' : 'text-white/40 group-hover:text-white/70'}`,
                                        strokeWidth: active ? 2.5 : 2
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                                lineNumber: 84,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[12px] md:text-[13px] font-bold tracking-wide transition-all duration-300 ${active ? 'text-cinematic-neon-gold' : 'text-white/40 group-hover:text-white/70'}`,
                                children: isRTL ? tab.labelAr : tab.labelEn
                            }, void 0, false, {
                                fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                                lineNumber: 101,
                                columnNumber: 33
                            }, this),
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "tab-dot",
                                className: "absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cinematic-neon-gold",
                                transition: {
                                    type: 'spring',
                                    damping: 25,
                                    stiffness: 400
                                }
                            }, void 0, false, {
                                fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                                lineNumber: 111,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                        lineNumber: 79,
                        columnNumber: 29
                    }, this)
                }, tab.href, false, {
                    fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
                    lineNumber: 78,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/client-app/src/components/BottomTabBar.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
}),
"[project]/client-app/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
// [[ARABIC_HEADER]] هذا الملف (client-app/src/lib/utils.ts) جزء من مشروع HM CAR ويحتوي تعليقات عربية لضمان الوضوح.
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/client-app/src/components/GlobalDrawers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalDrawers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * اللوحات الجانبية العالمية (Global Drawers)
 * مكون واحد يتحكم في عرض لوحة "المفضلة" أو "الإشعارات" بناءً على حالة الـ UI.
 * يستخدم التصميم السينمائي الغامق مع تأثيرات ضبابية (Blur) وحركات سلسة.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/gavel.js [app-ssr] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$UIContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/UIContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const rawText = (value)=>value;
// --- أنواع الإشعارات وأيقوناتها وألوانها ---
const NOTIFICATION_TYPES = {
    bid: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"],
        color: 'from-amber-500 to-orange-600'
    },
    order: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
        color: 'from-emerald-500 to-green-600'
    },
    car: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        color: 'from-blue-500 to-cyan-600'
    },
    promo: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        color: 'from-pink-500 to-rose-600'
    },
    system: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        color: 'from-slate-500 to-gray-600'
    },
    alert: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        color: 'from-red-500 to-rose-600'
    }
};
function GlobalDrawers() {
    const { isFavoritesOpen, setFavoritesOpen, isNotificationsOpen, setNotificationsOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$UIContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUI"])();
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { formatPrice, socialLinks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const WHATSAPP_NUMBER = (socialLinks?.whatsapp || '+821080880014').replace(/\D/g, '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isFavoritesOpen) {
            const data = JSON.parse(localStorage.getItem('hm_favorites') || '[]');
            setFavorites(data);
        }
    }, [
        isFavoritesOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isNotificationsOpen) {
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].notifications?.list?.().then((res)=>{
                // API returns { success, data: [...], notifications: [...] }
                const list = res?.data || res?.notifications || [];
                setNotifications(Array.isArray(list) ? list : []);
            }).catch((err)=>console.error("Failed to load notifications", err));
        }
    }, [
        isNotificationsOpen
    ]);
    const markAsRead = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].notifications?.markRead?.(id);
            setNotifications((prev)=>prev.map((n)=>n.id === id ? {
                        ...n,
                        read: true
                    } : n));
        } catch (err) {
            console.error(err);
        }
    };
    const markAllRead = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].notifications?.markRead?.();
            setNotifications((prev)=>prev.map((n)=>({
                        ...n,
                        read: true
                    })));
        } catch (err) {
            console.error(err);
        }
    };
    const deleteNotification = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].notifications?.deleteNotification?.(id);
            setNotifications((prev)=>prev.filter((n)=>n.id !== id));
        } catch (err) {
            console.error(err);
        }
    };
    const formatNotifTime = (time)=>{
        try {
            const d = new Date(time);
            return d.toLocaleDateString('ar-SA', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch  {
            return time;
        }
    };
    const removeFromFavorites = (id)=>{
        const updated = favorites.filter((f)=>f.id !== id);
        setFavorites(updated);
        localStorage.setItem('hm_favorites', JSON.stringify(updated));
    };
    const addToCart = (item)=>{
        const cart = JSON.parse(localStorage.getItem('hm_cart') || '[]');
        const exists = cart.find((c)=>c.id === item.id);
        if (!exists) {
            cart.push({
                id: item.id,
                type: item.type,
                title: item.title,
                price: item.price,
                image: item.image
            });
            localStorage.setItem('hm_cart', JSON.stringify(cart));
            window.dispatchEvent(new CustomEvent('hm_cart_updated'));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: (isFavoritesOpen || isNotificationsOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>{
                        setFavoritesOpen(false);
                        setNotificationsOpen(false);
                    },
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                }, void 0, false, {
                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                    lineNumber: 122,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: isRTL ? -450 : 450
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: isRTL ? -450 : 450
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 200
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 bottom-0 w-full max-w-[450px] bg-[#0c0c0f] border-white/10 z-[101] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]", isRTL ? "left-0 border-r" : "right-0 border-l"),
                    dir: isRTL ? 'rtl' : 'ltr',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-white/10 flex items-center justify-between bg-black/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg", isFavoritesOpen ? "bg-red-500/10 text-red-500" : "bg-cinematic-neon-blue/10 text-cinematic-neon-blue"),
                                            children: isFavoritesOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-6 h-6 fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 149,
                                                columnNumber: 56
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 149,
                                                columnNumber: 101
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-black italic uppercase tracking-tight",
                                                    children: isFavoritesOpen ? isRTL ? rawText('المفضلة') : rawText('Favorites') : isRTL ? rawText('الإشعارات') : rawText('Notifications')
                                                }, void 0, false, {
                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-white/30 font-bold uppercase tracking-widest",
                                                    children: isFavoritesOpen ? `${favorites.length} ${isRTL ? 'عنصر' : 'items'}` : isRTL ? 'تنبيهاتك الذكية' : 'Smart Alerts'
                                                }, void 0, false, {
                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setFavoritesOpen(false);
                                        setNotificationsOpen(false);
                                    },
                                    className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all",
                                    title: isRTL ? 'إغلاق' : 'Close',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                    lineNumber: 166,
                                    columnNumber: 29
                                }, this),
                                isNotificationsOpen && notifications.some((n)=>!n.read) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: markAllRead,
                                    className: "text-[9px] font-black uppercase tracking-widest text-cinematic-neon-blue hover:text-white transition-colors ml-2",
                                    title: isRTL ? 'تعيين الكل كمقروء' : 'Mark all read',
                                    children: isRTL ? 'تعيين الكل كمقروء' : 'Mark all'
                                }, void 0, false, {
                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                    lineNumber: 174,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                            lineNumber: 143,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 space-y-4",
                            children: isFavoritesOpen ? favorites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center text-center space-y-4 py-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-16 h-16 text-white/5"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 189,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/20 font-bold italic",
                                        children: isRTL ? 'قائمة المفضلة فارغة حالياً' : 'Your wishlist is empty'
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 190,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                lineNumber: 188,
                                columnNumber: 37
                            }, this) : favorites.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative bg-white/3 border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex p-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-24 h-24 rounded-xl overflow-hidden shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.image,
                                                    alt: item.title,
                                                    fill: true,
                                                    className: "object-cover",
                                                    unoptimized: true
                                                }, void 0, false, {
                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 196,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-bold text-white truncate",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeFromFavorites(item.id),
                                                                className: "text-white/20 hover:text-red-500 transition-colors",
                                                                title: isRTL ? 'إزالة' : 'Remove',
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-400 font-black text-sm mt-1",
                                                        children: formatPrice(item.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>addToCart(item),
                                                                className: "flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white/10",
                                                                children: isRTL ? 'السلة' : 'Cart'
                                                            }, void 0, false, {
                                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const msg = `💝 Request: ${item.title}`;
                                                                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
                                                                },
                                                                className: "flex-1 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white",
                                                                children: isRTL ? 'شراء' : 'Buy'
                                                            }, void 0, false, {
                                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 199,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 195,
                                        columnNumber: 45
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                    lineNumber: 194,
                                    columnNumber: 41
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    notifications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-20 text-center space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-16 h-16 text-white/5"
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 237,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/20 font-bold italic",
                                                children: isRTL ? 'لا توجد إشعارات' : 'No notifications'
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                lineNumber: 238,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 236,
                                        columnNumber: 41
                                    }, this),
                                    notifications.map((n)=>{
                                        const TypeIcon = NOTIFICATION_TYPES[n.type]?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"];
                                        const typeColor = NOTIFICATION_TYPES[n.type]?.color || 'from-gray-500 to-slate-600';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-2xl border transition-all relative overflow-hidden", n.read ? "bg-white/2 border-white/5" : "bg-cinematic-neon-blue/5 border-cinematic-neon-blue/20"),
                                            children: [
                                                !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4 w-2 h-2 rounded-full bg-cinematic-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 61
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-lg", typeColor),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                                                className: "w-5 h-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-bold text-white mb-0.5",
                                                                    children: n.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-white/40 line-clamp-2",
                                                                    children: n.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1.5 text-[10px] text-white/20 font-bold",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                                    lineNumber: 263,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                formatNotifTime(n.time)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                            lineNumber: 262,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>markAsRead(n.id),
                                                                                    className: "text-[9px] text-cinematic-neon-blue hover:text-white transition-colors font-black",
                                                                                    children: isRTL ? 'قراءة' : 'Read'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                n.actionUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: n.actionUrl,
                                                                                    className: "text-[9px] text-accent-gold hover:text-white transition-colors font-black",
                                                                                    children: isRTL ? 'فتح' : 'Open'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                                    lineNumber: 273,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>deleteNotification(n.id),
                                                                                    title: isRTL ? 'حذف' : 'Delete',
                                                                                    className: "text-[9px] text-red-400/50 hover:text-red-400 transition-colors",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        className: "w-3 h-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                                        lineNumber: 278,
                                                                                        columnNumber: 69
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                                    lineNumber: 277,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, n.id, true, {
                                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                            lineNumber: 246,
                                            columnNumber: 45
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                lineNumber: 234,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-t border-white/10 bg-black/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setFavoritesOpen(false);
                                    setNotificationsOpen(false);
                                },
                                className: "w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3",
                                children: [
                                    isRTL ? 'إغلاق اللوحة الذكية' : 'Close smart panel',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isRTL && "rotate-180")
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                        lineNumber: 298,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                                lineNumber: 293,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                            lineNumber: 292,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
                    lineNumber: 131,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/client-app/src/components/GlobalDrawers.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
}),
"[project]/client-app/src/components/SmartIslandNotification.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartIslandNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * مكون إشعارات الـ Smart Island
 * يظهر إشعارات عائمة في أعلى الصفحة بتصميم مشابه لـ Dynamic Island في iOS.
 * يتم تفعيله عبر أحداث مخصصة (Custom Events) في المتصفح.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/gavel.js [app-ssr] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function SmartIslandNotification() {
    const { isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        /**
         * معالج الأحداث المخصصة (Custom Event Handler)
         * يستقبل البيانات من أي مكان في التطبيق يقوم بإرسال الحدث 'hm_smart_alert'.
         */ const handleAlert = (e)=>{
            const data = e.detail;
            setAlert(data);
            // يتم إخفاء التنبيه تلقائياً بعد 6 ثوانٍ للرسائل العادية لضمان تجربة مستخدم غير مزعجة
            // أما تنبيهات النظام (كتحديث التطبيق) فتبقى ظاهرة حتى يتخذ العميل قراراً
            if (data.type !== 'system') {
                setTimeout(()=>setAlert(null), 6000);
            }
        };
        // تسجيل المستمع للحدث المخصص 'hm_smart_alert'
        window.addEventListener('hm_smart_alert', handleAlert);
        return ()=>window.removeEventListener('hm_smart_alert', handleAlert);
    }, []);
    if (!alert) return null;
    // تعيين الأيقونات لكل نوع من أنواع التنبيهات
    const Icons = {
        auction: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"],
        car: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        promo: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        info: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        success: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        warning: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        system: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
        message: __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    };
    const Icon = Icons[alert.type] || __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-6 left-0 right-0 z-[200] flex justify-center pointer-events-none px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: alert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: -100,
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    y: -50,
                    opacity: 0,
                    scale: 0.9
                },
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -inset-0.5 bg-linear-to-r from-cinematic-neon-blue via-purple-500 to-accent-gold rounded-full opacity-30 blur-md group-hover:opacity-100 transition duration-1000"
                        }, void 0, false, {
                            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                            lineNumber: 80,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center gap-4 bg-black/80 backdrop-blur-2xl border border-white/20 rounded-full px-2 py-2 pr-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[320px] max-w-[500px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full flex items-center justify-center shadow-lg shrink-0", alert.type === 'auction' ? "bg-accent-red" : alert.type === 'promo' ? "bg-accent-gold" : alert.type === 'success' ? "bg-green-500" : alert.type === 'warning' ? "bg-red-500" : alert.type === 'system' ? "bg-zinc-700" : alert.type === 'message' ? "bg-blue-500" : "bg-cinematic-neon-blue"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                        lineNumber: 94,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                    lineNumber: 84,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[14px] font-black tracking-tight text-white line-clamp-1 italic uppercase",
                                            children: alert.title
                                        }, void 0, false, {
                                            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                            lineNumber: 99,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-white/50 font-bold tracking-wide line-clamp-1 truncate",
                                            children: alert.message
                                        }, void 0, false, {
                                            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                            lineNumber: 102,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                    lineNumber: 98,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: alert.actionLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            alert.onAction?.();
                                            setAlert(null);
                                        },
                                        className: "px-4 py-1.5 bg-white/10 hover:bg-white text-[10px] font-black text-white hover:text-black rounded-full transition-all uppercase tracking-widest flex items-center gap-1.5",
                                        children: [
                                            alert.actionLabel,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3", isRTL && "rotate-180")
                                            }, void 0, false, {
                                                fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                                lineNumber: 115,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                        lineNumber: 110,
                                        columnNumber: 41
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAlert(null),
                                        className: "w-8 h-8 rounded-full flex items-center justify-center text-white/20 hover:text-white transition-colors",
                                        title: isRTL ? 'إغلاق' : 'Close',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                            lineNumber: 123,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                        lineNumber: 118,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                                    lineNumber: 108,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                            lineNumber: 82,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                    lineNumber: 78,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
                lineNumber: 71,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/client-app/src/components/SmartIslandNotification.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
}),
"[project]/client-app/src/components/AppBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function AppBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 bg-[#050505] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.4]",
                style: {
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 80% 40%, rgba(201, 169, 110, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 40% 80%, rgba(255, 59, 48, 0.02) 0%, transparent 40%)
                    `
                }
            }, void 0, false, {
                fileName: "[project]/client-app/src/components/AppBackground.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
            }, void 0, false, {
                fileName: "[project]/client-app/src/components/AppBackground.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial-at-t from-transparent via-black/20 to-black/95"
            }, void 0, false, {
                fileName: "[project]/client-app/src/components/AppBackground.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client-app/src/components/AppBackground.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/client-app/src/components/AppShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * غلاف التطبيق (AppShell)
 * يتحكم في مظهر التطبيق بناءً على ما إذا كان يعمل كموقع ويب عادي أو كتطبيق مثبت (PWA).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$useStandalone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/useStandalone.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SocketContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/SocketContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$BottomTabBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/BottomTabBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$GlobalDrawers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/GlobalDrawers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$SmartIslandNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/SmartIslandNotification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$AppBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/components/AppBackground.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function AppShell({ children }) {
    const isStandalone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$useStandalone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStandalone"])(); // التحقق من وضع التشغيل (مستقل PWA أو متصفح)
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])(); // المسار الحالي
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // حالة التحميل الأولية (لحل مشاكل Hydration)
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // المستخدم الحالي للتوثيق
    const { socket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$SocketContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocket"])(); // الاتصال المباشر لإرسال النبضات
    // ── نظام تتبع التواجد المباشر (Online Status) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || !socket) return;
        const uid = user.id || user._id;
        // إرسال نبضة بمجرد التحميل
        socket.emit('user_active', uid);
        // إرسال نبضة كل دقيقة للحفاظ على حالة المتصل
        const interval = setInterval(()=>{
            socket.emit('user_active', uid);
        }, 60000);
        return ()=>clearInterval(interval);
    }, [
        user,
        socket
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        // تنظيف حالة التثبيت المخزنة إذا لم يكن التطبيق مثبتاً فعلياً
        // هذا يحل مشكلة "التطبيق مثبت بالفعل" عند حذف التطبيق وإعادة الزيارة
        if (mounted) {
            const INSTALLED_KEY = 'pwa_installed';
            const actuallyInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
            if (!actuallyInstalled) {
                // ليس في وضع standalone = التطبيق محذوف أو غير مثبت
                // نحذف الـ flag القديم حتى يظهر زر التثبيت مرة أخرى
                const wasMarkedInstalled = localStorage.getItem(INSTALLED_KEY);
                if (wasMarkedInstalled) {
                    localStorage.removeItem(INSTALLED_KEY);
                    localStorage.removeItem('pwa_dismissed_until');
                }
            }
        }
    }, [
        mounted
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    if (isStandalone && !pathname?.startsWith('/admin')) {
        // ── وضع التطبيق المثبت ──
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen",
            "data-app-mode": "standalone",
            style: {
                paddingBottom: '80px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$AppBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client-app/src/components/AppShell.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "relative z-10",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/client-app/src/components/AppShell.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$BottomTabBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client-app/src/components/AppShell.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$GlobalDrawers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client-app/src/components/AppShell.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$SmartIslandNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client-app/src/components/AppShell.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/client-app/src/components/AppShell.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, this);
    }
    // ── وضع الموقع العادي (Browser Mode) ──
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$GlobalDrawers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/client-app/src/components/AppShell.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$components$2f$SmartIslandNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/client-app/src/components/AppShell.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            " "
        ]
    }, void 0, true);
}
}),
"[project]/client-app/src/components/SmartPrefetchProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartPrefetchProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/src/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SmartPrefetchProvider({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // [[ARABIC_COMMENT]] لا تفعل شيئاً إذا كان الإنترنت ضعيفاً أو المستخدم في وضع توفير البيانات
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const conn = undefined;
        const handleMouseEnter = undefined;
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# debugId=782a1445-d190-102e-373e-7fa53115d836
//# sourceMappingURL=%5Broot-of-the-server%5D__4e56ac61._.js.map