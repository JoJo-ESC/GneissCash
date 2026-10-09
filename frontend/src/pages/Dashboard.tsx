import { useEffect, useMemo, useState } from "react"
import { bankAccountsApi, transactionsApi } from "../lib/api"
import { buildMoneyMapData } from "../lib/moneyMap"
import { getAvailableMonths } from "../lib/timeRange"
import { MoneyMap } from "../components/moneymap/MoneyMap"
import { TimeSlider } from "../components/moneymap/TimeSlider"
import type { BankAccount, Transaction } from "../types/api"

export function Dashboard() {
  const [accounts, setAccounts] = useState<BankAccount[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null) // null = all time

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [accountsRes, transactionsRes] = await Promise.all([
          bankAccountsApi.list(),
          transactionsApi.list({ limit: 1000, sort: "desc" }),
        ])
        if (cancelled) return
        setAccounts(accountsRes.bank_accounts)
        setTransactions(transactionsRes.transactions)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Something went wrong")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const availableMonths = useMemo(() => getAvailableMonths(transactions), [transactions])

  const filteredTransactions = useMemo(() => {
    if (selectedMonth === null) return transactions
    return transactions.filter((transaction) => transaction.date.slice(0, 7) === selectedMonth)
  }, [transactions, selectedMonth])

  const moneyMapData = useMemo(
    () => buildMoneyMapData(accounts, filteredTransactions),
    [accounts, filteredTransactions]
  )

  if (isLoading) {
    return <p className="p-8 text-sm text-text-muted">Loading…</p>
  }

  if (error) {
    return <p className="p-8 text-sm text-danger">{error}</p>
  }

  return (
    <div className="relative h-full w-full">
      <MoneyMap data={moneyMapData} />
      <TimeSlider availableMonths={availableMonths} selectedMonth={selectedMonth} onSelectMonth={setSelectedMonth} />
    </div>
  )
}
