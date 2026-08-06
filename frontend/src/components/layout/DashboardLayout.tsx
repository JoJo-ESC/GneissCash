import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useAuth } from "../../lib/auth-context"

export function DashboardLayout() {
  const { user, logout } = useAuth()
  const [theme, setTheme] = useState<"neon" | "regular">("neon")

  return (
    <div data-theme={theme} className="min-h-screen bg-cream">
      <header className="flex items-center justify-between border-b-2 border-gold/40 px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "neon" ? "regular" : "neon"))}
            aria-label={theme === "neon" ? "Switch to regular color palette" : "Switch to neon color palette"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-0 bg-gradient-to-br from-sun-outer to-sun-inner shadow-[var(--shadow-sun-core)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            <div className="h-4 w-4 rounded-full bg-sun-core" />
          </button>
          <span className="font-heading text-xl font-extrabold text-ink [text-shadow:var(--text-glow)]">
            gneisscash
          </span>
        </div>

        <div className="flex items-center gap-4">
          {user && <span className="hidden font-display text-sm text-ink-soft sm:inline">{user.email}</span>}
          <button
            type="button"
            onClick={logout}
            className="rounded-full border-2 border-gold px-4 py-1.5 font-display text-sm font-semibold text-ink transition-colors hover:bg-gold/20"
          >
            Log out
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-8">
        <Outlet />
      </main>
    </div>
  )
}
