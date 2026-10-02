import React from 'react';

/**
 * 3D Isometric Illustrative Service Graphics for:
 * 1. Why BookMyCreditCard? (5 Pillars)
 * 2. How BookMyCreditCard Works (4-Step Flow)
 */

export function WhyIllustration({ type = 'compare', className = '' }) {
  switch (type) {
    case 'compare':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wi-comp-a" x1="16" y1="22" x2="42" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="wi-comp-b" x1="38" y1="32" x2="64" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
            <radialGradient id="wi-comp-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" stopOpacity="0.2" />
              <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
            <filter id="wi-comp-sh" x="10" y="16" width="60" height="56" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.22" />
            </filter>
          </defs>
          <circle cx="40" cy="40" r="34" fill="url(#wi-comp-glow)" />

          {/* Isometric Comparison Pedestal Base */}
          <path d="M40 54 L62 64 L40 74 L18 64 Z" fill="#E2E8F0" />
          <path d="M18 64 L40 74 L40 77 L18 67 Z" fill="#CBD5E1" />
          <path d="M62 64 L40 74 L40 77 L62 67 Z" fill="#94A3B8" />

          {/* Left Card (Sky Blue) */}
          <g filter="url(#wi-comp-sh)">
            <path d="M16 28 L38 18 L48 40 L26 50 Z" fill="url(#wi-comp-a)" />
            <path d="M22 28 L27 26 L29 31 L24 33 Z" fill="#FDE047" opacity="0.9" />
            <line x1="28" y1="42" x2="42" y2="36" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="45" x2="36" y2="40" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Right Card (Indigo) */}
          <g filter="url(#wi-comp-sh)">
            <path d="M32 38 L54 28 L64 50 L42 60 Z" fill="url(#wi-comp-b)" />
            <path d="M38 38 L43 36 L45 41 L40 43 Z" fill="#FDE047" opacity="0.9" />
            <line x1="44" y1="52" x2="58" y2="46" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="42" y1="55" x2="52" y2="50" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Central Comparison Balance Beam & Check Badge */}
          <circle cx="40" cy="36" r="10" fill="#10110F" />
          <path d="M36 36 L39 39 L45 33" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'needs':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wi-target" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <radialGradient id="wi-needs-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.22" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="wi-needs-sh" x="12" y="14" width="56" height="56" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#064E3B" floodOpacity="0.25" />
            </filter>
          </defs>
          <circle cx="40" cy="40" r="34" fill="url(#wi-needs-glow)" />

          {/* Isometric Radar Target Rings */}
          <ellipse cx="40" cy="44" rx="28" ry="16" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
          <ellipse cx="40" cy="44" rx="20" ry="11" fill="none" stroke="#86EFAC" strokeWidth="1.5" strokeDasharray="4 3" />
          <ellipse cx="40" cy="44" rx="12" ry="6.5" fill="none" stroke="#4ADE80" strokeWidth="1.5" />

          {/* Focal Prism Pin */}
          <g filter="url(#wi-needs-sh)">
            <path d="M40 18 L48 34 L40 44 L32 34 Z" fill="url(#wi-target)" />
            <path d="M40 18 L40 44 L48 34 Z" fill="#047857" opacity="0.3" />
            <circle cx="40" cy="27" r="4" fill="#FFFFFF" />
            <circle cx="40" cy="27" r="2" fill="#059669" />
          </g>
        </svg>
      );

    case 'fees':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wi-doc" x1="24" y1="16" x2="56" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#F8FAFC" />
              <stop offset="1" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="wi-glass-lens" x1="36" y1="28" x2="58" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67E8F9" stopOpacity="0.6" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="wi-fees-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" stopOpacity="0.22" />
              <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <filter id="wi-fees-sh" x="12" y="14" width="56" height="56" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1E293B" floodOpacity="0.22" />
            </filter>
          </defs>
          <circle cx="40" cy="40" r="34" fill="url(#wi-fees-glow)" />

          {/* 3D Transparent Fee Disclosure Ledger */}
          <g filter="url(#wi-fees-sh)">
            {/* Sheet Thickness */}
            <path d="M22 22 L46 14 L58 48 L34 56 Z" fill="#CBD5E1" />
            {/* Sheet Face */}
            <path d="M22 20 L46 12 L58 46 L34 54 Z" fill="url(#wi-doc)" stroke="#E2E8F0" strokeWidth="1" />
            {/* Fee lines */}
            <line x1="28" y1="24" x2="40" y2="20" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="29" y1="30" x2="48" y2="23" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="31" y1="36" x2="46" y2="31" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
            {/* Verified Gold Seal */}
            <circle cx="36" cy="46" r="4.5" fill="#F59E0B" />
            <circle cx="36" cy="46" r="3" fill="#FDE047" />
          </g>

          {/* 3D Magnifying Inspection Lens (Clarity on Fees) */}
          <g filter="url(#wi-fees-sh)">
            {/* Lens Rim */}
            <circle cx="48" cy="38" r="13" fill="url(#wi-glass-lens)" stroke="#0E7490" strokeWidth="2.5" />
            {/* Lens Specular Reflection */}
            <path d="M40 33 C42 29 48 28 53 30" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            {/* Lens Focus Reticle */}
            <circle cx="48" cy="38" r="4" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
            {/* Handle */}
            <line x1="57" y1="47" x2="68" y2="60" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="57" y1="47" x2="68" y2="60" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'eligibility':
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wi-shield" x1="22" y1="18" x2="58" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="wi-clock" x1="42" y1="36" x2="66" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#F1F5F9" />
            </linearGradient>
            <radialGradient id="wi-elig-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="wi-elig-sh" x="12" y="14" width="56" height="56" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#064E3B" floodOpacity="0.28" />
            </filter>
          </defs>
          <circle cx="40" cy="40" r="34" fill="url(#wi-elig-glow)" />

          {/* 3D CIBIL Safe Shield */}
          <g filter="url(#wi-elig-sh)">
            {/* Outer Bevel Frame */}
            <path d="M38 18 L54 24 C54 40 44 54 38 58 C32 54 22 40 22 24 Z" fill="#065F46" />
            {/* Inner Shield Plate */}
            <path d="M38 21 L51 26 C51 38 42 50 38 54 C34 50 25 38 25 26 Z" fill="url(#wi-shield)" />
            {/* Soft Inquiry Shield Glow */}
            <path d="M38 21 L25 26 C25 38 34 50 38 54 Z" fill="#6EE7B7" opacity="0.4" />
            {/* Bold Approval Checkmark */}
            <path d="M32 36 L36 40 L44 31" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* 60-Second Instant Speedometer / Clock */}
          <g filter="url(#wi-elig-sh)">
            <circle cx="54" cy="46" r="13" fill="url(#wi-clock)" stroke="#10110F" strokeWidth="2" />
            {/* Speed Gauge Arc */}
            <path d="M47 50 A 8 8 0 1 1 61 50" fill="none" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M47 50 A 8 8 0 0 1 54 38" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
            {/* Clock Hand pointing to speed */}
            <line x1="54" y1="46" x2="57" y2="41" stroke="#2447bb" strokeWidth="2" strokeLinecap="round" />
            <circle cx="54" cy="46" r="2" fill="#10110F" />
          </g>
        </svg>
      );

    case 'banks':
    default:
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wi-vault-col" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="0.6" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#3730A3" />
            </linearGradient>
            <radialGradient id="wi-banks-glow" cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
            <filter id="wi-banks-sh" x="12" y="16" width="56" height="54" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1E1B4B" floodOpacity="0.28" />
            </filter>
          </defs>
          <circle cx="40" cy="40" r="34" fill="url(#wi-banks-glow)" />

          {/* 3D Multi-Bank Colonnade / Vault Hub */}
          <g filter="url(#wi-banks-sh)">
            {/* Pediment Roof */}
            <path d="M40 18 L62 26 L18 26 Z" fill="url(#wi-vault-col)" />
            <path d="M40 18 L18 26 L40 26 Z" fill="#818CF8" opacity="0.4" />
            <rect x="20" y="26" width="40" height="4" fill="#312E81" />

            {/* Architectural Pillars */}
            <rect x="22" y="30" width="5" height="24" rx="1.5" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1" />
            <rect x="33" y="30" width="5" height="24" rx="1.5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" />
            <rect x="42" y="30" width="5" height="24" rx="1.5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" />
            <rect x="53" y="30" width="5" height="24" rx="1.5" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1" />

            {/* Base Plinth */}
            <path d="M16 54 L64 54 L62 60 L18 60 Z" fill="#312E81" />
            <rect x="14" y="60" width="52" height="4" rx="1" fill="#1E1B4B" />
          </g>
        </svg>
      );
  }
}

