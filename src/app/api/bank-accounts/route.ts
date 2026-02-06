import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET: List all bank accounts
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

    const { data: accounts, error } = await supabase
      .from('bank_accounts')
      .select('id, name, type, current_balance, created_at, updated_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch bank accounts:', error)
      return NextResponse.json(
        { error: 'Failed to fetch bank accounts' },
        { status: 500 }
      )
    }

    return NextResponse.json({ accounts })

  } catch (error) {
    console.error('Error fetching bank accounts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST: Create a new bank account
export async function POST(request: NextRequest) {
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
    const { name, type, current_balance } = body

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Account name is required' },
        { status: 400 }
      )
    }

    const validTypes = ['checking', 'savings', 'credit']
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid account type. Must be checking, savings, or credit' },
        { status: 400 }
      )
    }

    const { data: account, error } = await supabase
      .from('bank_accounts')
      .insert({
        user_id: user.id,
        name: name.trim(),
        type,
        current_balance: current_balance ?? null,
      })
      .select()
      .single()

    if (error) {
      console.error('Failed to create bank account:', error)
      return NextResponse.json(
        { error: 'Failed to create bank account' },
        { status: 500 }
      )
    }

    return NextResponse.json({ account }, { status: 201 })

  } catch (error) {
    console.error('Error creating bank account:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PATCH: Update a bank account
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
    const { id, name, type, current_balance } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Account ID is required' },
        { status: 400 }
      )
    }

    // Verify account belongs to user
    const { data: existing, error: fetchError } = await supabase
      .from('bank_accounts')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: 'Bank account not found' },
        { status: 404 }
      )
    }

    // Build update object
    const updates: Record<string, string | number | null> = {}

    if (name !== undefined) {
      if (!name.trim()) {
        return NextResponse.json(
          { error: 'Account name cannot be empty' },
          { status: 400 }
        )
      }
      updates.name = name.trim()
    }

    if (type !== undefined) {
      const validTypes = ['checking', 'savings', 'credit']
      if (!validTypes.includes(type)) {
        return NextResponse.json(
          { error: 'Invalid account type' },
          { status: 400 }
        )
      }
      updates.type = type
    }

    if (current_balance !== undefined) {
      updates.current_balance = current_balance
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      )
    }

    const { data: account, error: updateError } = await supabase
      .from('bank_accounts')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (updateError) {
      console.error('Failed to update bank account:', updateError)
      return NextResponse.json(
        { error: 'Failed to update bank account' },
        { status: 500 }
      )
    }

    return NextResponse.json({ account })

  } catch (error) {
    console.error('Error updating bank account:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE: Remove a bank account
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
    const accountId = searchParams.get('id')

    if (!accountId) {
      return NextResponse.json(
        { error: 'Account ID is required' },
        { status: 400 }
      )
    }

    // Verify account belongs to user
    const { data: existing, error: fetchError } = await supabase
      .from('bank_accounts')
      .select('id')
      .eq('id', accountId)
      .eq('user_id', user.id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: 'Bank account not found' },
        { status: 404 }
      )
    }

    // Gather counts before cascading delete for response context
    const { count: transactionCount } = await supabase
      .from('transactions')
      .select('id', { count: 'exact', head: true })
      .eq('bank_account_id', accountId)
      .eq('user_id', user.id)

    const { count: importCount } = await supabase
      .from('imports')
      .select('id', { count: 'exact', head: true })
      .eq('bank_account_id', accountId)
      .eq('user_id', user.id)

    // Delete the account (related transactions/imports cascade via FK)
    const { error: deleteError } = await supabase
      .from('bank_accounts')
      .delete()
      .eq('id', accountId)
      .eq('user_id', user.id)

    if (deleteError) {
      console.error('Failed to delete bank account:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete bank account' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      removedTransactions: transactionCount ?? 0,
      removedImports: importCount ?? 0,
    })

  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
