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
  'baby',
]

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
  'love\'s travel',
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
  'nightlife',
  'movie',
  'cinema',
  'concert',
]

type ClassificationScore = {
  essential: number
  flex: number
}

function normalize(value: string | null | undefined): string {
  return (value || '').toLowerCase()
}

function containsKeyword(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword))
}

function scoreCategories(category: string, merchant: string): ClassificationScore {
  const score: ClassificationScore = { essential: 0, flex: 0 }

  if (containsKeyword(category, ESSENTIAL_CATEGORY_KEYWORDS)) {
    score.essential += 2
  }

  if (containsKeyword(merchant, ESSENTIAL_CATEGORY_KEYWORDS)) {
    score.essential += 1
  }

  if (containsKeyword(merchant, ESSENTIAL_MERCHANT_KEYWORDS)) {
    score.essential += 3
  }

  if (containsKeyword(category, FLEX_CATEGORY_KEYWORDS)) {
    score.flex += 2
  }

  if (containsKeyword(merchant, FLEX_CATEGORY_KEYWORDS)) {
    score.flex += 2
  }

  return score
}

function applyManualOverrides(merchant: string): SpendClassification | null {
  if (merchant.includes('landlord') || merchant.includes('property management')) {
    return 'essential'
  }

  if (merchant.includes('spotify') || merchant.includes('netflix') || merchant.includes('hulu')) {
    return 'flex'
  }

  return null
}

export function classifyTransaction(transaction: SpendMixTransaction): SpendClassification {
  if (transaction.amount >= 0) {
    return 'flex'
  }

  const category = normalize(transaction.category)
  const merchant = normalize(transaction.merchant_name)
  const name = normalize(transaction.name)

  const combinedMerchant = [merchant, name].filter(Boolean).join(' ')

  const override = applyManualOverrides(combinedMerchant)
  if (override) {
    return override
  }

  const score = scoreCategories(category, combinedMerchant)

  if (score.essential >= 3 && score.flex <= score.essential) {
    return 'essential'
  }

  if (score.flex >= 2 && score.flex > score.essential) {
    return 'flex'
  }

  if (containsKeyword(category, ESSENTIAL_CATEGORY_KEYWORDS)) {
    return 'essential'
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
