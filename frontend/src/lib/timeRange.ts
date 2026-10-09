/**
 * Every calendar month from the earliest to the latest transaction date,
 * inclusive, as ascending "YYYY-MM" strings. Months with zero transactions
 * are still included — the time slider needs continuous, evenly-spaced
 * ticks, not gaps where a month happened to have no activity.
 */
export function getAvailableMonths(transactions: { date: string }[]): string[] {
  if (transactions.length === 0) return []

  let min = transactions[0].date.slice(0, 7)
  let max = min
  for (const tx of transactions) {
    const month = tx.date.slice(0, 7)
    if (month < min) min = month
    if (month > max) max = month
  }

  const months: string[] = []
  let [year, monthNum] = min.split("-").map(Number)
  const [maxYear, maxMonthNum] = max.split("-").map(Number)

  while (year < maxYear || (year === maxYear && monthNum <= maxMonthNum)) {
    months.push(`${year}-${String(monthNum).padStart(2, "0")}`)
    monthNum++
    if (monthNum > 12) {
      monthNum = 1
      year++
    }
  }

  return months
}
