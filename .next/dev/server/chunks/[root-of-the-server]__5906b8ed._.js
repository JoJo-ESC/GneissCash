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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/src/lib/parsers/csv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCSV",
    ()=>parseCSV,
    "parseDiscoverCSV",
    ()=>parseDiscoverCSV,
    "parseGenericCSV",
    ()=>parseGenericCSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.js [app-route] (ecmascript)");
;
function parseDiscoverCSV(csvContent) {
    const errors = [];
    const transactions = [];
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header)=>header.trim()
    });
    if (result.errors.length > 0) {
        result.errors.forEach((err)=>{
            errors.push(`Row ${err.row}: ${err.message}`);
        });
    }
    for (const row of result.data){
        try {
            const dateStr = row['Trans. Date'];
            if (!dateStr) continue;
            // Parse MM/DD/YYYY to YYYY-MM-DD
            const date = parseUSDate(dateStr);
            if (!date) {
                errors.push(`Invalid date: ${dateStr}`);
                continue;
            }
            // Discover: positive = expense, negative = payment/credit
            // We want: negative = expense, positive = income
            const rawAmount = parseFloat(row.Amount);
            if (isNaN(rawAmount)) {
                errors.push(`Invalid amount: ${row.Amount}`);
                continue;
            }
            const amount = -rawAmount // Flip sign for our convention
            ;
            const description = row.Description?.trim() || 'Unknown';
            const merchantName = extractMerchantName(description);
            const csvCategory = row.Category?.trim();
            transactions.push({
                date,
                name: description,
                merchant_name: merchantName,
                amount,
                category: csvCategory || categorizeByMerchant(merchantName, amount)
            });
        } catch (err) {
            errors.push(`Failed to parse row: ${JSON.stringify(row)}`);
        }
    }
    return {
        transactions,
        errors
    };
}
function parseGenericCSV(csvContent) {
    const errors = [];
    const transactions = [];
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header)=>header.trim().toLowerCase()
    });
    if (result.errors.length > 0) {
        result.errors.forEach((err)=>{
            errors.push(`Row ${err.row}: ${err.message}`);
        });
    }
    // Detect column mappings
    const headers = Object.keys(result.data[0] || {});
    const dateCol = headers.find((h)=>[
            'date',
            'trans. date',
            'transaction date',
            'trans date',
            'posted date'
        ].includes(h));
    const descCol = headers.find((h)=>[
            'description',
            'merchant',
            'name',
            'memo',
            'payee'
        ].includes(h));
    const amountCol = headers.find((h)=>[
            'amount',
            'transaction amount'
        ].includes(h));
    const debitCol = headers.find((h)=>[
            'debit',
            'withdrawal',
            'withdrawals'
        ].includes(h));
    const creditCol = headers.find((h)=>[
            'credit',
            'deposit',
            'deposits'
        ].includes(h));
    const categoryCol = headers.find((h)=>[
            'category',
            'type'
        ].includes(h));
    if (!dateCol) {
        errors.push('Could not find date column');
        return {
            transactions,
            errors
        };
    }
    if (!descCol) {
        errors.push('Could not find description column');
        return {
            transactions,
            errors
        };
    }
    if (!amountCol && !debitCol && !creditCol) {
        errors.push('Could not find amount column');
        return {
            transactions,
            errors
        };
    }
    for (const row of result.data){
        try {
            const dateStr = row[dateCol];
            if (!dateStr) continue;
            const date = parseUSDate(dateStr);
            if (!date) {
                errors.push(`Invalid date: ${dateStr}`);
                continue;
            }
            let amount;
            if (amountCol && row[amountCol]) {
                amount = parseAmount(row[amountCol]);
            } else {
                // Handle separate debit/credit columns
                const debit = debitCol ? parseAmount(row[debitCol] || '0') : 0;
                const credit = creditCol ? parseAmount(row[creditCol] || '0') : 0;
                amount = credit - debit; // credits positive, debits negative
            }
            if (isNaN(amount)) {
                errors.push(`Invalid amount in row`);
                continue;
            }
            const description = row[descCol]?.trim() || 'Unknown';
            const merchantName = extractMerchantName(description);
            const csvCategory = categoryCol ? row[categoryCol]?.trim() : null;
            transactions.push({
                date,
                name: description,
                merchant_name: merchantName,
                amount,
                category: csvCategory || categorizeByMerchant(merchantName, amount)
            });
        } catch (err) {
            errors.push(`Failed to parse row: ${JSON.stringify(row)}`);
        }
    }
    return {
        transactions,
        errors
    };
}
function parseCSV(csvContent) {
    // Check first line for format detection
    const firstLine = csvContent.split('\n')[0]?.toLowerCase() || '';
    if (firstLine.includes('trans. date') && firstLine.includes('post date')) {
        return parseDiscoverCSV(csvContent);
    }
    return parseGenericCSV(csvContent);
}
// Helper: Parse US date format (MM/DD/YYYY) to ISO (YYYY-MM-DD)
function parseUSDate(dateStr) {
    const cleaned = dateStr.trim();
    // Try MM/DD/YYYY
    const usMatch = cleaned.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (usMatch) {
        const [, month, day, year] = usMatch;
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    // Try YYYY-MM-DD (already ISO)
    const isoMatch = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
        return cleaned;
    }
    return null;
}
// Helper: Parse amount string to number (handles $, commas, parentheses for negatives)
function parseAmount(amountStr) {
    let cleaned = amountStr.trim();
    // Handle parentheses as negative: (100.00) -> -100.00
    const isNegative = cleaned.startsWith('(') && cleaned.endsWith(')');
    if (isNegative) {
        cleaned = cleaned.slice(1, -1);
    }
    // Remove $ and commas
    cleaned = cleaned.replace(/[$,]/g, '');
    let amount = parseFloat(cleaned);
    if (isNegative) {
        amount = -Math.abs(amount);
    }
    return amount;
}
// Helper: Extract merchant name from description
function extractMerchantName(description) {
    // Take first part before common separators
    const parts = description.split(/\s{2,}|#|\*|APPLE PAY ENDING/i);
    return parts[0]?.trim() || description;
}
// Auto-categorize based on merchant name
function categorizeByMerchant(merchantName, amount) {
    const name = merchantName.toLowerCase();
    // Income detection (positive amounts or specific keywords)
    if (amount > 0) {
        if (name.includes('payroll') || name.includes('direct dep') || name.includes('salary') || name.includes('employer') || name.includes('wage')) {
            return 'Income';
        }
        if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') || name.includes('cash app') || name.includes('paypal')) {
            return 'Transfer';
        }
        return 'Income';
    }
    // Food & Drink
    if (name.includes('mcdonald') || name.includes('burger') || name.includes('wendy') || name.includes('taco bell') || name.includes('chipotle') || name.includes('subway') || name.includes('starbucks') || name.includes('dunkin') || name.includes('coffee') || name.includes('pizza') || name.includes('domino') || name.includes('papa john') || name.includes('grubhub') || name.includes('doordash') || name.includes('uber eat') || name.includes('postmates') || name.includes('restaurant') || name.includes('cafe') || name.includes('diner') || name.includes('grill') || name.includes('kitchen') || name.includes('bakery') || name.includes('chick-fil') || name.includes('popeye') || name.includes('kfc') || name.includes('arby') || name.includes('sonic') || name.includes('panera') || name.includes('noodle') || name.includes('sushi') || name.includes('panda express') || name.includes('five guys') || name.includes('in-n-out') || name.includes('whataburger') || name.includes('jack in the box') || name.includes('del taco') || name.includes('wingstop') || name.includes('buffalo wild') || name.includes('ihop') || name.includes('denny') || name.includes('waffle') || name.includes('cracker barrel') || name.includes('applebee') || name.includes('chili') || name.includes('olive garden') || name.includes('red lobster') || name.includes('outback') || name.includes('texas roadhouse') || name.includes('longhorn') || name.includes('cheesecake factory') || name.includes('pf chang')) {
        return 'Food & Drink';
    }
    // Groceries (part of Food & Drink)
    if (name.includes('walmart') || name.includes('target') || name.includes('kroger') || name.includes('safeway') || name.includes('publix') || name.includes('whole foods') || name.includes('trader joe') || name.includes('aldi') || name.includes('costco') || name.includes('sam\'s club') || name.includes('grocery') || name.includes('market') || name.includes('food lion') || name.includes('giant') || name.includes('wegmans') || name.includes('heb') || name.includes('meijer') || name.includes('sprouts') || name.includes('fresh') || name.includes('albertson') || name.includes('vons') || name.includes('ralph') || name.includes('food')) {
        return 'Food & Drink';
    }
    // Shopping
    if (name.includes('amazon') || name.includes('ebay') || name.includes('etsy') || name.includes('best buy') || name.includes('apple store') || name.includes('microsoft') || name.includes('nike') || name.includes('adidas') || name.includes('foot locker') || name.includes('nordstrom') || name.includes('macy') || name.includes('jcpenney') || name.includes('kohl') || name.includes('ross') || name.includes('tj maxx') || name.includes('marshalls') || name.includes('burlington') || name.includes('old navy') || name.includes('gap') || name.includes('h&m') || name.includes('zara') || name.includes('forever 21') || name.includes('urban outfitters') || name.includes('home depot') || name.includes('lowe') || name.includes('ikea') || name.includes('bed bath') || name.includes('pottery barn') || name.includes('williams sonoma') || name.includes('crate') || name.includes('dollar') || name.includes('five below') || name.includes('big lots') || name.includes('walgreens') || name.includes('cvs') || name.includes('rite aid') || name.includes('ulta') || name.includes('sephora') || name.includes('bath & body') || name.includes('victoria') || name.includes('shop') || name.includes('store') || name.includes('mall') || name.includes('outlet')) {
        return 'Shopping';
    }
    // Transportation
    if (name.includes('uber') || name.includes('lyft') || name.includes('taxi') || name.includes('gas') || name.includes('shell') || name.includes('exxon') || name.includes('chevron') || name.includes('bp') || name.includes('mobil') || name.includes('sunoco') || name.includes('speedway') || name.includes('wawa') || name.includes('sheetz') || name.includes('quiktrip') || name.includes('racetrac') || name.includes('circle k') || name.includes('7-eleven') || name.includes('fuel') || name.includes('petro') || name.includes('parking') || name.includes('toll') || name.includes('metro') || name.includes('transit') || name.includes('bus') || name.includes('train') || name.includes('amtrak') || name.includes('greyhound') || name.includes('autozone') || name.includes('advance auto') || name.includes('o\'reilly') || name.includes('jiffy lube') || name.includes('valvoline') || name.includes('car wash') || name.includes('tire') || name.includes('mechanic') || name.includes('auto')) {
        return 'Transportation';
    }
    // Entertainment
    if (name.includes('netflix') || name.includes('hulu') || name.includes('disney') || name.includes('hbo') || name.includes('spotify') || name.includes('apple music') || name.includes('youtube') || name.includes('amazon prime') || name.includes('paramount') || name.includes('peacock') || name.includes('amc') || name.includes('regal') || name.includes('cinema') || name.includes('movie') || name.includes('theater') || name.includes('concert') || name.includes('ticketmaster') || name.includes('stubhub') || name.includes('live nation') || name.includes('playstation') || name.includes('xbox') || name.includes('nintendo') || name.includes('steam') || name.includes('game') || name.includes('twitch') || name.includes('arcade') || name.includes('bowling') || name.includes('golf') || name.includes('gym') || name.includes('fitness') || name.includes('planet fitness') || name.includes('24 hour') || name.includes('anytime') || name.includes('equinox') || name.includes('orangetheory') || name.includes('crossfit') || name.includes('yoga') || name.includes('spa') || name.includes('massage') || name.includes('salon') || name.includes('barber') || name.includes('nail')) {
        return 'Entertainment';
    }
    // Bills & Utilities
    if (name.includes('electric') || name.includes('power') || name.includes('energy') || name.includes('water') || name.includes('sewer') || name.includes('gas bill') || name.includes('utility') || name.includes('internet') || name.includes('comcast') || name.includes('xfinity') || name.includes('spectrum') || name.includes('at&t') || name.includes('verizon') || name.includes('t-mobile') || name.includes('sprint') || name.includes('phone') || name.includes('wireless') || name.includes('mobile') || name.includes('cable') || name.includes('directv') || name.includes('dish') || name.includes('insurance') || name.includes('geico') || name.includes('progressive') || name.includes('state farm') || name.includes('allstate') || name.includes('liberty mutual') || name.includes('rent') || name.includes('lease') || name.includes('mortgage') || name.includes('hoa') || name.includes('property') || name.includes('apartment') || name.includes('landlord')) {
        return 'Bills & Utilities';
    }
    // Health
    if (name.includes('pharmacy') || name.includes('drug') || name.includes('rx') || name.includes('medical') || name.includes('doctor') || name.includes('hospital') || name.includes('clinic') || name.includes('urgent care') || name.includes('dental') || name.includes('dentist') || name.includes('orthodont') || name.includes('vision') || name.includes('optom') || name.includes('eye') || name.includes('glasses') || name.includes('contacts') || name.includes('therapy') || name.includes('counseling') || name.includes('mental health') || name.includes('lab') || name.includes('diagnostic') || name.includes('imaging') || name.includes('xray') || name.includes('mri')) {
        return 'Health';
    }
    // Travel
    if (name.includes('airline') || name.includes('delta') || name.includes('united') || name.includes('american air') || name.includes('southwest') || name.includes('jetblue') || name.includes('frontier') || name.includes('spirit') || name.includes('alaska air') || name.includes('flight') || name.includes('airport') || name.includes('tsa') || name.includes('hotel') || name.includes('marriott') || name.includes('hilton') || name.includes('hyatt') || name.includes('ihg') || name.includes('wyndham') || name.includes('best western') || name.includes('motel') || name.includes('airbnb') || name.includes('vrbo') || name.includes('booking.com') || name.includes('expedia') || name.includes('kayak') || name.includes('priceline') || name.includes('tripadvisor') || name.includes('hertz') || name.includes('enterprise') || name.includes('avis') || name.includes('budget') || name.includes('national car') || name.includes('rental car') || name.includes('cruise') || name.includes('carnival') || name.includes('royal caribbean')) {
        return 'Travel';
    }
    // Transfer
    if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') || name.includes('cash app') || name.includes('paypal') || name.includes('wire') || name.includes('ach') || name.includes('withdrawal') || name.includes('atm')) {
        return 'Transfer';
    }
    // Default to Other
    return 'Other';
}
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[project]/src/lib/parsers/pdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePDF",
    ()=>parsePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf2json/dist/pdfparser.js [app-route] (ecmascript)");
