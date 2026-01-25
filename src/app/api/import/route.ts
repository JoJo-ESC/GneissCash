import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { parseCSV, parsePDF } from '@/lib/parsers'
import { createHash } from 'crypto'

export async function POST(request: NextRequest) {
  try {
    // Get Supabase client and check auth
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Parse form data
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const bankAccountId = formData.get('bank_account_id') as string | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    if (!bankAccountId) {
      return NextResponse.json(
        { error: 'No bank account selected' },
        { status: 400 }
      )
    }

    // Verify bank account belongs to user
    const { data: bankAccount, error: bankError } = await supabase
      .from('bank_accounts')
      .select('id')
      .eq('id', bankAccountId)
      .eq('user_id', user.id)
      .single()

    if (bankError || !bankAccount) {
      return NextResponse.json(
        { error: 'Invalid bank account' },
        { status: 400 }
      )
    }

    // Read file content
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate file hash for duplicate detection
    const fileHash = createHash('sha256').update(buffer).digest('hex')

    // Check for duplicate import
    const { data: existingImport } = await supabase
      .from('imports')
      .select('id, filename')
      .eq('user_id', user.id)
      .eq('file_hash', fileHash)
      .single()

    if (existingImport) {
      return NextResponse.json(
        { error: `This file was already imported as "${existingImport.filename}"` },
        { status: 409 }
      )
    }

    // Determine file type and parse
    const filename = file.name.toLowerCase()
    const isCSV = filename.endsWith('.csv')
    const isPDF = filename.endsWith('.pdf')

    if (!isCSV && !isPDF) {
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload a CSV or PDF file.' },
        { status: 400 }
      )
    }

    let parseResult
    if (isCSV) {
      const content = buffer.toString('utf-8')
      parseResult = parseCSV(content)
    } else {
      parseResult = await parsePDF(buffer)
    }

    if (parseResult.transactions.length === 0) {
      return NextResponse.json(
        {
          error: 'No transactions found in file',
          parseErrors: parseResult.errors
        },
        { status: 400 }
      )
    }

    // Create import record
    const { data: importRecord, error: importError } = await supabase
      .from('imports')
      .insert({
        user_id: user.id,
        bank_account_id: bankAccountId,
        filename: file.name,
        file_hash: fileHash,
        import_type: isCSV ? 'csv' : 'pdf',
        transaction_count: parseResult.transactions.length,
      })
      .select()
      .single()

    if (importError || !importRecord) {
      console.error('Failed to create import record:', importError)
      return NextResponse.json(
        { error: 'Failed to create import record' },
        { status: 500 }
      )
    }

    // Prepare transactions for insert
    const transactionsToInsert = parseResult.transactions.map((t) => ({
      user_id: user.id,
      bank_account_id: bankAccountId,
      import_id: importRecord.id,
      amount: t.amount,
      date: t.date,
      name: t.name,
      merchant_name: t.merchant_name,
      category: t.category,
    }))

    // Insert transactions in batches (Supabase has limits)
    const BATCH_SIZE = 100
    let insertedCount = 0

    for (let i = 0; i < transactionsToInsert.length; i += BATCH_SIZE) {
      const batch = transactionsToInsert.slice(i, i + BATCH_SIZE)
      const { error: insertError } = await supabase
        .from('transactions')
        .insert(batch)

      if (insertError) {
        console.error('Failed to insert transactions:', insertError)
        // Rollback: delete the import record
        await supabase.from('imports').delete().eq('id', importRecord.id)
        return NextResponse.json(
          { error: 'Failed to save transactions' },
          { status: 500 }
        )
      }

      insertedCount += batch.length
    }

    return NextResponse.json({
      success: true,
      import_id: importRecord.id,
      transactions_imported: insertedCount,
      parse_errors: parseResult.errors,
    })

  } catch (error) {
    console.error('Import error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET: List user's imports
export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { data: imports, error } = await supabase
      .from('imports')
      .select(`
        id,
        filename,
        import_type,
        transaction_count,
        created_at,
        bank_accounts (
          id,
          name
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch imports:', error)
      return NextResponse.json(
        { error: 'Failed to fetch imports' },
        { status: 500 }
      )
    }

    return NextResponse.json({ imports })

  } catch (error) {
    console.error('Error fetching imports:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE: Remove an import and its transactions
export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const importId = searchParams.get('id')

    if (!importId) {
      return NextResponse.json(
        { error: 'Import ID required' },
        { status: 400 }
      )
    }

    // Verify import belongs to user
    const { data: importRecord, error: fetchError } = await supabase
      .from('imports')
      .select('id')
      .eq('id', importId)
      .eq('user_id', user.id)
      .single()

    if (fetchError || !importRecord) {
      return NextResponse.json(
        { error: 'Import not found' },
        { status: 404 }
      )
    }

    // Delete import (transactions will cascade due to ON DELETE SET NULL,
    // but we want to delete them too)
    const { error: txDeleteError } = await supabase
      .from('transactions')
      .delete()
      .eq('import_id', importId)

    if (txDeleteError) {
      console.error('Failed to delete transactions:', txDeleteError)
    }

    const { error: deleteError } = await supabase
      .from('imports')
      .delete()
      .eq('id', importId)

    if (deleteError) {
      console.error('Failed to delete import:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete import' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
