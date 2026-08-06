import { useEffect, useRef, useState, type FormEvent } from "react"
import { bankAccountsApi, importApi, ApiError } from "../lib/api"
import { formatCurrency } from "../lib/format"
import type { BankAccount, ImportResult } from "../types/api"

const ACCOUNT_TYPES: BankAccount["type"][] = ["checking", "savings", "credit"]

export function Import() {
  const [accounts, setAccounts] = useState<BankAccount[]>([])
  const [isLoadingAccounts, setIsLoadingAccounts] = useState(true)
  const [accountsError, setAccountsError] = useState<string | null>(null)

  const [accountName, setAccountName] = useState("")
  const [accountType, setAccountType] = useState<BankAccount["type"]>("checking")
  const [startingBalance, setStartingBalance] = useState("")
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)
  const [createAccountError, setCreateAccountError] = useState<string | null>(null)

  const [selectedAccountId, setSelectedAccountId] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadResult, setUploadResult] = useState<ImportResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function loadAccounts() {
    setIsLoadingAccounts(true)
    setAccountsError(null)
    try {
      const res = await bankAccountsApi.list()
      setAccounts(res.bank_accounts)
      setSelectedAccountId((current) => current || res.bank_accounts[0]?.id || "")
    } catch (err) {
      setAccountsError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoadingAccounts(false)
    }
  }

  useEffect(() => {
    loadAccounts()
  }, [])

  const handleCreateAccount = async (event: FormEvent) => {
    event.preventDefault()
    setCreateAccountError(null)
    setIsCreatingAccount(true)
    try {
      await bankAccountsApi.create({
        name: accountName,
        type: accountType,
        current_balance: startingBalance ? parseFloat(startingBalance) : undefined,
      })
      setAccountName("")
      setStartingBalance("")
      await loadAccounts()
    } catch (err) {
      setCreateAccountError(err instanceof ApiError ? err.message : "Something went wrong")
    } finally {
      setIsCreatingAccount(false)
    }
  }

  const handleUpload = async (event: FormEvent) => {
    event.preventDefault()
    if (!file || !selectedAccountId) return

    setUploadError(null)
    setUploadResult(null)
    setIsUploading(true)
    try {
      const result = await importApi.upload(selectedAccountId, file)
      setUploadResult(result)
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (err) {
      setUploadError(err instanceof ApiError ? err.message : "Something went wrong")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-extrabold text-ink [text-shadow:var(--text-glow)]">Import</h1>
        <p className="mt-1 font-display text-sm text-ink-soft">
          Add a bank account, then upload a CSV or PDF statement to bring transactions into your money map.
        </p>
      </div>

      <section>
        <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">Accounts</h2>

        {isLoadingAccounts ? (
          <p className="mt-3 font-display text-sm text-ink-soft">Loading…</p>
        ) : accountsError ? (
          <p className="mt-3 font-display text-sm text-error">{accountsError}</p>
        ) : accounts.length === 0 ? (
          <p className="mt-3 font-display text-sm text-ink-soft">No accounts yet — add one below.</p>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="rounded-2xl border-2 border-gold bg-cream-soft p-4 shadow-[var(--shadow-field)]"
              >
                <p className="font-display text-sm text-ink-soft capitalize">{account.type}</p>
                <p className="font-display font-semibold text-ink">{account.name}</p>
                <p className="mt-2 font-heading text-xl font-extrabold text-ink">
                  {formatCurrency(account.current_balance ?? "0")}
                </p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleCreateAccount} className="mt-4 flex flex-wrap items-end gap-3">
          <div>
            <label className="block font-display text-xs font-semibold text-ink-soft" htmlFor="account-name">
              Account name
            </label>
            <input
              id="account-name"
              type="text"
              value={accountName}
              onChange={(event) => setAccountName(event.target.value)}
              placeholder="Chase Checking"
              required
              className="mt-1 rounded-full border-2 border-gold bg-cream-soft px-4 py-2 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block font-display text-xs font-semibold text-ink-soft" htmlFor="account-type">
              Type
            </label>
            <select
              id="account-type"
              value={accountType}
              onChange={(event) => setAccountType(event.target.value as BankAccount["type"])}
              className="mt-1 rounded-full border-2 border-gold bg-cream-soft px-4 py-2 text-sm text-ink-soft capitalize focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {ACCOUNT_TYPES.map((type) => (
                <option key={type} value={type} className="capitalize">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-display text-xs font-semibold text-ink-soft" htmlFor="account-balance">
              Starting balance
            </label>
            <input
              id="account-balance"
              type="number"
              step="0.01"
              value={startingBalance}
              onChange={(event) => setStartingBalance(event.target.value)}
              placeholder="0.00"
              className="mt-1 w-32 rounded-full border-2 border-gold bg-cream-soft px-4 py-2 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <button
            type="submit"
            disabled={isCreatingAccount}
            className="rounded-full bg-rust px-5 py-2 font-display text-sm font-bold text-white shadow-[var(--shadow-button)] transition-colors hover:bg-rust-dark disabled:opacity-50"
          >
            {isCreatingAccount ? "Adding…" : "Add account"}
          </button>
        </form>
        {createAccountError && <p className="mt-2 font-display text-sm text-error">{createAccountError}</p>}
      </section>

      <section>
        <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">Upload a statement</h2>

        <form onSubmit={handleUpload} className="mt-3 space-y-4 rounded-2xl border-2 border-gold bg-cream-soft p-5">
          <div>
            <label className="block font-display text-xs font-semibold text-ink-soft" htmlFor="import-account">
              Account
            </label>
            <select
              id="import-account"
              value={selectedAccountId}
              onChange={(event) => setSelectedAccountId(event.target.value)}
              disabled={accounts.length === 0}
              required
              className="mt-1 w-full max-w-xs rounded-full border-2 border-gold bg-cream px-4 py-2 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"
            >
              {accounts.length === 0 && <option value="">No accounts yet</option>}
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-display text-xs font-semibold text-ink-soft" htmlFor="import-file">
              CSV or PDF file
            </label>
            <input
              id="import-file"
              ref={fileInputRef}
              type="file"
              accept=".csv,.pdf"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              required
              className="mt-1 block font-display text-sm text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-rust file:px-4 file:py-2 file:font-display file:text-sm file:font-bold file:text-white hover:file:bg-rust-dark"
            />
          </div>

          <button
            type="submit"
            disabled={isUploading || !file || accounts.length === 0}
            className="rounded-full bg-rust px-5 py-2 font-display text-sm font-bold text-white shadow-[var(--shadow-button)] transition-colors hover:bg-rust-dark disabled:opacity-50"
          >
            {isUploading ? "Uploading…" : "Upload"}
          </button>

          {uploadError && <p className="font-display text-sm text-error">{uploadError}</p>}

          {uploadResult && (
            <div className="rounded-xl border-2 border-gold/60 bg-cream p-3">
              <p className="font-display text-sm font-semibold text-ink">
                Imported {uploadResult.transactions_imported} transaction
                {uploadResult.transactions_imported === 1 ? "" : "s"} from {uploadResult.import.filename}.
              </p>
              {uploadResult.parse_errors.length > 0 && (
                <ul className="mt-2 list-inside list-disc font-display text-xs text-error">
                  {uploadResult.parse_errors.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </form>
      </section>
    </div>
  )
}
