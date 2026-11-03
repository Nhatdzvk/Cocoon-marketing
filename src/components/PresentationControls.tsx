import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause, EyeOff, Eye } from 'lucide-react';

interface PresentationControlsProps {
  isActive: boolean;
  currentSlide: number;
  totalSlides: number;
  currentTitle: string;
  onNext: () => void;
  onPrev: () => void;
  onExit: () => void;
  onToggleReducedMotion: () => void;
  isReducedMotion: boolean;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  isActive,
  currentSlide,
  totalSlides,
  currentTitle,
  onNext,
  onPrev,
  onExit,
  onToggleReducedMotion,
  isReducedMotion,
}) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        // Go to slide 1
      } else if (e.key === 'End') {
        e.preventDefault();
        // Go to last slide
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onNext, onPrev, onExit]);

  if (!isActive) return null;

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <aside aria-label="Bảng điều khiển thuyết trình" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      <div className="bg-charcoal text-warm-ivory px-5 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-warm-ivory/20 backdrop-blur-md">
        {/* Slide Counter */}
        <div className="flex items-center gap-1 font-mono text-xs">
          <span className="text-golden-yellow font-bold text-sm">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="opacity-40">/</span>
          <span className="opacity-70">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <div className="h-4 w-px bg-warm-ivory/20 hidden sm:block" />

        {/* Current Chapter Title */}
        <div className="text-xs font-serif font-medium truncate max-w-[200px] sm:max-w-xs text-warm-ivory/90 hidden sm:block">
          {currentTitle}
        </div>

        <div className="h-4 w-px bg-warm-ivory/20" />

        {/* Navigation Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentSlide === 0}
            aria-label="Chương trước (Phím Mũi tên Lên / Trái)"
            className="p-1.5 rounded-full hover:bg-warm-ivory/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none focus:ring-1 focus:ring-golden-yellow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Chương tiếp theo (Phím Space / Mũi tên Xuống)"
            className="p-1.5 rounded-full bg-botanical-green hover:bg-botanical-green/80 disabled:opacity-30 disabled:hover:bg-botanical-green transition-colors focus:outline-none focus:ring-1 focus:ring-golden-yellow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="h-4 w-px bg-warm-ivory/20" />

        {/* Motion Toggle */}
        <button
          type="button"
          onClick={onToggleReducedMotion}
          title={isReducedMotion ? 'Bật hiệu ứng chuyển động' : 'Giảm chuyển động (Reduced Motion)'}
          aria-label="Chuyển chế độ giảm chuyển động"
          className="p-1.5 rounded-full hover:bg-warm-ivory/15 transition-colors text-warm-ivory/70 hover:text-warm-ivory text-xs flex items-center gap-1"
        >
          {isReducedMotion ? <EyeOff className="w-4 h-4 text-golden-yellow" /> : <Eye className="w-4 h-4" />}
        </button>

        {/* Exit Presentation Mode */}
        <button
          type="button"
          onClick={onExit}
          title="Thoát chế độ thuyết trình (Phím Esc)"
          aria-label="Thoát chế độ thuyết trình"
          className="p-1.5 rounded-full hover:bg-rose/20 text-rose/90 hover:text-rose transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Progress Pill */}
      <div className="w-48 h-1 bg-charcoal/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-golden-yellow transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="text-[10px] text-charcoal/50 font-mono tracking-tight hidden sm:block">
        Phím tắt: [Space/↓] Tiếp tục · [↑] Quay lại · [Esc] Thoát
      </div>
    </aside>
  );
};
