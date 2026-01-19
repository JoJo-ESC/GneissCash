'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './login.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
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

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>GC</span>
      </header>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.formCard}>
            <h1 className={styles.title}>Sign in</h1>
            
            <form onSubmit={handleLogin} className={styles.form}>
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
              
              <button
                type="submit"
                disabled={loading}
                className={styles.button}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <p className={styles.links}>
              Don't have an account? <a href="/signup">Create one</a>
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.message}>
            SAVE MORE<br />
            KNOW MORE<br />
            DO BETTER
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> by Josiah
      </footer>
    </div>
  )
}