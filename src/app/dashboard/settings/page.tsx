'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import AvatarUpload from '@/components/AvatarUpload'
import Sidebar from '@/components/Sidebar'
import styles from '@/app/dashboard/dashboard.module.css'
import settingsStyles from './settings.module.css'
import ManageGoalsAndAccounts from './ManageGoalsAndAccounts'
import SettingsNavbar from './SettingsNavbar'
type UserProfileState = {
  displayName: string | null
  avatarUrl: string | null
  fallbackName: string | null
}

const DEFAULT_PROFILE: UserProfileState = {
  displayName: null,
  avatarUrl: null,
  fallbackName: null,
}

function getStoredProfile(): UserProfileState {
  if (typeof window === 'undefined') return DEFAULT_PROFILE
  try {
    const stored = window.localStorage.getItem('gneisscash.userProfile')
    if (!stored) return DEFAULT_PROFILE
    const parsed = JSON.parse(stored) as Partial<UserProfileState>
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
    }
  } catch {
    return DEFAULT_PROFILE
  }
}

export default function SettingsPage() {
  const router = useRouter()
  const supabase = createClient()

  // Loading states
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfileState>(getStoredProfile)
  const [selectedSection, setSelectedSection] = useState('personal-info');

  // Settings form
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [savingsGoal, setSavingsGoal] = useState('')
  const [goalDeadline, setGoalDeadline] = useState('')
  const [currentSaved, setCurrentSaved] = useState('')

  // Messages
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function loadSettings() {
    try {
      const response = await fetch('/api/user-settings')
      const data = await response.json()

      if (data.settings) {
        setDisplayName(data.settings.display_name || '')
        setAvatarUrl(data.settings.avatar_url || '')
        setMonthlyIncome(data.settings.monthly_income?.toString() || '')
        setSavingsGoal(data.settings.savings_goal?.toString() || '')
        setGoalDeadline(data.settings.goal_deadline || '')
        setCurrentSaved(data.settings.current_saved?.toString() || '')
        setUserProfile((prev) => ({
          displayName: data.settings.display_name ?? prev.displayName,
          avatarUrl: data.settings.avatar_url ?? prev.avatarUrl,
          fallbackName: prev.fallbackName,
        }))
      }
    } catch (error) {
      console.error('Failed to load settings:', error)
    }
  }

  useEffect(() => {
    async function checkAuthAndLoadData() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      const emailName = user.email ? user.email.split('@')[0] : null
      setUserProfile((prev) => ({
        ...prev,
        fallbackName: prev.fallbackName ?? user.user_metadata?.full_name ?? emailName ?? prev.fallbackName,
      }))

      await loadSettings()
      setLoading(false)
    }

    checkAuthAndLoadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSuccessMessage('')
    setErrorMessage('')

    const trimmedDisplayName = displayName.trim()
    const trimmedAvatarUrl = avatarUrl.trim()
    const normalizedAvatarUrl = trimmedAvatarUrl === '' ? null : trimmedAvatarUrl
    const payload = {
      display_name: trimmedDisplayName || null,
      avatar_url: normalizedAvatarUrl,
      monthly_income: monthlyIncome ? parseFloat(monthlyIncome) : null,
      savings_goal: savingsGoal ? parseFloat(savingsGoal) : null,
      goal_deadline: goalDeadline || null,
      current_saved: currentSaved ? parseFloat(currentSaved) : null,
    }

    try {
      const response = await fetch('/api/user-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to save settings')
      }

      setUserProfile((prev) => ({
        ...prev,
        displayName: trimmedDisplayName || null,
        avatarUrl: normalizedAvatarUrl,
      }))

      setSuccessMessage('Settings saved successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarUploadComplete = (newAvatarUrl: string) => {
    setAvatarUrl(newAvatarUrl)
    setUserProfile((prev) => ({ ...prev, avatarUrl: newAvatarUrl }))
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <Sidebar onSignOut={handleSignOut} userProfile={userProfile} />
        <main className={styles.main}>
          <div className={styles.loading}>Loading...</div>
        </main>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Sidebar onSignOut={handleSignOut} userProfile={userProfile} />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <h1 className={styles.title}>Settings</h1>
            <p className={styles.subtitle}>Manage your account and financial preferences.</p>
          </div>

          <SettingsNavbar onSelect={setSelectedSection} selected={selectedSection} />

          {successMessage && (
            <div className={settingsStyles.successMessage}>{successMessage}</div>
          )}
          {errorMessage && (
            <div className={settingsStyles.errorMessage}>{errorMessage}</div>
          )}

          {selectedSection === 'personal-info' && (
            <form onSubmit={handleSaveSettings} className={settingsStyles.form}>
              <section className={`${styles.section} ${settingsStyles.card}`}>
                <div className={settingsStyles.cardHeader}>
                  <div>
                    <h2 className={styles.sectionTitle}>Personal Info</h2>
                    <p className={settingsStyles.sectionDescription}>
                      Update how you appear across the app and keep your financial targets current.
                    </p>
                  </div>
                </div>

                <div className={settingsStyles.avatarRow}>
                  <div className={settingsStyles.formGroup}>
                    <label className={settingsStyles.label}>Profile Picture</label>
                    <AvatarUpload
                      currentAvatarUrl={avatarUrl}
                      onUploadComplete={handleAvatarUploadComplete}
                    />
                  </div>

                  <div className={settingsStyles.formGroup}>
                    <label htmlFor="displayName" className={settingsStyles.label}>
                      Display Name
                    </label>
                    <input
                      id="displayName"
                      type="text"
                      placeholder="Your Name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className={settingsStyles.input}
                      disabled={saving}
                    />
                    <p className={settingsStyles.hint}>Shown on the dashboard and shared views.</p>
                  </div>
                </div>

                <div className={settingsStyles.buttonRow}>
                  <button
                    type="submit"
                    className={settingsStyles.saveButton}
                    disabled={saving}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </section>
            </form>
          )}

          {selectedSection === 'goals-accounts' && (
            <ManageGoalsAndAccounts />
          )}

          {/* Accounts management is now handled within ManageGoalsAndAccounts */}
        </div>
      </main>
    </div>
  )
}

