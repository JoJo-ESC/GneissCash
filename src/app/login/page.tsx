'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './login.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.brandMark}>GneissCash</span>
          <h1 className={styles.heroTitle}>Welcome back. Let’s make your money work smarter.</h1>
          <p className={styles.heroCopy}>
            Track cash flow, understand spending patterns, and act on insights crafted for everyday budgets.
          </p>
          <div className={styles.heroHighlights}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightLabel}>Live dashboards</span>
              <span className={styles.highlightValue}>Cash flow, trends, and goals in one view.</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightLabel}>Smart imports</span>
              <span className={styles.highlightValue}>Drop in statements, see them categorized instantly.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <header className={styles.formHeader}>
            <h2 className={styles.formTitle}>Sign in</h2>
            <p className={styles.formSubtitle}>Use your email and password to access the dashboard.</p>
          </header>

          {error && (
            <div className={styles.error} role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className={styles.form}>
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
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles.input}
                placeholder="••••••••"
                required
              />
            </label>

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className={styles.footerLinks}>
            No account yet?{' '}
            <Link href="/signup" className={styles.altLink}>
              Create one now
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}