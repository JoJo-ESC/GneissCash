'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './signup.module.css'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  const passwordsMatch = password === confirmPassword || confirmPassword === ''

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>GC</span>
      </header>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.formCard}>
            <h1 className={styles.title}>Create account</h1>
            
            <form onSubmit={handleSignup} className={styles.form}>
              {error && <p className={styles.error}>{error}</p>}
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
              
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`${styles.input} ${!passwordsMatch ? styles.inputError : ''}`}
                required
              />
              
              <button
                type="submit"
                disabled={loading || !passwordsMatch}
                className={styles.button}
              >
                {loading ? 'Creating account...' : 'Sign up'}
              </button>
            </form>

            <p className={styles.links}>
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.message}>
            Let's save.<br />
            Let's serve.<br />
            We Will<br />
            DO BETTER.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> by Josiah
      </footer>
    </div>
  )
}