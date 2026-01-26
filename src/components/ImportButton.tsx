'use client'

import { useState, useCallback, useRef } from 'react'
import styles from './ImportButton.module.css'

interface BankAccount {
  id: string
  name: string
  type: string
}

interface ImportResult {
  success: boolean
  import_id?: string
  transactions_imported?: number
  parse_errors?: string[]
  error?: string
}

interface ImportButtonProps {
  bankAccounts: BankAccount[]
  onImportComplete?: () => void
}

export default function ImportButton({ bankAccounts, onImportComplete }: ImportButtonProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<string>('')
  const [result, setResult] = useState<ImportResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [selectedAccount])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }, [selectedAccount])

  const handleFile = async (file: File) => {
    // Validate file type
    const validTypes = ['.csv', '.pdf']
    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'))

    if (!validTypes.includes(extension)) {
      setResult({
        success: false,
        error: 'Please upload a CSV or PDF file'
      })
      return
    }

    // Check if account is selected
    if (!selectedAccount) {
      setResult({
        success: false,
        error: 'Please select a bank account first'
      })
      return
    }

    setIsUploading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('bank_account_id', selectedAccount)

      const response = await fetch('/api/import', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          import_id: data.import_id,
          transactions_imported: data.transactions_imported,
          parse_errors: data.parse_errors,
        })
        onImportComplete?.()
      } else {
        setResult({
          success: false,
          error: data.error || 'Import failed',
          parse_errors: data.parseErrors,
        })
      }
    } catch (error) {
      setResult({
        success: false,
        error: 'Network error. Please try again.',
      })
    } finally {
      setIsUploading(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const clearResult = () => {
    setResult(null)
  }

  return (
    <div className={styles.container}>
      {/* Account Selector */}
      <div className={styles.accountSelector}>
        <label htmlFor="account-select" className={styles.label}>
          Import to:
        </label>
        <select
          id="account-select"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          className={styles.select}
          disabled={isUploading}
        >
          <option value="">Select a bank account</option>
          {bankAccounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} ({account.type})
            </option>
          ))}
        </select>
      </div>

      {/* Drop Zone */}
      <div
        className={`${styles.dropZone} ${isDragging ? styles.dragging : ''} ${isUploading ? styles.uploading : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!isUploading ? handleClick : undefined}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.pdf"
          onChange={handleFileSelect}
          className={styles.fileInput}
          disabled={isUploading}
        />

        {isUploading ? (
          <div className={styles.uploadingState}>
            <div className={styles.spinner}></div>
            <p>Importing transactions...</p>
          </div>
        ) : (
          <div className={styles.idleState}>
            <div className={styles.icon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className={styles.dropText}>
              Drag & drop your statement here
            </p>
            <p className={styles.orText}>or</p>
            <button type="button" className={styles.browseButton}>
              Browse Files
            </button>
            <p className={styles.supportedText}>
              Supports CSV and PDF files
            </p>
          </div>
        )}
      </div>

      {/* Result Display */}
      {result && (
        <div className={`${styles.result} ${result.success ? styles.success : styles.error}`}>
          <div className={styles.resultHeader}>
            <span className={styles.resultIcon}>
              {result.success ? '✓' : '!'}
            </span>
            <span className={styles.resultTitle}>
              {result.success ? 'Import Successful' : 'Import Failed'}
            </span>
            <button onClick={clearResult} className={styles.closeButton}>
              ×
            </button>
          </div>

          {result.success && result.transactions_imported !== undefined && (
            <p className={styles.resultMessage}>
              {result.transactions_imported} transactions imported
            </p>
          )}

          {result.error && (
            <p className={styles.resultMessage}>{result.error}</p>
          )}

          {result.parse_errors && result.parse_errors.length > 0 && (
            <details className={styles.errorDetails}>
              <summary>
                {result.parse_errors.length} parsing warning{result.parse_errors.length > 1 ? 's' : ''}
              </summary>
              <ul>
                {result.parse_errors.slice(0, 10).map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
                {result.parse_errors.length > 10 && (
                  <li>...and {result.parse_errors.length - 10} more</li>
                )}
              </ul>
            </details>
          )}
        </div>
      )}
    </div>
  )
}
