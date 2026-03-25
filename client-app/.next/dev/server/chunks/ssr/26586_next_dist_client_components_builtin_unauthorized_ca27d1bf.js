;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="02cdc66a-2e9f-4cea-458f-25e943e9a4a6")}catch(e){}}();
module.exports = [
"[project]/client-app/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Unauthorized;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/client-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _errorfallback = __turbopack_context__.r("[project]/client-app/node_modules/next/dist/client/components/http-access-fallback/error-fallback.js [app-rsc] (ecmascript)");
function Unauthorized() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorfallback.HTTPAccessErrorFallback, {
        status: 401,
        message: "You're not authorized to access this page."
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
];

//# debugId=02cdc66a-2e9f-4cea-458f-25e943e9a4a6
//# sourceMappingURL=26586_next_dist_client_components_builtin_unauthorized_ca27d1bf.js.map