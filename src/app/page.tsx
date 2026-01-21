import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>GC</span>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.tagline}>
            SAVE MORE.<br />
            KNOW MORE.<br />
            DO BETTER.
          </h1>
          <p className={styles.subtitle}>
            Track your spending and take control of your finances.
          </p>
          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primaryButton}>
              Get Started
            </Link>
            <Link href="/login" className={styles.secondaryButton}>
              Sign In
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> by Josiah
      </footer>
    </div>
  )
}
