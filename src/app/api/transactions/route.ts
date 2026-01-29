import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET: List transactions with optional filters
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Parse query params
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    const bankAccountId = searchParams.get('bank_account_id')
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')
    const sortOrder = searchParams.get('sort') === 'asc' ? true : false

    // Build query
    let query = supabase
      .from('transactions')
      .select(`
        id,
        amount,
        date,
        name,
        merchant_name,
        category,
        bank_account_id,
        import_id,
        created_at,
        bank_accounts (
          id,
          name,
          type
        )
      `, { count: 'exact' })
      .eq('user_id', user.id)

    // Apply filters
    if (startDate) {
      query = query.gte('date', startDate)
    }
    if (endDate) {
      query = query.lte('date', endDate)
    }
    if (bankAccountId) {
      query = query.eq('bank_account_id', bankAccountId)
    }
    if (category) {
      query = query.eq('category', category)
    }

    // Apply pagination and sorting
    query = query
      .order('date', { ascending: sortOrder })
      .order('created_at', { ascending: sortOrder })
      .range(offset, offset + limit - 1)

    const { data: transactions, error, count } = await query

    if (error) {
      console.error('Failed to fetch transactions:', error)
      return NextResponse.json(
        { error: 'Failed to fetch transactions' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      transactions,
      total: count,
      limit,
      offset,
    })

  } catch (error) {
    console.error('Error fetching transactions:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PATCH: Update a transaction
export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, category, merchant_name, name } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Transaction ID required' },
        { status: 400 }
      )
    }

    // Verify transaction belongs to user
    const { data: existing, error: fetchError } = await supabase
      .from('transactions')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      )
    }

    // Build update object with only provided fields
    const updates: Record<string, string | null> = {}
    if (category !== undefined) updates.category = category
    if (merchant_name !== undefined) updates.merchant_name = merchant_name
    if (name !== undefined) updates.name = name

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      )
    }

    const { data: updated, error: updateError } = await supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (updateError) {
      console.error('Failed to update transaction:', updateError)
      return NextResponse.json(
        { error: 'Failed to update transaction' },
        { status: 500 }
      )
    }

    return NextResponse.json({ transaction: updated })

  } catch (error) {
    console.error('Error updating transaction:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE: Remove a transaction
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
    const transactionId = searchParams.get('id')

    if (!transactionId) {
      return NextResponse.json(
        { error: 'Transaction ID required' },
        { status: 400 }
      )
    }

    // Verify transaction belongs to user
    const { data: existing, error: fetchError } = await supabase
      .from('transactions')
      .select('id, import_id')
      .eq('id', transactionId)
      .eq('user_id', user.id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      )
    }

    // Delete the transaction
    const { error: deleteError } = await supabase
      .from('transactions')
      .delete()
      .eq('id', transactionId)

    if (deleteError) {
      console.error('Failed to delete transaction:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete transaction' },
        { status: 500 }
      )
    }

    // Update the import's transaction count if it came from an import
    if (existing.import_id) {
      const { data: currentImport } = await supabase
        .from('imports')
        .select('transaction_count')
        .eq('id', existing.import_id)
        .single()

      if (currentImport && currentImport.transaction_count > 0) {
        await supabase
          .from('imports')
          .update({ transaction_count: currentImport.transaction_count - 1 })
          .eq('id', existing.import_id)
      }
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
