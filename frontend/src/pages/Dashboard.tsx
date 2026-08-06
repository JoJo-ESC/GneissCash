import { useEffect, useMemo, useState } from "react"
import { bankAccountsApi, transactionsApi } from "../lib/api"
import { buildMoneyMapData } from "../lib/moneyMap"
import { MoneyMap } from "../components/moneymap/MoneyMap"
import type { BankAccount, Transaction } from "../types/api"

export function Dashboard() {
  const [accounts, setAccounts] = useState<BankAccount[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  const moneyMapData = useMemo(() => buildMoneyMapData(accounts, transactions), [accounts, transactions])

  if (isLoading) {
    return <p className="font-display text-sm text-ink-soft">Loading…</p>
  }

  if (error) {
    return <p className="font-display text-sm text-error">{error}</p>
  }

  return (
    <div>
      <h1 className="font-heading text-3xl font-extrabold text-ink [text-shadow:var(--text-glow)]">Money Map</h1>
      <p className="mt-1 font-display text-sm text-ink-soft">
        Income sources flow into your accounts, which flow out into spending categories and merchants.
      </p>
      <div className="mt-6">
        <MoneyMap data={moneyMapData} />
      </div>
    </div>
  )
}
