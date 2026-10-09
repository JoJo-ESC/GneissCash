import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { authApi, setAuthToken } from "./api"
import type { User } from "../types/api"

const STORAGE_KEY = "gneisscash_auth"

interface StoredAuth {
  token: string
  user: User
  isDemo?: boolean
}

interface AuthContextValue {
  user: User | null
  token: string | null
  isDemo: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  demoLogin: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function loadStoredAuth(): StoredAuth | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as StoredAuth
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isDemo, setIsDemo] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = loadStoredAuth()
    if (stored) {
      setAuthToken(stored.token)
      setUser(stored.user)
      setToken(stored.token)
      setIsDemo(stored.isDemo ?? false)
    }
    setIsLoading(false)
  }, [])

  const persist = (auth: StoredAuth | null) => {
    if (auth) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(auth))
      setAuthToken(auth.token)
      setUser(auth.user)
      setToken(auth.token)
      setIsDemo(auth.isDemo ?? false)
    } else {
      localStorage.removeItem(STORAGE_KEY)
      setAuthToken(null)
      setUser(null)
      setToken(null)
      setIsDemo(false)
    }
  }

  const login = async (email: string, password: string) => {
    const result = await authApi.login(email, password)
    persist(result)
  }

  const register = async (email: string, password: string) => {
    const result = await authApi.register(email, password)
    persist(result)
  }

  const demoLogin = async () => {
    const result = await authApi.demo()
    persist(result)
  }

  const logout = () => persist(null)

  const value = useMemo(
    () => ({ user, token, isDemo, isLoading, login, register, demoLogin, logout }),
    [user, token, isDemo, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
