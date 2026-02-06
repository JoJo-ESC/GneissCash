import type { SpendClassification, SpendMixBreakdownItem, SpendMixCategoryHighlight, SpendMixTotals } from '@/types/analytics'

export interface SpendMixTransaction {
  amount: number
  category: string | null
  merchant_name: string | null
  name: string | null
  date: string
}

const ESSENTIAL_CATEGORY_KEYWORDS = [
  'rent',
  'mortgage',
  'housing',
  'utility',
  'electric',
  'water',
  'gas bill',
  'internet',
  'phone',
  'cellular',
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
  'supermarket',
  'market',
  'wholesale club',
  'childcare',
]

const GROCERY_MERCHANT_KEYWORDS = [
  'walmart',
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
]

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
]

function normalize(value: string | null | undefined): string {
  return (value || '').toLowerCase()
}

function containsKeyword(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword))
}

export function classifyTransaction(transaction: SpendMixTransaction): SpendClassification {
  if (transaction.amount >= 0) {
    return 'flex'
  }

  const category = normalize(transaction.category)
  const merchant = normalize(transaction.merchant_name)
  const name = normalize(transaction.name)

  const combinedMerchant = merchant || name
  const essentialMatch =
    containsKeyword(category, ESSENTIAL_CATEGORY_KEYWORDS) ||
    containsKeyword(combinedMerchant, GROCERY_MERCHANT_KEYWORDS) ||
    category.includes('grocery') ||
    category.includes('supermarket')

  if (essentialMatch) {
    return 'essential'
  }

  const flexMatch = containsKeyword(category, FLEX_CATEGORY_KEYWORDS) || containsKeyword(combinedMerchant, FLEX_CATEGORY_KEYWORDS) || category.includes('restaurant')

  if (flexMatch) {
    return 'flex'
  }

  return 'flex'
}

export interface SpendMixSummary {
  totals: SpendMixTotals
  breakdown: SpendMixBreakdownItem[]
  topFlexCategories: SpendMixCategoryHighlight[]
}

export function summarizeSpendMix(transactions: SpendMixTransaction[]): SpendMixSummary {
  const totals: SpendMixTotals = {
    essential: 0,
    flex: 0,
    total: 0,
    essentialPct: 0,
    flexPct: 0,
  }

  const flexCategoryMap = new Map<string, number>()

  transactions.forEach((transaction) => {
    if (transaction.amount >= 0) {
      return
    }

    const classification = classifyTransaction(transaction)
    const amount = Math.abs(transaction.amount)

    if (classification === 'essential') {
      totals.essential += amount
    } else {
      totals.flex += amount
      const categoryKey = normalize(transaction.category) || 'other'
      const current = flexCategoryMap.get(categoryKey) || 0
      flexCategoryMap.set(categoryKey, current + amount)
    }
  })

  totals.total = totals.essential + totals.flex

  if (totals.total > 0) {
    totals.essentialPct = Math.round((totals.essential / totals.total) * 1000) / 10
    totals.flexPct = Math.round((totals.flex / totals.total) * 1000) / 10
  }

  const breakdown: SpendMixBreakdownItem[] = [
    {
      classification: 'essential',
      label: 'Essentials',
      amount: Math.round(totals.essential * 100) / 100,
      percentage: totals.total > 0 ? totals.essentialPct : 0,
    },
    {
      classification: 'flex',
      label: 'Everything Else',
      amount: Math.round(totals.flex * 100) / 100,
      percentage: totals.total > 0 ? totals.flexPct : 0,
    },
  ]

  const topFlexCategories: SpendMixCategoryHighlight[] = Array.from(flexCategoryMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([categoryKey, amount]) => ({
      category: categoryKey === 'other' ? 'Other' : categoryKey.replace(/_/g, ' ').replace(/\b[a-z]/g, (match) => match.toUpperCase()),
      amount: Math.round(amount * 100) / 100,
      percentage: totals.flex > 0 ? Math.round((amount / totals.flex) * 1000) / 10 : 0,
    }))

  return {
    totals: {
      ...totals,
      essential: Math.round(totals.essential * 100) / 100,
      flex: Math.round(totals.flex * 100) / 100,
      total: Math.round(totals.total * 100) / 100,
    },
    breakdown,
    topFlexCategories,
  }
}
