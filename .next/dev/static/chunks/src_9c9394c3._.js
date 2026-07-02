(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/lib/calculations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateGrade",
    ()=>calculateGrade,
    "calculateWeeklyAllowance",
    ()=>calculateWeeklyAllowance,
    "formatCurrency",
    ()=>formatCurrency,
    "getDailyAllowance",
    ()=>getDailyAllowance,
    "getPulseStatus",
    ()=>getPulseStatus,
    "getRemainingAllowance",
    ()=>getRemainingAllowance,
    "getWeekBounds",
    ()=>getWeekBounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDay.js [app-client] (ecmascript)");
;
function calculateWeeklyAllowance(input) {
    const { monthlyIncome, goalAmount, deadline, currentSaved } = input;
    const now = new Date();
    const weeksUntilDeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInWeeks"])(deadline, now);
    // If deadline has passed or is now, return 0 (no allowance)
    if (weeksUntilDeadline <= 0) {
        return 0;
    }
    const remainingToSave = Math.max(0, goalAmount - currentSaved);
    const requiredWeeklySavings = remainingToSave / weeksUntilDeadline;
    // Convert monthly income to weekly (4.33 weeks per month)
    const weeklyIncome = monthlyIncome / 4.33;
    // Weekly allowance = weekly income - required weekly savings
    const allowance = weeklyIncome - requiredWeeklySavings;
    // Don't return negative allowance
    return Math.max(0, Math.round(allowance * 100) / 100);
}
function getWeekBounds(date = new Date()) {
    // week starts on Monday (1)
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        weekStartsOn: 1
    });
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(date, {
        weekStartsOn: 1
    });
    return {
        start,
        end
    };
}
function calculateGrade(spent, allowance) {
    // Handle edge case where allowance is 0
    if (allowance <= 0) {
        if (spent === 0) {
            return {
                grade: 'A',
                percentage: 0,
                message: 'No spending, no allowance',
                color: '#22c55e'
            };
        }
        return {
            grade: 'F',
            percentage: 100,
            message: 'Over budget with no allowance',
            color: '#ef4444'
        };
    }
    const percentage = spent / allowance * 100;
    if (percentage <= 80) {
        return {
            grade: 'A',
            percentage,
            message: 'Excellent! Well under budget',
            color: '#22c55e' // green
        };
    } else if (percentage <= 100) {
        return {
            grade: 'B',
            percentage,
            message: 'Good job staying within budget',
            color: '#84cc16' // lime
        };
    } else if (percentage <= 120) {
        return {
            grade: 'C',
            percentage,
            message: 'Slightly over budget',
            color: '#eab308' // yellow
        };
    } else if (percentage <= 150) {
        return {
            grade: 'D',
            percentage,
            message: 'Significantly over budget',
            color: '#f97316' // orange
        };
    } else {
        return {
            grade: 'F',
            percentage,
            message: 'Way over budget',
            color: '#ef4444' // red
        };
    }
}
function getPulseStatus(spent, allowance, date = new Date()) {
    // Handle edge case
    if (allowance <= 0) {
        if (spent === 0) {
            return {
                emoji: '✓',
                message: 'No spending today',
                color: '#22c55e',
                status: 'on_track'
            };
        }
        return {
            emoji: '🚨',
            message: 'Over budget!',
            color: '#ef4444',
            status: 'over'
        };
    }
    // Get day of week (0 = Sunday, 1 = Monday, etc.)
    // Convert to days into the week (Monday = 1, Sunday = 7)
    const dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDay"])(date);
    const daysIntoWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    // Expected spending at this point (proportional to days elapsed)
    const expectedPercentage = daysIntoWeek / 7 * 100;
    const actualPercentage = spent / allowance * 100;
    // How far ahead or behind are we?
    const diff = actualPercentage - expectedPercentage;
    if (actualPercentage > 100) {
        // Already over budget for the week
        return {
            emoji: '🚨',
            message: 'Over budget for the week!',
            color: '#ef4444',
            status: 'over'
        };
    } else if (diff > 20) {
        // Spending too fast (more than 20% ahead of pace)
        return {
            emoji: '⚠️',
            message: 'Ahead of pace - slow down!',
            color: '#f97316',
            status: 'ahead'
        };
    } else if (diff > 10) {
        // Slightly ahead
        return {
            emoji: '📈',
            message: 'Slightly ahead of pace',
            color: '#eab308',
            status: 'ahead'
        };
    } else if (diff >= -10) {
        // On track (within 10% either way)
        return {
            emoji: '✅',
            message: 'On track!',
            color: '#22c55e',
            status: 'on_track'
        };
    } else {
        // Under budget (more than 10% behind pace)
        return {
            emoji: '💰',
            message: 'Under budget - great job!',
            color: '#22c55e',
            status: 'under'
        };
    }
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}
function getRemainingAllowance(spent, allowance) {
    return Math.max(0, allowance - spent);
}
function getDailyAllowance(weeklyAllowance) {
    return Math.round(weeklyAllowance / 7 * 100) / 100;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/dashboard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountInfo": "dashboard-module__XABe8G__accountInfo",
  "accountItem": "dashboard-module__XABe8G__accountItem",
  "accountList": "dashboard-module__XABe8G__accountList",
  "accountName": "dashboard-module__XABe8G__accountName",
  "accountType": "dashboard-module__XABe8G__accountType",
  "addAccountForm": "dashboard-module__XABe8G__addAccountForm",
  "addButton": "dashboard-module__XABe8G__addButton",
  "chartCard": "dashboard-module__XABe8G__chartCard",
  "chartContainer": "dashboard-module__XABe8G__chartContainer",
  "chartControls": "dashboard-module__XABe8G__chartControls",
  "chartError": "dashboard-module__XABe8G__chartError",
  "chartErrorButton": "dashboard-module__XABe8G__chartErrorButton",
  "chartHeader": "dashboard-module__XABe8G__chartHeader",
  "chartMessage": "dashboard-module__XABe8G__chartMessage",
  "chartRange": "dashboard-module__XABe8G__chartRange",
  "chartSection": "dashboard-module__XABe8G__chartSection",
  "chartSummary": "dashboard-module__XABe8G__chartSummary",
  "chartTitle": "dashboard-module__XABe8G__chartTitle",
  "content": "dashboard-module__XABe8G__content",
  "deficitIndicator": "dashboard-module__XABe8G__deficitIndicator",
  "emptyState": "dashboard-module__XABe8G__emptyState",
  "emptyStateCompact": "dashboard-module__XABe8G__emptyStateCompact",
  "footer": "dashboard-module__XABe8G__footer",
  "gradeCard": "dashboard-module__XABe8G__gradeCard",
  "gradeCircle": "dashboard-module__XABe8G__gradeCircle",
  "gradeInfo": "dashboard-module__XABe8G__gradeInfo",
  "gradeLabel": "dashboard-module__XABe8G__gradeLabel",
  "gradeLetter": "dashboard-module__XABe8G__gradeLetter",
  "gradeMessage": "dashboard-module__XABe8G__gradeMessage",
  "grid": "dashboard-module__XABe8G__grid",
  "heart": "dashboard-module__XABe8G__heart",
  "importDate": "dashboard-module__XABe8G__importDate",
  "importFilename": "dashboard-module__XABe8G__importFilename",
  "importInfo": "dashboard-module__XABe8G__importInfo",
  "importItem": "dashboard-module__XABe8G__importItem",
  "importList": "dashboard-module__XABe8G__importList",
  "importMeta": "dashboard-module__XABe8G__importMeta",
  "input": "dashboard-module__XABe8G__input",
  "layout": "dashboard-module__XABe8G__layout",
  "leftColumn": "dashboard-module__XABe8G__leftColumn",
  "legendDot": "dashboard-module__XABe8G__legendDot",
  "legendDotRow": "dashboard-module__XABe8G__legendDotRow",
  "legendItem": "dashboard-module__XABe8G__legendItem",
  "legendLabel": "dashboard-module__XABe8G__legendLabel",
  "legendList": "dashboard-module__XABe8G__legendList",
  "legendMeta": "dashboard-module__XABe8G__legendMeta",
  "legendPercent": "dashboard-module__XABe8G__legendPercent",
  "legendValue": "dashboard-module__XABe8G__legendValue",
  "loading": "dashboard-module__XABe8G__loading",
  "main": "dashboard-module__XABe8G__main",
  "metricCard": "dashboard-module__XABe8G__metricCard",
  "metricChange": "dashboard-module__XABe8G__metricChange",
  "metricChangeNegative": "dashboard-module__XABe8G__metricChangeNegative",
  "metricChangePositive": "dashboard-module__XABe8G__metricChangePositive",
  "metricLabel": "dashboard-module__XABe8G__metricLabel",
  "metricValue": "dashboard-module__XABe8G__metricValue",
  "mixCard": "dashboard-module__XABe8G__mixCard",
  "mixChart": "dashboard-module__XABe8G__mixChart",
  "mixContent": "dashboard-module__XABe8G__mixContent",
  "mixLegend": "dashboard-module__XABe8G__mixLegend",
  "mixTopAmount": "dashboard-module__XABe8G__mixTopAmount",
  "mixTopCategories": "dashboard-module__XABe8G__mixTopCategories",
  "mixTopItem": "dashboard-module__XABe8G__mixTopItem",
  "mixTopList": "dashboard-module__XABe8G__mixTopList",
  "mixTopPercent": "dashboard-module__XABe8G__mixTopPercent",
  "mixTopTitle": "dashboard-module__XABe8G__mixTopTitle",
  "page": "dashboard-module__XABe8G__page",
  "pageHeader": "dashboard-module__XABe8G__pageHeader",
  "pulseCard": "dashboard-module__XABe8G__pulseCard",
  "pulseEmoji": "dashboard-module__XABe8G__pulseEmoji",
  "pulseInfo": "dashboard-module__XABe8G__pulseInfo",
  "pulseLabel": "dashboard-module__XABe8G__pulseLabel",
  "pulseMessage": "dashboard-module__XABe8G__pulseMessage",
  "quickStat": "dashboard-module__XABe8G__quickStat",
  "quickStatLabel": "dashboard-module__XABe8G__quickStatLabel",
  "quickStatValue": "dashboard-module__XABe8G__quickStatValue",
  "quickStatsCard": "dashboard-module__XABe8G__quickStatsCard",
  "rangeButton": "dashboard-module__XABe8G__rangeButton",
  "rangeButtonActive": "dashboard-module__XABe8G__rangeButtonActive",
  "rangeToggle": "dashboard-module__XABe8G__rangeToggle",
  "rightColumn": "dashboard-module__XABe8G__rightColumn",
  "section": "dashboard-module__XABe8G__section",
  "sectionHeader": "dashboard-module__XABe8G__sectionHeader",
  "sectionTitle": "dashboard-module__XABe8G__sectionTitle",
  "select": "dashboard-module__XABe8G__select",
  "statsRow": "dashboard-module__XABe8G__statsRow",
  "submitButton": "dashboard-module__XABe8G__submitButton",
  "subtitle": "dashboard-module__XABe8G__subtitle",
  "title": "dashboard-module__XABe8G__title",
  "warningBanner": "dashboard-module__XABe8G__warningBanner",
  "warningIcon": "dashboard-module__XABe8G__warningIcon",
  "warningLink": "dashboard-module__XABe8G__warningLink",
  "warningText": "dashboard-module__XABe8G__warningText",
});
}),
"[project]/src/app/dashboard/transactions/transactions.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountLabel": "transactions-module__08q4fa__accountLabel",
  "amountExpense": "transactions-module__08q4fa__amountExpense",
  "amountIncome": "transactions-module__08q4fa__amountIncome",
  "categoryChip": "transactions-module__08q4fa__categoryChip",
  "categoryLabel": "transactions-module__08q4fa__categoryLabel",
  "checkbox": "transactions-module__08q4fa__checkbox",
  "clearButton": "transactions-module__08q4fa__clearButton",
  "countBadge": "transactions-module__08q4fa__countBadge",
  "dateLabel": "transactions-module__08q4fa__dateLabel",
  "filterActions": "transactions-module__08q4fa__filterActions",
  "filterHeader": "transactions-module__08q4fa__filterHeader",
  "filterList": "transactions-module__08q4fa__filterList",
  "filterOption": "transactions-module__08q4fa__filterOption",
  "filterOptionDisabled": "transactions-module__08q4fa__filterOptionDisabled",
  "filterOptionLeft": "transactions-module__08q4fa__filterOptionLeft",
  "filterSubtitle": "transactions-module__08q4fa__filterSubtitle",
  "filterTitle": "transactions-module__08q4fa__filterTitle",
  "filtersPanel": "transactions-module__08q4fa__filtersPanel",
  "layout": "transactions-module__08q4fa__layout",
  "listCard": "transactions-module__08q4fa__listCard",
  "listError": "transactions-module__08q4fa__listError",
  "listHeader": "transactions-module__08q4fa__listHeader",
  "listHeading": "transactions-module__08q4fa__listHeading",
  "listMessage": "transactions-module__08q4fa__listMessage",
  "listSubtitle": "transactions-module__08q4fa__listSubtitle",
  "listTitle": "transactions-module__08q4fa__listTitle",
  "refreshButton": "transactions-module__08q4fa__refreshButton",
  "retryButton": "transactions-module__08q4fa__retryButton",
  "selectionHint": "transactions-module__08q4fa__selectionHint",
  "txAmount": "transactions-module__08q4fa__txAmount",
  "txDetails": "transactions-module__08q4fa__txDetails",
  "txItem": "transactions-module__08q4fa__txItem",
  "txList": "transactions-module__08q4fa__txList",
  "txMain": "transactions-module__08q4fa__txMain",
  "txMerchant": "transactions-module__08q4fa__txMerchant",
  "txMeta": "transactions-module__08q4fa__txMeta",
});
}),
"[project]/src/app/dashboard/transactions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/dashboard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/transactions/transactions.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
const ALL_KEY = '__all__';
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
function normalizeCategory(raw) {
    if (!raw) {
        return {
            key: 'uncategorized',
            label: 'Uncategorized'
        };
    }
    const cleaned = raw.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleaned) {
        return {
            key: 'uncategorized',
            label: 'Uncategorized'
        };
    }
    const words = cleaned.split(' ').map((word)=>{
        if (word.length === 0) return '';
        if (word === '&') return word;
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return {
        key: cleaned.toLowerCase(),
        label: words.join(' ')
    };
}
function formatDate(dateString) {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(dateString));
}
function TransactionsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [authLoading, setAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getStoredProfile);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingTransactions, setLoadingTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [transactionsError, setTransactionsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        ALL_KEY
    ]));
    const allSelected = selectedCategories.has(ALL_KEY);
    const filtersActive = !allSelected && selectedCategories.size > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem('gneisscash.userProfile', JSON.stringify(userProfile));
            }
        }
    }["TransactionsPage.useEffect"], [
        userProfile
    ]);
    const loadTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransactionsPage.useCallback[loadTransactions]": async ()=>{
            try {
                setLoadingTransactions(true);
                setTransactionsError(null);
                const params = new URLSearchParams();
                params.set('limit', '200');
                params.set('sort', 'desc');
                const response = await fetch(`/api/transactions?${params.toString()}`);
                const payload = await response.json();
                if (!response.ok) {
                    throw new Error(payload.error || 'Failed to load transactions');
                }
                const mapped = payload.transactions?.map({
                    "TransactionsPage.useCallback[loadTransactions]": (tx)=>{
                        const { key, label } = normalizeCategory(tx.category);
                        return {
                            ...tx,
                            categoryKey: key,
                            categoryLabel: label
                        };
                    }
                }["TransactionsPage.useCallback[loadTransactions]"]) ?? [];
                setTransactions(mapped);
            } catch (error) {
                console.error('Failed to load transactions', error);
                setTransactionsError(error instanceof Error ? error.message : 'Failed to load transactions');
            } finally{
                setLoadingTransactions(false);
            }
        }
    }["TransactionsPage.useCallback[loadTransactions]"], []);
    async function loadUserSettings(userId) {
        const { data, error } = await supabase.from('user_settings').select('display_name, avatar_url').eq('user_id', userId).single();
        if (error && error.code !== 'PGRST116') {
            console.error('Failed to load user settings:', error);
            return;
        }
        if (data) {
            setUserProfile((prev)=>({
                    displayName: data.display_name ?? prev.displayName,
                    avatarUrl: data.avatar_url ?? prev.avatarUrl,
                    fallbackName: prev.fallbackName
                }));
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            async function checkAuthAndLoad() {
                try {
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        router.push('/login');
                        return;
                    }
                    const emailName = user.email ? user.email.split('@')[0] : null;
                    setUserProfile({
                        "TransactionsPage.useEffect.checkAuthAndLoad": (prev)=>({
                                ...prev,
                                fallbackName: prev.fallbackName ?? user.user_metadata?.full_name ?? emailName ?? prev.fallbackName
                            })
                    }["TransactionsPage.useEffect.checkAuthAndLoad"]);
                    await Promise.all([
                        loadUserSettings(user.id),
                        loadTransactions()
                    ]);
                } catch (error) {
                    console.error('Failed to initialize transactions page', error);
                } finally{
                    setAuthLoading(false);
                }
            }
            checkAuthAndLoad();
        }
    }["TransactionsPage.useEffect"], [
        loadTransactions,
        router,
        supabase
    ]);
    const categoryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransactionsPage.useMemo[categoryOptions]": ()=>{
            const counts = new Map();
            transactions.forEach({
                "TransactionsPage.useMemo[categoryOptions]": (tx)=>{
                    const existing = counts.get(tx.categoryKey);
                    if (existing) {
                        existing.count += 1;
                    } else {
                        counts.set(tx.categoryKey, {
                            key: tx.categoryKey,
                            label: tx.categoryLabel,
                            count: 1
                        });
                    }
                }
            }["TransactionsPage.useMemo[categoryOptions]"]);
            return Array.from(counts.values()).sort({
                "TransactionsPage.useMemo[categoryOptions]": (a, b)=>{
                    if (b.count === a.count) {
                        return a.label.localeCompare(b.label);
                    }
                    return b.count - a.count;
                }
            }["TransactionsPage.useMemo[categoryOptions]"]);
        }
    }["TransactionsPage.useMemo[categoryOptions]"], [
        transactions
    ]);
    const visibleTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransactionsPage.useMemo[visibleTransactions]": ()=>{
            if (allSelected || selectedCategories.size === 0) {
                return transactions;
            }
            return transactions.filter({
                "TransactionsPage.useMemo[visibleTransactions]": (tx)=>selectedCategories.has(tx.categoryKey)
            }["TransactionsPage.useMemo[visibleTransactions]"]);
        }
    }["TransactionsPage.useMemo[visibleTransactions]"], [
        allSelected,
        selectedCategories,
        transactions
    ]);
    const visibleCount = visibleTransactions.length;
    const totalCount = transactions.length;
    const handleToggleCategory = (categoryKey)=>{
        setSelectedCategories((prev)=>{
            const next = new Set(prev);
            if (categoryKey === ALL_KEY) {
                if (next.has(ALL_KEY)) {
                    next.delete(ALL_KEY);
                } else {
                    return new Set([
                        ALL_KEY
                    ]);
                }
            } else {
                next.delete(ALL_KEY);
                if (next.has(categoryKey)) {
                    next.delete(categoryKey);
                } else {
                    next.add(categoryKey);
                }
            }
            return next;
        });
    };
    const handleSelectAll = ()=>{
        setSelectedCategories(new Set([
            ALL_KEY
        ]));
    };
    const selectionEmpty = !allSelected && selectedCategories.size === 0;
    async function handleSignOut() {
        await supabase.auth.signOut();
        router.push('/');
    }
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSignOut: handleSignOut,
                    userProfile: userProfile
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
            lineNumber: 269,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSignOut: handleSignOut,
                userProfile: userProfile
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Review your recent activity and focus on what matters."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtersPanel,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                                    children: "Filter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSubtitle,
                                                    children: [
                                                        totalCount,
                                                        " total"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterList,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption} ${allSelected ? '' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptionDisabled}`.trim(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptionLeft,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox,
                                                                    checked: allSelected,
                                                                    onChange: ()=>handleToggleCategory(ALL_KEY)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryLabel,
                                                                    children: "All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countBadge,
                                                            children: totalCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                categoryOptions.map((option)=>{
                                                    const checked = selectedCategories.has(option.key);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption} ${allSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptionDisabled : ''}`.trim(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptionLeft,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox,
                                                                        checked: checked,
                                                                        disabled: allSelected,
                                                                        onChange: ()=>handleToggleCategory(option.key)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryLabel,
                                                                        children: option.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countBadge,
                                                                children: option.count
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, option.key, true, {
                                                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterActions,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clearButton,
                                                onClick: handleSelectAll,
                                                children: "Reset filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        selectionEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionHint,
                                            children: "Select at least one category to see matching transactions."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listHeading,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listTitle,
                                                            children: "Transaction history"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listSubtitle,
                                                            children: filtersActive ? `Showing ${visibleCount} of ${totalCount}` : `Showing latest ${visibleCount}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].refreshButton,
                                                    onClick: loadTransactions,
                                                    children: "Refresh"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        loadingTransactions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listMessage,
                                            children: "Loading transactions…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this) : transactionsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listError,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: transactionsError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retryButton,
                                                    onClick: loadTransactions,
                                                    children: "Try again"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this) : visibleTransactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listMessage,
                                            children: selectionEmpty ? 'Choose one or more categories to display matching transactions.' : 'No transactions found for the selected filters.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txList,
                                            children: visibleTransactions.map((tx)=>{
                                                const displayName = tx.merchant_name || tx.name || 'Unnamed transaction';
                                                const displayAmount = tx.amount >= 0 ? `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(tx.amount)}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(tx.amount);
                                                const amountClass = tx.amount >= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amountIncome : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amountExpense;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txMain,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txMeta,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txMerchant,
                                                                        children: displayName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txDetails,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryChip,
                                                                                children: tx.categoryLabel
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            tx.bank_accounts?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                                                                children: tx.bank_accounts.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateLabel,
                                                                                children: formatDate(tx.date)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$transactions$2f$transactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].txAmount} ${amountClass}`,
                                                            children: displayAmount
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, tx.id, true, {
                                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transactions/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/transactions/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s(TransactionsPage, "eNGVtukfQ88oHCY9C2qQJj6JXYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TransactionsPage;
var _c;
__turbopack_context__.k.register(_c, "TransactionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9c9394c3._.js.map