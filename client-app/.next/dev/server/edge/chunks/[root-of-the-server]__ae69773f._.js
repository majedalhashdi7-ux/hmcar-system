(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__ae69773f._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/client-app/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client-app/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
/**
 * middleware.ts - نظام حماية المسارات لـ HM CAR
 * يعمل كـ Edge Middleware قبل تحميل أي صفحة
 */ // المسارات المحمية التي تتطلب تسجيل دخول (للعملاء)
const PROTECTED_CLIENT_ROUTES = [
    '/client',
    '/profile',
    '/orders',
    '/favorites',
    '/messages',
    '/notifications',
    '/comparisons'
];
// المسارات المحمية للمدراء
const PROTECTED_ADMIN_ROUTES = [
    '/admin'
];
// مسارات التوثيق (تسجيل الدخول / إنشاء حساب)
const AUTH_ROUTES = [
    '/login',
    '/register'
];
function middleware(request) {
    const { pathname } = request.nextUrl;
    // قراءة التوكن (Token) من ملفات تعريف الارتباط للتحقق من الجلسة
    const token = request.cookies.get('hm_token')?.value;
    const isAuthenticated = !!token; // هل المستخدم موثق؟
    // ── 1. حماية مسارات الإدارة (Admin Protection) ──
    if (PROTECTED_ADMIN_ROUTES.some((r)=>pathname.startsWith(r))) {
        if (!isAuthenticated) {
            // إذا لم يكن مسجلاً، يتم تحويله لصفحة الدخول مع حفظ المسار المطلوب
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            loginUrl.searchParams.set('role', 'admin');
            return __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
        }
    }
    // ── 2. حماية مسارات العميل ──
    if (PROTECTED_CLIENT_ROUTES.some((r)=>pathname.startsWith(r))) {
        if (!isAuthenticated) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
        }
    }
    // ── 3. منع الدخول لصفحات التوثيق إذا كان المستخدم مسجلاً بالفعل ──
    //    يتم تحويله لصفحة التحكم الخاصة به (Admin Dashboard أو Client Dashboard)
    const isAuthRoute = AUTH_ROUTES.some((r)=>pathname === r);
    if (isAuthRoute && isAuthenticated) {
        const userRole = request.cookies.get('hm_user_role')?.value;
        if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'manager') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/dashboard', request.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/client/dashboard', request.url));
    }
    // إضافة Headers أمنية لكل الاستجابات
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$client$2d$app$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
}
const config = {
    matcher: [
        '/admin/:path*',
        '/client/:path*',
        '/profile/:path*',
        '/orders/:path*',
        '/favorites/:path*',
        '/messages/:path*',
        '/notifications/:path*',
        '/comparisons/:path*',
        '/login',
        '/register'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ae69773f._.js.map