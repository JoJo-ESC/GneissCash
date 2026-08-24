import type { ReactNode } from "react"

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="w-full max-w-sm rounded-2xl bg-bg p-8 shadow-[var(--shadow-button)] sm:p-10">{children}</div>
    </div>
  )
}
