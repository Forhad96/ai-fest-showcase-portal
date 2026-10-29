# Supabase Rating Database Setup

The feedback form automatically uses Supabase when its Vite environment variables are present. Without them, it continues using localStorage in demo mode.

## 1. Create The Database Table

1. Create or open a Supabase project.
2. Open **SQL Editor** in the Supabase dashboard.
3. Copy and run the full contents of `supabase/schema.sql`.

The SQL creates `public.festival_feedback`, validation constraints, indexes, grants and Row Level Security policies.

Public visitors can only:

- Read submitted feedback.
- Insert a new rating and comment.

They cannot update or delete database rows.

## 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then add the values from **Supabase Dashboard > Project Settings > API**:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

Older projects can use `VITE_SUPABASE_ANON_KEY` instead of the publishable key.

Never put a Supabase `service_role` or secret key in a Vite variable. Vite variables are included in browser code. The publishable/anon key is protected by the RLS policies in `supabase/schema.sql`.

## 3. Start Or Build The Website

Restart the development server after changing environment variables:

```bash
npm run dev
```

For production:

```bash
npm run build
```

When connected, the feedback form displays **Supabase Live**. Otherwise, it displays **Local Demo**.

## Production Note

The public insert policy is appropriate for an open festival feedback wall, but public forms can receive spam. For a larger public launch, add Cloudflare Turnstile or a Supabase Edge Function with rate limiting before insertion.