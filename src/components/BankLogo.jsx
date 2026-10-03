import { useState } from 'react';
import { banks } from '../data/cards';

export default function BankLogo({ name = '', id = '', size = 26, className = '' }) {
  const [failedSource, setFailedSource] = useState('');
  const issuer = banks.find(bank => bank.id === id || bank.name.toLowerCase() === name.toLowerCase());
  const filename = issuer?.logo?.split('/').pop();
  const source = filename ? '/images/banks/' + (filename === 'punjab-national-bank.svg' ? 'punjab-national-bank.png' : filename) : '';
  if (!source || failedSource === source) {
    return <span className={className} style={{ fontSize: 12, fontWeight: 700 }} aria-label={name || issuer?.name || 'Bank'}>{name || issuer?.name || 'Bank'}</span>;
  }
  return <img src={source} alt={name || issuer.name} width={size} height={size} className={className}
    style={{ width: size, height: size, objectFit: 'contain', flexShrink: 0 }}
    onError={() => setFailedSource(source)} />;
}
