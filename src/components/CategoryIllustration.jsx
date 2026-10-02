import React from 'react';

/**
 * 3D / Isometric Illustrative Service Graphics for Credit Card Categories
 * Rendered with rich gradients, layered perspective, depth shadows, and specular lighting.
 */
export default function CategoryIllustration({ categoryKey, className = '' }) {
  switch (categoryKey) {
    case 'cashback-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="cb-coin-edge" x1="20" y1="30" x2="60" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="cb-coin-face" x1="24" y1="20" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="cb-gold-coin" x1="42" y1="12" x2="68" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.5" stopColor="#EAB308" />
              <stop offset="1" stopColor="#CA8A04" />
            </linearGradient>
            <radialGradient id="cb-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="cb-shadow" x="8" y="20" width="64" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#064E3B" floodOpacity="0.25" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#cb-glow)" />
          
          {/* Back Coin (Gold Accent) */}
          <g filter="url(#cb-shadow)">
            <ellipse cx="54" cy="28" rx="14" ry="14" fill="#A16207" />
            <ellipse cx="54" cy="26" rx="14" ry="14" fill="url(#cb-gold-coin)" />
            <ellipse cx="54" cy="26" rx="11" ry="11" fill="none" stroke="#FEF08A" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="54" y="31" textAnchor="middle" fontSize="11" fontWeight="800" fill="#713F12" fontFamily="sans-serif">%</text>
          </g>

          {/* Front Main Coin (Emerald 3D) */}
          <g filter="url(#cb-shadow)">
            {/* 3D Coin Edge/Thickness */}
            <path d="M18 42 C18 52 28 60 40 60 C52 60 62 52 62 42 L62 48 C62 58 52 66 40 66 C28 66 18 58 18 48 Z" fill="url(#cb-coin-edge)" />
            {/* Coin Top Face */}
            <ellipse cx="40" cy="42" rx="22" ry="18" fill="url(#cb-coin-face)" />
            <ellipse cx="40" cy="42" rx="18" ry="14.5" fill="none" stroke="#A7F3D0" strokeWidth="1.4" opacity="0.8" />
            {/* Embossed Rupee Sign */}
            <text x="40" y="48" textAnchor="middle" fontSize="17" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">₹</text>
          </g>

          {/* Floating Sparkles & Cash Tokens */}
          <circle cx="20" cy="24" r="2.5" fill="#34D399" />
          <path d="M64 48 L65.5 52 L69.5 53.5 L65.5 55 L64 59 L62.5 55 L58.5 53.5 L62.5 52 Z" fill="#FDE047" opacity="0.9" />
          <path d="M22 56 L23 58.5 L25.5 59.5 L23 60.5 L22 63 L21 60.5 L18.5 59.5 L21 58.5 Z" fill="#A7F3D0" />
        </svg>
      );

    case 'travel-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="tr-jet-body" x1="28" y1="20" x2="62" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#BAE6FD" />
            </linearGradient>
            <linearGradient id="tr-wing" x1="32" y1="36" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="tr-orbit" x1="16" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" stopOpacity="0.8" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="tr-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" stopOpacity="0.22" />
              <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
            <filter id="tr-shadow" x="12" y="16" width="56" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0C4A6E" floodOpacity="0.28" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#tr-glow)" />

          {/* Orbital Flight Path Trail */}
          <path d="M16 56 C20 30 44 18 64 24" stroke="url(#tr-orbit)" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
          
          {/* Soft Clouds Base */}
          <path d="M22 62 C20 62 18 60 19 58 C19 56 22 55 24 56 C25 53 29 53 31 55 C33 54 36 55 36 58 C37 60 36 62 33 62 Z" fill="#E0F2FE" opacity="0.8" />
          <path d="M42 66 C40 66 38 64 39 62 C39 60 42 59 44 60 C46 57 51 57 53 59 C55 58 59 60 58 63 C58 65 56 66 53 66 Z" fill="#BAE6FD" opacity="0.6" />

          {/* 3D Supersonic Aircraft */}
          <g filter="url(#tr-shadow)">
            {/* Under-Wing Shadow */}
            <path d="M30 46 L40 50 L50 45 L42 42 Z" fill="#0369A1" opacity="0.4" />
            {/* Left Wing */}
            <path d="M34 40 L18 52 L26 53 L38 44 Z" fill="url(#tr-wing)" />
            {/* Right Wing */}
            <path d="M44 32 L60 22 L62 26 L46 36 Z" fill="url(#tr-wing)" />
            {/* Airplane Fuselage */}
            <path d="M58 20 C60 21 61 23 60 25 L36 52 C34 54 30 55 28 53 L26 51 C25 49 26 46 28 44 L55 21 C56 20 57 19 58 20 Z" fill="url(#tr-jet-body)" />
            {/* Cockpit Glass */}
            <path d="M54 22 L56 24 L53 26 L51 24 Z" fill="#0284C7" />
            {/* Tail Fin */}
            <path d="M28 51 L25 59 L29 57 L31 52 Z" fill="#0284C7" />
          </g>

          {/* Speed Stars */}
          <circle cx="64" cy="38" r="1.5" fill="#38BDF8" />
          <circle cx="18" cy="32" r="2" fill="#7DD3FC" />
        </svg>
      );

    case 'rewards-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="rw-gem-top" x1="28" y1="22" x2="52" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5D0FE" />
              <stop offset="1" stopColor="#E879F9" />
            </linearGradient>
            <linearGradient id="rw-gem-facet-l" x1="22" y1="34" x2="40" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C084FC" />
              <stop offset="1" stopColor="#7E22CE" />
            </linearGradient>
            <linearGradient id="rw-gem-facet-r" x1="40" y1="34" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#6B21A8" />
            </linearGradient>
            <linearGradient id="rw-gem-facet-c" x1="34" y1="34" x2="46" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E879F9" />
              <stop offset="1" stopColor="#9333EA" />
            </linearGradient>
            <radialGradient id="rw-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" stopOpacity="0.25" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </radialGradient>
            <filter id="rw-shadow" x="14" y="16" width="52" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#3B0764" floodOpacity="0.32" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#rw-glow)" />

          {/* 3D Radiant Diamond Gem */}
          <g filter="url(#rw-shadow)">
            {/* Top Crown Facet */}
            <path d="M28 32 L40 22 L52 32 L40 35 Z" fill="url(#rw-gem-top)" />
            {/* Left Top Facet */}
            <path d="M20 32 L28 32 L40 35 L28 37 Z" fill="#D8B4FE" />
            {/* Right Top Facet */}
            <path d="M52 32 L60 32 L52 37 L40 35 Z" fill="#C084FC" />
            {/* Lower Center Facet (Front Prism) */}
            <path d="M28 37 L40 35 L52 37 L40 60 Z" fill="url(#rw-gem-facet-c)" />
            {/* Lower Left Facet */}
            <path d="M20 32 L28 37 L40 60 Z" fill="url(#rw-gem-facet-l)" />
            {/* Lower Right Facet */}
            <path d="M60 32 L52 37 L40 60 Z" fill="url(#rw-gem-facet-r)" />
            {/* Light Gleam Edge */}
            <path d="M40 22 L52 32 L40 35 Z" fill="#FFFFFF" opacity="0.45" />
          </g>

          {/* Celestial Sparkles */}
          <path d="M62 20 L63.5 24 L67.5 25.5 L63.5 27 L62 31 L60.5 27 L56.5 25.5 L60.5 24 Z" fill="#F0ABFC" />
          <path d="M18 48 L19 50.5 L21.5 51.5 L19 52.5 L18 55 L17 52.5 L14.5 51.5 L17 50.5 Z" fill="#E879F9" opacity="0.8" />
          <circle cx="22" cy="22" r="2" fill="#E9D5FF" />
          <circle cx="60" cy="52" r="1.5" fill="#F5D0FE" />
        </svg>
      );

    case 'lifetime-free-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="lf-shield-edge" x1="22" y1="20" x2="58" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B45309" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="lf-shield-body" x1="24" y1="18" x2="56" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.4" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <radialGradient id="lf-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" stopOpacity="0.25" />
              <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <filter id="lf-shadow" x="14" y="16" width="52" height="54" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#78350F" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#lf-glow)" />

          {/* 3D Golden Heraldic Badge */}
          <g filter="url(#lf-shadow)">
            {/* Outer Bevel Frame */}
            <path d="M40 18 L58 24 C58 40 48 56 40 62 C32 56 22 40 22 24 Z" fill="url(#lf-shield-edge)" />
            {/* Inner Golden Plate */}
            <path d="M40 21 L55 26.5 C55 39.5 46.5 53 40 58.5 C33.5 53 25 39.5 25 26.5 Z" fill="url(#lf-shield-body)" />
            {/* High-Gloss Highlight on Left Half */}
            <path d="M40 21 L25 26.5 C25 39.5 33.5 53 40 58.5 Z" fill="#FEF08A" opacity="0.35" />
            
            {/* ₹0 Bold Inscription & Unlocked Keyhole / Ribbon */}
            <text x="40" y="40" textAnchor="middle" fontSize="15" fontWeight="900" fill="#78350F" fontFamily="sans-serif">₹0</text>
            <text x="40" y="49" textAnchor="middle" fontSize="8" fontWeight="800" fill="#92400E" letterSpacing="0.08em" fontFamily="sans-serif">FREE</text>
          </g>

          {/* Laurel / Star Accents */}
          <path d="M16 26 L17.5 29.5 L21 31 L17.5 32.5 L16 36 L14.5 32.5 L11 31 L14.5 29.5 Z" fill="#FDE047" />
          <path d="M64 42 L65 44 L67 45 L65 46 L64 48 L63 46 L61 45 L63 44 Z" fill="#FBBF24" />
        </svg>
      );

    case 'fuel-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="fl-pump-body" x1="22" y1="20" x2="48" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB923C" />
              <stop offset="0.5" stopColor="#F97316" />
              <stop offset="1" stopColor="#C2410C" />
            </linearGradient>
            <linearGradient id="fl-drop" x1="52" y1="36" x2="64" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.6" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <radialGradient id="fl-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA580C" stopOpacity="0.25" />
              <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
            </radialGradient>
            <filter id="fl-shadow" x="14" y="16" width="54" height="54" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4.5" floodColor="#7C2D12" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#fl-glow)" />

          {/* 3D Smart Fuel Dispenser */}
          <g filter="url(#fl-shadow)">
            {/* Pump Main Column */}
            <rect x="22" y="24" width="24" height="38" rx="6" fill="#7C2D12" />
            <rect x="22" y="22" width="24" height="38" rx="6" fill="url(#fl-pump-body)" />
            {/* Pump Meter Screen */}
            <rect x="26" y="28" width="16" height="12" rx="3" fill="#1C1917" />
            <rect x="28" y="30" width="12" height="4" rx="1" fill="#4ADE80" opacity="0.85" />
            <rect x="28" y="36" width="8" height="2" rx="0.5" fill="#FACC15" />
            
            {/* Pump Base Plinth */}
            <path d="M19 58 L49 58 L46 62 L22 62 Z" fill="#9A3412" />

            {/* Flexible Hose */}
            <path d="M46 32 C54 32 58 40 56 48 L56 52" stroke="#44403C" strokeWidth="3" strokeLinecap="round" />
            {/* Nozzle Handle */}
            <path d="M56 46 L60 40 L64 42 L61 50 Z" fill="#292524" />
            <path d="M60 40 L66 34 L68 36 L62 42 Z" fill="#A8A29E" />
          </g>

          {/* Floating Energy / Fuel Droplet with Specular Flare */}
          <g filter="url(#fl-shadow)">
            <path d="M58 20 C58 17 52 23 52 28 C52 31.5 54.7 34 58 34 C61.3 34 64 31.5 64 28 C64 23 58 17 58 20 Z" fill="url(#fl-drop)" />
            <ellipse cx="56" cy="27" rx="1.5" ry="3" fill="#FFFFFF" opacity="0.65" transform="rotate(-20 56 27)" />
          </g>

          {/* Flame Spark */}
          <path d="M18 42 L19.5 45.5 L23 47 L19.5 48.5 L18 52 L16.5 48.5 L13 47 L16.5 45.5 Z" fill="#FDBA74" />
        </svg>
      );

    case 'credit-cards-lounge-access':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="lg-chair-body" x1="24" y1="26" x2="56" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="0.6" stopColor="#6366F1" />
              <stop offset="1" stopColor="#4338CA" />
            </linearGradient>
            <linearGradient id="lg-gold" x1="42" y1="18" x2="60" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <radialGradient id="lg-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
            <filter id="lg-shadow" x="14" y="18" width="52" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#312E81" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#lg-glow)" />

          {/* 3D Executive Lounge Wingback Chair */}
          <g filter="url(#lg-shadow)">
            {/* Backrest Arch */}
            <path d="M26 28 C26 22 32 18 40 18 C48 18 54 22 54 28 L54 48 C54 50 52 52 50 52 L30 52 C28 52 26 50 26 48 Z" fill="url(#lg-chair-body)" />
            {/* Tufted Cushion Inner */}
            <rect x="30" y="24" width="20" height="22" rx="4" fill="#4F46E5" />
            <line x1="40" y1="26" x2="40" y2="44" stroke="#A5B4FC" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
            <line x1="32" y1="35" x2="48" y2="35" stroke="#A5B4FC" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
            
            {/* Left Armrest */}
            <rect x="22" y="38" width="8" height="15" rx="4" fill="#4338CA" />
            {/* Right Armrest */}
            <rect x="50" y="38" width="8" height="15" rx="4" fill="#3730A3" />
            {/* Plush Seat Cushion */}
            <rect x="26" y="44" width="28" height="11" rx="4" fill="#6366F1" />

            {/* Polished Chrome Tapered Legs */}
            <line x1="28" y1="55" x2="25" y2="64" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="52" y1="55" x2="55" y2="64" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Floating Luxury Martini/Champagne Glass */}
          <g filter="url(#lg-shadow)">
            <path d="M56 22 L66 22 L61 28 Z" fill="url(#lg-gold)" opacity="0.9" />
            <line x1="61" y1="28" x2="61" y2="34" stroke="#FDE047" strokeWidth="1.5" />
            <line x1="58" y1="34" x2="64" y2="34" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="63" cy="20" r="1.5" fill="#FEF08A" />
          </g>

          {/* VIP Stars */}
          <path d="M18 20 L19 22 L21 23 L19 24 L18 26 L17 24 L15 23 L17 22 Z" fill="#FDE047" />
        </svg>
      );

    case 'rupay-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="rp-card-bg" x1="18" y1="24" x2="60" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="0.6" stopColor="#0891B2" />
              <stop offset="1" stopColor="#0E7490" />
            </linearGradient>
            <linearGradient id="rp-bolt" x1="36" y1="20" x2="56" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF08A" />
              <stop offset="0.5" stopColor="#FACC15" />
              <stop offset="1" stopColor="#EAB308" />
            </linearGradient>
            <radialGradient id="rp-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>
            <filter id="rp-shadow" x="12" y="18" width="56" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#164E63" floodOpacity="0.32" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#rp-glow)" />

          {/* Isometric Contactless Card Base */}
          <g filter="url(#rp-shadow)">
            {/* Card Thickness */}
            <rect x="18" y="27" width="44" height="28" rx="6" fill="#155E75" />
            {/* Card Face */}
            <rect x="18" y="25" width="44" height="28" rx="6" fill="url(#rp-card-bg)" />
            {/* Chip */}
            <rect x="24" y="32" width="9" height="7" rx="1.5" fill="#FDE047" />
            <line x1="28.5" y1="32" x2="28.5" y2="39" stroke="#CA8A04" strokeWidth="0.8" />
            
            {/* Wireless Contactless Waves */}
            <path d="M50 31 C52 33 52 37 50 39" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M53 29 C56 32 56 39 53 42" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Dynamic 3D High-Speed UPI Lightning Bolt */}
          <g filter="url(#rp-shadow)">
            <path d="M44 14 L30 38 L40 38 L34 60 L54 32 L42 32 Z" fill="url(#rp-bolt)" />
            <path d="M44 14 L37 32 L42 32 L34 60 L41 38 L40 38 Z" fill="#FFFFFF" opacity="0.35" />
          </g>

          {/* Electric QR / Spark Nodes */}
          <circle cx="20" cy="20" r="2" fill="#22D3EE" />
          <circle cx="62" cy="54" r="2.5" fill="#67E8F9" />
          <path d="M60 22 L61 24 L63 25 L61 26 L60 28 L59 26 L57 25 L59 24 Z" fill="#FDE047" />
        </svg>
      );

    case 'international-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="it-globe-base" x1="22" y1="20" x2="58" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="0.6" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="it-ring" x1="12" y1="20" x2="68" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
            <radialGradient id="it-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <filter id="it-shadow" x="12" y="16" width="56" height="54" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E3A8A" floodOpacity="0.32" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#it-glow)" />

          {/* 3D Global Earth Sphere */}
          <g filter="url(#it-shadow)">
            {/* Sphere Body */}
            <circle cx="40" cy="40" r="20" fill="url(#it-globe-base)" />
            {/* Latitude Grid Arcs */}
            <ellipse cx="40" cy="40" rx="20" ry="8" fill="none" stroke="#93C5FD" strokeWidth="1.2" opacity="0.6" />
            <line x1="20" y1="40" x2="60" y2="40" stroke="#BFDBFE" strokeWidth="1.2" opacity="0.6" />
            {/* Longitude Meridian Arc */}
            <ellipse cx="40" cy="40" rx="9" ry="20" fill="none" stroke="#93C5FD" strokeWidth="1.2" opacity="0.6" />
            {/* Specular Hemisphere Highlight */}
            <path d="M22 34 C25 24 35 20 45 22 C37 22 28 26 22 34 Z" fill="#FFFFFF" opacity="0.4" />
          </g>

          {/* Dynamic Orbital Ring */}
          <ellipse cx="40" cy="40" rx="28" ry="12" fill="none" stroke="url(#it-ring)" strokeWidth="2.5" transform="rotate(-25 40 40)" strokeDasharray="38 6 12 4" />
          
          {/* Orbital Satellite Node */}
          <circle cx="62" cy="28" r="3.5" fill="#FDE047" />
          <circle cx="62" cy="28" r="5" fill="#FDE047" opacity="0.3" />

          {/* Global Sparkles */}
          <path d="M18 22 L19.5 25.5 L23 27 L19.5 28.5 L18 32 L16.5 28.5 L13 27 L16.5 25.5 Z" fill="#93C5FD" />
        </svg>
      );

    case 'zero-forex-markup-credit-cards':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="fx-cur-a" x1="18" y1="20" x2="42" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB7185" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
            <linearGradient id="fx-cur-b" x1="38" y1="36" x2="62" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" />
              <stop offset="1" stopColor="#9F1239" />
            </linearGradient>
            <radialGradient id="fx-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" stopOpacity="0.25" />
              <stop offset="1" stopColor="#F43F5E" stopOpacity="0" />
            </radialGradient>
            <filter id="fx-shadow" x="14" y="16" width="52" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4.5" floodColor="#881337" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#fx-glow)" />

          {/* 3D Dual Currency Exchange Loop */}
          <g filter="url(#fx-shadow)">
            {/* ₹ Disc (Rupee) */}
            <circle cx="30" cy="34" r="14" fill="#9F1239" />
            <circle cx="30" cy="32" r="14" fill="url(#fx-cur-a)" />
            <text x="30" y="37" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">₹</text>

            {/* $ Disc (Dollar / Global) */}
            <circle cx="50" cy="48" r="14" fill="#881337" />
            <circle cx="50" cy="46" r="14" fill="url(#fx-cur-b)" />
            <text x="50" y="51" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">$</text>

            {/* Isometric Exchange Arrows Curve */}
            <path d="M42 24 C48 24 52 28 54 32" stroke="#FDA4AF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M54 32 L56 27 M54 32 L49 32" stroke="#FDA4AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            <path d="M38 56 C32 56 28 52 26 48" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26 48 L24 53 M26 48 L31 48" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* 0% Zero Markup Floating Badge */}
          <g filter="url(#fx-shadow)">
            <rect x="30" y="14" width="22" height="12" rx="6" fill="#10110F" />
            <text x="41" y="23" textAnchor="middle" fontSize="8" fontWeight="800" fill="#4ADE80" fontFamily="sans-serif">0% FX</text>
          </g>

          {/* Twinkles */}
          <circle cx="64" cy="22" r="2" fill="#FB7185" />
          <circle cx="18" cy="54" r="1.5" fill="#FECDD3" />
        </svg>
      );

    case 'secured-credit-cards':
    default:
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="sc-vault" x1="20" y1="20" x2="58" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD4BF" />
              <stop offset="0.6" stopColor="#0D9488" />
              <stop offset="1" stopColor="#115E59" />
            </linearGradient>
            <linearGradient id="sc-shield" x1="30" y1="18" x2="50" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0FDFA" />
              <stop offset="1" stopColor="#CCFBF1" />
            </linearGradient>
            <radialGradient id="sc-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0D9488" stopOpacity="0.25" />
              <stop offset="1" stopColor="#0D9488" stopOpacity="0" />
            </radialGradient>
            <filter id="sc-shadow" x="14" y="16" width="52" height="52" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#134E4A" floodOpacity="0.32" />
            </filter>
          </defs>
          {/* Ambient Glow */}
          <circle cx="40" cy="40" r="34" fill="url(#sc-glow)" />

          {/* 3D Bank Vault Door & Security Padlock */}
          <g filter="url(#sc-shadow)">
            {/* Vault Outer Bevel */}
            <circle cx="40" cy="42" r="20" fill="#042F2E" />
            <circle cx="40" cy="40" r="20" fill="url(#sc-vault)" />
            {/* Rivets */}
            <circle cx="40" cy="24" r="1.5" fill="#CCFBF1" />
            <circle cx="56" cy="40" r="1.5" fill="#CCFBF1" />
            <circle cx="40" cy="56" r="1.5" fill="#CCFBF1" />
            <circle cx="24" cy="40" r="1.5" fill="#CCFBF1" />

            {/* Inner Dial */}
            <circle cx="40" cy="40" r="13" fill="#134E4A" />
            {/* Vault Wheel Spokes */}
            <line x1="40" y1="31" x2="40" y2="49" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="31" y1="40" x2="49" y2="40" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="40" cy="40" r="6" fill="#F0FDFA" />
            <circle cx="40" cy="40" r="2.5" fill="#0F766E" />
          </g>

          {/* Security Shield Overlay Badge */}
          <g filter="url(#sc-shadow)">
            <path d="M52 20 L62 24 C62 33 57 41 52 44 C47 41 42 33 42 24 Z" fill="#F59E0B" />
            <path d="M52 22 L60 25.5 C60 32.5 56 39 52 41.5 C48 39 44 32.5 44 25.5 Z" fill="#FDE047" />
            <path d="M49 32 L51 34 L55 29" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Sparkles */}
          <circle cx="18" cy="26" r="2" fill="#5EEAD4" />
          <circle cx="62" cy="54" r="1.5" fill="#CCFBF1" />
        </svg>
      );
  }
}
