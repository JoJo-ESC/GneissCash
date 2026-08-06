import { useEffect, useState } from "react"
import { bankAccountsApi, transactionsApi } from "../lib/api"
import { formatCurrency, formatDate } from "../lib/format"
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
          transactionsApi.list({ limit: 8, sort: "desc" }),
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

  const totalBalance = accounts.reduce((sum, account) => sum + parseFloat(account.current_balance ?? "0"), 0)

  if (isLoading) {
    return <p className="font-display text-sm text-ink-soft">Loading…</p>
  }

  if (error) {
    return <p className="font-display text-sm text-error">{error}</p>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-extrabold text-ink [text-shadow:var(--text-glow)]">
          Overview
        </h1>
        <p className="mt-1 font-display text-sm text-ink-soft">Total balance across all accounts</p>
        <p className="mt-2 font-heading text-4xl font-extrabold text-rust">{formatCurrency(totalBalance)}</p>
      </div>

      <section>
        <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">Accounts</h2>
        {accounts.length === 0 ? (
          <p className="mt-3 font-display text-sm text-ink-soft">No bank accounts yet.</p>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="rounded-2xl border-2 border-gold bg-cream-soft p-4 shadow-[var(--shadow-field)]"
              >
                <p className="font-display text-sm text-ink-soft capitalize">{account.type}</p>
                <p className="font-display font-semibold text-ink">{account.name}</p>
                <p className="mt-2 font-heading text-2xl font-extrabold text-ink">
                  {formatCurrency(account.current_balance ?? "0")}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">Recent transactions</h2>
        {transactions.length === 0 ? (
          <p className="mt-3 font-display text-sm text-ink-soft">No transactions yet.</p>
        ) : (
          <div className="mt-3 divide-y divide-gold/30 rounded-2xl border-2 border-gold bg-cream-soft">
            {transactions.map((transaction) => {
              const amount = parseFloat(transaction.amount)
              const isIncome = amount >= 0
              return (
                <div key={transaction.id} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-display font-semibold text-ink">
                      {transaction.merchant_name ?? transaction.name ?? "Unknown"}
                    </p>
                    <p className="font-display text-xs text-ink-soft">
                      {formatDate(transaction.date)}
                      {transaction.category ? ` · ${transaction.category}` : ""}
                    </p>
                  </div>
                  <p className={`shrink-0 font-display font-bold ${isIncome ? "text-green-600" : "text-ink"}`}>
                    {isIncome ? "+" : ""}
                    {formatCurrency(amount)}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
