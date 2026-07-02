(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://ukyamyojzvdgxhqsyewd.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_qdC_j8mxUzL-oS7VcSudrQ_0j18Fo-U"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Sidebar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Sidebar-module__WZVnLW__active",
  "avatarImage": "Sidebar-module__WZVnLW__avatarImage",
  "avatarPlaceholder": "Sidebar-module__WZVnLW__avatarPlaceholder",
  "collapseBtn": "Sidebar-module__WZVnLW__collapseBtn",
  "collapsed": "Sidebar-module__WZVnLW__collapsed",
  "footer": "Sidebar-module__WZVnLW__footer",
  "header": "Sidebar-module__WZVnLW__header",
  "logo": "Sidebar-module__WZVnLW__logo",
  "logoText": "Sidebar-module__WZVnLW__logoText",
  "nav": "Sidebar-module__WZVnLW__nav",
  "navIcon": "Sidebar-module__WZVnLW__navIcon",
  "navItem": "Sidebar-module__WZVnLW__navItem",
  "navLabel": "Sidebar-module__WZVnLW__navLabel",
  "sidebar": "Sidebar-module__WZVnLW__sidebar",
  "signOutBtn": "Sidebar-module__WZVnLW__signOutBtn",
});
}),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Sidebar({ onSignOut, userProfile }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "14",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "14",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            exact: true
        },
        {
            href: '/dashboard/import',
            label: 'Import',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "17 8 12 3 7 8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        },
        {
            href: '/dashboard/transactions',
            label: 'Transactions',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 6h18M3 12h18M3 18h18",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        },
        {
            href: '/dashboard/settings',
            label: 'Settings',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }
    ];
    const resolvedName = userProfile?.displayName?.trim() || userProfile?.fallbackName?.trim() || null;
    const friendlyName = resolvedName?.split(' ')[0] ?? resolvedName;
    const greeting = friendlyName ? `Hello, ${friendlyName}` : 'Hello';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${collapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collapsed : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            userProfile?.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: userProfile.avatarUrl,
                                alt: resolvedName ? `${resolvedName}'s avatar` : 'Profile avatar',
                                width: 36,
                                height: 36,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarImage
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarPlaceholder,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sidebar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "7",
                                            r: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sidebar.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
                                children: greeting
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collapseBtn,
                        "aria-label": collapsed ? 'Expand sidebar' : 'Collapse sidebar',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 18l6-6-6-6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 18l-6-6 6-6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                children: navItems.map((item)=>{
                    const isActive = item.exact ? pathname === item.href : pathname === item.href || pathname?.startsWith(item.href + '/');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        title: collapsed ? item.label : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 132,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSignOut,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signOutBtn,
                    title: collapsed ? 'Sign Out' : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "08JhlLD2LM6Uel+hWLLKL/dSZrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImportButton.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountSelector": "ImportButton-module__fWMvIq__accountSelector",
  "browseButton": "ImportButton-module__fWMvIq__browseButton",
  "closeButton": "ImportButton-module__fWMvIq__closeButton",
  "container": "ImportButton-module__fWMvIq__container",
  "dragging": "ImportButton-module__fWMvIq__dragging",
  "dropText": "ImportButton-module__fWMvIq__dropText",
  "dropZone": "ImportButton-module__fWMvIq__dropZone",
  "error": "ImportButton-module__fWMvIq__error",
  "errorDetails": "ImportButton-module__fWMvIq__errorDetails",
  "fileCount": "ImportButton-module__fWMvIq__fileCount",
  "fileError": "ImportButton-module__fWMvIq__fileError",
  "fileErrorMsg": "ImportButton-module__fWMvIq__fileErrorMsg",
  "fileIcon": "ImportButton-module__fWMvIq__fileIcon",
  "fileInput": "ImportButton-module__fWMvIq__fileInput",
  "fileList": "ImportButton-module__fWMvIq__fileList",
  "fileName": "ImportButton-module__fWMvIq__fileName",
  "fileSuccess": "ImportButton-module__fWMvIq__fileSuccess",
  "icon": "ImportButton-module__fWMvIq__icon",
  "idleState": "ImportButton-module__fWMvIq__idleState",
  "label": "ImportButton-module__fWMvIq__label",
  "orText": "ImportButton-module__fWMvIq__orText",
  "partial": "ImportButton-module__fWMvIq__partial",
  "progressText": "ImportButton-module__fWMvIq__progressText",
  "result": "ImportButton-module__fWMvIq__result",
  "resultHeader": "ImportButton-module__fWMvIq__resultHeader",
  "resultIcon": "ImportButton-module__fWMvIq__resultIcon",
  "resultMessage": "ImportButton-module__fWMvIq__resultMessage",
  "resultTitle": "ImportButton-module__fWMvIq__resultTitle",
  "select": "ImportButton-module__fWMvIq__select",
  "slideIn": "ImportButton-module__fWMvIq__slideIn",
  "spin": "ImportButton-module__fWMvIq__spin",
  "spinner": "ImportButton-module__fWMvIq__spinner",
  "success": "ImportButton-module__fWMvIq__success",
  "supportedText": "ImportButton-module__fWMvIq__supportedText",
  "uploading": "ImportButton-module__fWMvIq__uploading",
  "uploadingState": "ImportButton-module__fWMvIq__uploadingState",
});
}),
"[project]/src/components/ImportButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ImportButton.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ImportButton({ bankAccounts, onImportComplete }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAccount, setSelectedAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImportButton.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["ImportButton.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImportButton.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
        }
    }["ImportButton.useCallback[handleDragLeave]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImportButton.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFiles(Array.from(files));
            }
        }
    }["ImportButton.useCallback[handleDrop]"], [
        selectedAccount
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImportButton.useCallback[handleFileSelect]": (e)=>{
            const files = e.target.files;
            if (files && files.length > 0) {
                handleFiles(Array.from(files));
            }
        }
    }["ImportButton.useCallback[handleFileSelect]"], [
        selectedAccount
    ]);
    const handleFiles = async (files)=>{
        // Check if account is selected
        if (!selectedAccount) {
            setResult({
                results: [
                    {
                        success: false,
                        error: 'Please select a bank account first'
                    }
                ],
                totalTransactions: 0,
                successCount: 0,
                failCount: 1
            });
            return;
        }
        // Validate file types
        const validTypes = [
            '.csv',
            '.pdf'
        ];
        const validFiles = [];
        const invalidFiles = [];
        for (const file of files){
            const extension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
            if (validTypes.includes(extension)) {
                validFiles.push(file);
            } else {
                invalidFiles.push(file.name);
            }
        }
        if (validFiles.length === 0) {
            setResult({
                results: [
                    {
                        success: false,
                        error: `Invalid file type(s): ${invalidFiles.join(', ')}. Please upload CSV or PDF files.`
                    }
                ],
                totalTransactions: 0,
                successCount: 0,
                failCount: 1
            });
            return;
        }
        setIsUploading(true);
        setResult(null);
        setUploadProgress({
            current: 0,
            total: validFiles.length
        });
        const results = [];
        let totalTransactions = 0;
        let successCount = 0;
        // Process files sequentially to avoid overwhelming the server
        for(let i = 0; i < validFiles.length; i++){
            const file = validFiles[i];
            setUploadProgress({
                current: i + 1,
                total: validFiles.length
            });
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('bank_account_id', selectedAccount);
                const response = await fetch('/api/import', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (response.ok) {
                    results.push({
                        success: true,
                        fileName: file.name,
                        import_id: data.import_id,
                        transactions_imported: data.transactions_imported,
                        parse_errors: data.parse_errors
                    });
                    totalTransactions += data.transactions_imported || 0;
                    successCount++;
                } else {
                    results.push({
                        success: false,
                        fileName: file.name,
                        error: data.error || 'Import failed',
                        parse_errors: data.parseErrors
                    });
                }
            } catch (error) {
                results.push({
                    success: false,
                    fileName: file.name,
                    error: 'Network error. Please try again.'
                });
            }
        }
        // Add invalid files to results
        for (const fileName of invalidFiles){
            results.push({
                success: false,
                fileName,
                error: 'Invalid file type. Only CSV and PDF files are supported.'
            });
        }
        setResult({
            results,
            totalTransactions,
            successCount,
            failCount: results.length - successCount
        });
        if (successCount > 0) {
            onImportComplete?.();
        }
        setIsUploading(false);
        setUploadProgress(null);
        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleClick = ()=>{
        fileInputRef.current?.click();
    };
    const clearResult = ()=>{
        setResult(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountSelector,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "account-select",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Import to:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "account-select",
                        value: selectedAccount,
                        onChange: (e)=>setSelectedAccount(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        disabled: isUploading,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select a bank account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: account.id,
                                    children: [
                                        account.name,
                                        " (",
                                        account.type,
                                        ")"
                                    ]
                                }, account.id, true, {
                                    fileName: "[project]/src/components/ImportButton.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropZone} ${isDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragging : ''} ${isUploading ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploading : ''}`,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                onClick: !isUploading ? handleClick : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: ".csv,.pdf",
                        multiple: true,
                        onChange: handleFileSelect,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput,
                        disabled: isUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadingState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Importing transactions..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            uploadProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressText,
                                children: [
                                    "File ",
                                    uploadProgress.current,
                                    " of ",
                                    uploadProgress.total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].idleState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ImportButton.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropText,
                                children: "Drag & drop your statements here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orText,
                                children: "or"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browseButton,
                                children: "Browse Files"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].supportedText,
                                children: "Supports multiple CSV and PDF files"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].result} ${result.failCount === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success : result.successCount === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partial}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultIcon,
                                children: result.failCount === 0 ? '✓' : result.successCount === 0 ? '!' : '~'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultTitle,
                                children: result.failCount === 0 ? 'Import Successful' : result.successCount === 0 ? 'Import Failed' : 'Partial Import'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearResult,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    result.successCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultMessage,
                        children: [
                            result.totalTransactions,
                            " transactions imported from ",
                            result.successCount,
                            " file",
                            result.successCount > 1 ? 's' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this),
                    result.failCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultMessage,
                        children: [
                            result.failCount,
                            " file",
                            result.failCount > 1 ? 's' : '',
                            " failed to import"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, this),
                    result.results.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "File details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 306,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileList,
                                children: result.results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: r.success ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileSuccess : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileError,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIcon,
                                                children: r.success ? '✓' : '✗'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 310,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileName,
                                                children: r.fileName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, this),
                                            r.success && r.transactions_imported !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileCount,
                                                children: [
                                                    "(",
                                                    r.transactions_imported,
                                                    " transactions)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 313,
                                                columnNumber: 23
                                            }, this),
                                            r.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileErrorMsg,
                                                children: r.error
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 315,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ImportButton.tsx",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, this),
                    result.results.some((r)=>r.parse_errors && r.parse_errors.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Parsing warnings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: result.results.flatMap((r, i)=>(r.parse_errors || []).slice(0, 5).map((err, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                r.fileName,
                                                ": ",
                                                err
                                            ]
                                        }, `${i}-${j}`, true, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, this))).slice(0, 10)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImportButton.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(ImportButton, "hAW5vw3LGfaDkeB1HzBE7Oidpis=");
