import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fragrancesData } from '../../data/fragrances';
import { DisclaimerBadge } from '../DisclaimerBadge';
import { Layers, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SeasonsCollection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate total horizontal distance: (4 slides - 1) * 100vw = 300vw
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=350%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(horizontalTrackRef.current, {
        x: () => -(horizontalTrackRef.current?.scrollWidth || 0) + window.innerWidth,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="product"
      aria-label="Seasons Collection Horizontal Scroll Storytelling"
      className="relative min-h-[450vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between overflow-hidden relative"
      >
        {/* Top Header Floating */}
        <div className="p-6 sm:px-12 flex items-center justify-between border-b border-botanical-green/15 bg-warm-ivory/80 backdrop-blur-md z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 12 / 17 · SEASONS COLLECTION (BỘ SƯU TẬP 4 MÙA)
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-charcoal/50 font-mono hidden sm:inline">
              Cuộn chuột dọc để thưởng ngoạn 4 mùa trôi ngang →
            </span>
            <DisclaimerBadge type="rnd" text="Chỉ tiêu phát triển R&D đề xuất" />
          </div>
        </div>

        {/* Horizontal Continuous Track across 4 Seasons */}
        <div className="my-auto flex-1 flex items-center overflow-hidden w-full relative">
          <div
            ref={horizontalTrackRef}
            className="flex h-full will-change-transform"
          >
            {fragrancesData.map((f, idx) => (
              <div
                key={f.id}
                className="w-screen h-full shrink-0 flex items-center justify-center p-6 sm:p-12 transition-colors duration-700"
                style={{ backgroundColor: f.accentBg }}
              >
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Visual Bottle Mockup */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div className="relative w-56 h-80 sm:w-64 sm:h-92 flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse"
                        style={{ backgroundColor: f.accentColor }}
                      />

                      {/* Season Bottle */}
                      <div className="relative z-10 w-44 h-72 sm:w-48 sm:h-80 rounded-3xl bg-white/90 p-5 shadow-2xl border border-white/60 backdrop-blur-md flex flex-col justify-between items-center text-center">
                        <div
                          className="w-7 h-5 rounded-t-md shadow-xs"
                          style={{ backgroundColor: f.accentColor }}
                        />
                        <div className="w-4 h-3 bg-stone-300 mb-2" />

                        <div className="space-y-1.5 py-4 border-y border-charcoal/10 w-full">
                          <div className="text-[10px] tracking-widest font-mono text-charcoal/50 uppercase">
                            COCOON · {f.seasonEn.toUpperCase()}
                          </div>
                          <div className="font-serif font-bold text-base text-charcoal">
                            {f.name}
                          </div>
                          <div
                            className="text-xs font-serif italic font-medium"
                            style={{ color: f.accentColor }}
                          >
                            {f.mood}
                          </div>
                          <div className="text-[10px] font-mono text-charcoal/40">
                            250ml / 75ml · 100% Thuần chay
                          </div>
                        </div>

                        <div className="text-[9px] font-mono font-bold text-charcoal/60 uppercase">
                          MÙA 0{idx + 1} / 04
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Scent Pyramid & Storytelling */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full bg-white font-mono text-xs font-bold text-charcoal border border-charcoal/10">
                          {f.seasonVi.toUpperCase()}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                          style={{ backgroundColor: `${f.accentColor}25`, color: f.accentColor }}
                        >
                          {f.mood}
                        </span>
                        <span className="text-xs font-mono text-charcoal/50">
                          {f.specs.pricingFull} (250ml) · {f.specs.pricingMini} (75ml)
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal">
                        {f.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 font-mono">
                        Nguồn cảm hứng: <strong>{f.botanicalOrigin}</strong>
                      </p>
                    </div>

                    {/* Tháp 3 Tầng Hương */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-2xl bg-white/90 border border-charcoal/10 shadow-xs space-y-1">
                        <div className="text-[10px] font-mono text-charcoal/50 font-bold uppercase">HƯƠNG ĐẦU</div>
                        <p className="text-xs text-charcoal/85 leading-relaxed">{f.topNote.description}</p>
                      </div>
                      <div
                        className="p-4 rounded-2xl bg-white border shadow-sm space-y-1"
                        style={{ borderColor: f.accentColor }}
                      >
                        <div className="text-[10px] font-mono font-bold uppercase" style={{ color: f.accentColor }}>
                          HƯƠNG GIỮA (CHỦ ĐẠO)
                        </div>
                        <p className="text-xs text-charcoal/90 leading-relaxed font-medium">{f.midNote.description}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/90 border border-charcoal/10 shadow-xs space-y-1">
                        <div className="text-[10px] font-mono text-charcoal/50 font-bold uppercase">HƯƠNG CUỐI</div>
                        <p className="text-xs text-charcoal/85 leading-relaxed">{f.baseNote.description}</p>
                      </div>
                    </div>

                    {/* Vibe & Moments */}
                    <div className="p-4 rounded-2xl bg-white/80 border border-charcoal/10 space-y-2 text-xs">
                      <div className="text-[11px] font-mono text-charcoal/60 uppercase font-bold">
                        CẢM GIÁC & HOÀN CẢNH SỬ DỤNG:
                      </div>
                      <div className="text-charcoal/80 italic">“{f.vibe}”</div>
                      <div className="text-charcoal/60 pt-1 font-mono">
                        Định hướng lưu hương: {f.specs.longevity} · Độ tỏa: {f.specs.sillage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 sm:px-12 flex items-center justify-between border-t border-botanical-green/15 bg-warm-ivory/80 backdrop-blur-md text-xs font-mono z-20">
          <div className="flex items-center gap-4 text-charcoal/70">
            <span>01 Xuân (Hồng)</span>
            <span>→ 02 Hạ (Sen)</span>
            <span>→ 03 Thu (Bưởi)</span>
            <span>→ 04 Đông (Cà phê)</span>
          </div>
          <span className="text-botanical-green font-bold">Cuộn chuột để sang tiếp Chiến lược 4Ps →</span>
        </div>
      </div>
    </div>
  );
};
