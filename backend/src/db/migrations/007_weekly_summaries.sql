CREATE TABLE IF NOT EXISTS weekly_summaries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week_start DATE NOT NULL,
  week_end DATE NOT NULL,
  total_spent NUMERIC,
  total_income NUMERIC,
  biggest_purchase_name TEXT,
  biggest_purchase_amount NUMERIC,
  grade TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_weekly_summaries_user_id ON weekly_summaries(user_id);
