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
  "fileInput": "ImportButton-module__fWMvIq__fileInput",
  "icon": "ImportButton-module__fWMvIq__icon",
  "idleState": "ImportButton-module__fWMvIq__idleState",
  "label": "ImportButton-module__fWMvIq__label",
  "orText": "ImportButton-module__fWMvIq__orText",
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
                handleFile(files[0]);
            }
        }
    }["ImportButton.useCallback[handleDrop]"], [
        selectedAccount
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImportButton.useCallback[handleFileSelect]": (e)=>{
            const files = e.target.files;
            if (files && files.length > 0) {
                handleFile(files[0]);
            }
        }
    }["ImportButton.useCallback[handleFileSelect]"], [
        selectedAccount
    ]);
    const handleFile = async (file)=>{
        // Validate file type
        const validTypes = [
            '.csv',
            '.pdf'
        ];
        const extension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
        if (!validTypes.includes(extension)) {
            setResult({
                success: false,
                error: 'Please upload a CSV or PDF file'
            });
            return;
        }
        // Check if account is selected
        if (!selectedAccount) {
            setResult({
                success: false,
                error: 'Please select a bank account first'
            });
            return;
        }
        setIsUploading(true);
        setResult(null);
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
                setResult({
                    success: true,
                    import_id: data.import_id,
                    transactions_imported: data.transactions_imported,
                    parse_errors: data.parse_errors
                });
                onImportComplete?.();
            } else {
                setResult({
                    success: false,
                    error: data.error || 'Import failed',
                    parse_errors: data.parseErrors
                });
            }
        } catch (error) {
            setResult({
                success: false,
                error: 'Network error. Please try again.'
            });
        } finally{
            setIsUploading(false);
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
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
                        lineNumber: 137,
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
                                lineNumber: 147,
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
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 136,
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
                        onChange: handleFileSelect,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput,
                        disabled: isUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadingState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Importing transactions..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 174,
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
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ImportButton.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropText,
                                children: "Drag & drop your statement here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orText,
                                children: "or"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browseButton,
                                children: "Browse Files"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].supportedText,
                                children: "Supports CSV and PDF files"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].result} ${result.success ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultIcon,
                                children: result.success ? '✓' : '!'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultTitle,
                                children: result.success ? 'Import Successful' : 'Import Failed'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearResult,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    result.success && result.transactions_imported !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultMessage,
                        children: [
                            result.transactions_imported,
                            " transactions imported"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, this),
                    result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultMessage,
                        children: result.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this),
                    result.parse_errors && result.parse_errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: [
                                    result.parse_errors.length,
                                    " parsing warning",
                                    result.parse_errors.length > 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    result.parse_errors.slice(0, 10).map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: err
                                        }, i, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)),
                                    result.parse_errors.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "...and ",
                                            result.parse_errors.length - 10,
                                            " more"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ImportButton.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImportButton.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImportButton.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(ImportButton, "yuVD200isyBGAhWKWkz7rhKLn04=");
