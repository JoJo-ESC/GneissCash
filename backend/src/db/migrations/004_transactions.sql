CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bank_account_id UUID NOT NULL REFERENCES bank_accounts(id) ON DELETE CASCADE,
  import_id UUID REFERENCES imports(id) ON DELETE SET NULL,
  amount NUMERIC NOT NULL,
  date DATE NOT NULL,
  name TEXT,
  merchant_name TEXT,
  category TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_bank_account_id ON transactions(bank_account_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date);
