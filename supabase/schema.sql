-- ============================================================
-- Book My Credit Card - Supabase schema
-- Run this in the Supabase SQL editor, then run seed.sql.
-- ============================================================

-- Drop in dependency order (idempotent re-runs)
drop table if exists user_activities cascade;
drop table if exists profiles cascade;
drop table if exists card_collection_items cascade;
drop table if exists card_collections cascade;
drop table if exists card_benefits cascade;
drop table if exists card_category_map cascade;
drop table if exists best_card_picks cascade;
drop table if exists credit_cards cascade;
drop table if exists card_categories cascade;
drop table if exists banks cascade;
drop table if exists category_pages cascade;
drop table if exists faqs cascade;
drop table if exists interest_rates cascade;
drop table if exists reviews cascade;
drop table if exists eligibility_criteria cascade;
drop table if exists page_sections cascade;
drop table if exists cibil_score_bands cascade;
drop table if exists leads cascade;

-- ------------------------------------------------ core catalog

create table banks (
  id text primary key,
  name text not null,
  logo_url text
);

create table card_categories (
  id text primary key,
  name text not null,
  icon_url text,
  show_in_filter boolean not null default true,
  sort_order int not null default 0
);

create table credit_cards (
  id int primary key,
  name text not null,
  bank_id text not null references banks(id) on delete cascade,
  image_url text,
  joining_fee int not null default 0,
  annual_fee int not null default 0,
  sort_order int not null default 0
);

create index idx_credit_cards_bank on credit_cards(bank_id);

-- many-to-many card <-> category
create table card_category_map (
  card_id int not null references credit_cards(id) on delete cascade,
  category_id text not null references card_categories(id) on delete cascade,
  primary key (card_id, category_id)
);

create index idx_card_category_map_category on card_category_map(category_id);

-- per-card benefit bullet points (rewards, cashback offers, lounge access...)
create table card_benefits (
  id bigint generated always as identity primary key,
  card_id int not null references credit_cards(id) on delete cascade,
  icon_url text,
  benefit_text text not null,
  position int not null default 0
);

create index idx_card_benefits_card on card_benefits(card_id);

-- named card groups rendered as carousels (pre-approved, rupay, lounge...)
create table card_collections (
  id text primary key,
  title text not null,
  show_all_link boolean not null default false,
  sort_order int not null default 0
);

create table card_collection_items (
  collection_id text not null references card_collections(id) on delete cascade,
  card_id int not null references credit_cards(id) on delete cascade,
  position int not null default 0,
  primary key (collection_id, card_id)
);

-- editorial "best credit cards" ranking
create table best_card_picks (
  id bigint generated always as identity primary key,
  card_id int not null references credit_cards(id) on delete cascade,
  tagline text not null,
  position int not null default 0
);

-- ------------------------------------------------ page content

-- "By Category" landing page configs (slug-driven routes)
create table category_pages (
  slug text primary key,
  title text not null,
  category_id text not null references card_categories(id) on delete cascade,
  description text
);

create table faqs (
  id bigint generated always as identity primary key,
  page text not null default 'home',
  question text not null,
  answer text not null,
  position int not null default 0
);

create index idx_faqs_page on faqs(page);

create table interest_rates (
  id bigint generated always as identity primary key,
  bank_name text not null,
  monthly_rate text not null,
  annual_rate text not null,
  position int not null default 0
);

create table reviews (
  id bigint generated always as identity primary key,
  name text not null,
  location text,
  review_text text not null,
  rating int not null check (rating between 1 and 5)
);

create table eligibility_criteria (
  id bigint generated always as identity primary key,
  criterion text not null,
  salaried text not null,
  self_employed text not null,
  position int not null default 0
);

-- generic titled content blocks (currently used by the CIBIL page)
create table page_sections (
  id bigint generated always as identity primary key,
  page text not null,
  title text not null,
  body text not null,
  position int not null default 0
);

create index idx_page_sections_page on page_sections(page);

create table cibil_score_bands (
  id bigint generated always as identity primary key,
  score_range text not null,
  rating text not null,
  approval text not null,
  position int not null default 0
);

-- ------------------------------------------------ leads

create table leads (
  id bigint generated always as identity primary key,
  full_name text not null,
  mobile text not null,
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------ auth: profiles & activity

-- One row per registered user, auto-created on signup (see trigger below).
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  mobile text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

-- Every tracked user action (cards viewed, compares, eligibility checks...).
create table user_activities (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  activity_type text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index idx_user_activities_user on user_activities(user_id, created_at desc);
create index idx_user_activities_created on user_activities(created_at desc);

-- Auto-create a profile row whenever a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, mobile)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'mobile', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Security-definer helper so RLS policies can check admin status without
-- recursing into the profiles policies themselves.
create or replace function public.is_admin()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

-- ------------------------------------------------ row level security
-- Catalog/content tables: public read-only.
-- Leads: public insert-only (nobody can read them with the anon key).

alter table banks enable row level security;
alter table card_categories enable row level security;
alter table credit_cards enable row level security;
alter table card_category_map enable row level security;
alter table card_benefits enable row level security;
alter table card_collections enable row level security;
alter table card_collection_items enable row level security;
alter table best_card_picks enable row level security;
alter table category_pages enable row level security;
alter table faqs enable row level security;
alter table interest_rates enable row level security;
alter table reviews enable row level security;
alter table eligibility_criteria enable row level security;
alter table page_sections enable row level security;
alter table cibil_score_bands enable row level security;
alter table leads enable row level security;
alter table profiles enable row level security;
alter table user_activities enable row level security;

create policy "public read banks" on banks for select using (true);
create policy "public read card_categories" on card_categories for select using (true);
create policy "public read credit_cards" on credit_cards for select using (true);
create policy "public read card_category_map" on card_category_map for select using (true);
create policy "public read card_benefits" on card_benefits for select using (true);
create policy "public read card_collections" on card_collections for select using (true);
create policy "public read card_collection_items" on card_collection_items for select using (true);
create policy "public read best_card_picks" on best_card_picks for select using (true);
create policy "public read category_pages" on category_pages for select using (true);
create policy "public read faqs" on faqs for select using (true);
create policy "public read interest_rates" on interest_rates for select using (true);
create policy "public read reviews" on reviews for select using (true);
create policy "public read eligibility_criteria" on eligibility_criteria for select using (true);
create policy "public read page_sections" on page_sections for select using (true);
create policy "public read cibil_score_bands" on cibil_score_bands for select using (true);

create policy "public insert leads" on leads for insert with check (true);
create policy "own or admin read leads" on leads
  for select using (user_id = auth.uid() or public.is_admin());

-- profiles: users see/update their own row; admins see everyone
create policy "own or admin read profiles" on profiles
  for select using (id = auth.uid() or public.is_admin());
create policy "own update profiles" on profiles
  for update using (id = auth.uid());

-- user_activities: users insert/read their own; admins read everything
create policy "own insert user_activities" on user_activities
  for insert with check (user_id = auth.uid());
create policy "own or admin read user_activities" on user_activities
  for select using (user_id = auth.uid() or public.is_admin());

-- ------------------------------------------------ notes
-- To grant a user access to the admin dashboard, run:
--   update profiles set is_admin = true where email = 'admin@bookmycreditcard.com';
