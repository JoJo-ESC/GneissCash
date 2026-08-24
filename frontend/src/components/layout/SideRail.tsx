import { NavLink } from "react-router-dom"
import { LogOut, Network, Upload } from "lucide-react"

const NAV_LINKS = [
  { to: "/dashboard", label: "Money Map", Icon: Network },
  { to: "/import", label: "Import", Icon: Upload },
]

const ICON_BASE = "flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
const ICON_ACTIVE = "bg-accent text-white"
const ICON_INACTIVE = "text-text-muted hover:bg-surface-hover hover:text-text"

function Tooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 rounded-md bg-text px-2.5 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
      {label}
    </span>
  )
}

interface SideRailProps {
  onLogout: () => void
}

export function SideRail({ onLogout }: SideRailProps) {
  return (
    <aside className="flex w-[72px] shrink-0 flex-col items-center border-r border-border bg-surface py-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-sans text-sm font-bold text-white">
        G
      </div>

      <nav className="mt-8 flex flex-col gap-2">
        {NAV_LINKS.map(({ to, label, Icon }) => (
          <div key={to} className="group relative">
            <NavLink
              to={to}
              aria-label={label}
              className={({ isActive }) => `${ICON_BASE} ${isActive ? ICON_ACTIVE : ICON_INACTIVE}`}
            >
              <Icon size={20} strokeWidth={1.75} />
            </NavLink>
            <Tooltip label={label} />
          </div>
        ))}
      </nav>

      <div className="group relative mt-auto">
        <button type="button" onClick={onLogout} aria-label="Log out" className={`${ICON_BASE} ${ICON_INACTIVE}`}>
          <LogOut size={20} strokeWidth={1.75} />
        </button>
        <Tooltip label="Log out" />
      </div>
    </aside>
  )
}
