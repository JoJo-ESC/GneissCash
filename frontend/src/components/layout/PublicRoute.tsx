import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../lib/auth-context"

export function PublicRoute() {
  const { user, isLoading } = useAuth()

  if (isLoading) return null
  if (user) return <Navigate to="/dashboard" replace />

  return <Outlet />
}
