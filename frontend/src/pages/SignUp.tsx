import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../lib/auth-context"
import { ApiError } from "../lib/api"
import { AuthShell } from "../components/ui/AuthShell"
import { PillField } from "../components/ui/PillField"

export function SignUp() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsSubmitting(true)
    try {
      await register(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthShell>
      <h1 className="text-center text-2xl font-semibold tracking-tight text-text">Create your account</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <PillField type="email" value={email} onChange={setEmail} placeholder="Email" autoComplete="email" />
        <PillField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password (min. 8 characters)"
          autoComplete="new-password"
        />
        <PillField
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirm password"
          autoComplete="new-password"
        />

        {error && <p className="text-sm text-danger">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-accent py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow-button)] transition-colors hover:bg-accent-hover hover:shadow-[var(--shadow-button-hover)] disabled:opacity-50"
        >
          {isSubmitting ? "Signing up…" : "Sign up"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-text-muted">
        Already have an account?{" "}
        <Link to="/" className="font-semibold text-accent hover:underline">
          Log in
        </Link>
      </p>
    </AuthShell>
  )
}
