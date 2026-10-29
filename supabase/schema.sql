-- Run this file once in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.festival_feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'বেনামী শুভানুধ্যায়ী'
    check (char_length(name) between 1 and 80),
  role text not null
    check (role in ('বিচারক', 'মেন্টর', 'শিক্ষার্থী', 'দর্শনার্থী')),
  project text not null
    check (project in ('সামগ্রিক ফেস্টিভ্যাল', 'বাংলাদেশ ২০৪০ ফিল্ম', 'FeedbackBox', 'ক্রিয়েশন গ্যালারি', 'ক্রিয়েটর হাব')),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 10 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists festival_feedback_created_at_idx
  on public.festival_feedback (created_at desc);
create index if not exists festival_feedback_project_idx
  on public.festival_feedback (project);

alter table public.festival_feedback enable row level security;

revoke all on table public.festival_feedback from anon, authenticated;
grant select, insert on table public.festival_feedback to anon, authenticated;

drop policy if exists "Public feedback is readable" on public.festival_feedback;
create policy "Public feedback is readable"
  on public.festival_feedback
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Visitors can submit feedback" on public.festival_feedback;
create policy "Visitors can submit feedback"
  on public.festival_feedback
  for insert
  to anon, authenticated
  with check (
    rating between 1 and 5
    and char_length(comment) between 10 and 1000
    and char_length(name) between 1 and 80
  );

-- No UPDATE or DELETE policy is intentionally provided to public clients.