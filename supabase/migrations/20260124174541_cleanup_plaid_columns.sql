-- Migration: Clean up old Plaid columns from existing tables

-- Remove Plaid-specific columns from bank_accounts
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS plaid_item_id;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS account_id;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS official_name;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS subtype;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS mask;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS available_balance;
ALTER TABLE bank_accounts DROP COLUMN IF EXISTS iso_currency_code;

-- Remove Plaid-specific columns from transactions
ALTER TABLE transactions DROP COLUMN IF EXISTS plaid_transaction_id;
ALTER TABLE transactions DROP COLUMN IF EXISTS pending;

-- Add import_id to transactions if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'import_id'
  ) THEN
    ALTER TABLE transactions ADD COLUMN import_id UUID REFERENCES imports(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Ensure bank_accounts.type has the correct constraint
-- First drop existing constraint if any, then add new one
ALTER TABLE bank_accounts DROP CONSTRAINT IF EXISTS bank_accounts_type_check;
ALTER TABLE bank_accounts ADD CONSTRAINT bank_accounts_type_check
  CHECK (type IN ('checking', 'savings', 'credit'));
