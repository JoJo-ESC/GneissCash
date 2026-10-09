import { Outlet } from "react-router-dom"
import { useAuth } from "../../lib/auth-context"
import { SideRail } from "./SideRail"

export function DashboardLayout() {
  const { logout } = useAuth()

  return (
    <div className="flex h-screen bg-bg">
      <SideRail onLogout={logout} />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
