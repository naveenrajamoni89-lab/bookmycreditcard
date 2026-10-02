/**
 * Static Route Generator for Book My Credit Card
 * Generates separate route folders with optimized index.html files in dist/
 * for static hosting, SEO crawlers, and Lighthouse / web audit tools.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://bookmycreditcard.com';

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error('[generate-dist-routes] Error: dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

// 1. Core / Overview pages
const coreRoutes = [
  {
    path: '/best-credit-cards',
    title: 'Best Credit Cards in India 2026 - Top Picks & Comparison | Book My Credit Card',
    description: 'Find and compare the best credit cards in India for 2026. Handpicked top cards for cashback, rewards, travel, dining and airport lounge access with low interest rates.',
  },
  {
    path: '/credit-card-interest-rates',
    title: 'Credit Card Interest Rates & Charges in India 2026 | Book My Credit Card',
    description: 'Compare credit card interest rates, APR, late payment fees, and charges across top banks like HDFC, SBI, ICICI, Axis and Kotak. Updated 2026 schedule of charges.',
  },
  {
    path: '/cibil-score-for-credit-card',
    title: 'CIBIL Score for Credit Card - Minimum Score & Eligibility | Book My Credit Card',
    description: 'Understand the minimum CIBIL score required for credit card approvals in India. Check credit score bands, approval chances and expert tips to boost your score.',
  },
  {
    path: '/credit-card-eligibility',
    title: 'Credit Card Eligibility Calculator - Check Free Online | Book My Credit Card',
    description: 'Free online credit card eligibility checker. Check your approval chances in 60 seconds based on age, income, employment and credit profile with zero CIBIL impact.',
  },
  {
    path: '/compare-credit-cards',
    title: 'Compare Credit Cards Online in India 2026 | Book My Credit Card',
    description: 'Compare up to 3 credit cards side-by-side on annual fees, reward rates, cashback percentages, lounge access and welcome bonuses to choose the perfect card.',
  },
  {
    path: '/sign-in',
    title: 'Sign In / Create Account | Book My Credit Card',
    description: 'Sign in to Book My Credit Card to track your recent activity, saved comparisons, eligibility checks and card application status.',
  },
  {
    path: '/my-account',
    title: 'My Account & Recent Activity | Book My Credit Card',
    description: 'Manage your profile, view recent card browsing history, compare list, eligibility checks and application updates in your personal dashboard.',
  },
  {
    path: '/credit-card-basics',
    title: 'Credit Card Basics: A Complete Beginner’s Guide | Book My Credit Card',
    description: 'Learn how credit cards work, understanding billing cycles, the 20 to 50 day grace period, APR interest rates, and golden rules of smart credit card usage.',
  },
  {
    path: '/credit-card-guides',
    title: 'Credit Card Guides & Practical How-Tos | Book My Credit Card',
    description: 'Step-by-step actionable guides to activate cards, pay bills, avoid hidden charges, convert EMIs, and maximize reward points.',
  },
  {
    path: '/admin',
    title: 'Admin Dashboard | Book My Credit Card',
    description: 'Administrative portal for user profile management, lead management, and platform activity metrics.',
  }
];

// 2. Load Category pages
let categoryRoutes = [];
try {
  const contentJs = fs.readFileSync(path.join(ROOT_DIR, 'src/data/content.js'), 'utf8');
  const catMatches = [...contentJs.matchAll(/slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*'([^']+)'/g)];
  categoryRoutes = catMatches.map(m => ({
    path: `/${m[1]}`,
    title: `${m[2]} in India - Best Offers & Review 2026 | Book My Credit Card`,
    description: m[3] || `Explore the best ${m[2].toLowerCase()} in India with top benefits, zero joining fees, and instant online application.`,
  }));
} catch (e) {
  console.warn('[generate-dist-routes] Warning: Could not parse category pages:', e.message);
}

// 3. Load Legal pages
let legalRoutes = [];
try {
  const legalJs = fs.readFileSync(path.join(ROOT_DIR, 'src/data/legalPages.js'), 'utf8');
  const legalMatches = [...legalJs.matchAll(/slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'/g)];
  legalRoutes = legalMatches.map(m => ({
    path: `/${m[1]}`,
    title: `${m[2]} | Book My Credit Card`,
    description: `Official ${m[2]} for Book My Credit Card. Read our terms, security practices, and compliance guidelines.`,
  }));
} catch (e) {
  console.warn('[generate-dist-routes] Warning: Could not parse legal pages:', e.message);
}

// 4. Load Card Detail pages
let cardRoutes = [];
try {
  const cardDetailsData = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'src/data/cardDetailsData.json'), 'utf8'));
  for (const card of cardDetailsData) {
    if (!card.route) continue;
    const cleanRoute = card.route.startsWith('/') ? card.route : `/${card.route}`;
    const normalizedRoute = cleanRoute.endsWith('/') ? cleanRoute.slice(0, -1) : cleanRoute;
    const desc = card.highlight
      || (card.benefits && card.benefits[0])
      || `Apply online for ${card.name} by ${card.bankName}. Check features, welcome rewards, annual fees and eligibility.`;

    cardRoutes.push({
      path: normalizedRoute,
      title: `${card.name} - Features, Benefits, Fees & Eligibility | Book My Credit Card`,
      description: desc.length > 160 ? desc.slice(0, 157) + '...' : desc,
    });
  }
} catch (e) {
  console.warn('[generate-dist-routes] Warning: Could not parse card details:', e.message);
}

// Deduplicate routes by normalized path
const allRoutesMap = new Map();
for (const r of [...coreRoutes, ...categoryRoutes, ...legalRoutes, ...cardRoutes]) {
  const cleanPath = r.path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!cleanPath) continue;
  if (!allRoutesMap.has(cleanPath)) {
    allRoutesMap.set(cleanPath, r);
  }
}

const allRoutes = Array.from(allRoutesMap.values());
console.log(`[generate-dist-routes] Generating separate route folders for ${allRoutes.length} routes...`);

let generatedCount = 0;

for (const route of allRoutes) {
  const cleanPath = route.path.replace(/^\/+/, '').replace(/\/+$/, '');
  const targetDir = path.join(DIST_DIR, ...cleanPath.split('/'));

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalUrl = `${SITE_URL}/${cleanPath}/`;

  // Inject route-specific title, description, canonical, and OpenGraph tags
  let html = baseHtml;

  // Title
  if (route.title) {
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  }

  // Meta description
  if (route.description) {
    if (html.includes('<meta name="description"')) {
      html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(route.description)}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(route.description)}" />\n</head>`);
    }
  }

  // Canonical tag & OpenGraph tags
  const metaTags = [
    `  <link rel="canonical" href="${canonicalUrl}" />`,
    `  <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `  <meta property="og:url" content="${canonicalUrl}" />`,
    `  <meta property="og:type" content="website" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n');

  html = html.replace('</head>', `${metaTags}\n</head>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  generatedCount++;
}

// 5. Generate 404.html
const notFoundHtml = baseHtml.replace(/<title>.*?<\/title>/i, '<title>Page Not Found (404) | Book My Credit Card</title>');
fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf8');

// 6. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /my-account

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf8');

// 7. Generate sitemap.xml
const sitemapUrls = [
  `<url><loc>${SITE_URL}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
  ...allRoutes.map(r => {
    const cleanPath = r.path.replace(/^\/+/, '').replace(/\/+$/, '');
    const priority = cleanPath.includes('admin') || cleanPath.includes('my-account') || cleanPath.includes('sign-in')
      ? '0.3'
      : cleanPath.startsWith('best-') || cleanPath.startsWith('compare-') || cleanPath.startsWith('credit-card-')
      ? '0.9'
      : '0.8';
    return `<url><loc>${SITE_URL}/${cleanPath}/</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  })
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`[generate-dist-routes] Successfully created ${generatedCount} route folders in dist/!`);
console.log(`[generate-dist-routes] Generated 404.html, robots.txt, and sitemap.xml in dist/`);

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
