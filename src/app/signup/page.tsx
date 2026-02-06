'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './signup.module.css'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 12) {
      setError('Password must be at least 12 characters')
      setLoading(false)
      return
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  const passwordsMatch = confirmPassword === '' || password === confirmPassword

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.brandMark}>GneissCash</span>
          <h1 className={styles.heroTitle}>Create your account. Bring clarity to every dollar.</h1>
          <p className={styles.heroCopy}>
            Build budgets, stay on top of cash flow, and translate statements into decisions without spreadsheets.
          </p>
          <div className={styles.heroHighlights}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightLabel}>Quick setup</span>
              <span className={styles.highlightValue}>Import your first statements in minutes.</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightLabel}>Actionable insights</span>
              <span className={styles.highlightValue}>Needs vs. wants, weekly snapshots, and goal tracking.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <header className={styles.formHeader}>
            <h2 className={styles.formTitle}>Create your account</h2>
            <p className={styles.formSubtitle}>
              Your email becomes your login. Passwords must be at least 12 characters so your budget stays protected.
            </p>
          </header>

          {error && (
            <div className={styles.error} role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className={styles.form}>
            <label className={styles.formField}>
              <span className={styles.label}>Email</span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className={styles.formField}>
              <span className={styles.label}>Password</span>
              <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles.input}
                placeholder="Create a strong password"
                required
              />
            </label>

            <label className={styles.formField}>
              <span className={styles.label}>Confirm password</span>
              <input
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className={`${styles.input} ${!passwordsMatch && confirmPassword !== '' ? styles.inputError : ''}`}
                placeholder="Re-enter your password"
                required
              />
            </label>

            <button type="submit" className={styles.submit} disabled={loading || !passwordsMatch}>
              {loading ? 'Creating account…' : 'Sign up'}
            </button>
          </form>

          <p className={styles.footerLinks}>
            Already have an account?{' '}
            <Link href="/login" className={styles.altLink}>
              Sign in instead
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}