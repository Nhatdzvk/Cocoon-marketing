import React from 'react';
import { ExternalLink } from 'lucide-react';
import { sourcesData } from '../data/sources';

interface SourceBadgeProps {
  sourceId: string;
  onOpenSource: (id: string) => void;
  className?: string;
  variant?: 'inline' | 'button' | 'pill';
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  sourceId,
  onOpenSource,
  className = '',
  variant = 'pill',
}) => {
  const source = sourcesData[sourceId];
  if (!source) return null;

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={() => onOpenSource(sourceId)}
        title={`Xem nguồn: ${source.title} (${source.publisher})`}
        aria-label={`Xem nguồn ${sourceId}: ${source.title}`}
        className={`inline-flex items-center gap-1 text-xs text-botanical-green hover:text-charcoal underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-botanical-green rounded px-1 ${className}`}
      >
        <span>[{source.publisher || sourceId}]</span>
        <ExternalLink className="w-3 h-3 inline-block" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpenSource(sourceId)}
      title={`Xem nguồn: ${source.title}`}
      aria-label={`Mở thông tin nguồn ${sourceId}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border border-botanical-green/30 bg-botanical-green/5 text-botanical-green hover:bg-botanical-green hover:text-warm-ivory hover:border-botanical-green focus:outline-none focus:ring-2 focus:ring-botanical-green focus:ring-offset-1 ${className}`}
    >
      <span className="font-semibold">{sourceId}</span>
      <span className="text-[10px] opacity-75">· {source.publisher}</span>
      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
    </button>
  );
};
