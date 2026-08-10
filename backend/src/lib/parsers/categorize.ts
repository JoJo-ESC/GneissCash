interface CategoryRule {
  category: string
  // Specific brand/business names — confident, low false-positive-risk signals.
  strong: string[]
  // Generic single words — useful when nothing more specific is present, but
  // easily wrong on their own (e.g. "shop" inside "Barber Shop"), so they're
  // only used as a fallback when no category has a strong match.
  weak: string[]
}

const EXPENSE_RULES: CategoryRule[] = [
  {
    category: 'Food & Drink',
    strong: [
      'mcdonald', 'burger', 'wendy', 'taco bell', 'chipotle', 'subway', 'starbucks', 'dunkin',
      'pizza', 'domino', 'papa john', 'grubhub', 'doordash', 'uber eat', 'postmates',
      "chick-fil", 'popeye', 'kfc', 'arby', 'sonic', 'panera', 'panda express', 'five guys',
      'in-n-out', 'whataburger', 'jack in the box', 'del taco', 'wingstop', 'buffalo wild',
      'ihop', 'denny', 'cracker barrel', 'applebee', 'olive garden', 'red lobster', 'outback',
      'texas roadhouse', 'longhorn', 'cheesecake factory', 'pf chang',
      'walmart', 'target', 'kroger', 'safeway', 'publix', 'whole foods', 'trader joe', 'aldi',
      'costco', "sam's club", 'food lion', 'giant', 'wegmans', 'heb', 'meijer', 'sprouts',
      'albertson', 'vons', 'ralph',
    ],
    weak: ['coffee', 'restaurant', 'cafe', 'diner', 'grill', 'kitchen', 'bakery', 'noodle', 'sushi', 'waffle', 'chili', 'grocery', 'market', 'fresh', 'food'],
  },
  {
    category: 'Shopping',
    strong: [
      'amazon', 'ebay', 'etsy', 'best buy', 'apple store', 'microsoft', 'nike', 'adidas',
      'foot locker', 'nordstrom', 'macy', 'jcpenney', 'kohl', 'ross', 'tj maxx', 'marshalls',
      'burlington', 'old navy', 'gap', 'h&m', 'zara', 'forever 21', 'urban outfitters',
      'home depot', 'lowe', 'ikea', 'bed bath', 'pottery barn', 'williams sonoma', 'crate',
      'dollar tree', 'dollar general', 'five below', 'big lots', 'walgreens', 'cvs', 'rite aid',
      'ulta', 'sephora', 'bath & body', 'victoria',
    ],
    weak: ['shop', 'store', 'mall', 'outlet'],
  },
  {
    category: 'Transportation',
    strong: [
      'uber', 'lyft', 'taxi', 'shell', 'exxon', 'chevron', 'mobil', 'sunoco', 'speedway',
      'wawa', 'sheetz', 'quiktrip', 'racetrac', 'circle k', '7-eleven', 'amtrak', 'greyhound',
      'autozone', 'advance auto', "o'reilly", 'jiffy lube', 'valvoline', 'car wash', 'mechanic',
    ],
    weak: ['gas', 'fuel', 'petro', 'parking', 'toll', 'transit', 'auto', 'tire'],
  },
  {
    category: 'Entertainment',
    strong: [
      'netflix', 'hulu', 'disney', 'hbo', 'spotify', 'apple music', 'youtube', 'amazon prime',
      'paramount', 'peacock', 'amc', 'regal', 'ticketmaster', 'stubhub', 'live nation',
      'playstation', 'xbox', 'nintendo', 'steam', 'twitch', 'bowling', 'planet fitness',
      'equinox', 'orangetheory', 'crossfit', 'barber',
    ],
    weak: ['cinema', 'movie', 'theater', 'arcade', 'golf', 'gym', 'fitness', 'yoga', 'spa', 'massage', 'salon', 'nail'],
  },
  {
    category: 'Bills & Utilities',
    strong: [
      'comcast', 'xfinity', 'spectrum', 'at&t', 'verizon', 't-mobile', 'sprint', 'directv',
      'dish network', 'geico', 'progressive', 'state farm', 'allstate', 'liberty mutual',
      'mortgage', 'hoa', 'landlord',
    ],
    weak: ['electric', 'power', 'energy', 'water', 'sewer', 'utility', 'internet', 'cable', 'insurance', 'rent', 'lease', 'property', 'apartment'],
  },
  {
    category: 'Health',
    strong: ['pharmacy', 'dentist', 'dental', 'orthodont', 'optometr', 'hospital', 'clinic', 'urgent care'],
    weak: ['drug', 'rx', 'medical', 'doctor', 'vision', 'eye', 'glasses', 'contacts', 'therapy', 'counseling', 'lab', 'diagnostic', 'imaging', 'xray', 'mri'],
  },
  {
    category: 'Travel',
    strong: [
      'delta air', 'united air', 'american air', 'southwest', 'jetblue', 'frontier',
      'spirit air', 'alaska air', 'marriott', 'hilton', 'hyatt', 'ihg', 'wyndham',
      'best western', 'airbnb', 'vrbo', 'booking.com', 'expedia', 'kayak', 'priceline',
      'tripadvisor', 'hertz', 'enterprise rent', 'avis', 'carnival', 'royal caribbean',
    ],
    weak: ['airline', 'flight', 'airport', 'tsa', 'hotel', 'motel', 'rental car', 'cruise', 'budget'],
  },
  {
    category: 'Transfer',
    strong: ['zelle', 'venmo', 'cash app', 'paypal'],
    weak: ['transfer', 'wire', 'ach', 'withdrawal', 'atm'],
  },
]

