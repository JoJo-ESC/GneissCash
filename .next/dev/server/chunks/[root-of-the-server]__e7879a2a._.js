module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "createServerClient",
    ()=>createServerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://ukyamyojzvdgxhqsyewd.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_qdC_j8mxUzL-oS7VcSudrQ_0j18Fo-U"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing sessions.
                }
            }
        }
    });
}
async function createServerClient() {
    return createClient();
}
}),
"[project]/src/lib/analytics/spendMix.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyTransaction",
    ()=>classifyTransaction,
    "summarizeSpendMix",
    ()=>summarizeSpendMix
]);
const ESSENTIAL_CATEGORY_KEYWORDS = [
    'rent',
    'mortgage',
    'housing',
    'utility',
    'utilities',
    'electric',
    'electricity',
    'water',
    'gas bill',
    'gas utility',
    'internet',
    'phone',
    'cellular',
    'mobile service',
    'insurance',
    'medical',
    'health',
    'dental',
    'vision',
    'pharmacy',
    'prescription',
    'education',
    'tuition',
    'textbook',
    'student loan',
    'fees',
    'transportation',
    'public transit',
    'transit',
    'bus',
    'rail',
    'metro',
    'fuel',
    'gasoline',
    'grocery',
    'groceries',
    'supermarket',
    'market',
    'wholesale club',
    'childcare',
    'child care',
    'daycare',
    'baby'
];
const ESSENTIAL_MERCHANT_KEYWORDS = [
    // Housing & utilities
    'con ed',
    'consolidated edison',
    'national grid',
    'verizon',
    'spectrum',
    'xfinity',
    'comcast',
    'att',
    'at&t',
    't-mobile',
    'tmobile',
    'fios',
    'directv',
    'geico',
    'state farm',
    'progressive',
    'allstate',
    'liberty mutual',
    'metlife',
    'kaiser',
    'blue cross',
    'united healthcare',
    // Groceries
    'walmart',
    'walmart supercenter',
    'walmart neighborhood',
    'whole foods',
    'trader joe',
    'costco',
    'aldi',
    'kroger',
    'publix',
    'heb',
    'safeway',
    'meijer',
    'target',
    'wegmans',
    'food lion',
    'winco',
    'bj\'s',
    'sam\'s club',
    'stop & shop',
    'giant food',
    'raley',
    'vons',
    'fred meyer',
    'trader joe\'s',
    'piggly wiggly',
    'tops friendly',
    'shoprite',
    'food town',
    '99 ranch',
    'h mart',
    // Transit & fuel
    'mta',
    'path',
    'bart',
    'metrocard',
    'metra',
    'cta',
    'mbta',
    'octa',
    'transit authority',
    'shell',
    'exxon',
    'bp ',
    'chevron',
    'mobil',
    'sunoco',
    'speedway',
    'valero',
    'wawa',
    'sheetz',
    'quiktrip',
    'racetrac',
    'circle k',
    '7-eleven',
    '7 eleven',
    'pilot travel',
    'love\'s travel'
];
const FLEX_CATEGORY_KEYWORDS = [
    'restaurant',
    'dining',
    'fast food',
    'bar',
    'coffee',
    'alcohol',
    'entertainment',
    'subscription',
    'shopping',
    'fashion',
    'electronics',
    'gift',
    'travel',
    'vacation',
    'gaming',
    'food and drink',
    'nightlife',
    'movie',
    'cinema',
    'concert'
];
function normalize(value) {
    return (value || '').toLowerCase();
}
function containsKeyword(text, keywords) {
    return keywords.some((keyword)=>text.includes(keyword));
}
function scoreCategories(category, merchant) {
    const score = {
        essential: 0,
        flex: 0
    };
    if (containsKeyword(category, ESSENTIAL_CATEGORY_KEYWORDS)) {
        score.essential += 2;
    }
    if (containsKeyword(merchant, ESSENTIAL_CATEGORY_KEYWORDS)) {
        score.essential += 1;
    }
    if (containsKeyword(merchant, ESSENTIAL_MERCHANT_KEYWORDS)) {
        score.essential += 3;
    }
    if (containsKeyword(category, FLEX_CATEGORY_KEYWORDS)) {
        score.flex += 2;
    }
    if (containsKeyword(merchant, FLEX_CATEGORY_KEYWORDS)) {
        score.flex += 2;
    }
    return score;
}
function applyManualOverrides(merchant) {
    if (merchant.includes('landlord') || merchant.includes('property management')) {
        return 'essential';
    }
    if (merchant.includes('spotify') || merchant.includes('netflix') || merchant.includes('hulu')) {
        return 'flex';
    }
    return null;
}
function classifyTransaction(transaction) {
    if (transaction.amount >= 0) {
        return 'flex';
    }
    const category = normalize(transaction.category);
    const merchant = normalize(transaction.merchant_name);
    const name = normalize(transaction.name);
    const combinedMerchant = [
        merchant,
        name
    ].filter(Boolean).join(' ');
    const override = applyManualOverrides(combinedMerchant);
    if (override) {
        return override;
    }
    const score = scoreCategories(category, combinedMerchant);
    if (score.essential >= 3 && score.flex <= score.essential) {
        return 'essential';
    }
    if (score.flex >= 2 && score.flex > score.essential) {
        return 'flex';
    }
    if (containsKeyword(category, ESSENTIAL_CATEGORY_KEYWORDS)) {
        return 'essential';
    }
    return 'flex';
}
function summarizeSpendMix(transactions) {
    const totals = {
        essential: 0,
        flex: 0,
        total: 0,
        essentialPct: 0,
        flexPct: 0
    };
    const flexCategoryMap = new Map();
    transactions.forEach((transaction)=>{
        if (transaction.amount >= 0) {
            return;
        }
        const classification = classifyTransaction(transaction);
        const amount = Math.abs(transaction.amount);
        if (classification === 'essential') {
            totals.essential += amount;
        } else {
            totals.flex += amount;
            const categoryKey = normalize(transaction.category) || 'other';
            const current = flexCategoryMap.get(categoryKey) || 0;
            flexCategoryMap.set(categoryKey, current + amount);
        }
    });
    totals.total = totals.essential + totals.flex;
    if (totals.total > 0) {
        totals.essentialPct = Math.round(totals.essential / totals.total * 1000) / 10;
        totals.flexPct = Math.round(totals.flex / totals.total * 1000) / 10;
    }
    const breakdown = [
        {
            classification: 'essential',
            label: 'Essentials',
            amount: Math.round(totals.essential * 100) / 100,
            percentage: totals.total > 0 ? totals.essentialPct : 0
        },
        {
            classification: 'flex',
            label: 'Everything Else',
            amount: Math.round(totals.flex * 100) / 100,
            percentage: totals.total > 0 ? totals.flexPct : 0
        }
    ];
    const topFlexCategories = Array.from(flexCategoryMap.entries()).sort((a, b)=>b[1] - a[1]).slice(0, 5).map(([categoryKey, amount])=>({
            category: categoryKey === 'other' ? 'Other' : categoryKey.replace(/_/g, ' ').replace(/\b[a-z]/g, (match)=>match.toUpperCase()),
            amount: Math.round(amount * 100) / 100,
            percentage: totals.flex > 0 ? Math.round(amount / totals.flex * 1000) / 10 : 0
        }));
    return {
        totals: {
            ...totals,
            essential: Math.round(totals.essential * 100) / 100,
            flex: Math.round(totals.flex * 100) / 100,
            total: Math.round(totals.total * 100) / 100
        },
        breakdown,
        topFlexCategories
    };
}
}),
"[project]/src/app/api/spend-mix/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/eachMonthOfInterval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isValid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2f$spendMix$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics/spendMix.ts [app-route] (ecmascript)");
;
;
;
;
const RANGE_TO_MONTHS = {
    '3m': 3,
    '6m': 6,
    '12m': 12
};
function resolveMonthSpan(range) {
    if (!range) return RANGE_TO_MONTHS['6m'];
    const normalized = range.toLowerCase();
    if (RANGE_TO_MONTHS[normalized]) return RANGE_TO_MONTHS[normalized];
    const parsed = parseInt(normalized, 10);
    if (!Number.isNaN(parsed) && parsed > 0) {
        return Math.min(parsed, 24);
    }
    return RANGE_TO_MONTHS['6m'];
}
function sanitizeEndDate(param) {
    if (!param) return null;
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseISO"])(param);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValid"])(parsed)) return null;
    return parsed;
}
async function GET(request) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(request.url);
        const rangeParam = searchParams.get('range');
        const months = resolveMonthSpan(rangeParam);
        const explicitEnd = sanitizeEndDate(searchParams.get('end'));
        const today = explicitEnd ?? new Date();
        const periodEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endOfMonth"])(today);
        const periodStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])(periodEnd, months - 1));
        const { data, error } = await supabase.from('transactions').select('amount, category, merchant_name, name, date').eq('user_id', user.id).lt('amount', 0).gte('date', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(periodStart, 'yyyy-MM-dd')).lte('date', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(periodEnd, 'yyyy-MM-dd')).order('date', {
            ascending: false
        });
        if (error) {
            console.error('Failed to load spending split:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to load spending split'
            }, {
                status: 500
            });
        }
        const transactions = (data || []).map((transaction)=>({
                amount: transaction.amount,
                category: transaction.category,
                merchant_name: transaction.merchant_name,
                name: transaction.name,
                date: transaction.date
            }));
        const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2f$spendMix$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["summarizeSpendMix"])(transactions);
        const buckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachMonthOfInterval"])({
            start: periodStart,
            end: periodEnd
        }).length;
        const response = {
            range: {
                start: periodStart.toISOString(),
                end: periodEnd.toISOString(),
                grouping: 'month',
                buckets
            },
            totals: summary.totals,
            breakdown: summary.breakdown,
            topFlexCategories: summary.topFlexCategories,
            metadata: {
                generatedAt: new Date().toISOString()
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
    } catch (error) {
        console.error('Error building spending split:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7879a2a._.js.map