_c = ImportButton;
var _c;
__turbopack_context__.k.register(_c, "ImportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/import/import.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountItem": "import-module__Nnduoq__accountItem",
  "accountList": "import-module__Nnduoq__accountList",
  "accountName": "import-module__Nnduoq__accountName",
  "accountType": "import-module__Nnduoq__accountType",
  "addButton": "import-module__Nnduoq__addButton",
  "addForm": "import-module__Nnduoq__addForm",
  "card": "import-module__Nnduoq__card",
  "cardHeader": "import-module__Nnduoq__cardHeader",
  "cardTitle": "import-module__Nnduoq__cardTitle",
  "content": "import-module__Nnduoq__content",
  "empty": "import-module__Nnduoq__empty",
  "importDate": "import-module__Nnduoq__importDate",
  "importFilename": "import-module__Nnduoq__importFilename",
  "importInfo": "import-module__Nnduoq__importInfo",
  "importItem": "import-module__Nnduoq__importItem",
  "importList": "import-module__Nnduoq__importList",
  "importMeta": "import-module__Nnduoq__importMeta",
  "importSection": "import-module__Nnduoq__importSection",
  "input": "import-module__Nnduoq__input",
  "layout": "import-module__Nnduoq__layout",
  "loading": "import-module__Nnduoq__loading",
  "main": "import-module__Nnduoq__main",
  "noAccounts": "import-module__Nnduoq__noAccounts",
  "page": "import-module__Nnduoq__page",
  "pageHeader": "import-module__Nnduoq__pageHeader",
  "select": "import-module__Nnduoq__select",
  "sidebar": "import-module__Nnduoq__sidebar",
  "submitButton": "import-module__Nnduoq__submitButton",
  "subtitle": "import-module__Nnduoq__subtitle",
  "title": "import-module__Nnduoq__title",
});
}),
"[project]/src/app/dashboard/import/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImportButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/import/import.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const DEFAULT_PROFILE = {
    displayName: null,
    avatarUrl: null,
    fallbackName: null
};
function getStoredProfile() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = window.localStorage.getItem('gneisscash.userProfile');
        if (!stored) return DEFAULT_PROFILE;
        const parsed = JSON.parse(stored);
        return {
            ...DEFAULT_PROFILE,
            ...parsed
        };
    } catch  {
        return DEFAULT_PROFILE;
    }
}
function ImportPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getStoredProfile);
    const [bankAccounts, setBankAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imports, setImports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showAddAccount, setShowAddAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAccountName, setNewAccountName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAccountType, setNewAccountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [addingAccount, setAddingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    async function loadUserProfile() {
        try {
            const response = await fetch('/api/user-settings');
            if (!response.ok) return;
            const data = await response.json();
            if (data.settings) {
                setUserProfile((prev)=>({
                        displayName: data.settings.display_name ?? prev.displayName,
                        avatarUrl: data.settings.avatar_url ?? prev.avatarUrl,
                        fallbackName: prev.fallbackName
                    }));
            }
        } catch (error) {
            console.error('Failed to load user profile settings:', error);
        }
    }
    async function loadBankAccounts() {
        const { data, error } = await supabase.from('bank_accounts').select('id, name, type').order('created_at', {
            ascending: false
        });
        if (!error && data) {
            setBankAccounts(data);
        }
    }
    async function loadImports() {
        const { data, error } = await supabase.from('imports').select(`
        id,
        filename,
        import_type,
        transaction_count,
        created_at,
        bank_accounts (
          id,
          name
        )
      `).order('created_at', {
            ascending: false
        }).limit(20);
        if (!error && data) {
            setImports(data);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImportPage.useEffect": ()=>{
            async function checkAuthAndLoad() {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                    router.push('/login');
                    return;
                }
                const emailName = user.email ? user.email.split('@')[0] : null;
                setUserProfile({
                    "ImportPage.useEffect.checkAuthAndLoad": (prev)=>({
                            ...prev,
                            fallbackName: prev.fallbackName ?? user.user_metadata?.full_name ?? emailName ?? prev.fallbackName
                        })
                }["ImportPage.useEffect.checkAuthAndLoad"]);
                await Promise.all([
                    loadBankAccounts(),
                    loadImports(),
                    loadUserProfile()
                ]);
                setLoading(false);
            }
            checkAuthAndLoad();
        }
    }["ImportPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImportPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem('gneisscash.userProfile', JSON.stringify(userProfile));
            }
        }
    }["ImportPage.useEffect"], [
        userProfile
    ]);
    async function handleAddAccount(e) {
        e.preventDefault();
        if (!newAccountName.trim()) return;
        setAddingAccount(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setAddingAccount(false);
            return;
        }
        const { error } = await supabase.from('bank_accounts').insert({
            user_id: user.id,
            name: newAccountName.trim(),
            type: newAccountType
        });
        if (!error) {
            setNewAccountName('');
            setShowAddAccount(false);
            await loadBankAccounts();
        }
        setAddingAccount(false);
    }
    async function handleSignOut() {
        await supabase.auth.signOut();
        router.push('/');
    }
    function handleImportComplete() {
        loadImports();
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSignOut: handleSignOut,
                    userProfile: userProfile
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/import/page.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/import/page.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSignOut: handleSignOut,
                userProfile: userProfile
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/import/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Import Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Upload your bank statements to import transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importSection,
                                    children: bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noAccounts,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Add a Bank Account First"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "You need at least one bank account to import transactions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/import/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        bankAccounts: bankAccounts,
                                        onImportComplete: handleImportComplete
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/import/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                            children: "Bank Accounts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowAddAccount(!showAddAccount),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                                            children: showAddAccount ? 'Cancel' : '+ Add'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                showAddAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleAddAccount,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addForm,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Account name",
                                                            value: newAccountName,
                                                            onChange: (e)=>setNewAccountName(e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                            disabled: addingAccount
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: newAccountType,
                                                            onChange: (e)=>setNewAccountType(e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                                            disabled: addingAccount,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "checking",
                                                                    children: "Checking"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "savings",
                                                                    children: "Savings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "credit",
                                                                    children: "Credit Card"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                            disabled: addingAccount || !newAccountName.trim(),
                                                            children: addingAccount ? 'Adding...' : 'Add Account'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                                    children: "No accounts yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountList,
                                                    children: bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountName,
                                                                    children: account.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountType,
                                                                    children: account.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, account.id, true, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                    children: "Import History"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                imports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                                    children: "No imports yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importList,
                                                    children: imports.map((imp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importInfo,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importFilename,
                                                                            children: imp.filename
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                            lineNumber: 284,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importMeta,
                                                                            children: [
                                                                                imp.transaction_count,
                                                                                " transactions",
                                                                                imp.bank_accounts && ` • ${imp.bank_accounts.name}`
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                            lineNumber: 285,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$import$2f$import$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importDate,
                                                                    children: new Date(imp.created_at).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, imp.id, true, {
                                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/import/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/import/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/import/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/import/page.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(ImportPage, "DQMKcxUn1mjuZuhOAMDq2LbaJ60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ImportPage;
var _c;
__turbopack_context__.k.register(_c, "ImportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5f4f0517._.js.map