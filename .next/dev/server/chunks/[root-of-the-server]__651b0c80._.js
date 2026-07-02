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
    ()=>createClient
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
            transactions.push({
                date,
                name: description,
                merchant_name: merchantName,
                amount,
                category: row.Category?.trim() || null
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
            transactions.push({
                date,
                name: description,
                merchant_name: merchantName,
                amount,
                category: categoryCol ? row[categoryCol]?.trim() || null : null
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
    "parseChimePDF",
    ()=>parseChimePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf2json/dist/pdfparser.js [app-route] (ecmascript)");
;
async function parseChimePDF(pdfBuffer) {
    const errors = [];
    const transactions = [];
    try {
        const lines = await extractLinesFromPDF(pdfBuffer);
        // Regex Patterns
        const datePattern = /^(\d{1,2}\/\d{1,2}\/\d{4})$/;
        const amountPattern = /(-?\$[\d,]+\.\d{2})/;
        // Valid transaction types to anchor our search
        const validTypes = [
            'Purchase',
            'Deposit',
            'Direct Debit',
            'Transfer',
            'ATM Withdrawal',
            'Adjustment',
            'Fee',
            'Round Up'
        ];
        let i = 0;
        while(i < lines.length){
            const line = lines[i].trim();
            // 1. ANCHOR: Find a date
            const dateMatch = line.match(datePattern);
            if (dateMatch) {
                // Simple filter: if the line contains other keywords, it's likely a header (e.g. "Statement period: 04/01...")
                if (line.length > 15) {
                    i++;
                    continue;
                }
                const transactionDate = parseUSDate(dateMatch[1]);
                if (!transactionDate) {
                    i++;
                    continue;
                }
                // 2. SCAN: Look ahead for the Transaction Type (limit search to next 5 lines)
                let typeIndex = -1;
                let typeFound = "";
                for(let j = 1; j <= 5; j++){
                    if (i + j >= lines.length) break;
                    const candidate = lines[i + j];
                    // Check if this line contains a valid type keyword
                    const match = validTypes.find((t)=>candidate.toLowerCase().includes(t.toLowerCase()));
                    if (match) {
                        typeIndex = i + j;
                        typeFound = match;
                        break;
                    }
                }
                // If no type is found near this date, it's likely not a transaction block
                if (typeIndex === -1) {
                    i++;
                    continue;
                }
                // 3. CAPTURE: Description is everything between Date and Type
                const descriptionLines = lines.slice(i + 1, typeIndex);
                const rawMerchantName = descriptionLines.join(' ');
                // 4. EXTRACT: Find the amount *after* the type
                let amount = null;
                let amountIndex = -1;
                // Scan a few lines after the type for the amount
                for(let k = 1; k <= 3; k++){
                    const checkIdx = typeIndex + k;
                    if (checkIdx >= lines.length) break;
                    const amountLine = lines[checkIdx];
                    const amtMatch = amountLine.match(amountPattern);
                    if (amtMatch) {
                        amount = parseChimeAmount(amtMatch[1]);
                        amountIndex = checkIdx;
                        break;
                    }
                }
                if (amount !== null) {
                    transactions.push({
                        date: transactionDate,
                        name: cleanMerchantName(rawMerchantName),
                        merchant_name: rawMerchantName,
                        amount: amount,
                        category: null
                    });
                    // Fast forward loop to the line after the amount to avoid re-reading
                    i = amountIndex + 1;
                    continue;
                }
            }
            i++;
        }
    } catch (err) {
        errors.push(`Failed to parse PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    return {
        transactions,
        errors
    };
}
async function extractLinesFromPDF(buffer) {
    return new Promise((resolve, reject)=>{
        const pdfParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](null);
        pdfParser.on('pdfParser_dataReady', (pdfData)=>{
            // Sort texts by Y then X to ensure reading order is top-down, left-to-right
            // This helps significantly with table columns
            const pagesText = pdfData.Pages.map((page)=>{
                const texts = page.Texts.sort((a, b)=>{
                    if (Math.abs(a.y - b.y) > 1) return a.y - b.y // Sort by line (y) with small tolerance
                    ;
                    return a.x - b.x // Then by column (x)
                    ;
                });
                return texts.map((item)=>decodeURIComponent(item.R[0].T)).join('\n');
            });
            const allText = pagesText.join('\n');
            const lines = allText.split('\n').map((l)=>l.trim()).filter((l)=>l.length > 0);
            resolve(lines);
        });
        pdfParser.on('pdfParser_dataError', reject);
        pdfParser.parseBuffer(buffer);
    });
}
function parseUSDate(dateStr) {
    const match = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return null;
    const [, m, d, y] = match;
    return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}
function parseChimeAmount(amountStr) {
    // Remove currency symbol, commas, and whitespace
    return parseFloat(amountStr.replace(/[$,\s]/g, ''));
}
function cleanMerchantName(name) {
    if (!name) return 'Unknown';
    // Remove location codes and URLs often found in Chime descriptions
    let cleaned = name.replace(/\b(NYUS|CAUS|TXUS|FLUS|ILUS|OHUS|WAUS|NJUS|DEUS)\b/gi, ' ') // State codes
    .replace(/WWW\.\S+/gi, '') // URLs
    .replace(/\d{3}-\d{3}-\d{4}/g, '') // Phone numbers
    .replace(/\s+/g, ' ') // Collapse spaces
    .trim();
    // If the description repeats (common in Chime), e.g., "Wendy's Wendy's Hoosick", deduplicate
    const words = cleaned.split(' ');
    const uniqueWords = [
        ...new Set(words.map((w)=>w.toLowerCase()))
    ];
    // Re-capitalize for display
    return words.slice(0, Math.min(words.length, 4)).join(' ') // Take first few words for short name
    .toLowerCase().replace(/\b\w/g, (s)=>s.toUpperCase());
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/parsers/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$csv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/csv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/pdf.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
;
const dynamic = 'force-dynamic';
async function POST(request) {
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
        const formData = await request.formData();
        const file = formData.get('file');
        const bankAccountId = formData.get('bank_account_id');
        if (!file || !bankAccountId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing file or bank account'
            }, {
                status: 400
            });
        }
        // Verify bank account belongs to user
        const { data: bankAccount, error: bankError } = await supabase.from('bank_accounts').select('id').eq('id', bankAccountId).eq('user_id', user.id).single();
        if (bankError || !bankAccount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid bank account'
            }, {
                status: 400
            });
        }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(buffer).digest('hex');
        // Check for duplicate import
        const { data: existingImport } = await supabase.from('imports').select('id, filename').eq('user_id', user.id).eq('file_hash', fileHash).maybeSingle();
        if (existingImport) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `This file was already imported as "${existingImport.filename}"`
            }, {
                status: 409
            });
        }
        const filename = file.name.toLowerCase();
        const isCSV = filename.endsWith('.csv');
        const isPDF = filename.endsWith('.pdf');
        if (!isCSV && !isPDF) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unsupported file type'
            }, {
                status: 400
            });
        }
        let parseResult;
        try {
            if (isCSV) {
                const content = buffer.toString('utf-8');
                parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$csv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCSV"])(content);
            } else {
                parseResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePDF"])(buffer);
            }
        } catch (parseError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse file'
            }, {
                status: 400
            });
        }
        if (!parseResult.transactions || parseResult.transactions.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No transactions found'
            }, {
                status: 400
            });
        }
        // Create import record
        const { data: importRecord, error: importError } = await supabase.from('imports').insert({
            user_id: user.id,
            bank_account_id: bankAccountId,
            filename: file.name,
            file_hash: fileHash,
            import_type: isCSV ? 'csv' : 'pdf',
            transaction_count: parseResult.transactions.length
        }).select().single();
        if (importError || !importRecord) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to create import record'
            }, {
                status: 500
            });
        }
        // 2. APPLY THE TYPE TO THE MAP CALLBACK
        const transactionsToInsert = parseResult.transactions.map((t)=>({
                user_id: user.id,
                bank_account_id: bankAccountId,
                import_id: importRecord.id,
                amount: t.amount,
                date: t.date,
                name: t.name?.substring(0, 255) || 'Unknown',
                merchant_name: t.merchant_name?.substring(0, 255) || 'Unknown',
                category: t.category
            }));
        // Batch Insert
        const BATCH_SIZE = 100;
        let insertedCount = 0;
        for(let i = 0; i < transactionsToInsert.length; i += BATCH_SIZE){
            const batch = transactionsToInsert.slice(i, i + BATCH_SIZE);
            const { error: insertError } = await supabase.from('transactions').insert(batch);
            if (insertError) {
                await supabase.from('imports').delete().eq('id', importRecord.id);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to save transactions'
                }, {
                    status: 500
                });
            }
            insertedCount += batch.length;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            import_id: importRecord.id,
            transactions_imported: insertedCount,
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
} // ... GET and DELETE methods remain the same ...
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__651b0c80._.js.map