;
const CHIME_TYPE_PATTERNS = [
    'purchase',
    'purchases',
    'deposit',
    'deposits',
    'direct debit',
    'direct debits',
    'transfer',
    'transfers',
    'atm withdrawal',
    'atm withdrawals',
    'round up transfer',
    'round up transfers',
    'round up',
    'adjustment',
    'adjustments',
    'fee',
    'fees',
    'payment',
    'payments',
    'withdrawal',
    'withdrawals',
    'credit',
    'credits',
    'spotme',
    'spot me'
];
const CHIME_TYPE_PATTERNS_SORTED = [
    ...CHIME_TYPE_PATTERNS
].sort((a, b)=>b.length - a.length);
function findChimeType(text) {
    const lower = text.toLowerCase();
    for (const pattern of CHIME_TYPE_PATTERNS_SORTED){
        const index = lower.indexOf(pattern);
        if (index !== -1) {
            return {
                match: pattern,
                index
            };
        }
    }
    return null;
}
function collapseWhitespace(text) {
    return text.replace(/\s+/g, ' ').trim();
}
function findFirstAmount(text) {
    if (!text) return null;
    const match = text.match(/(-?\$[\d,]+\.\d{2}|-?[\d,]+\.\d{2}|\([\d,]+\.\d{2}\))/);
    return match ? match[0] : null;
}
function removeAmounts(text) {
    return text.replace(/(-?\$[\d,]+\.\d{2}|-?[\d,]+\.\d{2}|\([\d,]+\.\d{2}\))/g, '').trim();
}
function removeDates(text) {
    return text.replace(/\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g, ' ').trim();
}
async function parsePDF(pdfBuffer) {
    const errors = [];
    const transactions = [];
    try {
        const lines = await extractLinesFromPDF(pdfBuffer);
        if (lines.length === 0) {
            errors.push('No text could be extracted from the PDF');
            return {
                transactions,
                errors
            };
        }
        // Try multiple parsing strategies
        let parsed = parseChimeStatementTable(lines);
        if (parsed.length === 0) {
            parsed = parseChimeFormat(lines, errors);
        }
        if (parsed.length === 0) {
            // Try alternative: look for date-amount patterns in the full text
            parsed = parseGenericPDFFormat(lines, errors);
        }
        transactions.push(...parsed);
        if (transactions.length === 0) {
            errors.push(`Could not find transactions. Extracted ${lines.length} text segments from PDF.`);
            // Add first few lines to help debug
            const sampleLines = lines.slice(0, 10).map((l, i)=>`Line ${i}: "${l}"`);
            errors.push('Sample extracted text: ' + sampleLines.join('; '));
        }
    } catch (err) {
        errors.push(`Failed to parse PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    return {
        transactions,
        errors
    };
}
function parseChimeStatementTable(lines) {
    const transactions = [];
    const datePattern = /^(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/;
    const headerIndex = lines.findIndex((line)=>/transaction date/i.test(line) && /description/i.test(line));
    let index = headerIndex >= 0 ? headerIndex + 1 : 0;
    while(index < lines.length){
        const rawLine = lines[index]?.trim() ?? '';
        const dateMatch = rawLine.match(datePattern);
        if (!dateMatch) {
            index++;
            continue;
        }
        const transactionDate = parseUSDate(dateMatch[1]);
        if (!transactionDate) {
            index++;
            continue;
        }
        const rowLines = [
            rawLine
        ];
        index++;
        while(index < lines.length){
            const nextLine = lines[index]?.trim() ?? '';
            if (!nextLine) {
                index++;
                continue;
            }
            if (/^page\s+\d+/i.test(nextLine) || /^summary$/i.test(nextLine) || /^yearly summary/i.test(nextLine)) {
                index++;
                continue;
            }
            if (nextLine.match(datePattern)) {
                break;
            }
            rowLines.push(nextLine);
            index++;
        }
        const combinedText = collapseWhitespace(rowLines.join(' '));
        const remainder = collapseWhitespace(combinedText.replace(dateMatch[0], ''));
        if (!remainder) {
            continue;
        }
        let typeTail = remainder;
        let description = '';
        const typeInfo = findChimeType(remainder);
        if (typeInfo) {
            description = collapseWhitespace(remainder.slice(0, typeInfo.index));
            typeTail = remainder.slice(typeInfo.index + typeInfo.match.length).trim();
        }
        const amountCandidate = findFirstAmount(typeTail) ?? findFirstAmount(remainder);
        if (!amountCandidate) {
            continue;
        }
        const amount = parseChimeAmount(amountCandidate);
        if (amount === 0 && !amountCandidate.includes('0.00')) {
            continue;
        }
        if (!description) {
            const extraParts = [];
            for (const supplemental of rowLines.slice(1)){
                const trimmed = supplemental.trim();
                if (!trimmed) continue;
                if (findChimeType(trimmed)) break;
                if (findFirstAmount(trimmed)) break;
                extraParts.push(trimmed.replace(/^[:;,-]+\s*/, ''));
            }
            description = collapseWhitespace(extraParts.join(' '));
        }
        if (!description) {
            description = collapseWhitespace(remainder);
        }
        if (amountCandidate) {
            description = collapseWhitespace(removeAmounts(description));
        }
        description = collapseWhitespace(removeDates(description));
        if (typeInfo) {
            const typeRegex = new RegExp(typeInfo.match, 'i');
            description = collapseWhitespace(description.replace(typeRegex, ''));
        }
        if (!description) {
            // As a last resort, strip the date from the first row line
            const primaryLine = collapseWhitespace(rowLines[0].replace(dateMatch[0], ''));
            description = collapseWhitespace(removeAmounts(primaryLine));
            description = collapseWhitespace(removeDates(description));
        }
        if (!description) {
            description = 'Unknown Transaction';
        }
        const cleanedName = cleanMerchantName(description);
        transactions.push({
            date: transactionDate,
            name: description,
            merchant_name: cleanedName,
            amount,
            category: categorizeByMerchant(cleanedName, amount)
        });
    }
    return transactions;
}
// Parse Chime-specific format
function parseChimeFormat(lines, errors) {
    const transactions = [];
    const datePattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})/;
    const amountPattern = /(-?\$[\d,]+\.\d{2}|-?[\d,]+\.\d{2}|\([\d,]+\.\d{2}\))/;
    let i = 0;
    while(i < lines.length){
        const line = lines[i].trim();
        const dateMatch = line.match(datePattern);
        if (dateMatch) {
            const transactionDate = parseUSDate(dateMatch[1]);
            if (!transactionDate) {
                i++;
                continue;
            }
            // Look for transaction type in nearby lines
            let typeIndex = -1;
            for(let j = 0; j <= 5; j++){
                if (i + j >= lines.length) break;
                const checkLine = lines[i + j].toLowerCase();
                if (findChimeType(checkLine)) {
                    typeIndex = i + j;
                    break;
                }
            }
            // Collect merchant name from lines between date and type (or just nearby lines)
            let merchantParts = [];
            const startIdx = i + (line === dateMatch[0] ? 1 : 0);
            const endIdx = typeIndex !== -1 ? typeIndex : Math.min(i + 3, lines.length);
            for(let m = startIdx; m < endIdx; m++){
                const part = lines[m]?.trim();
                if (part && !part.match(datePattern) && !part.match(amountPattern)) {
                    merchantParts.push(part);
                }
            }
            // Look for amount in nearby lines
            let amount = null;
            for(let k = 0; k <= 5; k++){
                const checkIdx = (typeIndex !== -1 ? typeIndex : i) + k;
                if (checkIdx >= lines.length) break;
                const amtMatch = lines[checkIdx]?.match(amountPattern);
                if (amtMatch) {
                    amount = parseChimeAmount(amtMatch[1]);
                    break;
                }
            }
            if (amount !== null) {
                const merchantText = merchantParts.join(' ');
                const rawMerchant = collapseWhitespace(removeDates(removeAmounts(merchantText))) || 'Unknown';
                const cleanedName = cleanMerchantName(rawMerchant);
                transactions.push({
                    date: transactionDate,
                    name: cleanedName,
                    merchant_name: rawMerchant,
                    amount: amount,
                    category: categorizeByMerchant(cleanedName, amount)
                });
                i = Math.max(i + 1, (typeIndex !== -1 ? typeIndex : i) + 1);
                continue;
            }
        }
        i++;
    }
    return transactions;
}
// Parse generic PDF format - looks for date + amount on same or adjacent lines
function parseGenericPDFFormat(lines, errors) {
    const transactions = [];
    // Combine lines and look for transaction patterns
    const datePattern = /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/g;
    const amountPattern = /(-?\$?[\d,]+\.\d{2})/g;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        const nextLine = lines[i + 1] || '';
        const combinedText = line + ' ' + nextLine;
        const dateMatches = line.match(datePattern);
        if (!dateMatches) continue;
        const date = parseUSDate(dateMatches[0]);
        if (!date) continue;
        // Look for amount in this line or next few lines
        let amount = null;
        for(let j = 0; j <= 2; j++){
            const checkLine = lines[i + j] || '';
            const amountMatches = checkLine.match(amountPattern);
            if (amountMatches) {
                // Take the last amount match (usually the transaction amount)
                const amtStr = amountMatches[amountMatches.length - 1];
                amount = parseChimeAmount(amtStr);
                break;
            }
        }
        if (amount !== null && amount !== 0) {
            // Extract description - text between date and amount
            let description = line.replace(datePattern, '').replace(amountPattern, '').trim();
            if (!description && nextLine) {
                description = nextLine.replace(amountPattern, '').trim();
            }
            description = description || 'Unknown Transaction';
            const cleanedName = cleanMerchantName(description);
            transactions.push({
                date,
                name: description,
                merchant_name: cleanedName,
                amount,
                category: categorizeByMerchant(cleanedName, amount)
            });
        }
    }
    return transactions;
}
// Helper: Extract text lines from PDF using pdf2json
async function extractLinesFromPDF(pdfBuffer) {
    return new Promise((resolve, reject)=>{
        const pdfParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
        pdfParser.on('pdfParser_dataError', (errData)=>{
            const error = errData instanceof Error ? errData : errData.parserError;
            reject(error);
        });
        pdfParser.on('pdfParser_dataReady', (pdfData)=>{
            const allLines = [];
            if (!pdfData.Pages) {
                resolve(allLines);
                return;
            }
            for (const page of pdfData.Pages){
                if (!page.Texts) continue;
                // Collect all text elements with positions
                const textElements = [];
                for (const text of page.Texts){
                    if (!text.R) continue;
                    const content = text.R.map((r)=>decodeURIComponent(r.T)).join('');
                    if (content) {
                        textElements.push({
                            text: content,
                            x: text.x,
                            y: text.y
                        });
                    }
                }
                // Group by Y position (same line) with tolerance
                const yTolerance = 0.5;
                const lineGroups = new Map();
                for (const elem of textElements){
                    // Find existing line group within tolerance
                    let foundY = null;
                    for (const existingY of lineGroups.keys()){
                        if (Math.abs(elem.y - existingY) < yTolerance) {
                            foundY = existingY;
                            break;
                        }
                    }
                    if (foundY !== null) {
                        lineGroups.get(foundY).push(elem);
                    } else {
                        lineGroups.set(elem.y, [
                            elem
                        ]);
                    }
                }
                // Sort lines by Y position (top to bottom), then combine text in each line
                const sortedYs = Array.from(lineGroups.keys()).sort((a, b)=>a - b);
                for (const y of sortedYs){
                    const lineElements = lineGroups.get(y);
                    // Sort by X position (left to right)
                    lineElements.sort((a, b)=>a.x - b.x);
                    // Combine text with spaces between elements that are far apart
                    let lineText = '';
                    let lastX = -1;
                    for (const elem of lineElements){
                        if (lastX >= 0 && elem.x - lastX > 1) {
                            lineText += ' ';
                        }
                        lineText += elem.text;
                        lastX = elem.x + elem.text.length * 0.15; // Approximate width
                    }
                    const trimmed = lineText.trim();
                    if (trimmed) {
                        allLines.push(trimmed);
                    }
                }
            }
            resolve(allLines);
        });
        pdfParser.parseBuffer(pdfBuffer);
    });
}
// Helper: Parse US date format to ISO (YYYY-MM-DD)
function parseUSDate(dateStr) {
    const cleaned = dateStr.trim();
    // Try MM/DD/YYYY or MM/DD/YY
    const usMatch = cleaned.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
    if (usMatch) {
        const [, month, day, yearStr] = usMatch;
        let year = parseInt(yearStr);
        // Handle 2-digit year
        if (year < 100) {
            year = year > 50 ? 1900 + year : 2000 + year;
        }
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    // Try YYYY-MM-DD (already ISO)
    const isoMatch = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
        return cleaned;
    }
    return null;
}
// Helper: Parse amount string to number (e.g., "-$12.34" -> -12.34)
function parseChimeAmount(amountStr) {
    if (!amountStr) return 0;
    let cleaned = amountStr.trim();
    const upper = cleaned.toUpperCase();
    const isCredit = upper.endsWith('CR');
    if (isCredit) {
        cleaned = cleaned.slice(0, -2).trim();
    }
    const trailingNegative = cleaned.endsWith('-');
    if (trailingNegative) {
        cleaned = cleaned.slice(0, -1).trim();
    }
    const isNegative = cleaned.startsWith('-') || cleaned.startsWith('(') || trailingNegative;
    // Remove common formatting characters
    cleaned = cleaned.replace(/[$,()]/g, '').replace(/-/g, '').replace(/\s+/g, '');
    let amount = parseFloat(cleaned);
    if (isNaN(amount)) return 0;
    if (isNegative && !isCredit) {
        amount = -Math.abs(amount);
    } else {
        amount = Math.abs(amount);
    }
    return amount;
}
// Helper: Clean up merchant name
function cleanMerchantName(rawName) {
    if (!rawName) return 'Unknown';
    // Take first part before common separators and clean up
    let cleaned = rawName.split(/\s{2,}|#|\*|APPLE PAY ENDING/i)[0] || rawName;
    cleaned = cleaned.trim();
    // Remove common prefixes/suffixes
    cleaned = cleaned.replace(/^(POS |DEBIT |ACH |CHECKCARD )/i, '');
    // Remove leading punctuation artifacts (colons, commas, semicolons)
    cleaned = cleaned.replace(/^[\s:;,.-]+/, '');
    // Collapse stray internal whitespace (handles cases like "C heck")
    cleaned = cleaned.replace(/\s+/g, ' ');
    // Fix single-letter + space patterns that split words (e.g., "C heck" -> "Check")
    cleaned = cleaned.replace(/\b([A-Za-z])\s+([a-z]+)/g, (_, first, rest)=>{
        return first + rest;
    });
    cleaned = normalizeCapitalization(cleaned);
    return cleaned || 'Unknown';
}
function normalizeCapitalization(text) {
    if (!text) return text;
    const trimmed = text.trim();
    const hasLowercase = /[a-z]/.test(trimmed);
    const hasUppercase = /[A-Z]/.test(trimmed);
    // Leave strings with mixed casing as-is (already descriptive)
    if (hasLowercase && hasUppercase) {
        return trimmed;
    }
    // All uppercase or lowercase -> convert to Title Case, but preserve known acronyms
    const words = trimmed.split(' ');
    return words.map((word)=>{
        if (!word) return word;
        // Preserve very short acronyms (<=3 chars) or words with digits
        if (/^[A-Z0-9]{2,}$/i.test(word) && (word.length <= 3 || /\d/.test(word))) {
            return word.toUpperCase();
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }).join(' ');
}
// Auto-categorize based on merchant name
function categorizeByMerchant(merchantName, amount) {
    const name = merchantName.toLowerCase();
    // Income detection (positive amounts or specific keywords)
    if (amount > 0) {
        if (name.includes('payroll') || name.includes('direct dep') || name.includes('salary') || name.includes('employer') || name.includes('wage')) {
            return 'Income';
        }
        if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') || name.includes('cash app') || name.includes('paypal')) {
            return 'Transfer';
        }
        return 'Income';
    }
    // Food & Drink
    if (name.includes('mcdonald') || name.includes('burger') || name.includes('wendy') || name.includes('taco bell') || name.includes('chipotle') || name.includes('subway') || name.includes('starbucks') || name.includes('dunkin') || name.includes('coffee') || name.includes('pizza') || name.includes('domino') || name.includes('papa john') || name.includes('grubhub') || name.includes('doordash') || name.includes('uber eat') || name.includes('postmates') || name.includes('restaurant') || name.includes('cafe') || name.includes('diner') || name.includes('grill') || name.includes('kitchen') || name.includes('bakery') || name.includes('chick-fil') || name.includes('popeye') || name.includes('kfc') || name.includes('arby') || name.includes('sonic') || name.includes('panera') || name.includes('noodle') || name.includes('sushi') || name.includes('panda express') || name.includes('five guys') || name.includes('in-n-out') || name.includes('whataburger') || name.includes('jack in the box') || name.includes('del taco') || name.includes('wingstop') || name.includes('buffalo wild') || name.includes('ihop') || name.includes('denny') || name.includes('waffle') || name.includes('cracker barrel') || name.includes('applebee') || name.includes('chili') || name.includes('olive garden') || name.includes('red lobster') || name.includes('outback') || name.includes('texas roadhouse') || name.includes('longhorn') || name.includes('cheesecake factory') || name.includes('pf chang')) {
        return 'Food & Drink';
    }
    // Groceries (part of Food & Drink)
    if (name.includes('walmart') || name.includes('target') || name.includes('kroger') || name.includes('safeway') || name.includes('publix') || name.includes('whole foods') || name.includes('trader joe') || name.includes('aldi') || name.includes('costco') || name.includes('sam\'s club') || name.includes('grocery') || name.includes('market') || name.includes('food lion') || name.includes('giant') || name.includes('wegmans') || name.includes('heb') || name.includes('meijer') || name.includes('sprouts') || name.includes('fresh') || name.includes('albertson') || name.includes('vons') || name.includes('ralph') || name.includes('food')) {
        return 'Food & Drink';
    }
    // Shopping
    if (name.includes('amazon') || name.includes('ebay') || name.includes('etsy') || name.includes('best buy') || name.includes('apple store') || name.includes('microsoft') || name.includes('nike') || name.includes('adidas') || name.includes('foot locker') || name.includes('nordstrom') || name.includes('macy') || name.includes('jcpenney') || name.includes('kohl') || name.includes('ross') || name.includes('tj maxx') || name.includes('marshalls') || name.includes('burlington') || name.includes('old navy') || name.includes('gap') || name.includes('h&m') || name.includes('zara') || name.includes('forever 21') || name.includes('urban outfitters') || name.includes('home depot') || name.includes('lowe') || name.includes('ikea') || name.includes('bed bath') || name.includes('pottery barn') || name.includes('williams sonoma') || name.includes('crate') || name.includes('dollar') || name.includes('five below') || name.includes('big lots') || name.includes('walgreens') || name.includes('cvs') || name.includes('rite aid') || name.includes('ulta') || name.includes('sephora') || name.includes('bath & body') || name.includes('victoria') || name.includes('shop') || name.includes('store') || name.includes('mall') || name.includes('outlet')) {
        return 'Shopping';
    }
    // Transportation
    if (name.includes('uber') || name.includes('lyft') || name.includes('taxi') || name.includes('gas') || name.includes('shell') || name.includes('exxon') || name.includes('chevron') || name.includes('bp') || name.includes('mobil') || name.includes('sunoco') || name.includes('speedway') || name.includes('wawa') || name.includes('sheetz') || name.includes('quiktrip') || name.includes('racetrac') || name.includes('circle k') || name.includes('7-eleven') || name.includes('fuel') || name.includes('petro') || name.includes('parking') || name.includes('toll') || name.includes('metro') || name.includes('transit') || name.includes('bus') || name.includes('train') || name.includes('amtrak') || name.includes('greyhound') || name.includes('autozone') || name.includes('advance auto') || name.includes('o\'reilly') || name.includes('jiffy lube') || name.includes('valvoline') || name.includes('car wash') || name.includes('tire') || name.includes('mechanic') || name.includes('auto')) {
        return 'Transportation';
    }
    // Entertainment
    if (name.includes('netflix') || name.includes('hulu') || name.includes('disney') || name.includes('hbo') || name.includes('spotify') || name.includes('apple music') || name.includes('youtube') || name.includes('amazon prime') || name.includes('paramount') || name.includes('peacock') || name.includes('amc') || name.includes('regal') || name.includes('cinema') || name.includes('movie') || name.includes('theater') || name.includes('concert') || name.includes('ticketmaster') || name.includes('stubhub') || name.includes('live nation') || name.includes('playstation') || name.includes('xbox') || name.includes('nintendo') || name.includes('steam') || name.includes('game') || name.includes('twitch') || name.includes('arcade') || name.includes('bowling') || name.includes('golf') || name.includes('gym') || name.includes('fitness') || name.includes('planet fitness') || name.includes('24 hour') || name.includes('anytime') || name.includes('equinox') || name.includes('orangetheory') || name.includes('crossfit') || name.includes('yoga') || name.includes('spa') || name.includes('massage') || name.includes('salon') || name.includes('barber') || name.includes('nail')) {
        return 'Entertainment';
    }
    // Bills & Utilities
    if (name.includes('electric') || name.includes('power') || name.includes('energy') || name.includes('water') || name.includes('sewer') || name.includes('gas bill') || name.includes('utility') || name.includes('internet') || name.includes('comcast') || name.includes('xfinity') || name.includes('spectrum') || name.includes('at&t') || name.includes('verizon') || name.includes('t-mobile') || name.includes('sprint') || name.includes('phone') || name.includes('wireless') || name.includes('mobile') || name.includes('cable') || name.includes('directv') || name.includes('dish') || name.includes('insurance') || name.includes('geico') || name.includes('progressive') || name.includes('state farm') || name.includes('allstate') || name.includes('liberty mutual') || name.includes('rent') || name.includes('lease') || name.includes('mortgage') || name.includes('hoa') || name.includes('property') || name.includes('apartment') || name.includes('landlord')) {
        return 'Bills & Utilities';
    }
    // Health
    if (name.includes('pharmacy') || name.includes('drug') || name.includes('rx') || name.includes('medical') || name.includes('doctor') || name.includes('hospital') || name.includes('clinic') || name.includes('urgent care') || name.includes('dental') || name.includes('dentist') || name.includes('orthodont') || name.includes('vision') || name.includes('optom') || name.includes('eye') || name.includes('glasses') || name.includes('contacts') || name.includes('therapy') || name.includes('counseling') || name.includes('mental health') || name.includes('lab') || name.includes('diagnostic') || name.includes('imaging') || name.includes('xray') || name.includes('mri')) {
        return 'Health';
    }
    // Travel
    if (name.includes('airline') || name.includes('delta') || name.includes('united') || name.includes('american air') || name.includes('southwest') || name.includes('jetblue') || name.includes('frontier') || name.includes('spirit') || name.includes('alaska air') || name.includes('flight') || name.includes('airport') || name.includes('tsa') || name.includes('hotel') || name.includes('marriott') || name.includes('hilton') || name.includes('hyatt') || name.includes('ihg') || name.includes('wyndham') || name.includes('best western') || name.includes('motel') || name.includes('airbnb') || name.includes('vrbo') || name.includes('booking.com') || name.includes('expedia') || name.includes('kayak') || name.includes('priceline') || name.includes('tripadvisor') || name.includes('hertz') || name.includes('enterprise') || name.includes('avis') || name.includes('budget') || name.includes('national car') || name.includes('rental car') || name.includes('cruise') || name.includes('carnival') || name.includes('royal caribbean')) {
        return 'Travel';
    }
    // Transfer
    if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') || name.includes('cash app') || name.includes('paypal') || name.includes('wire') || name.includes('ach') || name.includes('withdrawal') || name.includes('atm')) {
        return 'Transfer';
    }
    // Default to Other
    return 'Other';
}
}),
"[project]/src/lib/parsers/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$csv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/csv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/pdf.ts [app-route] (ecmascript)");
;
;
}),
"[project]/src/app/api/import/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/parsers/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$csv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/csv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/pdf.ts [app-route] (ecmascript)");
;
;
;
;
const dynamic = 'force-dynamic';
async function POST(request) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
        const formData = await request.formData();
        const file = formData.get('file');
        const bankAccountId = formData.get('bank_account_id');
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided'
            }, {
                status: 400
            });
        }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(buffer).digest('hex');
        const filename = file.name.toLowerCase();
        let parseResult;
        if (filename.endsWith('.csv')) {
            parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$csv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCSV"])(buffer.toString('utf-8'));
        } else {
            // This now calls the correctly named function
            parseResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePDF"])(buffer);
        }
        const { data: importRecord } = await supabase.from('imports').insert({
            user_id: user.id,
            bank_account_id: bankAccountId,
            filename: file.name,
            file_hash: fileHash,
            import_type: filename.endsWith('.csv') ? 'csv' : 'pdf',
            transaction_count: parseResult.transactions.length
        }).select().single();
        if (!importRecord) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to create import record'
            }, {
                status: 500
            });
        }
        const transactionsToInsert = parseResult.transactions.map((t)=>({
                user_id: user.id,
                bank_account_id: bankAccountId,
                import_id: importRecord.id,
                amount: t.amount,
                date: t.date,
                name: t.name.substring(0, 255) || 'Unknown',
                merchant_name: (t.merchant_name || 'Unknown').substring(0, 255),
                category: t.category
            }));
        // Batch insert transactions
        if (transactionsToInsert.length > 0) {
            const { error: insertError } = await supabase.from('transactions').insert(transactionsToInsert);
            if (insertError) {
                console.error('Transaction insert error:', insertError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to insert transactions'
                }, {
                    status: 500
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            transactions_imported: transactionsToInsert.length,
            import_id: importRecord.id,
            parse_errors: parseResult.errors
        });
    } catch (error) {
        console.error('Import error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5906b8ed._.js.map