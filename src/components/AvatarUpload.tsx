'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './AvatarUpload.module.css'

interface AvatarUploadProps {
  currentAvatarUrl: string | null
  onUploadComplete: (newAvatarUrl: string) => void
}

export default function AvatarUpload({
  currentAvatarUrl,
  onUploadComplete,
}: AvatarUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/avatar/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload avatar')
      }

      onUploadComplete(data.avatarUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setUploading(false)
    }
  }

  function handleAvatarClick() {
    fileInputRef.current?.click()
  }

  return (
    <div className={styles.container}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={styles.fileInput}
        accept="image/png, image/jpeg"
        disabled={uploading}
      />
      <div className={styles.avatarWrapper} onClick={handleAvatarClick}>
        {currentAvatarUrl ? (
          <Image
            src={currentAvatarUrl}
            alt="Current Avatar"
            width={100}
            height={100}
            className={styles.avatarImage}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
        <div className={styles.overlay}>
          {uploading ? 'Uploading...' : 'Change'}
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
