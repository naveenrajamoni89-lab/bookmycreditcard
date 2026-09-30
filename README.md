# Book My Credit Card — React + Supabase

A fully functional React credit cards portal for **Book My Credit Card** (powered by [FinIndia 24x7](https://finindia24x7.com/)), backed by **Supabase**. All data (cards, banks, categories, FAQs, interest rates, reviews, page content) is served from Supabase with a transparent local fallback for development, and it includes Supabase authentication, per-user activity tracking and an admin dashboard.

## Tech Stack

- React 19 + Vite
- React Router 7 (client-side routing, lazy-loaded pages)
- Supabase (`@supabase/supabase-js`) — PostgreSQL + Row Level Security

## Getting Started

```bash
npm install
cp .env.example .env   # then fill in your Supabase credentials
npm run dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL (Dashboard → Project Settings → API) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public API key |

If the env vars are empty, the app automatically serves the bundled seed data (`src/data/`) so it stays fully functional during local development. Once credentials are set, all reads go to Supabase.

### Setting up the database

1. Open the Supabase **SQL Editor**.
2. Run `supabase/schema.sql` — creates all tables, indexes and RLS policies.
3. Run `supabase/seed.sql` — inserts the full dataset (69 cards, categories, banks, benefits, collections, FAQs, interest rates, etc.).

`seed.sql` is auto-generated from the app's seed data. If you change anything in `src/data/cards.js` or `src/data/content.js`, regenerate it with:

```bash
npm run generate:seed
```

### Database schema (overview)

| Table | Purpose |
| --- | --- |
| `banks` | Card issuers with logos |
| `card_categories` | Category taxonomy (cashback, travel, rupay, secured, ...) |
| `credit_cards` | Card catalog (fees, images, issuer) |
| `card_category_map` | Card ↔ category many-to-many |
| `card_benefits` | Benefit bullets per card (rewards, cashback, lounge access) |
| `card_collections` / `card_collection_items` | Named card groups rendered as carousels |
| `best_card_picks` | Editorial ranking for the Best Credit Cards page |
| `category_pages` | Config for the "By Category" landing pages |
| `faqs` | FAQs keyed by page (`home`, `interest-rates`, `cibil-score`, `eligibility`) |
| `interest_rates` | Bank-wise interest rates (monthly + APR) |
| `eligibility_criteria` | Eligibility table (salaried vs self-employed) |
| `page_sections` | Titled content blocks (CIBIL page) |
| `cibil_score_bands` | Score range → approval chance table |
| `reviews` | Customer reviews |
| `leads` | Lead form submissions (insert-only via anon key, linked to the user when signed in) |
| `profiles` | One row per registered user, auto-created on signup by a trigger |
| `user_activities` | Tracked user actions (cards viewed, compares, eligibility checks, leads, page visits) |

All content tables are public read-only via RLS; `leads` is public insert-only. Users can read only their own `profiles` / `user_activities` rows; admins (`profiles.is_admin = true`) can read everyone's.

### Authentication & admin

- Sign in / create account at `/sign-in` (Supabase email + password auth).
- Signed-in users see their profile and recent activity at `/my-account`.
- The admin dashboard at `/admin` shows all users, the cards each user checked, and a filterable activity feed.
- To make a user an admin, run in the SQL editor:

```sql
update profiles set is_admin = true where email = 'admin@bookmycreditcard.com';
```

Without Supabase credentials the app runs in **demo mode**: accounts and activities are stored in the browser (localStorage) so the whole flow can still be exercised locally. In demo mode, any account with an email ending `@bookmycreditcard.com` is treated as an admin.

## Routes

| Route | Page |
| --- | --- |
| `/` | Credit Cards home (hero, filterable listing, calculators, carousels, FAQs) |
| `/best-credit-cards` | Ranked editorial picks |
| `/credit-card-interest-rates` | Bank-wise interest rate table + tips + FAQs |
| `/cibil-score-for-credit-card` | Score bands, guidance, secured-card carousel |
| `/credit-card-eligibility` | Criteria table + interactive eligibility checker |
| `/compare-credit-cards` | Side-by-side comparison of up to 3 cards |
| `/cashback-credit-cards`, `/rewards-credit-cards`, `/lifetime-free-credit-cards`, `/rupay-credit-cards`, `/credit-cards-lounge-access`, `/onecard-credit-cards`, `/fuel-credit-cards`, `/travel-credit-cards`, `/international-credit-cards`, `/zero-forex-markup-credit-cards`, `/secured-credit-cards` | Category landing pages (config-driven) |
| `/sign-in` | Login / create account (Supabase auth) |
| `/my-account` | Signed-in user profile + recent activity |
| `/admin` | Admin dashboard (all users + activity feed) |
| `/terms-of-use`, `/privacy-policy`, `/credit-report-terms` | Footer / legal pages |

## Project Structure

```
src/
  lib/supabase.js          # Supabase client (env-driven)
  services/                # Reusable API modules (cards, content, leads, activities)
  context/                 # DataContext (catalog), CompareContext, AuthContext
  hooks/useAsyncData.js    # Loading/error wrapper for page-level fetches
  components/              # Header, Footer, listing, carousels, calculators, ...
    ui/                    # Loader, ErrorMessage, Breadcrumbs, PageHeader, ScrollManager
  pages/                   # Route components (lazy-loaded)
  data/                    # Seed data (also the offline fallback)
supabase/
  schema.sql               # Tables + RLS policies
  seed.sql                 # Generated data inserts
scripts/generate-seed.mjs  # Regenerates seed.sql from src/data
```

## Key behaviours

- **Compare flow** — tick "Compare" on any card (max 3, persisted in sessionStorage); the sticky bar's "Compare Now" opens the comparison table at `/compare-credit-cards`.
- **Filters** — bank / category / fee filters on the home listing and category pages; footer bank links deep-link with `?bank=` to pre-filter the listing.
- **Activity tracking** — for signed-in users the app records page visits, card detail views, compare add/remove, comparisons, eligibility checks and lead submissions; these power the "Recent Activity" feed on My Account and the admin dashboard.
- **Error handling** — every Supabase query falls back to bundled data and logs a warning; page-level fetches show loading and error states.
- **Performance** — all secondary routes are lazy-loaded; card images use native lazy loading; catalog data is fetched once and shared via context.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run oxlint |
| `npm run generate:seed` | Regenerate `supabase/seed.sql` from `src/data` |
