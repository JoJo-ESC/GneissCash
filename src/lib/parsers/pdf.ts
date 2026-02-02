import PDFParser from 'pdf2json';
import { ParsedTransaction, ParseResult } from './types';

export async function parsePDF(pdfBuffer: Buffer): Promise<ParseResult> {
  const errors: string[] = [];
  const transactions: ParsedTransaction[] = [];

  try {
    const lines = await extractLinesFromPDF(pdfBuffer);

    if (lines.length === 0) {
      errors.push('No text could be extracted from the PDF');
      return { transactions, errors };
    }

    // Try multiple parsing strategies
    let parsed = parseChimeFormat(lines, errors);

    if (parsed.length === 0) {
      // Try alternative: look for date-amount patterns in the full text
      parsed = parseGenericPDFFormat(lines, errors);
    }

    transactions.push(...parsed);

    if (transactions.length === 0) {
      errors.push(`Could not find transactions. Extracted ${lines.length} text segments from PDF.`);
      // Add first few lines to help debug
      const sampleLines = lines.slice(0, 10).map((l, i) => `Line ${i}: "${l}"`);
      errors.push('Sample extracted text: ' + sampleLines.join('; '));
    }

  } catch (err) {
    errors.push(`Failed to parse PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
  }

  return { transactions, errors };
}

// Parse Chime-specific format
function parseChimeFormat(lines: string[], errors: string[]): ParsedTransaction[] {
  const transactions: ParsedTransaction[] = [];
  const datePattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})/;
  const amountPattern = /(-?\$[\d,]+\.\d{2})/;
  const validTypes = ['Purchase', 'Deposit', 'Direct Debit', 'Transfer', 'ATM Withdrawal', 'Adjustment', 'Fee', 'Round Up', 'Payment', 'Withdrawal', 'Credit'];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    const dateMatch = line.match(datePattern);

    if (dateMatch) {
      const transactionDate = parseUSDate(dateMatch[1]);
      if (!transactionDate) { i++; continue; }

      // Look for transaction type in nearby lines
      let typeIndex = -1;
      for (let j = 0; j <= 5; j++) {
        if (i + j >= lines.length) break;
        const checkLine = lines[i + j].toLowerCase();
        const match = validTypes.find(t => checkLine.includes(t.toLowerCase()));
        if (match) { typeIndex = i + j; break; }
      }

      // Collect merchant name from lines between date and type (or just nearby lines)
      let merchantParts: string[] = [];
      const startIdx = i + (line === dateMatch[0] ? 1 : 0);
      const endIdx = typeIndex !== -1 ? typeIndex : Math.min(i + 3, lines.length);

      for (let m = startIdx; m < endIdx; m++) {
        const part = lines[m]?.trim();
        if (part && !part.match(datePattern) && !part.match(amountPattern)) {
          merchantParts.push(part);
        }
      }

      // Look for amount in nearby lines
      let amount: number | null = null;
      for (let k = 0; k <= 5; k++) {
        const checkIdx = (typeIndex !== -1 ? typeIndex : i) + k;
        if (checkIdx >= lines.length) break;
        const amtMatch = lines[checkIdx]?.match(amountPattern);
        if (amtMatch) {
          amount = parseChimeAmount(amtMatch[1]);
          break;
        }
      }

      if (amount !== null) {
        const rawMerchant = merchantParts.join(' ').trim() || 'Unknown';
        transactions.push({
          date: transactionDate,
          name: cleanMerchantName(rawMerchant),
          merchant_name: rawMerchant,
          amount: amount,
          category: null
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
function parseGenericPDFFormat(lines: string[], errors: string[]): ParsedTransaction[] {
  const transactions: ParsedTransaction[] = [];

  // Combine lines and look for transaction patterns
  const datePattern = /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/g;
  const amountPattern = /(-?\$?[\d,]+\.\d{2})/g;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1] || '';
    const combinedText = line + ' ' + nextLine;

    const dateMatches = line.match(datePattern);
    if (!dateMatches) continue;

    const date = parseUSDate(dateMatches[0]);
    if (!date) continue;

    // Look for amount in this line or next few lines
    let amount: number | null = null;
    for (let j = 0; j <= 2; j++) {
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
      let description = line
        .replace(datePattern, '')
        .replace(amountPattern, '')
        .trim();

      if (!description && nextLine) {
        description = nextLine.replace(amountPattern, '').trim();
      }

      description = description || 'Unknown Transaction';

      transactions.push({
        date,
        name: description,
        merchant_name: cleanMerchantName(description),
        amount,
        category: null
      });
    }
  }

  return transactions;
}

// Text element with position info
interface TextElement {
  text: string;
  x: number;
  y: number;
}

// Helper: Extract text lines from PDF using pdf2json
async function extractLinesFromPDF(pdfBuffer: Buffer): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on('pdfParser_dataError', (errData: Error | { parserError: Error }) => {
      const error = errData instanceof Error ? errData : errData.parserError;
      reject(error);
    });

    pdfParser.on('pdfParser_dataReady', (pdfData: { Pages?: Array<{ Texts?: Array<{ x: number; y: number; R?: Array<{ T: string }> }> }> }) => {
      const allLines: string[] = [];

      if (!pdfData.Pages) {
        resolve(allLines);
        return;
      }

      for (const page of pdfData.Pages) {
        if (!page.Texts) continue;

        // Collect all text elements with positions
        const textElements: TextElement[] = [];
        for (const text of page.Texts) {
          if (!text.R) continue;
          const content = text.R.map((r) => decodeURIComponent(r.T)).join('');
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
        const lineGroups = new Map<number, TextElement[]>();

        for (const elem of textElements) {
          // Find existing line group within tolerance
          let foundY: number | null = null;
          for (const existingY of lineGroups.keys()) {
            if (Math.abs(elem.y - existingY) < yTolerance) {
              foundY = existingY;
              break;
            }
          }

          if (foundY !== null) {
            lineGroups.get(foundY)!.push(elem);
          } else {
            lineGroups.set(elem.y, [elem]);
          }
        }

        // Sort lines by Y position (top to bottom), then combine text in each line
        const sortedYs = Array.from(lineGroups.keys()).sort((a, b) => a - b);

        for (const y of sortedYs) {
          const lineElements = lineGroups.get(y)!;
          // Sort by X position (left to right)
          lineElements.sort((a, b) => a.x - b.x);

          // Combine text with spaces between elements that are far apart
          let lineText = '';
          let lastX = -1;
          for (const elem of lineElements) {
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
function parseUSDate(dateStr: string): string | null {
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
function parseChimeAmount(amountStr: string): number {
  let cleaned = amountStr.trim();

  // Check for negative
  const isNegative = cleaned.startsWith('-') || cleaned.startsWith('(');

  // Remove $, commas, parentheses, and leading minus
  cleaned = cleaned.replace(/[-$,()]/g, '');

  let amount = parseFloat(cleaned);
  if (isNaN(amount)) return 0;

  if (isNegative) {
    amount = -Math.abs(amount);
  }

  return amount;
}

// Helper: Clean up merchant name
function cleanMerchantName(rawName: string): string {
  if (!rawName) return 'Unknown';

  // Take first part before common separators and clean up
  let cleaned = rawName.split(/\s{2,}|#|\*|APPLE PAY ENDING/i)[0] || rawName;
  cleaned = cleaned.trim();

  // Remove common prefixes/suffixes
  cleaned = cleaned.replace(/^(POS |DEBIT |ACH |CHECKCARD )/i, '');

  return cleaned || 'Unknown';
}
