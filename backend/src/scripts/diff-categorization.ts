import dotenv from 'dotenv'
import { Pool } from 'pg'
import { categorizeByMerchant as categorizeNew } from '../lib/parsers/categorize'
import { categorizeWithLLM } from '../lib/llmCategorize'

dotenv.config()

// Verbatim snapshot of the old categorizer (as it existed duplicated in
// csv.ts/pdf.ts before consolidation) kept here ONLY so this script can
// diff against it. Not used anywhere else in the app.
function categorizeOld(merchantName: string, amount: number): string {
  const name = merchantName.toLowerCase()

  if (amount > 0) {
    if (name.includes('payroll') || name.includes('direct dep') || name.includes('salary') ||
        name.includes('employer') || name.includes('wage')) {
      return 'Income'
    }
    if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
        name.includes('cash app') || name.includes('paypal')) {
      return 'Transfer'
    }
    return 'Income'
  }

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
    return 'Food & Drink'
  }

  if (name.includes('walmart') || name.includes('target') || name.includes('kroger') ||
      name.includes('safeway') || name.includes('publix') || name.includes('whole foods') ||
      name.includes('trader joe') || name.includes('aldi') || name.includes('costco') ||
      name.includes("sam's club") || name.includes('grocery') || name.includes('market') ||
      name.includes('food lion') || name.includes('giant') || name.includes('wegmans') ||
      name.includes('heb') || name.includes('meijer') || name.includes('sprouts') ||
      name.includes('fresh') || name.includes('albertson') || name.includes('vons') ||
      name.includes('ralph') || name.includes('food')) {
    return 'Food & Drink'
  }

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
    return 'Shopping'
  }

  if (name.includes('uber') || name.includes('lyft') || name.includes('taxi') ||
      name.includes('gas') || name.includes('shell') || name.includes('exxon') ||
      name.includes('chevron') || name.includes('bp') || name.includes('mobil') ||
      name.includes('sunoco') || name.includes('speedway') || name.includes('wawa') ||
      name.includes('sheetz') || name.includes('quiktrip') || name.includes('racetrac') ||
      name.includes('circle k') || name.includes('7-eleven') || name.includes('fuel') ||
      name.includes('petro') || name.includes('parking') || name.includes('toll') ||
      name.includes('metro') || name.includes('transit') || name.includes('bus') ||
      name.includes('train') || name.includes('amtrak') || name.includes('greyhound') ||
      name.includes('autozone') || name.includes('advance auto') || name.includes("o'reilly") ||
      name.includes('jiffy lube') || name.includes('valvoline') || name.includes('car wash') ||
      name.includes('tire') || name.includes('mechanic') || name.includes('auto')) {
    return 'Transportation'
  }

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
    return 'Entertainment'
  }

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
    return 'Bills & Utilities'
  }

  if (name.includes('pharmacy') || name.includes('drug') || name.includes('rx') ||
      name.includes('medical') || name.includes('doctor') || name.includes('hospital') ||
      name.includes('clinic') || name.includes('urgent care') || name.includes('dental') ||
      name.includes('dentist') || name.includes('orthodont') || name.includes('vision') ||
      name.includes('optom') || name.includes('eye') || name.includes('glasses') ||
      name.includes('contacts') || name.includes('therapy') || name.includes('counseling') ||
      name.includes('mental health') || name.includes('lab') || name.includes('diagnostic') ||
      name.includes('imaging') || name.includes('xray') || name.includes('mri')) {
    return 'Health'
  }

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
    return 'Travel'
  }

  if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
      name.includes('cash app') || name.includes('paypal') || name.includes('wire') ||
      name.includes('ach') || name.includes('withdrawal') || name.includes('atm')) {
    return 'Transfer'
  }

  return 'Other'
}

const ADVERSARIAL_CASES: { name: string; amount: number; note: string }[] = [
  { name: 'Las Vegas Casino', amount: -80, note: '"gas" substring inside "Vegas"' },
  { name: "Joe's Barber Shop", amount: -25, note: '"shop" catch-all vs specific "barber"' },
  { name: 'City Mattress Store', amount: -450, note: 'bare "store" catch-all' },
  { name: 'Fast Signs Auto Wrap', amount: -300, note: 'bare "auto" catch-all' },
  { name: 'Whole Foods Market', amount: -63.2, note: 'should still hit Food & Drink via specific keyword' },
  { name: 'Gaslamp District Diner', amount: -55, note: '"gas" as a word-prefix, not the word "gas" itself' },
  { name: 'Casablanca Fine Food De', amount: -3.12, note: 'real merchant from your data — generic "food" should still work as fallback' },
  { name: 'Stewarts Shop', amount: -17.68, note: 'real merchant from your data — generic "shop" should still work as fallback' },
]

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })

  console.log('=== Adversarial regression cases (keyword: old vs current) ===\n')
  for (const { name, amount, note } of ADVERSARIAL_CASES) {
    const before = categorizeOld(name, amount)
    const after = categorizeNew(name, amount)
    const changed = before !== after ? '→ CHANGED' : ''
    console.log(`"${name}" (${note})\n  old: ${before}   new: ${after}   ${changed}\n`)
  }

  console.log('=== Adversarial regression cases (current keyword vs LLM) ===\n')
  const adversarialLLM = await categorizeWithLLM(
    ADVERSARIAL_CASES.map(({ name, amount }) => ({ merchant_name: name, name: null, amount }))
  )
  ADVERSARIAL_CASES.forEach(({ name, amount, note }, i) => {
    const keyword = categorizeNew(name, amount)
    const llm = adversarialLLM[i]
    const flag = keyword !== llm ? '→ DIFFERS' : ''
    console.log(`"${name}" (${note})\n  keyword: ${keyword}   llm: ${llm ?? 'null (invalid response)'}   ${flag}\n`)
  })

  const { rows } = await pool.query<{ merchant_name: string | null; name: string | null; amount: string }>(
    `SELECT DISTINCT merchant_name, name, amount FROM transactions`
  )
  await pool.end()

  if (rows.length === 0) {
    console.log('No real transactions in the database to diff against — import a statement first.')
    return
  }

  console.log(`=== Diffing ${rows.length} real merchant names: current keyword vs LLM ===\n`)

  const llmResults = await categorizeWithLLM(
    rows.map((row) => ({ merchant_name: row.merchant_name, name: row.name, amount: parseFloat(row.amount) }))
  )

  let changedCount = 0
  let nullCount = 0
  rows.forEach((row, i) => {
    const merchant = row.merchant_name ?? row.name ?? 'Unknown'
    const amount = parseFloat(row.amount)
    const keyword = categorizeNew(merchant, amount)
    const llm = llmResults[i]
    if (llm === null) nullCount++
    if (keyword !== llm) {
      changedCount++
      console.log(`"${merchant}" (${amount})\n  keyword: ${keyword}   llm: ${llm ?? 'null (invalid response)'}\n`)
    }
  })

  console.log(`${changedCount} of ${rows.length} real merchant names differ between keyword and LLM.`)
  if (nullCount > 0) {
    console.log(`${nullCount} LLM responses were invalid/unparseable and fell back to null.`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
