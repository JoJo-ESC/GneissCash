// Fixed, deterministic identity for the shared public demo account. A fixed
// id lets `blockDemoWrites` check req.userId with no DB lookup, and survives
// re-running the seed script (which deletes/recreates this user by email).
export const DEMO_USER_ID = '00000000-0000-0000-0000-000000000001'
export const DEMO_EMAIL = 'demo@gneisscash.app'