const INCOME_RULES: CategoryRule[] = [
  { category: 'Income', strong: ['payroll', 'direct dep', 'salary', 'employer', 'wage'], weak: [] },
  { category: 'Transfer', strong: ['zelle', 'venmo', 'cash app', 'paypal'], weak: ['transfer'] },
]

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function toRegexes(keywords: string[]): RegExp[] {
  // Trailing `s?` tolerates plain English plurals ("Wendys", "Burgers")
  // without opening the door to arbitrary trailing letters — the boundary
  // after the optional `s` still rejects a keyword that's just a prefix of
  // an unrelated word (e.g. "gas" inside "Gaslamp").
  return keywords.map((keyword) => new RegExp(`\\b${escapeRegExp(keyword)}s?\\b`, 'i'))
}

interface CompiledRule {
  category: string
  strong: RegExp[]
  weak: RegExp[]
}

function compile(rules: CategoryRule[]): CompiledRule[] {
  return rules.map((rule) => ({
    category: rule.category,
    strong: toRegexes(rule.strong),
    weak: toRegexes(rule.weak),
  }))
}

const COMPILED_EXPENSE_RULES = compile(EXPENSE_RULES)
const COMPILED_INCOME_RULES = compile(INCOME_RULES)

function countMatches(name: string, regexes: RegExp[]): number {
  let count = 0
  for (const regex of regexes) {
    if (regex.test(name)) count++
  }
  return count
}

/**
 * Categorize a transaction by merchant name.
 *
 * Strong (specific brand/business name) matches always win over weak
 * (generic single-word) matches, regardless of which category they're in —
 * e.g. Entertainment's "barber" beats Shopping's "shop" for "Joe's Barber
 * Shop". Weak matches are only used as a fallback when nothing in any
 * category has a strong match, so a merchant with no specific keyword (e.g.
 * "Casablanca Fine Food") still lands somewhere reasonable instead of
 * "Other". Within a tier, the category with the most matching keywords wins.
 */
function bestMatch(name: string, rules: CompiledRule[]): string | null {
  let bestStrongCategory: string | null = null
  let bestStrongScore = 0
  let bestWeakCategory: string | null = null
  let bestWeakScore = 0

  for (const rule of rules) {
    const strongScore = countMatches(name, rule.strong)
    if (strongScore > bestStrongScore) {
      bestStrongScore = strongScore
      bestStrongCategory = rule.category
    }

    const weakScore = countMatches(name, rule.weak)
    if (weakScore > bestWeakScore) {
      bestWeakScore = weakScore
      bestWeakCategory = rule.category
    }
  }

  return bestStrongCategory ?? bestWeakCategory
}

export function categorizeByMerchant(merchantName: string, amount: number): string {
  const name = merchantName.toLowerCase()

  if (amount > 0) {
    return bestMatch(name, COMPILED_INCOME_RULES) ?? 'Income'
  }

  return bestMatch(name, COMPILED_EXPENSE_RULES) ?? 'Other'
}
