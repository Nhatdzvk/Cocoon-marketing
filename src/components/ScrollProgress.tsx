import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  activeSectionTitle?: string;
  isPresentationMode?: boolean;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  activeSectionTitle,
  isPresentationMode = false,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isPresentationMode) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPresentationMode]);

  if (isPresentationMode) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-[3px] bg-charcoal/10 pointer-events-none">
      <div
        className="h-full bg-botanical-green transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      {activeSectionTitle && (
        <div className="absolute right-4 top-2 text-[10px] uppercase tracking-wider text-charcoal/40 font-mono hidden md:block">
          {activeSectionTitle}
        </div>
      )}
    </div>
  );
};
