import React from 'react';
import { Info, AlertCircle, Sparkles } from 'lucide-react';

interface DisclaimerBadgeProps {
  type: 'proposal' | 'rnd' | 'hypothesis' | 'ambition';
  text?: string;
  className?: string;
}

export const DisclaimerBadge: React.FC<DisclaimerBadgeProps> = ({
  type,
  text,
  className = '',
}) => {
  const configs = {
    proposal: {
      defaultText: 'Đề xuất chiến lược',
      icon: Sparkles,
      color: 'bg-golden-yellow/10 text-golden-yellow border-golden-yellow/30',
    },
    rnd: {
      defaultText: 'Chỉ tiêu phát triển đề xuất · Cần kiểm chứng qua R&D',
      icon: Info,
      color: 'bg-moss-green/10 text-moss-green border-moss-green/30',
    },
    hypothesis: {
      defaultText: 'Giả thuyết nghiên cứu · Cần khảo sát kiểm chứng',
      icon: AlertCircle,
      color: 'bg-coffee-brown/10 text-coffee-brown border-coffee-brown/30',
    },
    ambition: {
      defaultText: 'Mục tiêu tham vọng · Cần thẩm định baseline phân khúc',
      icon: Sparkles,
      color: 'bg-rose/15 text-rose border-rose/30',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-normal border ${config.color} ${className}`}
      title={text || config.defaultText}
    >
      <Icon className="w-3 h-3 flex-shrink-0" />
      <span>{text || config.defaultText}</span>
    </span>
  );
};
