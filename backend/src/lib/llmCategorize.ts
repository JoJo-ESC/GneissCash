const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'
const MODEL = 'deepseek/deepseek-v4-flash-0731'
const BATCH_SIZE = 60

const ALLOWED_CATEGORIES = [
  'Food & Drink',
  'Shopping',
  'Transportation',
  'Entertainment',
  'Bills & Utilities',
  'Health',
  'Travel',
  'Transfer',
  'Income',
  'Other',
] as const

// Recover common synonyms/abbreviations the model sometimes uses instead of
// the exact enum string, despite being told not to (observed in practice:
// "Dining" for "Food & Drink", "Transport" for "Transportation").
const CATEGORY_ALIASES: Record<string, string> = {
  dining: 'Food & Drink',
  restaurants: 'Food & Drink',
  groceries: 'Food & Drink',
  transport: 'Transportation',
  bills: 'Bills & Utilities',
  utilities: 'Bills & Utilities',
  subscriptions: 'Bills & Utilities',
}

export interface CategorizeInput {
  merchant_name: string | null
  name: string | null
  amount: number
}

const SYSTEM_PROMPT = `You categorize personal bank transactions. For each transaction, pick exactly one category from this list: ${ALLOWED_CATEGORIES.join(', ')}.

You MUST use these exact strings, character-for-character — do not abbreviate or use synonyms. For example, write "Food & Drink" not "Dining", and "Transportation" not "Transport".

Guidance:
- Positive amounts are money coming in; negative amounts are money going out.
- A description containing "Direct Debit" or "E-Payment"/"E Payment" is usually a recurring bill or debt payment (e.g. a credit card payment like Discover, or a membership auto-draft like a gym) — categorize these as "Bills & Utilities" even if the merchant name also sounds like Entertainment or Shopping.
- Use real-world knowledge of businesses (e.g. Gusto is a payroll processor, Discover is a credit card company, not a store).

Respond with ONLY a JSON object of the form {"categories": ["<category for item 0>", "<category for item 1>", ...]}, with exactly one entry per transaction, in the same order as given, and no other text.`

function normalizeCategory(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const allowed: readonly string[] = ALLOWED_CATEGORIES
  if (allowed.includes(value)) return value
  return CATEGORY_ALIASES[value.trim().toLowerCase()] ?? null
}

async function categorizeBatch(items: CategorizeInput[]): Promise<(string | null)[]> {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) throw new Error('OPENROUTER_API_KEY is not set')

  const payload = items.map((item, index) => ({
    index,
    description: item.merchant_name ?? item.name ?? 'Unknown',
    amount: item.amount,
  }))

  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://gneisscash.local',
      'X-Title': 'gneisscash',
    },
    body: JSON.stringify({
      model: MODEL,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: JSON.stringify(payload) },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error(`OpenRouter request failed: ${response.status} ${await response.text()}`)
  }

  const data = (await response.json()) as { choices?: { message?: { content?: string } }[] }
  const content = data.choices?.[0]?.message?.content
  if (typeof content !== 'string') {
    throw new Error('OpenRouter response had no message content')
  }

  const parsed = JSON.parse(content) as { categories?: unknown }
  const categories = parsed.categories
  if (!Array.isArray(categories)) {
    throw new Error('OpenRouter response shape was invalid (expected a "categories" array)')
  }

  // Be lenient about length mismatches instead of discarding the whole batch:
  // extra entries are dropped, missing entries fall back to null (caller uses
  // the keyword-based category for those).
  if (categories.length !== items.length) {
    console.warn(`LLM returned ${categories.length} categories for ${items.length} items — using what aligns, falling back for the rest.`)
  }

  return items.map((_, i) => normalizeCategory(categories[i]))
}

/**
 * Categorizes transactions via an LLM (OpenRouter), batched to stay within a
 * reasonable request size. Throws on failure — callers should catch and fall
 * back to the keyword-based categorizer rather than blocking on this.
 */
export async function categorizeWithLLM(items: CategorizeInput[]): Promise<(string | null)[]> {
  const results: (string | null)[] = []
  for (let offset = 0; offset < items.length; offset += BATCH_SIZE) {
    const chunk = items.slice(offset, offset + BATCH_SIZE)
    results.push(...(await categorizeBatch(chunk)))
  }
  return results
}
