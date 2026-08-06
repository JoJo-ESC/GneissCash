import type {
  BankAccount,
  CashFlowResponse,
  Goal,
  ImportResult,
  SpendMixResponse,
  Transaction,
  User,
  UserSettings,
  WeeklySummary,
} from "../types/api"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001"

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

let authToken: string | null = null

export function setAuthToken(token: string | null) {
  authToken = token
}

async function request<T>(
  path: string,
  options: { method?: string; body?: unknown; query?: Record<string, string | number | undefined>; formData?: FormData } = {}
): Promise<T> {
  const { method = "GET", body, query, formData } = options

  const url = new URL(BASE_URL + path)
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== "") url.searchParams.set(key, String(value))
    }
  }

  const headers: Record<string, string> = {}
  if (authToken) headers.Authorization = `Bearer ${authToken}`
  if (body !== undefined) headers["Content-Type"] = "application/json"

  const res = await fetch(url.toString(), {
    method,
    headers,
    body: formData ?? (body !== undefined ? JSON.stringify(body) : undefined),
  })

  const isJson = res.headers.get("content-type")?.includes("application/json")
  const data = isJson ? await res.json() : null

  if (!res.ok) {
    throw new ApiError(res.status, (data && data.error) || `Request failed with status ${res.status}`)
  }

  return data as T
}

export const authApi = {
  login: (email: string, password: string) =>
    request<{ token: string; user: User }>("/auth/login", { method: "POST", body: { email, password } }),
  register: (email: string, password: string) =>
    request<{ token: string; user: User }>("/auth/register", { method: "POST", body: { email, password } }),
}

export const bankAccountsApi = {
  list: () => request<{ bank_accounts: BankAccount[] }>("/bank-accounts"),
  create: (data: { name: string; type: BankAccount["type"]; current_balance?: number }) =>
    request<{ bank_account: BankAccount }>("/bank-accounts", { method: "POST", body: data }),
  remove: (id: string) => request<{ success: boolean }>(`/bank-accounts/${id}`, { method: "DELETE" }),
}

export const transactionsApi = {
  list: (params: {
    start_date?: string
    end_date?: string
    bank_account_id?: string
    category?: string
    limit?: number
    offset?: number
    sort?: "asc" | "desc"
  } = {}) =>
    request<{ transactions: Transaction[]; total: number; limit: number; offset: number }>("/transactions", {
      query: params,
    }),
  update: (id: string, data: { category?: string; merchant_name?: string; name?: string }) =>
    request<{ transaction: Transaction }>(`/transactions/${id}`, { method: "PATCH", body: data }),
  remove: (id: string) => request<{ success: boolean }>(`/transactions/${id}`, { method: "DELETE" }),
}

export const importApi = {
  upload: (bankAccountId: string, file: File) => {
    const formData = new FormData()
    formData.append("bank_account_id", bankAccountId)
    formData.append("file", file)
    return request<ImportResult>("/import", { method: "POST", formData })
  },
}

export const goalsApi = {
  list: () => request<{ goals: Goal[] }>("/goals"),
  create: (data: { name: string; goal_amount: number; current_amount?: number }) =>
    request<{ goal: Goal }>("/goals", { method: "POST", body: data }),
  remove: (id: string) => request<{ success: boolean }>(`/goals/${id}`, { method: "DELETE" }),
}

export const userSettingsApi = {
  get: () => request<{ settings: UserSettings | null }>("/user-settings"),
  update: (data: Partial<{
    monthly_income: number
    savings_goal: number
    goal_deadline: string
    current_saved: number
    display_name: string
    avatar_url: string
  }>) => request<{ settings: UserSettings }>("/user-settings", { method: "PUT", body: data }),
}

export const cashFlowApi = {
  get: (range: "3m" | "6m" | "12m" = "6m") => request<CashFlowResponse>("/cash-flow", { query: { range } }),
}

export const spendMixApi = {
  get: (range: "3m" | "6m" | "12m" = "12m") => request<SpendMixResponse>("/spend-mix", { query: { range } }),
}

export const weeklySummaryApi = {
  list: (limit = 1) => request<{ summaries: WeeklySummary[]; count: number }>("/weekly-summary", { query: { limit } }),
  generate: (date?: string) =>
    request<{ summary: WeeklySummary; isNew: boolean; message: string }>("/weekly-summary", {
      method: "POST",
      body: date ? { date } : {},
    }),
}
