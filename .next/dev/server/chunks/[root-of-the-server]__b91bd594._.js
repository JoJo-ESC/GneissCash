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
"[project]/src/lib/parsers/pdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseChimePDF",
    ()=>parseChimePDF,
    "parsePDF",
    ()=>parsePDF
]);
// Fix for pdf-parse trying to load default test file in Next.js
delete /*TURBOPACK member replacement*/ __turbopack_context__.g.window?.pdfParser;
let pdfParseInstance = null;
async function getPdfParse() {
    if (pdfParseInstance) return pdfParseInstance;
    const pdfParse = await __turbopack_context__.A("[project]/node_modules/pdf-parse/index.js [app-route] (ecmascript, async loader)");
    pdfParseInstance = pdfParse.default || pdfParse;
    return pdfParseInstance;
}
async function parseChimePDF(pdfBuffer) {
    const errors = [];
    const transactions = [];
    try {
        const pdfParse = await getPdfParse();
        // Add { max: 0 } to prevent pdf-parse from looking for test file
        const data = await pdfParse(pdfBuffer, {
            max: 0
        });
        const text = data.text;
        // Split into lines and clean up
        const lines = text.split('\n').map((line)=>line.trim()).filter((line)=>line.length > 0);
        // Chime transactions follow this pattern:
        // Line 1: M/DD/YYYY (Transaction Date)
        // Line 2: Short Merchant Name
        // Line 3: Type (Purchase/ATM Withdrawal/etc)
        // Line 4: Amount (-$XX.XX)
        // Line 5: Net Amount Settlement Date (-$XX.XX M/DD/YYYY) OR just settlement date continuation
        // Line 6: Full descriptor (WENDY'S TROY NYUS)
        const datePattern = /^(\d{1,2}\/\d{1,2}\/\d{4})$/;
        const amountPattern = /^-?\$[\d,]+\.\d{2}$/;
        const skipPatterns = [
            /beginning balance/i,
            /ending balance/i,
            /deposits/i,
            /withdrawals/i,
            /adjustments/i,
            /transfers/i,
            /fees/i,
            /spotme tips/i,
            /summary/i,
            /page \d+ of \d+/i,
            /error resolution procedures/i,
            /member services/i,
            /chime member services/i,
            /account number/i,
            /statement period/i,
            /yearly summary/i,
            /we will investigate your complaint/i
        ];
        let i = 0;
        while(i < lines.length){
            const line = lines[i];
            const dateMatch = line.match(datePattern);
            // Look for a standalone date line that starts a transaction
            if (dateMatch && !skipPatterns.some((p)=>p.test(line))) {
                const dateStr = dateMatch[1];
                const date = parseUSDate(dateStr);
                if (!date) {
                    i++;
                    continue;
                }
                // Skip if this looks like a settlement date line (previous line has amount)
                // Settlement dates come after amounts like "-$16.29 4/22/2025"
                if (i > 0 && lines[i - 1].match(/-?\$[\d,]+\.\d{2}/)) {
                    i++;
                    continue;
                }
                // Peek ahead: Check if next lines form a valid transaction pattern
                const merchantLine = lines[i + 1];
                const typeLine = lines[i + 2];
                // Must have merchant name on next line and type on following line
                if (!merchantLine || !typeLine) {
                    i++;
                    continue;
                }
                const validTypes = [
                    'Purchase',
                    'ATM Withdrawal',
                    'Transfer',
                    'Adjustment',
                    'Deposit',
                    'ATM',
                    'Withdrawal'
                ];
                // Check if line 3 is a transaction type (sometimes "ATM" and "Withdrawal" are separate lines in Chime)
                let typeOffset = 2;
                let isValidType = validTypes.some((t)=>typeLine.includes(t));
                if (!isValidType) {
                    i++;
                    continue;
                }
                // Special handling for "ATM Withdrawal" being on two lines
                let merchantName = merchantLine;
                // Look for amount - it should be within next 3 lines after type
                let amount = null;
                let descriptorLine = null;
                for(let j = i + 2; j < i + 6 && j < lines.length; j++){
                    const candidateLine = lines[j];
                    // Stop if we hit another standalone date (new transaction)
                    if (candidateLine.match(datePattern) && !candidateLine.includes('$') && j > i + 2) {
                        break;
                    }
                    // Look for standalone amount format (-$XX.XX or $XX.XX)
                    if (candidateLine.match(amountPattern)) {
                        amount = parseChimeAmount(candidateLine);
                        // Descriptor is usually next line after amount (unless it's another amount or date)
                        const nextDesc = lines[j + 1];
                        if (nextDesc && !nextDesc.match(datePattern) && !nextDesc.match(amountPattern) && !validTypes.some((t)=>nextDesc.includes(t))) {
                            descriptorLine = nextDesc;
                        }
                        break;
                    }
                    // Look for combined amount + settlement date (-$XX.XX M/DD/YYYY)
                    const combinedMatch = candidateLine.match(/(-?\$[\d,]+\.\d{2})\s+\d{1,2}\/\d{1,2}\/\d{4}/);
                    if (combinedMatch) {
                        amount = parseChimeAmount(combinedMatch[1]);
                        // Descriptor might be on same line after date or next line
                        const afterDate = candidateLine.split(/\d{1,2}\/\d{1,2}\/\d{4}/)[1]?.trim();
                        if (afterDate && afterDate.length > 3) {
                            descriptorLine = afterDate;
                        } else {
                            const nextDesc = lines[j + 1];
                            if (nextDesc && !nextDesc.match(datePattern) && !validTypes.some((t)=>nextDesc.includes(t))) {
                                descriptorLine = nextDesc;
                            }
                        }
                        break;
                    }
                }
                if (amount === null || amount === 0) {
                    i++;
                    continue;
                }
                // Use descriptor if found (more detailed), otherwise use merchant name
                const fullDescriptor = descriptorLine || merchantName;
                const cleanedMerchant = cleanMerchantName(fullDescriptor);
                transactions.push({
                    date,
                    name: merchantName,
                    merchant_name: cleanedMerchant,
                    amount,
                    category: null
                });
                // Skip processed lines - move past this transaction (date + merchant + type + ~3 lines)
                i += 5;
                continue;
            }
            i++;
        }
    } catch (err) {
        errors.push(`Failed to parse PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    const unique = deduplicateTransactions(transactions);
    return {
        transactions: unique,
        errors
    };
}
async function parsePDF(pdfBuffer) {
    // For now, default to Chime parser
    return parseChimePDF(pdfBuffer);
}
// Helper: Parse US date format (M/DD/YYYY or MM/DD/YYYY) to ISO (YYYY-MM-DD)
function parseUSDate(dateStr) {
    const match = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return null;
    const [, month, day, year] = match;
    // Validate reasonable date ranges
    const m = parseInt(month);
    const d = parseInt(day);
    const y = parseInt(year);
    if (m < 1 || m > 12 || d < 1 || d > 31 || y < 2000 || y > 2100) {
        return null;
    }
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}
// Helper: Parse Chime amount format (-$XX.XX or $XX.XX)
function parseChimeAmount(amountStr) {
    const cleaned = amountStr.replace(/[$,]/g, '');
    return parseFloat(cleaned);
}
// Helper: Clean merchant name
function cleanMerchantName(name) {
    if (!name) return 'Unknown';
    // Remove common suffixes and clean up
    let cleaned = name.replace(/\s*(NYUS|CAUS|TXUS|FLUS|ILUS|OHUS|WAUS|\d{3}-\d{3}-\d{4}|WWW\.\S+\s+CA|WWW\.\S+)\s*/gi, ' ').replace(/\s+/g, ' ').trim();
    // Capitalize first letter of each word
    cleaned = cleaned.toLowerCase().split(' ').map((word)=>{
        if (!word) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    return cleaned || 'Unknown';
}
// Helper: Remove duplicate transactions
function deduplicateTransactions(transactions) {
    const seen = new Set();
    return transactions.filter((t)=>{
        const key = `${t.date}-${t.amount}-${t.merchant_name}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
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
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
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
        // Get Supabase client and check auth
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        // Parse form data
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
        if (!bankAccountId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No bank account selected'
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
        // Read file content into Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        // Basic file size check
        if (buffer.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'File is empty'
            }, {
                status: 400
            });
        }
        // Generate file hash for duplicate detection
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
        // Determine file type and parse
        const filename = file.name.toLowerCase();
        const isCSV = filename.endsWith('.csv');
        const isPDF = filename.endsWith('.pdf');
        if (!isCSV && !isPDF) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unsupported file type. Please upload a CSV or PDF file.'
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
            console.error('Parsing error:', parseError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse file',
                details: parseError instanceof Error ? parseError.message : 'Unknown parsing error'
            }, {
                status: 400
            });
        }
        if (parseResult.transactions.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No transactions found in file',
                parseErrors: parseResult.errors
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
            console.error('Failed to create import record:', importError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to create import record'
            }, {
                status: 500
            });
        }
        // Prepare transactions for insert
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
        // Insert transactions in batches (Supabase has limits)
        const BATCH_SIZE = 100;
        let insertedCount = 0;
        for(let i = 0; i < transactionsToInsert.length; i += BATCH_SIZE){
            const batch = transactionsToInsert.slice(i, i + BATCH_SIZE);
            const { error: insertError } = await supabase.from('transactions').insert(batch);
            if (insertError) {
                console.error('Failed to insert transactions:', insertError);
                // Rollback: delete the import record
                await supabase.from('imports').delete().eq('id', importRecord.id);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to save transactions',
                    details: insertError.message
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
}
async function GET() {
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
        const { data: imports, error } = await supabase.from('imports').select(`
        id,
        filename,
        import_type,
        transaction_count,
        created_at,
        bank_accounts (
          id,
          name
        )
      `).eq('user_id', user.id).order('created_at', {
            ascending: false
        });
        if (error) {
            console.error('Failed to fetch imports:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch imports'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            imports
        });
    } catch (error) {
        console.error('Error fetching imports:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
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
        const importId = searchParams.get('id');
        if (!importId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Import ID required'
            }, {
                status: 400
            });
        }
        // Verify import belongs to user
        const { data: importRecord, error: fetchError } = await supabase.from('imports').select('id').eq('id', importId).eq('user_id', user.id).single();
        if (fetchError || !importRecord) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Import not found'
            }, {
                status: 404
            });
        }
        // Delete transactions first
        const { error: txDeleteError } = await supabase.from('transactions').delete().eq('import_id', importId);
        if (txDeleteError) {
            console.error('Failed to delete transactions:', txDeleteError);
        }
        // Delete import record
        const { error: deleteError } = await supabase.from('imports').delete().eq('id', importId);
        if (deleteError) {
            console.error('Failed to delete import:', deleteError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to delete import'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        console.error('Delete error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b91bd594._.js.map