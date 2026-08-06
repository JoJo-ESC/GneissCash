import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./lib/auth-context"
import { PublicRoute } from "./components/layout/PublicRoute"
import { ProtectedRoute } from "./components/layout/ProtectedRoute"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Dashboard } from "./pages/Dashboard"
import { Import } from "./pages/Import"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/import" element={<Import />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
