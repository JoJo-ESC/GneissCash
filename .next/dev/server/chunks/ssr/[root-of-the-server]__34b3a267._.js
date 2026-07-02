module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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
"[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://ukyamyojzvdgxhqsyewd.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_qdC_j8mxUzL-oS7VcSudrQ_0j18Fo-U"));
}
}),
"[project]/src/lib/calculations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDay.js [app-ssr] (ecmascript)");
;
function calculateWeeklyAllowance(input) {
    const { monthlyIncome, goalAmount, deadline, currentSaved } = input;
    const now = new Date();
    const weeksUntilDeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInWeeks"])(deadline, now);
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
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        weekStartsOn: 1
    });
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(date, {
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
    const dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDay"])(date);
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
}),
"[project]/src/lib/dashboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardData",
    ()=>getDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
;
;
async function getDashboardData(supabase) {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new Error('User not authenticated');
    }
    const now = new Date();
    const { start: weekStart, end: weekEnd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekBounds"])(now);
    // Format dates for Supabase query
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(weekStart, 'yyyy-MM-dd');
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(weekEnd, 'yyyy-MM-dd');
    // Fetch user settings and this week's transactions in parallel
    const [settingsResult, transactionsResult] = await Promise.all([
        supabase.from('user_settings').select('*').eq('user_id', user.id).single(),
        supabase.from('transactions').select('*').eq('user_id', user.id).gte('date', startDate).lte('date', endDate).order('date', {
            ascending: false
        })
    ]);
    const settings = settingsResult.data;
    const transactions = transactionsResult.data || [];
    // Check if user has configured their settings
    const hasSettings = Boolean(settings?.monthly_income && settings?.savings_goal && settings?.goal_deadline);
    // Calculate totals from transactions
    // Expenses are negative, income is positive
    const totalSpent = transactions.filter((t)=>t.amount < 0).reduce((sum, t)=>sum + Math.abs(t.amount), 0);
    const totalIncome = transactions.filter((t)=>t.amount > 0).reduce((sum, t)=>sum + t.amount, 0);
    const netAmount = totalIncome - totalSpent;
    // Calculate weekly allowance based on settings
    let weeklyAllowance = 0;
    if (hasSettings && settings) {
        weeklyAllowance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateWeeklyAllowance"])({
            monthlyIncome: settings.monthly_income,
            goalAmount: settings.savings_goal,
            deadline: new Date(settings.goal_deadline),
            currentSaved: settings.current_saved || 0
        });
    }
    const remainingAllowance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRemainingAllowance"])(totalSpent, weeklyAllowance);
    const dailyAllowance = Math.round(weeklyAllowance / 7 * 100) / 100;
    // Group spending by category
    const categoryMap = new Map();
    transactions.filter((t)=>t.amount < 0).forEach((t)=>{
        const category = t.category || 'Other';
        const existing = categoryMap.get(category) || {
            amount: 0,
            count: 0
        };
        categoryMap.set(category, {
            amount: existing.amount + Math.abs(t.amount),
            count: existing.count + 1
        });
    });
    const spendingByCategory = Array.from(categoryMap.entries()).map(([category, data])=>({
            category,
            amount: Math.round(data.amount * 100) / 100,
            percentage: totalSpent > 0 ? Math.round(data.amount / totalSpent * 100) : 0,
            transactionCount: data.count
        })).sort((a, b)=>b.amount - a.amount);
    // Get pulse status and grade
    const pulseStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPulseStatus"])(totalSpent, weeklyAllowance, now);
    const grade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateGrade"])(totalSpent, weeklyAllowance);
    return {
        settings,
        hasSettings,
        weekStart,
        weekEnd,
        transactions,
        transactionCount: transactions.length,
        totalSpent: Math.round(totalSpent * 100) / 100,
        totalIncome: Math.round(totalIncome * 100) / 100,
        netAmount: Math.round(netAmount * 100) / 100,
        weeklyAllowance,
        remainingAllowance,
        dailyAllowance,
        spendingByCategory,
        pulseStatus,
        grade
    };
}
}),
"[project]/src/components/Sidebar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Sidebar-module__WZVnLW__active",
  "avatar": "Sidebar-module__WZVnLW__avatar",
  "collapseBtn": "Sidebar-module__WZVnLW__collapseBtn",
  "collapsed": "Sidebar-module__WZVnLW__collapsed",
  "footer": "Sidebar-module__WZVnLW__footer",
  "header": "Sidebar-module__WZVnLW__header",
  "logo": "Sidebar-module__WZVnLW__logo",
  "logoIcon": "Sidebar-module__WZVnLW__logoIcon",
  "logoText": "Sidebar-module__WZVnLW__logoText",
  "nav": "Sidebar-module__WZVnLW__nav",
  "navIcon": "Sidebar-module__WZVnLW__navIcon",
  "navItem": "Sidebar-module__WZVnLW__navItem",
  "navLabel": "Sidebar-module__WZVnLW__navLabel",
  "sidebar": "Sidebar-module__WZVnLW__sidebar",
  "signOutBtn": "Sidebar-module__WZVnLW__signOutBtn",
});
}),
"[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function Sidebar({ onSignOut, userProfile }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "14",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "14",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            exact: true
        },
        {
            href: '/dashboard/import',
            label: 'Import',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "17 8 12 3 7 8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        },
        {
            href: '/dashboard/transactions',
            label: 'Transactions',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 6h18M3 12h18M3 18h18",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        },
        {
            href: '/dashboard/settings',
            label: 'Settings',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }
    ];
    // Get initials from display name
    const getInitials = (name)=>{
        if (!name) return 'G';
        const parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name[0].toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${collapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].collapsed : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            userProfile?.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: userProfile.avatarUrl,
                                alt: "Profile",
                                width: 36,
                                height: 36,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                                children: getInitials(userProfile?.displayName)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                                children: userProfile?.displayName || 'GneissCash'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].collapseBtn,
                        "aria-label": collapsed ? 'Expand sidebar' : 'Collapse sidebar',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 18l6-6-6-6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 18l-6-6 6-6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: navItems.map((item)=>{
                    const isActive = item.exact ? pathname === item.href : pathname === item.href || pathname?.startsWith(item.href + '/');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                        title: collapsed ? item.label : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navIcon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLabel,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSignOut,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signOutBtn,
                    title: collapsed ? 'Sign Out' : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 142,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ImportButton.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/ImportButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ImportButton.module.css [app-ssr] (css module)");
'use client';
;
;
;
function ImportButton({ bankAccounts, onImportComplete }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAccount, setSelectedAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(Array.from(files));
        }
    }, [
        selectedAccount
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFiles(Array.from(files));
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountSelector,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "account-select",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        children: "Import to:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "account-select",
                        value: selectedAccount,
                        onChange: (e)=>setSelectedAccount(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                        disabled: isUploading,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select a bank account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropZone} ${isDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragging : ''} ${isUploading ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploading : ''}`,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                onClick: !isUploading ? handleClick : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: ".csv,.pdf",
                        multiple: true,
                        onChange: handleFileSelect,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileInput,
                        disabled: isUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImportButton.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadingState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Importing transactions..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            uploadProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressText,
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].idleState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImportButton.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropText,
                                children: "Drag & drop your statements here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orText,
                                children: "or"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].browseButton,
                                children: "Browse Files"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].supportedText,
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
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].result} ${result.failCount === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success : result.successCount === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].partial}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultIcon,
                                children: result.failCount === 0 ? '✓' : result.successCount === 0 ? '!' : '~'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultTitle,
                                children: result.failCount === 0 ? 'Import Successful' : result.successCount === 0 ? 'Import Failed' : 'Partial Import'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearResult,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
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
                    result.successCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultMessage,
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
                    result.failCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultMessage,
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
                    result.results.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "File details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 306,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileList,
                                children: result.results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: r.success ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileSuccess : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileError,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileIcon,
                                                children: r.success ? '✓' : '✗'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 310,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileName,
                                                children: r.fileName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImportButton.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, this),
                                            r.success && r.transactions_imported !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileCount,
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
                                            r.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileErrorMsg,
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
                    result.results.some((r)=>r.parse_errors && r.parse_errors.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Parsing warnings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImportButton.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: result.results.flatMap((r, i)=>(r.parse_errors || []).slice(0, 5).map((err, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
}),
"[project]/src/components/RecentTransactions.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/RecentTransactions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/RecentTransactions.module.css [app-ssr] (css module)");
'use client';
;
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
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadTransactions();
    }, [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentTransactions.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: loadTransactions,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retryButton,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    transactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
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
            transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No transactions yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentTransactions.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyHint,
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: transactions.map((tx)=>{
                    const categoryStyle = getCategoryStyle(tx.category);
                    const isIncome = tx.amount > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                                style: {
                                    backgroundColor: `${categoryStyle.color}20`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].merchant,
                                        children: getDisplayName(tx)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentTransactions.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amountWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amount} ${isIncome ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].income : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expense}`,
                                    children: [
                                        isIncome ? '+' : '',
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(tx.amount)
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
}),
"[project]/src/components/AllowanceTracker.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amounts": "AllowanceTracker-module__LgNu3a__amounts",
  "container": "AllowanceTracker-module__LgNu3a__container",
  "header": "AllowanceTracker-module__LgNu3a__header",
  "noAllowance": "AllowanceTracker-module__LgNu3a__noAllowance",
  "overBudgetBadge": "AllowanceTracker-module__LgNu3a__overBudgetBadge",
  "percentLabel": "AllowanceTracker-module__LgNu3a__percentLabel",
  "progressBar": "AllowanceTracker-module__LgNu3a__progressBar",
  "progressContainer": "AllowanceTracker-module__LgNu3a__progressContainer",
  "progressLabels": "AllowanceTracker-module__LgNu3a__progressLabels",
  "progressTrack": "AllowanceTracker-module__LgNu3a__progressTrack",
  "remaining": "AllowanceTracker-module__LgNu3a__remaining",
  "remainingLabel": "AllowanceTracker-module__LgNu3a__remainingLabel",
  "remainingValue": "AllowanceTracker-module__LgNu3a__remainingValue",
  "spentLabel": "AllowanceTracker-module__LgNu3a__spentLabel",
  "title": "AllowanceTracker-module__LgNu3a__title",
  "total": "AllowanceTracker-module__LgNu3a__total",
  "totalLabel": "AllowanceTracker-module__LgNu3a__totalLabel",
});
}),
"[project]/src/components/AllowanceTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllowanceTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AllowanceTracker.module.css [app-ssr] (css module)");
'use client';
;
;
;
function AllowanceTracker({ spent, allowance, remaining }) {
    // Calculate percentage spent (cap at 100 for visual purposes)
    const percentageSpent = allowance > 0 ? Math.min(spent / allowance * 100, 100) : 0;
    const isOverBudget = spent > allowance;
    // Determine color based on spending level
    function getProgressColor() {
        if (allowance <= 0) return '#6b7280' // gray
        ;
        const percentage = spent / allowance * 100;
        if (percentage <= 50) return '#22c55e' // green
        ;
        if (percentage <= 80) return '#84cc16' // lime
        ;
        if (percentage <= 100) return '#eab308' // yellow
        ;
        return '#ef4444' // red
        ;
    }
    const progressColor = getProgressColor();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Weekly Allowance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    isOverBudget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overBudgetBadge,
                        children: "Over Budget"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllowanceTracker.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amounts,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].remaining,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].remainingLabel,
                                children: "Remaining"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllowanceTracker.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].remainingValue,
                                style: {
                                    color: isOverBudget ? '#ef4444' : '#00fd5d'
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(remaining)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllowanceTracker.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].total,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalLabel,
                            children: [
                                "of ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(allowance)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AllowanceTracker.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllowanceTracker.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressTrack,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                            style: {
                                width: `${percentageSpent}%`,
                                backgroundColor: progressColor
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AllowanceTracker.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressLabels,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spentLabel,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(spent),
                                    " spent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllowanceTracker.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].percentLabel,
                                children: [
                                    Math.round(spent / allowance * 100 || 0),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllowanceTracker.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllowanceTracker.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllowanceTracker.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            allowance <= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noAllowance,
                children: "Set up your income and savings goal to see your weekly allowance"
            }, void 0, false, {
                fileName: "[project]/src/components/AllowanceTracker.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AllowanceTracker.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SpendingChart.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chartCenter": "SpendingChart-module__oahrqa__chartCenter",
  "chartContainer": "SpendingChart-module__oahrqa__chartContainer",
  "chartWrapper": "SpendingChart-module__oahrqa__chartWrapper",
  "container": "SpendingChart-module__oahrqa__container",
  "empty": "SpendingChart-module__oahrqa__empty",
  "emptyHint": "SpendingChart-module__oahrqa__emptyHint",
  "legend": "SpendingChart-module__oahrqa__legend",
  "legendAmount": "SpendingChart-module__oahrqa__legendAmount",
  "legendCategory": "SpendingChart-module__oahrqa__legendCategory",
  "legendColor": "SpendingChart-module__oahrqa__legendColor",
  "legendInfo": "SpendingChart-module__oahrqa__legendInfo",
  "legendItem": "SpendingChart-module__oahrqa__legendItem",
  "legendMeta": "SpendingChart-module__oahrqa__legendMeta",
  "legendPercent": "SpendingChart-module__oahrqa__legendPercent",
  "legendValues": "SpendingChart-module__oahrqa__legendValues",
  "title": "SpendingChart-module__oahrqa__title",
  "totalLabel": "SpendingChart-module__oahrqa__totalLabel",
  "totalValue": "SpendingChart-module__oahrqa__totalValue",
});
}),
"[project]/src/components/SpendingChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpendingChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SpendingChart.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// Category color mapping
const categoryColors = {
    'Food & Drink': '#f97316',
    'Shopping': '#8b5cf6',
    'Transportation': '#3b82f6',
    'Entertainment': '#ec4899',
    'Bills & Utilities': '#eab308',
    'Health': '#22c55e',
    'Travel': '#06b6d4',
    'Income': '#10b981',
    'Transfer': '#6b7280',
    'Other': '#94a3b8'
};
// Default colors for unknown categories
const defaultColors = [
    '#f97316',
    '#8b5cf6',
    '#3b82f6',
    '#ec4899',
    '#eab308',
    '#22c55e',
    '#06b6d4',
    '#f43f5e',
    '#a855f7',
    '#14b8a6'
];
function getCategoryColor(category, index) {
    return categoryColors[category] || defaultColors[index % defaultColors.length];
}
function SpendingChart({ data, totalSpent }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Spending by Category"
                }, void 0, false, {
                    fileName: "[project]/src/components/SpendingChart.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No spending data this week"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SpendingChart.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyHint,
                            children: "Import transactions to see your breakdown"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SpendingChart.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SpendingChart.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SpendingChart.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    const chartData = {
        labels: data.map((d)=>d.category),
        datasets: [
            {
                data: data.map((d)=>d.amount),
                backgroundColor: data.map((d, i)=>getCategoryColor(d.category, i)),
                borderColor: '#000000',
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBorderColor: '#ffffff'
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1a1a1a',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        const value = context.parsed;
                        const percentage = totalSpent > 0 ? (value / totalSpent * 100).toFixed(1) : 0;
                        return ` ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(value)} (${percentage}%)`;
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Spending by Category"
            }, void 0, false, {
                fileName: "[project]/src/components/SpendingChart.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doughnut"], {
                                data: chartData,
                                options: options
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendingChart.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartCenter,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalLabel,
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendingChart.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalValue,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalSpent)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendingChart.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendingChart.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendingChart.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legend,
                        children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendColor,
                                        style: {
                                            backgroundColor: getCategoryColor(item.category, index)
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendingChart.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendCategory,
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendingChart.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendMeta,
                                                children: [
                                                    item.transactionCount,
                                                    " transaction",
                                                    item.transactionCount !== 1 ? 's' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SpendingChart.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendingChart.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendValues,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendAmount,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.amount)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendingChart.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendPercent,
                                                children: [
                                                    item.percentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SpendingChart.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendingChart.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.category, true, {
                                fileName: "[project]/src/components/SpendingChart.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpendingChart.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpendingChart.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpendingChart.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/GoalProgress.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amounts": "GoalProgress-module__BZgJZq__amounts",
  "container": "GoalProgress-module__BZgJZq__container",
  "deadline": "GoalProgress-module__BZgJZq__deadline",
  "empty": "GoalProgress-module__BZgJZq__empty",
  "emptyHint": "GoalProgress-module__BZgJZq__emptyHint",
  "footer": "GoalProgress-module__BZgJZq__footer",
  "goalAmount": "GoalProgress-module__BZgJZq__goalAmount",
  "header": "GoalProgress-module__BZgJZq__header",
  "overdue": "GoalProgress-module__BZgJZq__overdue",
  "percentage": "GoalProgress-module__BZgJZq__percentage",
  "progressBar": "GoalProgress-module__BZgJZq__progressBar",
  "progressFill": "GoalProgress-module__BZgJZq__progressFill",
  "progressMeta": "GoalProgress-module__BZgJZq__progressMeta",
  "progressSection": "GoalProgress-module__BZgJZq__progressSection",
  "remaining": "GoalProgress-module__BZgJZq__remaining",
  "savedAmount": "GoalProgress-module__BZgJZq__savedAmount",
  "status": "GoalProgress-module__BZgJZq__status",
  "statusEmoji": "GoalProgress-module__BZgJZq__statusEmoji",
  "statusMessage": "GoalProgress-module__BZgJZq__statusMessage",
  "title": "GoalProgress-module__BZgJZq__title",
  "weeklyAmount": "GoalProgress-module__BZgJZq__weeklyAmount",
  "weeklyLabel": "GoalProgress-module__BZgJZq__weeklyLabel",
  "weeklyTarget": "GoalProgress-module__BZgJZq__weeklyTarget",
});
}),
"[project]/src/components/GoalProgress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/GoalProgress.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function GoalProgress({ goalAmount, currentSaved, deadline }) {
    // Check if goal is configured
    const hasGoal = goalAmount && goalAmount > 0;
    if (!hasGoal) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Savings Goal"
                }, void 0, false, {
                    fileName: "[project]/src/components/GoalProgress.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No savings goal set"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalProgress.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyHint,
                            children: "Configure your goal in Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalProgress.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GoalProgress.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GoalProgress.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    const saved = currentSaved || 0;
    const goal = goalAmount;
    const remaining = Math.max(0, goal - saved);
    const percentage = Math.min(100, saved / goal * 100);
    const isComplete = saved >= goal;
    // Calculate time remaining
    let timeRemaining = '';
    let daysLeft = 0;
    let isOverdue = false;
    if (deadline) {
        const deadlineDate = new Date(deadline);
        const now = new Date();
        daysLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInDays"])(deadlineDate, now);
        const weeksLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInWeeks"])(deadlineDate, now);
        if (daysLeft < 0) {
            isOverdue = true;
            timeRemaining = `${Math.abs(daysLeft)} days overdue`;
        } else if (daysLeft === 0) {
            timeRemaining = 'Due today';
        } else if (daysLeft === 1) {
            timeRemaining = '1 day left';
        } else if (daysLeft < 14) {
            timeRemaining = `${daysLeft} days left`;
        } else if (weeksLeft < 8) {
            timeRemaining = `${weeksLeft} weeks left`;
        } else {
            timeRemaining = `Due ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(deadlineDate, 'MMM d, yyyy')}`;
        }
    }
    // Calculate weekly savings needed
    let weeklySavingsNeeded = 0;
    if (deadline && !isComplete && daysLeft > 0) {
        const weeksRemaining = Math.max(1, daysLeft / 7);
        weeklySavingsNeeded = remaining / weeksRemaining;
    }
    // Determine progress color
    function getProgressColor() {
        if (isComplete) return '#22c55e' // green - complete
        ;
        if (percentage >= 75) return '#22c55e' // green
        ;
        if (percentage >= 50) return '#84cc16' // lime
        ;
        if (percentage >= 25) return '#eab308' // yellow
        ;
        return '#f97316' // orange
        ;
    }
    // Determine status
    function getStatus() {
        if (isComplete) {
            return {
                emoji: '🎉',
                message: 'Goal reached!',
                color: '#22c55e'
            };
        }
        if (isOverdue) {
            return {
                emoji: '⚠️',
                message: 'Past deadline',
                color: '#ef4444'
            };
        }
        if (percentage >= 75) {
            return {
                emoji: '🔥',
                message: 'Almost there!',
                color: '#22c55e'
            };
        }
        if (percentage >= 50) {
            return {
                emoji: '💪',
                message: 'Halfway there',
                color: '#84cc16'
            };
        }
        if (percentage >= 25) {
            return {
                emoji: '📈',
                message: 'Making progress',
                color: '#eab308'
            };
        }
        return {
            emoji: '🚀',
            message: 'Just getting started',
            color: '#f97316'
        };
    }
    const progressColor = getProgressColor();
    const status = getStatus();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Savings Goal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deadline} ${isOverdue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overdue : ''}`,
                        children: timeRemaining
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GoalProgress.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amounts,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].savedAmount,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(saved)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalAmount,
                                children: [
                                    "of ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(goal)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressFill,
                            style: {
                                width: `${percentage}%`,
                                backgroundColor: progressColor
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalProgress.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].percentage,
                                children: [
                                    percentage.toFixed(1),
                                    "% complete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            !isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].remaining,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(remaining),
                                    " to go"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GoalProgress.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusEmoji,
                                children: status.emoji
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusMessage,
                                style: {
                                    color: status.color
                                },
                                children: status.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    !isComplete && weeklySavingsNeeded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weeklyTarget,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weeklyLabel,
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weeklyAmount,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(weeklySavingsNeeded),
                                    "/week"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoalProgress.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoalProgress.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GoalProgress.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GoalProgress.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TransactionList.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amount": "TransactionList-module__O6ASsW__amount",
  "clearButton": "TransactionList-module__O6ASsW__clearButton",
  "container": "TransactionList-module__O6ASsW__container",
  "count": "TransactionList-module__O6ASsW__count",
  "date": "TransactionList-module__O6ASsW__date",
  "dateField": "TransactionList-module__O6ASsW__dateField",
  "dateInput": "TransactionList-module__O6ASsW__dateInput",
  "dateLabel": "TransactionList-module__O6ASsW__dateLabel",
  "dateRow": "TransactionList-module__O6ASsW__dateRow",
  "deleteButton": "TransactionList-module__O6ASsW__deleteButton",
  "empty": "TransactionList-module__O6ASsW__empty",
  "emptyHint": "TransactionList-module__O6ASsW__emptyHint",
  "error": "TransactionList-module__O6ASsW__error",
  "expense": "TransactionList-module__O6ASsW__expense",
  "filterRow": "TransactionList-module__O6ASsW__filterRow",
  "filterSelect": "TransactionList-module__O6ASsW__filterSelect",
  "filters": "TransactionList-module__O6ASsW__filters",
  "header": "TransactionList-module__O6ASsW__header",
  "income": "TransactionList-module__O6ASsW__income",
  "item": "TransactionList-module__O6ASsW__item",
  "itemInfo": "TransactionList-module__O6ASsW__itemInfo",
  "itemMain": "TransactionList-module__O6ASsW__itemMain",
  "itemRight": "TransactionList-module__O6ASsW__itemRight",
  "list": "TransactionList-module__O6ASsW__list",
  "loading": "TransactionList-module__O6ASsW__loading",
  "merchant": "TransactionList-module__O6ASsW__merchant",
  "meta": "TransactionList-module__O6ASsW__meta",
  "pageButton": "TransactionList-module__O6ASsW__pageButton",
  "pageInfo": "TransactionList-module__O6ASsW__pageInfo",
  "pagination": "TransactionList-module__O6ASsW__pagination",
  "retryButton": "TransactionList-module__O6ASsW__retryButton",
  "searchInput": "TransactionList-module__O6ASsW__searchInput",
  "searchRow": "TransactionList-module__O6ASsW__searchRow",
  "spin": "TransactionList-module__O6ASsW__spin",
  "spinner": "TransactionList-module__O6ASsW__spinner",
  "title": "TransactionList-module__O6ASsW__title",
});
}),
"[project]/src/components/TransactionList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TransactionList.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
// Category options for filter
const CATEGORIES = [
    'Food & Drink',
    'Shopping',
    'Transportation',
    'Entertainment',
    'Bills & Utilities',
    'Health',
    'Travel',
    'Income',
    'Transfer',
    'Other'
];
function TransactionList({ bankAccounts, onTransactionDeleted }) {
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Filters
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedAccount, setSelectedAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desc');
    // Pagination
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const limit = 20;
    const loadTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (resetPage = false)=>{
        setLoading(true);
        setError(null);
        const currentPage = resetPage ? 0 : page;
        if (resetPage) setPage(0);
        try {
            const params = new URLSearchParams();
            params.set('limit', limit.toString());
            params.set('offset', (currentPage * limit).toString());
            params.set('sort', sortOrder);
            if (selectedAccount) params.set('bank_account_id', selectedAccount);
            if (selectedCategory) params.set('category', selectedCategory);
            if (startDate) params.set('start_date', startDate);
            if (endDate) params.set('end_date', endDate);
            const response = await fetch(`/api/transactions?${params}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to load transactions');
            }
            let filtered = data.transactions || [];
            // Client-side search filter (API doesn't support text search)
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter((t)=>{
                    const merchant = (t.merchant_name || '').toLowerCase();
                    const name = (t.name || '').toLowerCase();
                    return merchant.includes(query) || name.includes(query);
                });
            }
            setTransactions(filtered);
            setTotal(data.total || 0);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load transactions');
        } finally{
            setLoading(false);
        }
    }, [
        page,
        sortOrder,
        selectedAccount,
        selectedCategory,
        startDate,
        endDate,
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadTransactions();
    }, [
        loadTransactions
    ]);
    // Reset to first page when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPage(0);
    }, [
        selectedAccount,
        selectedCategory,
        startDate,
        endDate,
        sortOrder
    ]);
    async function handleDelete(transactionId) {
        if (!confirm('Delete this transaction?')) return;
        try {
            const response = await fetch(`/api/transactions?id=${transactionId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to delete');
            }
            // Refresh list
            loadTransactions();
            onTransactionDeleted?.();
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Failed to delete transaction');
        }
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }
    function getDisplayName(tx) {
        return tx.merchant_name || tx.name || 'Unknown';
    }
    function clearFilters() {
        setSearchQuery('');
        setSelectedAccount('');
        setSelectedCategory('');
        setStartDate('');
        setEndDate('');
        setSortOrder('desc');
    }
    const hasFilters = searchQuery || selectedAccount || selectedCategory || startDate || endDate;
    const totalPages = Math.ceil(total / limit);
    const showPagination = totalPages > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "All Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            total,
                            " total"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionList.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filters,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search merchant...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearFilters,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clearButton,
                                children: "Clear filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedAccount,
                                onChange: (e)=>setSelectedAccount(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterSelect,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: account.id,
                                            children: account.name
                                        }, account.id, false, {
                                            fileName: "[project]/src/components/TransactionList.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCategory,
                                onChange: (e)=>setSelectedCategory(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterSelect,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: cat,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/components/TransactionList.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortOrder,
                                onChange: (e)=>setSortOrder(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterSelect,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "desc",
                                        children: "Newest First"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "asc",
                                        children: "Oldest First"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateInput,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateLabel,
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: startDate,
                                        onChange: (e)=>setStartDate(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateField
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateInput,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateLabel,
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: endDate,
                                        onChange: (e)=>setEndDate(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateField
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionList.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            loading && transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading transactions..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionList.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>loadTransactions(),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retryButton,
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionList.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this) : transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No transactions found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyHint,
                        children: "Try adjusting your filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionList.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                        children: transactions.map((tx)=>{
                            const isIncome = tx.amount > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemMain,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].merchant,
                                                        children: getDisplayName(tx)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionList.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                                        children: [
                                                            tx.category || 'Uncategorized',
                                                            tx.bank_accounts && ` • ${tx.bank_accounts.name}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/TransactionList.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionList.tsx",
                                                lineNumber: 281,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemRight,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amount} ${isIncome ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].income : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expense}`,
                                                        children: [
                                                            isIncome ? '+' : '',
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(tx.amount)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/TransactionList.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                                        children: formatDate(tx.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TransactionList.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TransactionList.tsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(tx.id),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                        title: "Delete transaction",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TransactionList.tsx",
                                        lineNumber: 295,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, tx.id, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 279,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    showPagination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pagination,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.max(0, p - 1)),
                                disabled: page === 0,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton,
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageInfo,
                                children: [
                                    "Page ",
                                    page + 1,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPage((p)=>Math.min(totalPages - 1, p + 1)),
                                disabled: page >= totalPages - 1,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionList.tsx",
                                lineNumber: 320,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionList.tsx",
                        lineNumber: 309,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TransactionList.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WeeklyReview.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "allowanceLabel": "WeeklyReview-module__qu8EEW__allowanceLabel",
  "barContainer": "WeeklyReview-module__qu8EEW__barContainer",
  "barFill": "WeeklyReview-module__qu8EEW__barFill",
  "barLabels": "WeeklyReview-module__qu8EEW__barLabels",
  "better": "WeeklyReview-module__qu8EEW__better",
  "biggestPurchase": "WeeklyReview-module__qu8EEW__biggestPurchase",
  "closeButton": "WeeklyReview-module__qu8EEW__closeButton",
  "comparison": "WeeklyReview-module__qu8EEW__comparison",
  "comparisonBetter": "WeeklyReview-module__qu8EEW__comparisonBetter",
  "comparisonCard": "WeeklyReview-module__qu8EEW__comparisonCard",
  "comparisonDetails": "WeeklyReview-module__qu8EEW__comparisonDetails",
  "comparisonIcon": "WeeklyReview-module__qu8EEW__comparisonIcon",
  "comparisonPercent": "WeeklyReview-module__qu8EEW__comparisonPercent",
  "comparisonSame": "WeeklyReview-module__qu8EEW__comparisonSame",
  "comparisonSection": "WeeklyReview-module__qu8EEW__comparisonSection",
  "comparisonValue": "WeeklyReview-module__qu8EEW__comparisonValue",
  "comparisonWorse": "WeeklyReview-module__qu8EEW__comparisonWorse",
  "container": "WeeklyReview-module__qu8EEW__container",
  "expandHint": "WeeklyReview-module__qu8EEW__expandHint",
  "fadeIn": "WeeklyReview-module__qu8EEW__fadeIn",
  "generateButton": "WeeklyReview-module__qu8EEW__generateButton",
  "goalBar": "WeeklyReview-module__qu8EEW__goalBar",
  "goalCurrent": "WeeklyReview-module__qu8EEW__goalCurrent",
  "goalFill": "WeeklyReview-module__qu8EEW__goalFill",
  "goalLabels": "WeeklyReview-module__qu8EEW__goalLabels",
  "goalPercent": "WeeklyReview-module__qu8EEW__goalPercent",
  "goalProgress": "WeeklyReview-module__qu8EEW__goalProgress",
  "goalTarget": "WeeklyReview-module__qu8EEW__goalTarget",
  "gradeCircle": "WeeklyReview-module__qu8EEW__gradeCircle",
  "gradeDetails": "WeeklyReview-module__qu8EEW__gradeDetails",
  "gradeDisplay": "WeeklyReview-module__qu8EEW__gradeDisplay",
  "gradeLetter": "WeeklyReview-module__qu8EEW__gradeLetter",
  "gradePercentage": "WeeklyReview-module__qu8EEW__gradePercentage",
  "gradeSection": "WeeklyReview-module__qu8EEW__gradeSection",
  "gradeSubtext": "WeeklyReview-module__qu8EEW__gradeSubtext",
  "gradeTitle": "WeeklyReview-module__qu8EEW__gradeTitle",
  "header": "WeeklyReview-module__qu8EEW__header",
  "largeGradeCircle": "WeeklyReview-module__qu8EEW__largeGradeCircle",
  "largeGradeLetter": "WeeklyReview-module__qu8EEW__largeGradeLetter",
  "lastWeekGrade": "WeeklyReview-module__qu8EEW__lastWeekGrade",
  "lastWeekInfo": "WeeklyReview-module__qu8EEW__lastWeekInfo",
  "lastWeekLabel": "WeeklyReview-module__qu8EEW__lastWeekLabel",
  "lastWeekValue": "WeeklyReview-module__qu8EEW__lastWeekValue",
  "loading": "WeeklyReview-module__qu8EEW__loading",
  "modal": "WeeklyReview-module__qu8EEW__modal",
  "modalContent": "WeeklyReview-module__qu8EEW__modalContent",
  "modalHeader": "WeeklyReview-module__qu8EEW__modalHeader",
  "modalOverlay": "WeeklyReview-module__qu8EEW__modalOverlay",
  "modalTitle": "WeeklyReview-module__qu8EEW__modalTitle",
  "noComparison": "WeeklyReview-module__qu8EEW__noComparison",
  "preview": "WeeklyReview-module__qu8EEW__preview",
  "purchaseAmount": "WeeklyReview-module__qu8EEW__purchaseAmount",
  "purchaseIcon": "WeeklyReview-module__qu8EEW__purchaseIcon",
  "purchaseInfo": "WeeklyReview-module__qu8EEW__purchaseInfo",
  "purchaseName": "WeeklyReview-module__qu8EEW__purchaseName",
  "quickStats": "WeeklyReview-module__qu8EEW__quickStats",
  "section": "WeeklyReview-module__qu8EEW__section",
  "sectionTitle": "WeeklyReview-module__qu8EEW__sectionTitle",
  "slideUp": "WeeklyReview-module__qu8EEW__slideUp",
  "spendingBar": "WeeklyReview-module__qu8EEW__spendingBar",
  "spentLabel": "WeeklyReview-module__qu8EEW__spentLabel",
  "spin": "WeeklyReview-module__qu8EEW__spin",
  "spinner": "WeeklyReview-module__qu8EEW__spinner",
  "stat": "WeeklyReview-module__qu8EEW__stat",
  "statLabel": "WeeklyReview-module__qu8EEW__statLabel",
  "statValue": "WeeklyReview-module__qu8EEW__statValue",
  "title": "WeeklyReview-module__qu8EEW__title",
  "worse": "WeeklyReview-module__qu8EEW__worse",
});
}),
"[project]/src/components/WeeklyReview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeeklyReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/WeeklyReview.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function WeeklyReview({ currentGrade, currentGradeColor, currentSpent, currentAllowance, currentGoalAmount, currentSaved, refreshKey }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastWeekSummary, setLastWeekSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [biggestPurchase, setBiggestPurchase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        refreshKey
    ]);
    async function loadData() {
        setLoading(true);
        try {
            // Load last week's summary for comparison
            const { data: summaries } = await supabase.from('weekly_summaries').select('*').order('week_start', {
                ascending: false
            }).limit(2);
            // The first one might be current week, so check dates
            const now = new Date();
            const currentWeekStart = getMonday(now);
            const lastWeek = summaries?.find((s)=>new Date(s.week_start) < currentWeekStart);
            if (lastWeek) {
                setLastWeekSummary(lastWeek);
            }
            // Load biggest purchase for current week
            const weekStart = formatDate(currentWeekStart);
            const weekEnd = formatDate(getSunday(now));
            const { data: transactions } = await supabase.from('transactions').select('amount, name, merchant_name').gte('date', weekStart).lte('date', weekEnd).lt('amount', 0).order('amount', {
                ascending: true
            }).limit(1);
            if (transactions && transactions.length > 0) {
                const tx = transactions[0];
                setBiggestPurchase({
                    name: tx.merchant_name || tx.name || 'Unknown',
                    amount: Math.abs(tx.amount)
                });
            }
        } catch (error) {
            console.error('Failed to load weekly review data:', error);
        }
        setLoading(false);
    }
    async function handleGenerateSummary() {
        setGenerating(true);
        try {
            const response = await fetch('/api/weekly-summary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
            if (response.ok) {
                await loadData();
            }
        } catch (error) {
            console.error('Failed to generate summary:', error);
        }
        setGenerating(false);
    }
    function getMonday(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        d.setDate(diff);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    function getSunday(date) {
        const monday = getMonday(date);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        return sunday;
    }
    function formatDate(date) {
        return date.toISOString().split('T')[0];
    }
    function getComparison() {
        if (!lastWeekSummary || lastWeekSummary.total_spent === null) return null;
        const lastSpent = lastWeekSummary.total_spent;
        const diff = currentSpent - lastSpent;
        const diffPercent = lastSpent > 0 ? diff / lastSpent * 100 : 0;
        return {
            spentDiff: diff,
            spentDiffPercent: Math.abs(diffPercent),
            direction: diff < 0 ? 'better' : diff > 0 ? 'worse' : 'same'
        };
    }
    function getGoalProgress() {
        if (!currentGoalAmount || currentGoalAmount === 0) return 0;
        const saved = currentSaved || 0;
        return Math.min(100, saved / currentGoalAmount * 100);
    }
    const comparison = getComparison();
    const goalProgress = getGoalProgress();
    const spentPercentage = currentAllowance > 0 ? currentSpent / currentAllowance * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                onClick: ()=>setShowModal(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "Weekly Review"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expandHint,
                                children: "Click to expand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeeklyReview.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeeklyReview.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeeklyReview.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].preview,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeCircle,
                                        style: {
                                            backgroundColor: currentGradeColor
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeLetter,
                                            children: currentGrade
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeSubtext,
                                        children: "This Week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentSpent)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: [
                                                    "of ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentAllowance)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    comparison && comparison.direction !== 'same' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparison} ${comparison.direction === 'better' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].better : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].worse}`,
                                        children: [
                                            comparison.direction === 'better' ? '-' : '+',
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(comparison.spentDiff)),
                                            " vs last week"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeeklyReview.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeeklyReview.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                onClick: ()=>setShowModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: "Weekly Review"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                                    onClick: ()=>setShowModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WeeklyReview.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeDisplay,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].largeGradeCircle,
                                            style: {
                                                backgroundColor: currentGradeColor
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].largeGradeLetter,
                                                children: currentGrade
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeeklyReview.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeDetails,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeTitle,
                                                    children: "Weekly Grade"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradePercentage,
                                                    children: [
                                                        spentPercentage.toFixed(0),
                                                        "% of allowance used"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Spending"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spendingBar,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barContainer,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill,
                                                        style: {
                                                            width: `${Math.min(100, spentPercentage)}%`,
                                                            backgroundColor: currentGradeColor
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabels,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spentLabel,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentSpent),
                                                                " spent"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].allowanceLabel,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentAllowance),
                                                                " budget"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                biggestPurchase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Biggest Purchase"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].biggestPurchase,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].purchaseIcon,
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].purchaseInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].purchaseName,
                                                            children: biggestPurchase.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].purchaseAmount,
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(biggestPurchase.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this),
                                currentGoalAmount && currentGoalAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Savings Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalProgress,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalBar,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalFill,
                                                        style: {
                                                            width: `${goalProgress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WeeklyReview.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalLabels,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalCurrent,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentSaved || 0),
                                                                " saved"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalTarget,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(currentGoalAmount),
                                                                " goal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalPercent,
                                                    children: [
                                                        goalProgress.toFixed(0),
                                                        "% complete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Week-over-Week"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        comparison ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonSection,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonCard} ${comparison.direction === 'better' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonBetter : comparison.direction === 'worse' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonWorse : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonSame}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonIcon,
                                                            children: comparison.direction === 'better' ? '-' : comparison.direction === 'worse' ? '+' : '='
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonDetails,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonValue,
                                                                    children: comparison.direction === 'same' ? 'Same as last week' : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(comparison.spentDiff))} ${comparison.direction === 'better' ? 'less' : 'more'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 25
                                                                }, this),
                                                                comparison.direction !== 'same' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparisonPercent,
                                                                    children: [
                                                                        comparison.spentDiffPercent.toFixed(0),
                                                                        "%",
                                                                        ' ',
                                                                        comparison.direction === 'better' ? 'decrease' : 'increase'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this),
                                                lastWeekSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastWeekInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastWeekLabel,
                                                            children: "Last week:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastWeekValue,
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(lastWeekSummary.total_spent || 0),
                                                                " spent",
                                                                lastWeekSummary.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastWeekGrade,
                                                                    children: [
                                                                        "(Grade: ",
                                                                        lastWeekSummary.grade,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noComparison,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "No previous week data available."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].generateButton,
                                                    onClick: handleGenerateSummary,
                                                    disabled: generating,
                                                    children: generating ? 'Generating...' : 'Generate Weekly Summary'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeeklyReview.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeeklyReview.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WeeklyReview.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WeeklyReview.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WeeklyReview.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/dashboard/dashboard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
  "loading": "dashboard-module__XABe8G__loading",
  "main": "dashboard-module__XABe8G__main",
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
"[project]/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImportButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecentTransactions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AllowanceTracker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpendingChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoalProgress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TransactionList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeeklyReview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/dashboard.module.css [app-ssr] (css module)");
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
;
;
;
;
;
;
function Dashboard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bankAccounts, setBankAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imports, setImports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dashboardData, setDashboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddAccount, setShowAddAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAccountName, setNewAccountName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAccountType, setNewAccountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [addingAccount, setAddingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transactionsKey, setTransactionsKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    async function loadDashboardData() {
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardData"])(supabase);
            setDashboardData(data);
        } catch (error) {
            console.error('Failed to load dashboard data:', error);
        }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkAuthAndLoadData() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
                return;
            }
            await Promise.all([
                loadBankAccounts(),
                loadImports(),
                loadDashboardData()
            ]);
            setLoading(false);
        }
        checkAuthAndLoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
        loadDashboardData(); // Refresh allowance data
        setTransactionsKey((prev)=>prev + 1); // Refresh transactions
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSignOut: handleSignOut
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Track your spending and stay on budget"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        dashboardData && !dashboardData.hasSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warningBanner,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warningIcon,
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warningText,
                                    children: "Set up your income and savings goal to track your weekly allowance."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/settings",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warningLink,
                                    children: "Configure Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        dashboardData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AllowanceTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    spent: dashboardData.totalSpent,
                                    allowance: dashboardData.weeklyAllowance,
                                    remaining: dashboardData.remainingAllowance
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeCircle,
                                            style: {
                                                backgroundColor: dashboardData.grade.color
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeLetter,
                                                children: dashboardData.grade.grade
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeLabel,
                                                    children: "Weekly Grade"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeMessage,
                                                    children: dashboardData.grade.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseEmoji,
                                            children: dashboardData.pulseStatus.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseLabel,
                                                    children: "Spending Pace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseMessage,
                                                    style: {
                                                        color: dashboardData.pulseStatus.color
                                                    },
                                                    children: dashboardData.pulseStatus.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStatsCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStatLabel,
                                                    children: "This Week"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStatValue,
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dashboardData.totalSpent),
                                                        " spent"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStatLabel,
                                                    children: "Daily Budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickStatValue,
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dashboardData.dailyAllowance),
                                                        "/day"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftColumn,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Import Transactions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Add a bank account first to start importing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    bankAccounts: bankAccounts,
                                                    onImportComplete: handleImportComplete
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                                    children: "Bank Accounts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowAddAccount(!showAddAccount),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addButton,
                                                                    children: showAddAccount ? 'Cancel' : '+ Add'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 19
                                                        }, this),
                                                        showAddAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                            onSubmit: handleAddAccount,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addAccountForm,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Account name (e.g., Chase Checking)",
                                                                    value: newAccountName,
                                                                    onChange: (e)=>setNewAccountName(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                                    disabled: addingAccount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: newAccountType,
                                                                    onChange: (e)=>setNewAccountType(e.target.value),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                                                    disabled: addingAccount,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "checking",
                                                                            children: "Checking"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "savings",
                                                                            children: "Savings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "credit",
                                                                            children: "Credit Card"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                                                    disabled: addingAccount || !newAccountName.trim(),
                                                                    children: addingAccount ? 'Adding...' : 'Add Account'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, this),
                                                        bankAccounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No accounts yet. Add one to get started."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountList,
                                                            children: bankAccounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountItem,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountInfo,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountName,
                                                                                children: account.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountType,
                                                                                children: account.type
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                lineNumber: 311,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 309,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, account.id, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                            children: "Recent Imports"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this),
                                                        imports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No imports yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importList,
                                                            children: imports.map((imp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importItem,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importInfo,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importFilename,
                                                                                    children: imp.filename
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                    lineNumber: 332,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importMeta,
                                                                                    children: [
                                                                                        imp.transaction_count,
                                                                                        " transactions",
                                                                                        imp.bank_accounts && ` to ${imp.bank_accounts.name}`
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                    lineNumber: 333,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].importDate,
                                                                            children: new Date(imp.created_at).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, imp.id, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            bankAccounts: bankAccounts,
                                            onTransactionDeleted: ()=>{
                                                loadDashboardData();
                                                setTransactionsKey((prev)=>prev + 1);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightColumn,
                                    children: [
                                        dashboardData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    currentGrade: dashboardData.grade.grade,
                                                    currentGradeColor: dashboardData.grade.color,
                                                    currentSpent: dashboardData.totalSpent,
                                                    currentAllowance: dashboardData.weeklyAllowance,
                                                    currentGoalAmount: dashboardData.settings?.savings_goal ?? null,
                                                    currentSaved: dashboardData.settings?.current_saved ?? null,
                                                    refreshKey: transactionsKey
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    goalAmount: dashboardData.settings?.savings_goal ?? null,
                                                    currentSaved: dashboardData.settings?.current_saved ?? null,
                                                    deadline: dashboardData.settings?.goal_deadline ?? null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendingChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    data: dashboardData.spendingByCategory,
                                                    totalSpent: dashboardData.totalSpent
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentTransactions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            limit: 15
                                        }, transactionsKey, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "Made with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heart,
                        children: "♥"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 389,
                        columnNumber: 19
                    }, this),
                    " by Josiah"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34b3a267._.js.map