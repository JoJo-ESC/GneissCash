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

// Auto-categorize based on merchant name
function categorizeByMerchant(merchantName: string, amount: number): string {
  const name = merchantName.toLowerCase();

  // Income detection (positive amounts or specific keywords)
  if (amount > 0) {
    if (name.includes('payroll') || name.includes('direct dep') || name.includes('salary') ||
        name.includes('employer') || name.includes('wage')) {
      return 'Income';
    }
    if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
        name.includes('cash app') || name.includes('paypal')) {
      return 'Transfer';
    }
    return 'Income';
  }

  // Food & Drink
  if (name.includes('mcdonald') || name.includes('burger') || name.includes('wendy') ||
      name.includes('taco bell') || name.includes('chipotle') || name.includes('subway') ||
      name.includes('starbucks') || name.includes('dunkin') || name.includes('coffee') ||
      name.includes('pizza') || name.includes('domino') || name.includes('papa john') ||
      name.includes('grubhub') || name.includes('doordash') || name.includes('uber eat') ||
      name.includes('postmates') || name.includes('restaurant') || name.includes('cafe') ||
      name.includes('diner') || name.includes('grill') || name.includes('kitchen') ||
      name.includes('bakery') || name.includes('chick-fil') || name.includes('popeye') ||
      name.includes('kfc') || name.includes('arby') || name.includes('sonic') ||
      name.includes('panera') || name.includes('noodle') || name.includes('sushi') ||
      name.includes('panda express') || name.includes('five guys') || name.includes('in-n-out') ||
      name.includes('whataburger') || name.includes('jack in the box') || name.includes('del taco') ||
      name.includes('wingstop') || name.includes('buffalo wild') || name.includes('ihop') ||
      name.includes('denny') || name.includes('waffle') || name.includes('cracker barrel') ||
      name.includes('applebee') || name.includes('chili') || name.includes('olive garden') ||
      name.includes('red lobster') || name.includes('outback') || name.includes('texas roadhouse') ||
      name.includes('longhorn') || name.includes('cheesecake factory') || name.includes('pf chang')) {
    return 'Food & Drink';
  }

  // Groceries (part of Food & Drink)
  if (name.includes('walmart') || name.includes('target') || name.includes('kroger') ||
      name.includes('safeway') || name.includes('publix') || name.includes('whole foods') ||
      name.includes('trader joe') || name.includes('aldi') || name.includes('costco') ||
      name.includes('sam\'s club') || name.includes('grocery') || name.includes('market') ||
      name.includes('food lion') || name.includes('giant') || name.includes('wegmans') ||
      name.includes('heb') || name.includes('meijer') || name.includes('sprouts') ||
      name.includes('fresh') || name.includes('albertson') || name.includes('vons') ||
      name.includes('ralph') || name.includes('food')) {
    return 'Food & Drink';
  }

  // Shopping
  if (name.includes('amazon') || name.includes('ebay') || name.includes('etsy') ||
      name.includes('best buy') || name.includes('apple store') || name.includes('microsoft') ||
      name.includes('nike') || name.includes('adidas') || name.includes('foot locker') ||
      name.includes('nordstrom') || name.includes('macy') || name.includes('jcpenney') ||
      name.includes('kohl') || name.includes('ross') || name.includes('tj maxx') ||
      name.includes('marshalls') || name.includes('burlington') || name.includes('old navy') ||
      name.includes('gap') || name.includes('h&m') || name.includes('zara') ||
      name.includes('forever 21') || name.includes('urban outfitters') || name.includes('home depot') ||
      name.includes('lowe') || name.includes('ikea') || name.includes('bed bath') ||
      name.includes('pottery barn') || name.includes('williams sonoma') || name.includes('crate') ||
      name.includes('dollar') || name.includes('five below') || name.includes('big lots') ||
      name.includes('walgreens') || name.includes('cvs') || name.includes('rite aid') ||
      name.includes('ulta') || name.includes('sephora') || name.includes('bath & body') ||
      name.includes('victoria') || name.includes('shop') || name.includes('store') ||
      name.includes('mall') || name.includes('outlet')) {
    return 'Shopping';
  }

  // Transportation
  if (name.includes('uber') || name.includes('lyft') || name.includes('taxi') ||
      name.includes('gas') || name.includes('shell') || name.includes('exxon') ||
      name.includes('chevron') || name.includes('bp') || name.includes('mobil') ||
      name.includes('sunoco') || name.includes('speedway') || name.includes('wawa') ||
      name.includes('sheetz') || name.includes('quiktrip') || name.includes('racetrac') ||
      name.includes('circle k') || name.includes('7-eleven') || name.includes('fuel') ||
      name.includes('petro') || name.includes('parking') || name.includes('toll') ||
      name.includes('metro') || name.includes('transit') || name.includes('bus') ||
      name.includes('train') || name.includes('amtrak') || name.includes('greyhound') ||
      name.includes('autozone') || name.includes('advance auto') || name.includes('o\'reilly') ||
      name.includes('jiffy lube') || name.includes('valvoline') || name.includes('car wash') ||
      name.includes('tire') || name.includes('mechanic') || name.includes('auto')) {
    return 'Transportation';
  }

  // Entertainment
  if (name.includes('netflix') || name.includes('hulu') || name.includes('disney') ||
      name.includes('hbo') || name.includes('spotify') || name.includes('apple music') ||
      name.includes('youtube') || name.includes('amazon prime') || name.includes('paramount') ||
      name.includes('peacock') || name.includes('amc') || name.includes('regal') ||
      name.includes('cinema') || name.includes('movie') || name.includes('theater') ||
      name.includes('concert') || name.includes('ticketmaster') || name.includes('stubhub') ||
      name.includes('live nation') || name.includes('playstation') || name.includes('xbox') ||
      name.includes('nintendo') || name.includes('steam') || name.includes('game') ||
      name.includes('twitch') || name.includes('arcade') || name.includes('bowling') ||
      name.includes('golf') || name.includes('gym') || name.includes('fitness') ||
      name.includes('planet fitness') || name.includes('24 hour') || name.includes('anytime') ||
      name.includes('equinox') || name.includes('orangetheory') || name.includes('crossfit') ||
      name.includes('yoga') || name.includes('spa') || name.includes('massage') ||
      name.includes('salon') || name.includes('barber') || name.includes('nail')) {
    return 'Entertainment';
  }

  // Bills & Utilities
  if (name.includes('electric') || name.includes('power') || name.includes('energy') ||
      name.includes('water') || name.includes('sewer') || name.includes('gas bill') ||
      name.includes('utility') || name.includes('internet') || name.includes('comcast') ||
      name.includes('xfinity') || name.includes('spectrum') || name.includes('at&t') ||
      name.includes('verizon') || name.includes('t-mobile') || name.includes('sprint') ||
      name.includes('phone') || name.includes('wireless') || name.includes('mobile') ||
      name.includes('cable') || name.includes('directv') || name.includes('dish') ||
      name.includes('insurance') || name.includes('geico') || name.includes('progressive') ||
      name.includes('state farm') || name.includes('allstate') || name.includes('liberty mutual') ||
      name.includes('rent') || name.includes('lease') || name.includes('mortgage') ||
      name.includes('hoa') || name.includes('property') || name.includes('apartment') ||
      name.includes('landlord')) {
    return 'Bills & Utilities';
  }

  // Health
  if (name.includes('pharmacy') || name.includes('drug') || name.includes('rx') ||
      name.includes('medical') || name.includes('doctor') || name.includes('hospital') ||
      name.includes('clinic') || name.includes('urgent care') || name.includes('dental') ||
      name.includes('dentist') || name.includes('orthodont') || name.includes('vision') ||
      name.includes('optom') || name.includes('eye') || name.includes('glasses') ||
      name.includes('contacts') || name.includes('therapy') || name.includes('counseling') ||
      name.includes('mental health') || name.includes('lab') || name.includes('diagnostic') ||
      name.includes('imaging') || name.includes('xray') || name.includes('mri')) {
    return 'Health';
  }

  // Travel
  if (name.includes('airline') || name.includes('delta') || name.includes('united') ||
      name.includes('american air') || name.includes('southwest') || name.includes('jetblue') ||
      name.includes('frontier') || name.includes('spirit') || name.includes('alaska air') ||
      name.includes('flight') || name.includes('airport') || name.includes('tsa') ||
      name.includes('hotel') || name.includes('marriott') || name.includes('hilton') ||
      name.includes('hyatt') || name.includes('ihg') || name.includes('wyndham') ||
      name.includes('best western') || name.includes('motel') || name.includes('airbnb') ||
      name.includes('vrbo') || name.includes('booking.com') || name.includes('expedia') ||
      name.includes('kayak') || name.includes('priceline') || name.includes('tripadvisor') ||
      name.includes('hertz') || name.includes('enterprise') || name.includes('avis') ||
      name.includes('budget') || name.includes('national car') || name.includes('rental car') ||
      name.includes('cruise') || name.includes('carnival') || name.includes('royal caribbean')) {
    return 'Travel';
  }

  // Transfer
  if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
      name.includes('cash app') || name.includes('paypal') || name.includes('wire') ||
      name.includes('ach') || name.includes('withdrawal') || name.includes('atm')) {
    return 'Transfer';
  }

  // Default to Other
  return 'Other';
}
