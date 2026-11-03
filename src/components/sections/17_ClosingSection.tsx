import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RotateCcw, List, Play, Sparkles } from 'lucide-react';
import { fragrancesData } from '../../data/fragrances';

gsap.registerPlugin(ScrollTrigger);

interface ClosingSectionProps {
  onRestart: () => void;
  onOpenMenu: () => void;
  onTogglePresentation: () => void;
  isPresentationMode: boolean;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onRestart,
  onOpenMenu,
  onTogglePresentation,
  isPresentationMode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const bottlesClusterRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0% - 35%: 4 bottles converge from 4 directions
      const bottles = bottlesClusterRef.current?.children;
      if (bottles) {
        tl.fromTo(bottles[0], { x: -80, y: -60, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.3 }, 0);
        tl.fromTo(bottles[1], { x: 80, y: -60, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.3 }, 0.05);
        tl.fromTo(bottles[2], { x: -80, y: 60, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.3 }, 0.1);
        tl.fromTo(bottles[3], { x: 80, y: 60, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.3 }, 0.15);
      }

      // 30% - 65%: Headlines reveal line by line
      tl.fromTo(headline1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.25 }, 0.3);
      tl.fromTo(headline2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.25 }, 0.45);
      tl.fromTo(taglineRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.25 }, 0.6);

      // 70% - 100%: Action buttons fade in at the end of animation
      tl.fromTo(actionButtonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.25 }, 0.75);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="closing"
      aria-label="Closing Section Scroll Climax"
      className="relative min-h-[220vh] bg-charcoal text-warm-ivory"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-warm-ivory/15 pb-3 z-20">
          <span className="font-mono text-xs text-golden-yellow font-semibold uppercase tracking-wider">
            CHƯƠNG 17 / 17 · CLOSING & VISION
          </span>
          <span className="text-xs text-warm-ivory/60 font-mono">
            Cocoon Vietnam · Mộc Hương Lành
          </span>
        </div>

        {/* Central Closing Climax */}
        <div className="my-auto text-center space-y-6 max-w-4xl mx-auto w-full z-10">
          {/* 4 Bottles Cluster Converging from 4 directions */}
          <div
            ref={bottlesClusterRef}
            className="flex items-center justify-center gap-4 max-w-xl mx-auto"
          >
            {fragrancesData.map((f) => (
              <div
                key={f.id}
                className="w-20 sm:w-28 p-3 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/20 text-center space-y-1 shadow-lg backdrop-blur-sm"
              >
                <div className="text-[9px] font-mono font-bold" style={{ color: f.accentColor }}>
                  {f.seasonVi.toUpperCase()}
                </div>
                <div className="font-serif font-bold text-xs text-warm-ivory truncate">{f.name}</div>
              </div>
            ))}
          </div>

          {/* Sequential Headlines */}
          <div className="space-y-2">
            <h2
              ref={headline1Ref}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-warm-ivory tracking-tight opacity-0"
            >
              Một làn hương mới.
            </h2>
            <h2
              ref={headline2Ref}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-golden-yellow tracking-tight opacity-0 italic font-normal"
            >
              Một cách kể mới về thiên nhiên Việt.
            </h2>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="font-serif text-lg sm:text-2xl text-warm-ivory/90 opacity-0"
          >
            Cocoon Vegan Body Mist · “Khẽ chạm làn sương, thơm hương lành mãi.”
          </p>

          {/* Action Buttons Revealed at End of Scroll */}
          <div
            ref={actionButtonsRef}
            className="flex items-center justify-center gap-3 pt-4 flex-wrap opacity-0"
          >
            <button
              type="button"
              onClick={onRestart}
              className="px-6 py-3 rounded-full bg-botanical-green text-warm-ivory text-xs font-semibold hover:bg-botanical-green/90 transition-all flex items-center gap-2 shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Xem lại từ đầu</span>
            </button>

            <button
              type="button"
              onClick={onOpenMenu}
              className="px-6 py-3 rounded-full bg-warm-ivory/15 hover:bg-warm-ivory/25 text-warm-ivory text-xs font-semibold transition-all flex items-center gap-2 border border-warm-ivory/20"
            >
              <List className="w-4 h-4" />
              <span>Mở mục lục bài thuyết trình</span>
            </button>

            <button
              type="button"
              onClick={onTogglePresentation}
              className={`px-6 py-3 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                isPresentationMode
                  ? 'bg-golden-yellow text-charcoal shadow-md'
                  : 'bg-warm-ivory text-charcoal hover:bg-white'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>{isPresentationMode ? 'Thoát thuyết trình' : 'Bật chế độ thuyết trình'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-warm-ivory/50 border-t border-warm-ivory/15 pt-3 z-20">
          <span className="font-mono text-[11px]">100% Thuần chay · Nông sản bản địa Việt Nam · Leaping Bunny · PETA</span>
          <span className="font-mono text-[11px]">Kế hoạch Marketing Cocoon Vegan Body Mist</span>
        </div>
      </div>
    </div>
  );
};
