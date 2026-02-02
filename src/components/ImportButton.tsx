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
  fileName?: string
}

interface MultiImportResult {
  results: ImportResult[]
  totalTransactions: number
  successCount: number
  failCount: number
}

interface ImportButtonProps {
  bankAccounts: BankAccount[]
  onImportComplete?: () => void
}

export default function ImportButton({ bankAccounts, onImportComplete }: ImportButtonProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<string>('')
  const [result, setResult] = useState<MultiImportResult | null>(null)
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null)
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
      handleFiles(Array.from(files))
    }
  }, [selectedAccount])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFiles(Array.from(files))
    }
  }, [selectedAccount])

  const handleFiles = async (files: File[]) => {
    // Check if account is selected
    if (!selectedAccount) {
      setResult({
        results: [{
          success: false,
          error: 'Please select a bank account first'
        }],
        totalTransactions: 0,
        successCount: 0,
        failCount: 1
      })
      return
    }

    // Validate file types
    const validTypes = ['.csv', '.pdf']
    const validFiles: File[] = []
    const invalidFiles: string[] = []

    for (const file of files) {
      const extension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'))
      if (validTypes.includes(extension)) {
        validFiles.push(file)
      } else {
        invalidFiles.push(file.name)
      }
    }

    if (validFiles.length === 0) {
      setResult({
        results: [{
          success: false,
          error: `Invalid file type(s): ${invalidFiles.join(', ')}. Please upload CSV or PDF files.`
        }],
        totalTransactions: 0,
        successCount: 0,
        failCount: 1
      })
      return
    }

    setIsUploading(true)
    setResult(null)
    setUploadProgress({ current: 0, total: validFiles.length })

    const results: ImportResult[] = []
    let totalTransactions = 0
    let successCount = 0

    // Process files sequentially to avoid overwhelming the server
    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i]
      setUploadProgress({ current: i + 1, total: validFiles.length })

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
          results.push({
            success: true,
            fileName: file.name,
            import_id: data.import_id,
            transactions_imported: data.transactions_imported,
            parse_errors: data.parse_errors,
          })
          totalTransactions += data.transactions_imported || 0
          successCount++
        } else {
          results.push({
            success: false,
            fileName: file.name,
            error: data.error || 'Import failed',
            parse_errors: data.parseErrors,
          })
        }
      } catch (error) {
        results.push({
          success: false,
          fileName: file.name,
          error: 'Network error. Please try again.',
        })
      }
    }

    // Add invalid files to results
    for (const fileName of invalidFiles) {
      results.push({
        success: false,
        fileName,
        error: 'Invalid file type. Only CSV and PDF files are supported.'
      })
    }

    setResult({
      results,
      totalTransactions,
      successCount,
      failCount: results.length - successCount
    })

    if (successCount > 0) {
      onImportComplete?.()
    }

    setIsUploading(false)
    setUploadProgress(null)

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
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
          multiple
          onChange={handleFileSelect}
          className={styles.fileInput}
          disabled={isUploading}
        />

        {isUploading ? (
          <div className={styles.uploadingState}>
            <div className={styles.spinner}></div>
            <p>Importing transactions...</p>
            {uploadProgress && (
              <p className={styles.progressText}>
                File {uploadProgress.current} of {uploadProgress.total}
              </p>
            )}
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
              Drag & drop your statements here
            </p>
            <p className={styles.orText}>or</p>
            <button type="button" className={styles.browseButton}>
              Browse Files
            </button>
            <p className={styles.supportedText}>
              Supports multiple CSV and PDF files
            </p>
          </div>
        )}
      </div>

      {/* Result Display */}
      {result && (
        <div className={`${styles.result} ${result.failCount === 0 ? styles.success : result.successCount === 0 ? styles.error : styles.partial}`}>
          <div className={styles.resultHeader}>
            <span className={styles.resultIcon}>
              {result.failCount === 0 ? '✓' : result.successCount === 0 ? '!' : '~'}
            </span>
            <span className={styles.resultTitle}>
              {result.failCount === 0
                ? 'Import Successful'
                : result.successCount === 0
                  ? 'Import Failed'
                  : 'Partial Import'}
            </span>
            <button onClick={clearResult} className={styles.closeButton}>
              ×
            </button>
          </div>

          {result.successCount > 0 && (
            <p className={styles.resultMessage}>
              {result.totalTransactions} transactions imported from {result.successCount} file{result.successCount > 1 ? 's' : ''}
            </p>
          )}

          {result.failCount > 0 && (
            <p className={styles.resultMessage}>
              {result.failCount} file{result.failCount > 1 ? 's' : ''} failed to import
            </p>
          )}

          {result.results.length > 1 && (
            <details className={styles.errorDetails}>
              <summary>File details</summary>
              <ul className={styles.fileList}>
                {result.results.map((r, i) => (
                  <li key={i} className={r.success ? styles.fileSuccess : styles.fileError}>
                    <span className={styles.fileIcon}>{r.success ? '✓' : '✗'}</span>
                    <span className={styles.fileName}>{r.fileName}</span>
                    {r.success && r.transactions_imported !== undefined && (
                      <span className={styles.fileCount}>({r.transactions_imported} transactions)</span>
                    )}
                    {r.error && <span className={styles.fileErrorMsg}>{r.error}</span>}
                  </li>
                ))}
              </ul>
            </details>
          )}

          {result.results.some(r => r.parse_errors && r.parse_errors.length > 0) && (
            <details className={styles.errorDetails}>
              <summary>Parsing warnings</summary>
              <ul>
                {result.results.flatMap((r, i) =>
                  (r.parse_errors || []).slice(0, 5).map((err, j) => (
                    <li key={`${i}-${j}`}>{r.fileName}: {err}</li>
                  ))
                ).slice(0, 10)}
              </ul>
            </details>
          )}
        </div>
      )}
    </div>
  )
}
