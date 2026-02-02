import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateWeeklySummary, getWeeklySummaries } from '@/lib/weekly-summary'

// POST: Generate a weekly summary for a specific week
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Parse optional date from request body
    const body = await request.json().catch(() => ({}))
    const date = body.date ? new Date(body.date) : new Date()

    // Validate date if provided
    if (body.date && isNaN(date.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      )
    }

    const result = await generateWeeklySummary(supabase, date)

    return NextResponse.json({
      summary: result.summary,
      isNew: result.isNew,
      message: result.isNew ? 'Weekly summary created' : 'Weekly summary updated',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.error('Error generating weekly summary:', error)
    return NextResponse.json(
      { error: 'Failed to generate weekly summary' },
      { status: 500 }
    )
  }
}

// GET: Retrieve weekly summaries
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Parse query params
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '12')

    const summaries = await getWeeklySummaries(supabase, limit)

    return NextResponse.json({
      summaries,
      count: summaries.length,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.error('Error fetching weekly summaries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weekly summaries' },
      { status: 500 }
    )
  }
}
