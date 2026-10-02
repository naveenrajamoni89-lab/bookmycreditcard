import React, { useState } from 'react';

/**
 * Real HD bank logos using official brand image sources.
 * Falls back to branded initials tile on image load error.
 */

const BANK_LOGOS = {
  // American Express
  amex: {
    match: ['american express', 'amex'],
    src: 'https://logo.clearbit.com/americanexpress.com',
    fallbackColor: '#006FCF',
    initials: 'AX',
  },
  // AU Small Finance Bank
  au: {
    match: ['au small', 'au bank', 'bank_357'],
    src: 'https://logo.clearbit.com/aubank.in',
    fallbackColor: '#F37021',
    initials: 'AU',
  },
  // Axis Bank
  axis: {
    match: ['axis bank', 'axis'],
    src: 'https://logo.clearbit.com/axisbank.com',
    fallbackColor: '#97144D',
    initials: 'AX',
  },
  // Bank of Baroda / BOBCARD
  bob: {
    match: ['bobcard', 'bank of baroda', 'baroda'],
    src: 'https://logo.clearbit.com/bankofbaroda.in',
    fallbackColor: '#F26522',
    initials: 'BOB',
  },
  // Federal Bank
  federal: {
    match: ['federal bank', 'federal'],
    src: 'https://logo.clearbit.com/federalbank.co.in',
    fallbackColor: '#0B3064',
    initials: 'FB',
  },
  // HDFC Bank
  hdfc: {
    match: ['hdfc'],
    src: 'https://logo.clearbit.com/hdfcbank.com',
    fallbackColor: '#004C8F',
    initials: 'HDFC',
  },
  // HSBC
  hsbc: {
    match: ['hsbc'],
    src: 'https://logo.clearbit.com/hsbc.co.in',
    fallbackColor: '#DB0011',
    initials: 'HSBC',
  },
  // ICICI Bank
  icici: {
    match: ['icici'],
    src: 'https://logo.clearbit.com/icicibank.com',
    fallbackColor: '#B02A30',
    initials: 'ICICI',
  },
  // IDFC FIRST Bank
  idfc: {
    match: ['idfc'],
    src: 'https://logo.clearbit.com/idfcfirstbank.com',
    fallbackColor: '#9E1B32',
    initials: 'IDFC',
  },
  // IndusInd Bank
  indusind: {
    match: ['indusind'],
    src: 'https://logo.clearbit.com/indusind.com',
    fallbackColor: '#861F41',
    initials: 'IIB',
  },
  // Kotak Mahindra Bank
  kotak: {
    match: ['kotak'],
    src: 'https://logo.clearbit.com/kotak.com',
    fallbackColor: '#EE272C',
    initials: 'KMB',
  },
  // Punjab National Bank
  pnb: {
    match: ['punjab national', 'pnb'],
    src: 'https://logo.clearbit.com/pnbindia.in',
    fallbackColor: '#A20037',
    initials: 'PNB',
  },
  // RBL Bank
  rbl: {
    match: ['rbl'],
    src: 'https://logo.clearbit.com/rblbank.com',
    fallbackColor: '#0C2074',
    initials: 'RBL',
  },
  // SBI Cards
  sbi: {
    match: ['sbi', 'state bank'],
    src: 'https://logo.clearbit.com/sbicard.com',
    fallbackColor: '#005088',
    initials: 'SBI',
  },
  // SBM Bank
  sbm: {
    match: ['sbm'],
    src: 'https://logo.clearbit.com/sbmbank.co.in',
    fallbackColor: '#0A1D37',
    initials: 'SBM',
  },
  // Standard Chartered Bank
  sc: {
    match: ['standard chartered'],
    src: 'https://logo.clearbit.com/sc.com',
    fallbackColor: '#009A44',
    initials: 'SCB',
  },
  // YES BANK
  yes: {
    match: ['yes bank', 'yes'],
    src: 'https://logo.clearbit.com/yesbank.in',
    fallbackColor: '#002F6C',
    initials: 'YES',
  },
  // Canara Bank
  canara: {
    match: ['canara'],
    src: 'https://logo.clearbit.com/canarabank.com',
    fallbackColor: '#0091DF',
    initials: 'CB',
  },
  // DBS Bank
  dbs: {
    match: ['dbs'],
    src: 'https://logo.clearbit.com/dbs.com',
    fallbackColor: '#EE2722',
    initials: 'DBS',
  },
  // Bandhan Bank
  bandhan: {
    match: ['bandhan'],
    src: 'https://logo.clearbit.com/bandhanbank.com',
    fallbackColor: '#B42025',
    initials: 'BB',
  },
};

function FallbackTile({ initials, color, size }) {
  const fontSize = size > 36 ? Math.round(size * 0.28) : Math.round(size * 0.32);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0, borderRadius: 6 }}
    >
      <rect width="32" height="32" rx="6" fill={color} />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize={fontSize}
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        {initials}
      </text>
    </svg>
  );
}

export default function BankLogo({ name = '', id = '', size = 26, className = '' }) {
  const [error, setError] = useState(false);
  const normalized = (name || id || '').toLowerCase().trim();

  // Find matching bank entry
  const bankKey = Object.keys(BANK_LOGOS).find((key) =>
    BANK_LOGOS[key].match.some((m) => normalized.includes(m))
  );

  const bank = bankKey ? BANK_LOGOS[bankKey] : null;

  if (!bank || error) {
    // Generic initials fallback
    const initials = name
      ? name
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')
          .toUpperCase()
      : 'B';
    return (
      <FallbackTile
        initials={initials || 'B'}
        color={bank?.fallbackColor || '#2447bb'}
        size={size}
      />
    );
  }

  return (
    <img
      src={bank.src}
      alt={name || bankKey}
      width={size}
      height={size}
      onError={() => setError(true)}
      loading="lazy"
      className={className}
      style={{
        display: 'block',
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: 5,
        background: '#ffffff',
        flexShrink: 0,
      }}
    />
  );
}