/**
 * 3D Isometric Illustrative Graphics for How BookMyCreditCard Works (4-Step Flow)
 */
export function HowIllustration({ step = '01', className = '' }) {
  const normStep = String(step).padStart(2, '0');
  switch (normStep) {
    case '01': // Explore
      return (
        <svg className={className} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hw-exp-card1" x1="20" y1="26" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="hw-exp-card2" x1="30" y1="36" x2="62" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="1" stopColor="#4338CA" />
            </linearGradient>
            <linearGradient id="hw-exp-glass" x1="42" y1="18" x2="66" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#EAB308" />
            </linearGradient>
            <radialGradient id="hw-exp-glow" cx="42" cy="42" r="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
            <filter id="hw-exp-sh" x="12" y="14" width="60" height="60" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.22" />
            </filter>
          </defs>
          <circle cx="42" cy="42" r="36" fill="url(#hw-exp-glow)" />

          {/* Floating Isometric Card Stack (Catalog Discovery) */}
          <g filter="url(#hw-exp-sh)">
            {/* Card 1 (Back) */}
            <path d="M18 36 L40 24 L56 36 L34 48 Z" fill="url(#hw-exp-card1)" />
            <path d="M26 34 L32 30 L34 34 L28 38 Z" fill="#FDE047" />
            
            {/* Card 2 (Front Floating) */}
            <path d="M26 48 L48 36 L64 48 L42 60 Z" fill="url(#hw-exp-card2)" />
            <path d="M34 46 L40 42 L42 46 L36 50 Z" fill="#FDE047" />
            <line x1="46" y1="46" x2="56" y2="40" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Discovery Compass / Telescope Search Lens */}
          <g filter="url(#hw-exp-sh)">
            <circle cx="54" cy="28" r="12" fill="url(#hw-exp-glass)" stroke="#78350F" strokeWidth="2" />
            <circle cx="54" cy="28" r="9" fill="#FEF08A" opacity="0.6" />
            <line x1="63" y1="37" x2="72" y2="46" stroke="#10110F" strokeWidth="4" strokeLinecap="round" />
            <circle cx="52" cy="26" r="2" fill="#FFFFFF" />
          </g>

          {/* Floating Sparkles */}
          <path d="M22 22 L23 24 L25 25 L23 26 L22 28 L21 26 L19 25 L21 24 Z" fill="#38BDF8" />
        </svg>
      );

    case '02': // Compare
      return (
        <svg className={className} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hw-cmp-p1" x1="18" y1="24" x2="38" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="hw-cmp-p2" x1="46" y1="24" x2="66" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
            <radialGradient id="hw-cmp-glow" cx="42" cy="42" r="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
            <filter id="hw-cmp-sh" x="12" y="14" width="60" height="60" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E1B4B" floodOpacity="0.25" />
            </filter>
          </defs>
          <circle cx="42" cy="42" r="36" fill="url(#hw-cmp-glow)" />

          {/* Dual Card Comparison Scales */}
          <g filter="url(#hw-cmp-sh)">
            {/* Center Fulcrum Balance Beam */}
            <path d="M42 22 L42 62" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <path d="M22 34 L62 34" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="42" cy="34" r="4.5" fill="#F59E0B" />
            
            {/* Left Card Pan */}
            <path d="M18 36 L38 36 L34 56 L14 56 Z" fill="url(#hw-cmp-p1)" />
            <rect x="18" y="42" width="12" height="3" rx="1.5" fill="#A7F3D0" />
            <circle cx="30" cy="50" r="2.5" fill="#FFFFFF" />

            {/* Right Card Pan */}
            <path d="M46 36 L66 36 L62 56 L42 56 Z" fill="url(#hw-cmp-p2)" />
            <rect x="46" y="42" width="12" height="3" rx="1.5" fill="#DDD6FE" />
            <circle cx="58" cy="50" r="2.5" fill="#FFFFFF" />
            
            {/* Comparison Fulcrum Center Badge */}
            <circle cx="42" cy="48" r="6" fill="#10110F" />
            <circle cx="42" cy="48" r="3" fill="#F59E0B" />
          </g>

          {/* Delta Arrows */}
          <path d="M26 24 L29 27 M26 24 L23 27" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <path d="M58 24 L61 27 M58 24 L55 27" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case '03': // Check Eligibility
      return (
        <svg className={className} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hw-el-gauge" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <radialGradient id="hw-el-glow" cx="42" cy="42" r="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="hw-el-sh" x="12" y="14" width="60" height="60" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#064E3B" floodOpacity="0.28" />
            </filter>
          </defs>
          <circle cx="42" cy="42" r="36" fill="url(#hw-el-glow)" />

          {/* 3D Credit Health & Eligibility Meter */}
          <g filter="url(#hw-el-sh)">
            {/* Gauge Background Ring */}
            <circle cx="42" cy="42" r="22" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="3" />
            
            {/* Active Gauge Meter Spectrum */}
            <path d="M26 50 A 18 18 0 1 1 58 50" fill="none" stroke="#F1F5F9" strokeWidth="5" strokeLinecap="round" />
            <path d="M26 50 A 18 18 0 0 1 48 24" fill="none" stroke="url(#hw-el-gauge)" strokeWidth="5" strokeLinecap="round" />

            {/* Needle pointing to Excellent */}
            <line x1="42" y1="42" x2="50" y2="30" stroke="#2447bb" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="42" cy="42" r="4.5" fill="#10110F" />
            <circle cx="42" cy="42" r="2" fill="#4ADE80" />

            {/* Approved Badge */}
            <rect x="30" y="56" width="24" height="13" rx="6.5" fill="#047857" />
            <path d="M36 62.5 L39 65.5 L47 58" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Zero Impact Spark */}
          <circle cx="22" cy="26" r="2" fill="#34D399" />
          <path d="M62 26 L63 28.5 L65.5 29.5 L63 30.5 L62 33 L61 30.5 L58.5 29.5 L61 28.5 Z" fill="#FDE047" />
        </svg>
      );

    case '04': // Apply
    default:
      return (
        <svg className={className} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hw-ap-gate" x1="22" y1="18" x2="62" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="0.6" stopColor="#1D4ED8" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
            <radialGradient id="hw-ap-glow" cx="42" cy="42" r="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <filter id="hw-ap-sh" x="12" y="14" width="60" height="60" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E3A8A" floodOpacity="0.28" />
            </filter>
          </defs>
          <circle cx="42" cy="42" r="36" fill="url(#hw-ap-glow)" />

          {/* 3D Bank Security Gateway Portal */}
          <g filter="url(#hw-ap-sh)">
            {/* Gateway Arch */}
            <path d="M26 62 L26 34 C26 24 33 18 42 18 C51 18 58 24 58 34 L58 62 Z" fill="url(#hw-ap-gate)" />
            <path d="M32 62 L32 36 C32 28 36 24 42 24 C48 24 52 28 52 36 L52 62 Z" fill="#0F172A" />

            {/* Direct Official Transmission Rocket / Beacon */}
            <path d="M42 28 L47 38 L43 36 L43 52 L41 52 L41 36 L37 38 Z" fill="#FDE047" />
            <circle cx="42" cy="56" r="2.5" fill="#60A5FA" />

            {/* Base Secure Floor */}
            <rect x="20" y="62" width="44" height="6" rx="3" fill="#1E293B" />
          </g>

          {/* Verified Official Check Badge */}
          <g filter="url(#hw-ap-sh)">
            <circle cx="58" cy="30" r="9" fill="#10B981" />
            <path d="M54 30 L57 33 L62 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Transmission Pulses */}
          <circle cx="26" cy="22" r="1.5" fill="#93C5FD" />
          <circle cx="60" cy="52" r="2" fill="#60A5FA" />
        </svg>
      );
  }
}
