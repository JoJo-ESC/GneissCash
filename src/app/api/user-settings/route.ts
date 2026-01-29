import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET: Fetch user settings
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

    const { data: settings, error } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine for new users
      console.error('Failed to fetch user settings:', error)
      return NextResponse.json(
        { error: 'Failed to fetch settings' },
        { status: 500 }
      )
    }

    // Return default settings if none exist
    if (!settings) {
      return NextResponse.json({
        settings: {
          user_id: user.id,
          monthly_income: null,
          savings_goal: null,
          goal_deadline: null,
          current_saved: null,
        }
      })
    }

    return NextResponse.json({ settings })

  } catch (error) {
    console.error('Error fetching user settings:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT: Update or create user settings (upsert)
export async function PUT(request: NextRequest) {
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
    const { monthly_income, savings_goal, goal_deadline, current_saved } = body

    // Validate inputs
    if (monthly_income !== undefined && monthly_income !== null) {
      if (typeof monthly_income !== 'number' || monthly_income < 0) {
        return NextResponse.json(
          { error: 'Monthly income must be a positive number' },
          { status: 400 }
        )
      }
    }

    if (savings_goal !== undefined && savings_goal !== null) {
      if (typeof savings_goal !== 'number' || savings_goal < 0) {
        return NextResponse.json(
          { error: 'Savings goal must be a positive number' },
          { status: 400 }
        )
      }
    }

    if (current_saved !== undefined && current_saved !== null) {
      if (typeof current_saved !== 'number' || current_saved < 0) {
        return NextResponse.json(
          { error: 'Current saved must be a positive number' },
          { status: 400 }
        )
      }
    }

    if (goal_deadline !== undefined && goal_deadline !== null) {
      const deadlineDate = new Date(goal_deadline)
      if (isNaN(deadlineDate.getTime())) {
        return NextResponse.json(
          { error: 'Invalid deadline date' },
          { status: 400 }
        )
      }
    }

    // Check if settings exist
    const { data: existing } = await supabase
      .from('user_settings')
      .select('id')
      .eq('user_id', user.id)
      .single()

    let settings
    let error

    if (existing) {
      // Update existing settings
      const updates: Record<string, number | string | null> = {}

      if (monthly_income !== undefined) updates.monthly_income = monthly_income
      if (savings_goal !== undefined) updates.savings_goal = savings_goal
      if (goal_deadline !== undefined) updates.goal_deadline = goal_deadline
      if (current_saved !== undefined) updates.current_saved = current_saved

      const result = await supabase
        .from('user_settings')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()

      settings = result.data
      error = result.error
    } else {
      // Create new settings
      const result = await supabase
        .from('user_settings')
        .insert({
          user_id: user.id,
          monthly_income: monthly_income ?? null,
          savings_goal: savings_goal ?? null,
          goal_deadline: goal_deadline ?? null,
          current_saved: current_saved ?? null,
        })
        .select()
        .single()

      settings = result.data
      error = result.error
    }

    if (error) {
      console.error('Failed to save user settings:', error)
      return NextResponse.json(
        { error: 'Failed to save settings' },
        { status: 500 }
      )
    }

    return NextResponse.json({ settings })

  } catch (error) {
    console.error('Error saving user settings:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
