import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../lib/auth-context"
import { ApiError } from "../lib/api"
import { AuthShell } from "../components/ui/AuthShell"
import { PillField } from "../components/ui/PillField"

export function SignIn() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthShell>
      <h1 className="text-center font-heading text-4xl font-extrabold leading-tight text-ink [text-shadow:var(--text-glow)] sm:text-5xl">
        Welcome back
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <PillField type="email" value={email} onChange={setEmail} placeholder="Email" autoComplete="email" />
        <PillField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
          autoComplete="current-password"
        />

        <p className="text-right font-display text-sm font-semibold text-rust">Forgot password?</p>

        {error && <p className="font-display text-sm text-error">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-rust py-3 text-center font-display text-sm font-bold text-white shadow-[var(--shadow-button)] transition-colors hover:bg-rust-dark hover:shadow-[var(--shadow-button-hover)] disabled:opacity-50"
        >
          {isSubmitting ? "Logging in…" : "Log in"}
        </button>
      </form>

      <p className="mt-6 text-center font-display text-sm text-ink-soft">
        New here?{" "}
        <Link to="/sign-up" className="font-bold text-rust underline underline-offset-4">
          Sign up
        </Link>
      </p>
    </AuthShell>
  )
}