_c = ImportButton;
var _c;
__turbopack_context__.k.register(_c, "ImportButton");
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
"[project]/src/components/RecentTransactions.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amount": "RecentTransactions-module__lZrGIW__amount",
  "amountWrapper": "RecentTransactions-module__lZrGIW__amountWrapper",
  "container": "RecentTransactions-module__lZrGIW__container",
  "count": "RecentTransactions-module__lZrGIW__count",
  "details": "RecentTransactions-module__lZrGIW__details",
  "empty": "RecentTransactions-module__lZrGIW__empty",
  "emptyHint": "RecentTransactions-module__lZrGIW__emptyHint",
  "error": "RecentTransactions-module__lZrGIW__error",
  "expense": "RecentTransactions-module__lZrGIW__expense",
  "header": "RecentTransactions-module__lZrGIW__header",
  "icon": "RecentTransactions-module__lZrGIW__icon",
  "income": "RecentTransactions-module__lZrGIW__income",
  "item": "RecentTransactions-module__lZrGIW__item",
  "list": "RecentTransactions-module__lZrGIW__list",
  "loading": "RecentTransactions-module__lZrGIW__loading",
  "merchant": "RecentTransactions-module__lZrGIW__merchant",
  "meta": "RecentTransactions-module__lZrGIW__meta",
  "retryButton": "RecentTransactions-module__lZrGIW__retryButton",
  "spin": "RecentTransactions-module__lZrGIW__spin",
  "spinner": "RecentTransactions-module__lZrGIW__spinner",
  "title": "RecentTransactions-module__lZrGIW__title",
});
}),
"[project]/src/components/RecentTransactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/RecentTransactions.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Category icons/colors mapping
const categoryStyles = {
    'Food & Drink': {
        icon: '🍔',
        color: '#f97316'
    },
    'Shopping': {
        icon: '🛍️',
        color: '#8b5cf6'
    },
    'Transportation': {
        icon: '🚗',
        color: '#3b82f6'
    },
    'Entertainment': {
        icon: '🎬',
        color: '#ec4899'
    },
    'Bills & Utilities': {
        icon: '💡',
        color: '#eab308'
    },
    'Health': {
        icon: '💊',
        color: '#22c55e'
    },
    'Travel': {
        icon: '✈️',
        color: '#06b6d4'
    },
    'Income': {
        icon: '💰',
        color: '#22c55e'
    },
    'Transfer': {
        icon: '↔️',
        color: '#6b7280'
    },
    'Other': {
        icon: '📦',
        color: '#6b7280'
    }
};
function getCategoryStyle(category) {
    if (!category) return categoryStyles['Other'];
    return categoryStyles[category] || categoryStyles['Other'];
}
function RecentTransactions({ limit = 10, bankAccountId }) {
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentTransactions.useEffect": ()=>{
            loadTransactions();
        }
    }["RecentTransactions.useEffect"], [
        bankAccountId
    ]);
    async function loadTransactions() {
        setLoading(true);
        setError(null);
        try {
            let query = supabase.from('transactions').select(`
          id,
          amount,
          date,
          name,
          merchant_name,
          category,
          bank_accounts (
            id,
            name,
            type
          )
        `).order('date', {
                ascending: false
            }).order('created_at', {
                ascending: false
            }).limit(limit);
            if (bankAccountId) {
                query = query.eq('bank_account_id', bankAccountId);
            }
            const { data, error: fetchError } = await query;
            if (fetchError) {
                throw fetchError;
            }
            setTransactions(data || []);
        } catch (err) {
            console.error('Failed to load transactions:', err);
            setError('Failed to load transactions');
        } finally{
            setLoading(false);
        }
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        }
    }
    function getDisplayName(tx) {
        return tx.merchant_name || tx.name || 'Unknown';
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RecentTransactions.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RecentTransactions.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RecentTransactions.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RecentTransactions.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: loadTransactions,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retryButton,
                            children: "Retry"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RecentTransactions.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RecentTransactions.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    transactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: transactions.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecentTransactions.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No transactions yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyHint,
                        children: "Import a CSV or PDF to get started"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecentTransactions.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                children: transactions.map((tx)=>{
                    const categoryStyle = getCategoryStyle(tx.category);
                    const isIncome = tx.amount > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                style: {
                                    backgroundColor: `${categoryStyle.color}20`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: categoryStyle.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RecentTransactions.tsx",
                                    lineNumber: 175,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentTransactions.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchant,
                                        children: getDisplayName(tx)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentTransactions.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                        children: [
                                            tx.category || 'Uncategorized',
                                            " • ",
                                            formatDate(tx.date)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecentTransactions.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecentTransactions.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amountWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amount} ${isIncome ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].income : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expense}`,
                                    children: [
                                        isIncome ? '+' : '',
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(tx.amount)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RecentTransactions.tsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentTransactions.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, this)
                        ]
                    }, tx.id, true, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 170,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RecentTransactions.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecentTransactions.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(RecentTransactions, "5jbk8HdePT8SHyzZX04TAttKX7Q=");
_c = RecentTransactions;
var _c;
__turbopack_context__.k.register(_c, "RecentTransactions");
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
  "content": "dashboard-module__XABe8G__content",
  "emptyState": "dashboard-module__XABe8G__emptyState",
  "footer": "dashboard-module__XABe8G__footer",
  "grid": "dashboard-module__XABe8G__grid",
  "header": "dashboard-module__XABe8G__header",
  "headerActions": "dashboard-module__XABe8G__headerActions",
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
  "loading": "dashboard-module__XABe8G__loading",
  "logo": "dashboard-module__XABe8G__logo",
  "main": "dashboard-module__XABe8G__main",
  "page": "dashboard-module__XABe8G__page",
  "rightColumn": "dashboard-module__XABe8G__rightColumn",
  "section": "dashboard-module__XABe8G__section",
  "sectionHeader": "dashboard-module__XABe8G__sectionHeader",
  "sectionTitle": "dashboard-module__XABe8G__sectionTitle",
  "select": "dashboard-module__XABe8G__select",
  "settingsLink": "dashboard-module__XABe8G__settingsLink",
  "signOutButton": "dashboard-module__XABe8G__signOutButton",
  "submitButton": "dashboard-module__XABe8G__submitButton",
  "title": "dashboard-module__XABe8G__title",
});
}),
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImportButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecentTransactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/dashboard.module.css [app-client] (css module)");
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
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bankAccounts, setBankAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imports, setImports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showAddAccount, setShowAddAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAccountName, setNewAccountName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAccountType, setNewAccountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [addingAccount, setAddingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transactionsKey, setTransactionsKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            checkAuthAndLoadData();
        }
    }["Dashboard.useEffect"], []);
    async function checkAuthAndLoadData() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            router.push('/login');
            return;
        }
        await Promise.all([
            loadBankAccounts(),
            loadImports()
        ]);
        setLoading(false);
    }
    async function loadBankAccounts() {
        const { data, error } = await supabase.from('bank_accounts').select('id, name, type, current_balance').order('created_at', {
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
        }).limit(10);
        if (!error && data) {
            setImports(data);
        }
    }
    async function handleAddAccount(e) {
        e.preventDefault();
        if (!newAccountName.trim()) return;
        setAddingAccount(true);
        const { error } = await supabase.from('bank_accounts').insert({
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
        setTransactionsKey((prev)=>prev + 1); // Refresh transactions
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: "GC"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/settings",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsLink,
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSignOut,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signOutButton,
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftColumn,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Import Transactions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Add a bank account first to start importing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    bankAccounts: bankAccounts,
                                                    onImportComplete: handleImportComplete
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                                    children: "Bank Accounts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowAddAccount(!showAddAccount),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                                                    children: showAddAccount ? 'Cancel' : '+ Add'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this),
                                                        showAddAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                            onSubmit: handleAddAccount,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addAccountForm,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Account name (e.g., Chase Checking)",
                                                                    value: newAccountName,
                                                                    onChange: (e)=>setNewAccountName(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                                    disabled: addingAccount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: newAccountType,
                                                                    onChange: (e)=>setNewAccountType(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                                                    disabled: addingAccount,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "checking",
                                                                            children: "Checking"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 198,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "savings",
                                                                            children: "Savings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "credit",
                                                                            children: "Credit Card"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                                                    disabled: addingAccount || !newAccountName.trim(),
                                                                    children: addingAccount ? 'Adding...' : 'Add Account'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this),
                                                        bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No accounts yet. Add one to get started."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountList,
                                                            children: bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountInfo,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountName,
                                                                                children: account.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                lineNumber: 221,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountType,
                                                                                children: account.type
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                lineNumber: 222,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, account.id, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                            children: "Recent Imports"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        imports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No imports yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importList,
                                                            children: imports.map((imp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importItem,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importInfo,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importFilename,
                                                                                    children: imp.filename
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                    lineNumber: 243,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importMeta,
                                                                                    children: [
                                                                                        imp.transaction_count,
                                                                                        " transactions",
                                                                                        imp.bank_accounts && ` to ${imp.bank_accounts.name}`
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                    lineNumber: 244,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importDate,
                                                                            children: new Date(imp.created_at).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, imp.id, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightColumn,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        limit: 15
                                    }, transactionsKey, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "Made with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heart,
                        children: "♥"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 269,
                        columnNumber: 19
                    }, this),
                    " by Josiah"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "NCuZdPKYOpKQmIpA1IhHbz/7S6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_87596291._.js.map