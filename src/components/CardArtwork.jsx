import { useState } from 'react';
import cardImageSources from '../data/cardImageSources.json';

export default function CardArtwork({ card, className = '', width, height, loading = 'lazy' }) {
  const [failedSource, setFailedSource] = useState('');
  const source = cardImageSources[card.id]?.file || card.image;

  if (source && source !== failedSource) {
    return <img src={source} alt={card.name} className={className} width={width} height={height} loading={loading} decoding="async" onError={() => setFailedSource(source)} />;
  }

  return (
    <span className={`card-art-missing ${className}`} role="img" aria-label={`${card.name} image unavailable`}>Image unavailable</span>
  );
}
