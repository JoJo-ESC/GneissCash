import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createHash } from 'crypto';

import { parseCSV, parsePDF } from '@/lib/parsers';
import { ParsedTransaction } from '@/lib/parsers/types'; 

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const bankAccountId = formData.get('bank_account_id') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileHash = createHash('sha256').update(buffer).digest('hex');

    const filename = file.name.toLowerCase();
    let parseResult;

    if (filename.endsWith('.csv')) {
      parseResult = parseCSV(buffer.toString('utf-8'));
    } else {
      // This now calls the correctly named function
      parseResult = await parsePDF(buffer);
    }

    const { data: importRecord } = await supabase
      .from('imports')
      .insert({
        user_id: user.id,
        bank_account_id: bankAccountId,
        filename: file.name,
        file_hash: fileHash,
        import_type: filename.endsWith('.csv') ? 'csv' : 'pdf',
        transaction_count: parseResult.transactions.length,
      })
      .select().single();

    if (!importRecord) {
      return NextResponse.json({ error: 'Failed to create import record' }, { status: 500 });
    }

    const transactionsToInsert = parseResult.transactions.map((t: ParsedTransaction) => ({
      user_id: user.id,
      bank_account_id: bankAccountId,
      import_id: importRecord.id,
      amount: t.amount,
      date: t.date,
      name: t.name.substring(0, 255) || 'Unknown',
      merchant_name: (t.merchant_name || 'Unknown').substring(0, 255),
      category: t.category,
    }));

    // Batch insert transactions
    if (transactionsToInsert.length > 0) {
      const { error: insertError } = await supabase
        .from('transactions')
        .insert(transactionsToInsert);

      if (insertError) {
        console.error('Transaction insert error:', insertError);
        return NextResponse.json({ error: 'Failed to insert transactions' }, { status: 500 });
      }
    }

    return NextResponse.json({
      success: true,
      transactions_imported: transactionsToInsert.length,
      import_id: importRecord.id,
      parse_errors: parseResult.errors
    });

  } catch (error) {
    console.error('Import error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}