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
"[project]/src/app/dashboard/settings/settings.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountActions": "settings-module___0qqaW__accountActions",
  "accountInfo": "settings-module___0qqaW__accountInfo",
  "accountItem": "settings-module___0qqaW__accountItem",
  "accountList": "settings-module___0qqaW__accountList",
  "accountName": "settings-module___0qqaW__accountName",
  "accountType": "settings-module___0qqaW__accountType",
  "backArrow": "settings-module___0qqaW__backArrow",
  "backLink": "settings-module___0qqaW__backLink",
  "cancelButton": "settings-module___0qqaW__cancelButton",
  "content": "settings-module___0qqaW__content",
  "deleteButton": "settings-module___0qqaW__deleteButton",
  "editActions": "settings-module___0qqaW__editActions",
  "editButton": "settings-module___0qqaW__editButton",
  "editForm": "settings-module___0qqaW__editForm",
  "editInput": "settings-module___0qqaW__editInput",
  "editSelect": "settings-module___0qqaW__editSelect",
  "emptyState": "settings-module___0qqaW__emptyState",
  "errorMessage": "settings-module___0qqaW__errorMessage",
  "footer": "settings-module___0qqaW__footer",
  "form": "settings-module___0qqaW__form",
  "formGroup": "settings-module___0qqaW__formGroup",
  "grid": "settings-module___0qqaW__grid",
  "header": "settings-module___0qqaW__header",
  "heart": "settings-module___0qqaW__heart",
  "hint": "settings-module___0qqaW__hint",
  "input": "settings-module___0qqaW__input",
  "inputPrefix": "settings-module___0qqaW__inputPrefix",
  "inputWithPrefix": "settings-module___0qqaW__inputWithPrefix",
  "inputWrapper": "settings-module___0qqaW__inputWrapper",
  "label": "settings-module___0qqaW__label",
  "linkButton": "settings-module___0qqaW__linkButton",
  "loading": "settings-module___0qqaW__loading",
  "logo": "settings-module___0qqaW__logo",
  "main": "settings-module___0qqaW__main",
  "page": "settings-module___0qqaW__page",
  "saveButton": "settings-module___0qqaW__saveButton",
  "saveSmallButton": "settings-module___0qqaW__saveSmallButton",
  "section": "settings-module___0qqaW__section",
  "sectionDescription": "settings-module___0qqaW__sectionDescription",
  "sectionTitle": "settings-module___0qqaW__sectionTitle",
  "signOutButton": "settings-module___0qqaW__signOutButton",
  "successMessage": "settings-module___0qqaW__successMessage",
  "title": "settings-module___0qqaW__title",
});
}),
"[project]/src/app/dashboard/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/settings/settings.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SettingsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // Loading states
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Settings form
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [monthlyIncome, setMonthlyIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [savingsGoal, setSavingsGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [goalDeadline, setGoalDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentSaved, setCurrentSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Bank accounts
    const [bankAccounts, setBankAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingAccount, setEditingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editType, setEditType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    // Messages
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function loadSettings() {
        try {
            const response = await fetch('/api/user-settings');
            const data = await response.json();
            if (data.settings) {
                setDisplayName(data.settings.display_name || '');
                setAvatarUrl(data.settings.avatar_url || '');
                setMonthlyIncome(data.settings.monthly_income?.toString() || '');
                setSavingsGoal(data.settings.savings_goal?.toString() || '');
                setGoalDeadline(data.settings.goal_deadline || '');
                setCurrentSaved(data.settings.current_saved?.toString() || '');
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }
    }
    async function loadBankAccounts() {
        try {
            const response = await fetch('/api/bank-accounts');
            const data = await response.json();
            if (data.accounts) {
                setBankAccounts(data.accounts);
            }
        } catch (error) {
            console.error('Failed to load bank accounts:', error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            async function checkAuthAndLoadData() {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                    router.push('/login');
                    return;
                }
                await Promise.all([
                    loadSettings(),
                    loadBankAccounts()
                ]);
                setLoading(false);
            }
            checkAuthAndLoadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SettingsPage.useEffect"], []);
    async function handleSaveSettings(e) {
        e.preventDefault();
        setSaving(true);
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const response = await fetch('/api/user-settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    display_name: displayName || null,
                    avatar_url: avatarUrl || null,
                    monthly_income: monthlyIncome ? parseFloat(monthlyIncome) : null,
                    savings_goal: savingsGoal ? parseFloat(savingsGoal) : null,
                    goal_deadline: goalDeadline || null,
                    current_saved: currentSaved ? parseFloat(currentSaved) : null
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to save settings');
            }
            setSuccessMessage('Settings saved successfully!');
            setTimeout(()=>setSuccessMessage(''), 3000);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Failed to save settings');
        } finally{
            setSaving(false);
        }
    }
    function startEditingAccount(account) {
        setEditingAccount(account.id);
        setEditName(account.name);
        setEditType(account.type);
    }
    function cancelEditing() {
        setEditingAccount(null);
        setEditName('');
        setEditType('checking');
    }
    async function handleUpdateAccount(accountId) {
        if (!editName.trim()) return;
        try {
            const response = await fetch('/api/bank-accounts', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: accountId,
                    name: editName.trim(),
                    type: editType
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to update account');
            }
            await loadBankAccounts();
            cancelEditing();
            setSuccessMessage('Account updated!');
            setTimeout(()=>setSuccessMessage(''), 3000);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Failed to update account');
        }
    }
    async function handleDeleteAccount(accountId, accountName) {
        if (!confirm(`Delete "${accountName}"? This cannot be undone.`)) return;
        try {
            const response = await fetch(`/api/bank-accounts?id=${accountId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to delete account');
            }
            await loadBankAccounts();
            setSuccessMessage('Account deleted!');
            setTimeout(()=>setSuccessMessage(''), 3000);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Failed to delete account');
        }
    }
    async function handleSignOut() {
        await supabase.auth.signOut();
        router.push('/');
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/settings/page.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backLink,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backArrow,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                                children: "GC"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSignOut,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signOutButton,
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMessage,
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSaveSettings,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionDescription,
                                                    children: "Update your display name and profile picture."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "displayName",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Display Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "displayName",
                                                            type: "text",
                                                            placeholder: "Your Name",
                                                            value: displayName,
                                                            onChange: (e)=>setDisplayName(e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                            disabled: saving
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "Your name, as it will appear on the dashboard."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "avatarUrl",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Avatar URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "avatarUrl",
                                                            type: "text",
                                                            placeholder: "https://...",
                                                            value: avatarUrl,
                                                            onChange: (e)=>setAvatarUrl(e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                            disabled: saving
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "URL of a profile image (e.g., from Gravatar or a social profile)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Financial Goals"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionDescription,
                                                    children: "Configure your income and savings goals to track your weekly spending allowance."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "monthlyIncome",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Monthly Income"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputPrefix,
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "monthlyIncome",
                                                                    type: "number",
                                                                    step: "0.01",
                                                                    min: "0",
                                                                    placeholder: "0.00",
                                                                    value: monthlyIncome,
                                                                    onChange: (e)=>setMonthlyIncome(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWithPrefix,
                                                                    disabled: saving
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "Your total monthly income after taxes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "savingsGoal",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Savings Goal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputPrefix,
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "savingsGoal",
                                                                    type: "number",
                                                                    step: "0.01",
                                                                    min: "0",
                                                                    placeholder: "0.00",
                                                                    value: savingsGoal,
                                                                    onChange: (e)=>setSavingsGoal(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWithPrefix,
                                                                    disabled: saving
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "Total amount you want to save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "goalDeadline",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Goal Deadline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "goalDeadline",
                                                            type: "date",
                                                            value: goalDeadline,
                                                            onChange: (e)=>setGoalDeadline(e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                            disabled: saving
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "When you want to reach your goal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "currentSaved",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                            children: "Already Saved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputPrefix,
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "currentSaved",
                                                                    type: "number",
                                                                    step: "0.01",
                                                                    min: "0",
                                                                    placeholder: "0.00",
                                                                    value: currentSaved,
                                                                    onChange: (e)=>setCurrentSaved(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWithPrefix,
                                                                    disabled: saving
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                                            children: "How much you've already saved toward your goal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                                    disabled: saving,
                                                    children: saving ? 'Saving...' : 'Save Settings'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Bank Accounts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionDescription,
                                            children: "Manage your connected bank accounts. Add new accounts from the dashboard."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "No bank accounts yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkButton,
                                                    children: "Add accounts on Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountList,
                                            children: bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                                    children: editingAccount === account.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editForm,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: editName,
                                                                onChange: (e)=>setEditName(e.target.value),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editInput,
                                                                placeholder: "Account name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: editType,
                                                                onChange: (e)=>setEditType(e.target.value),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editSelect,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "checking",
                                                                        children: "Checking"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "savings",
                                                                        children: "Savings"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "credit",
                                                                        children: "Credit Card"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editActions,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateAccount(account.id),
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveSmallButton,
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: cancelEditing,
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountInfo,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountName,
                                                                        children: account.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountType,
                                                                        children: account.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountActions,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>startEditingAccount(account),
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 419,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDeleteAccount(account.id, account.name),
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, account.id, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/settings/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "Made with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heart,
                        children: "♥"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 444,
                        columnNumber: 19
                    }, this),
                    " by Josiah"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/settings/page.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "RoF8QGSHC0irtZbpPh/LsORwcE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_01fa28cf._.js.map