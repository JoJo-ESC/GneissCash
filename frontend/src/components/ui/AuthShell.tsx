import { useState, type ReactNode } from "react"

export function AuthShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"neon" | "regular">("neon")

  return (
    <div
      data-theme={theme}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6"
    >
      <button
        type="button"
        onClick={() => setTheme((current) => (current === "neon" ? "regular" : "neon"))}
        aria-label={theme === "neon" ? "Switch to regular color palette" : "Switch to neon color palette"}
        className="absolute -top-32 -left-32 flex h-96 w-96 items-center justify-center rounded-full border-0 bg-gradient-to-br from-sun-outer to-sun-inner shadow-[var(--shadow-sun)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 sm:h-[28rem] sm:w-[28rem]"
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">
          <div className="h-24 w-24 rounded-full bg-sun-core shadow-[var(--shadow-sun-core)]" />
        </div>
      </button>

      <div className="relative z-10 w-full max-w-sm">{children}</div>
    </div>
  )
}
