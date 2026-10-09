export function formatCurrency(value: number | string): string {
  const amount = typeof value === "string" ? parseFloat(value) : value
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
}
