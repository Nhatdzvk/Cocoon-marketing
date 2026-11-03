import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Wind, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onExplore: () => void;
  isPresentationMode?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, isPresentationMode = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const wordMocRef = useRef<HTMLSpanElement>(null);
  const wordHuongRef = useRef<HTMLSpanElement>(null);
  const wordLanhRef = useRef<HTMLSpanElement>(null);
  const keyMsgRef = useRef<HTMLDivElement>(null);
  const mistCloudRef = useRef<HTMLDivElement>(null);
  const botanicalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPresentationMode) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0% - 20%: Eyebrow reveals, bottle rises and scales
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, ease: 'none', duration: 0.2 },
        0
      );

      tl.fromTo(
        bottleRef.current,
        { opacity: 0, yPercent: 40, scale: 0.85 },
        { opacity: 1, yPercent: 0, scale: 1, ease: 'none', duration: 0.25 },
        0
      );

      // 20% - 45%: MỘC from left, HƯƠNG from right, LÀNH clip-reveal
      tl.fromTo(
        wordMocRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, ease: 'none', duration: 0.2 },
        0.2
      );

      tl.fromTo(
        wordHuongRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, ease: 'none', duration: 0.2 },
        0.25
      );

      tl.fromTo(
        wordLanhRef.current,
        { opacity: 0, clipPath: 'inset(50% 50% 50% 50%)', scale: 0.9 },
        { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, ease: 'none', duration: 0.2 },
        0.3
      );

      // 45% - 70%: Mist spreads horizontally, bottle shifts right, key message reveals on left
      tl.fromTo(
        mistCloudRef.current,
        { opacity: 0, scaleX: 0.5 },
        { opacity: 0.85, scaleX: 1.2, ease: 'none', duration: 0.25 },
        0.45
      );

      tl.to(
        bottleRef.current,
        { xPercent: 20, ease: 'none', duration: 0.25 },
        0.45
      );

      tl.fromTo(
        keyMsgRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, ease: 'none', duration: 0.25 },
        0.48
      );

      // 70% - 100%: Botanicals drift away, container scales down slightly into next section
      tl.to(
        botanicalsRef.current,
        { y: -60, opacity: 0, ease: 'none', duration: 0.25 },
        0.75
      );

      tl.to(
        stageRef.current,
        { scale: 0.96, opacity: 0.9, ease: 'none', duration: 0.25 },
        0.75
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isPresentationMode]);

  return (
    <div
      ref={containerRef}
      id="hero"
      aria-label="Hero Intro Cinematic Storytelling"
      className="relative min-h-[220vh] bg-gradient-to-b from-[#162013] via-[#1D251A] to-warm-ivory text-warm-ivory"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        {/* Subtle Botanical Mist & Dew Background Layer */}
        <div
          ref={mistCloudRef}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(88,107,70,0.35)_0%,transparent_70%)] blur-3xl opacity-0"
        />

        {/* Floating Ambient Botanicals (Leaves, Dew, Petals) */}
        <div ref={botanicalsRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 text-golden-yellow/30 text-2xl animate-pulse">🌿</div>
          <div className="absolute top-1/3 right-16 text-rose/30 text-3xl">🌸</div>
          <div className="absolute bottom-1/4 left-1/4 text-pomelo-green/30 text-xl">🍃</div>
          <div className="absolute top-2/3 right-1/4 text-coffee-brown/40 text-2xl">☕</div>
        </div>

        {/* Top Header Eyebrow */}
        <div
          ref={eyebrowRef}
          className="pt-16 sm:pt-14 flex items-center justify-between z-10 opacity-0"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-botanical-green/30 text-golden-yellow font-semibold border border-botanical-green/40">
              COCOON VIETNAM
            </span>
            <span className="text-xs text-warm-ivory/70 hidden sm:inline font-mono">
              Dự án phát triển sản phẩm mới · 100% Thuần chay
            </span>
          </div>

          <div className="text-xs font-mono text-warm-ivory/60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-golden-yellow animate-ping" />
            <span>SCROLL STORYTELLING</span>
          </div>
        </div>

        {/* Central Stage: Huge Typography & Floating Body Mist Bottle */}
        <div className="my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 w-full max-w-7xl mx-auto">
          {/* Typography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-golden-yellow font-semibold">
                Kế hoạch Marketing · Cocoon Vegan Body Mist
              </p>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.92] text-warm-ivory">
                <span ref={wordMocRef} className="inline-block opacity-0">MỘC</span><br />
                <span ref={wordHuongRef} className="inline-block opacity-0">HƯƠNG</span><br />
                <span
                  ref={wordLanhRef}
                  className="inline-block italic font-normal text-golden-yellow opacity-0"
                >
                  LÀNH
                </span>
              </h1>
            </div>

            {/* Key Message Revealed during Scroll */}
            <div ref={keyMsgRef} className="space-y-3 opacity-0 max-w-xl">
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-golden-yellow border-l-2 border-golden-yellow pl-4 leading-snug">
                “Khẽ chạm làn sương,<br />
                thơm hương lành mãi”
              </p>
              <p className="text-sm sm:text-base text-warm-ivory/80 leading-relaxed font-light">
                Khám phá nghệ thuật tạo hương cơ thể từ nông sản thuần khiết Việt Nam: Vườn hồng Cao Bằng, Đầm sen Hậu Giang, Bưởi non và Cà phê Đắk Lắk.
              </p>
            </div>
          </div>

          {/* Bottle Showcase Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div
              ref={bottleRef}
              className="relative w-64 h-84 sm:w-72 sm:h-96 flex items-center justify-center opacity-0"
            >
              {/* Radial Mist Glow */}
              <div className="absolute inset-0 rounded-full bg-golden-yellow/15 blur-2xl animate-pulse" />

              {/* Minimalist Eco Bottle Concept */}
              <div className="relative z-10 w-44 h-72 sm:w-48 sm:h-80 rounded-3xl bg-gradient-to-b from-white/95 via-white/85 to-white/60 p-5 shadow-2xl border border-white/50 backdrop-blur-md flex flex-col justify-between items-center text-center text-charcoal">
                {/* Nozzle */}
                <div className="w-7 h-5 rounded-t-md bg-golden-yellow shadow-xs" />
                <div className="w-4 h-3 bg-stone-300 mb-2" />

                {/* Minimalist Editorial Label */}
                <div className="space-y-2 py-4 border-y border-charcoal/10 w-full">
                  <div className="text-[10px] tracking-widest font-mono text-charcoal/50 uppercase">
                    COCOON
                  </div>
                  <div className="font-serif text-sm font-bold text-charcoal">
                    VEGAN BODY MIST
                  </div>
                  <div className="text-[11px] font-serif italic text-botanical-green">
                    Mộc Hương Lành
                  </div>
                  <div className="text-[9px] font-mono text-charcoal/40">
                    250 ml · 8.5 fl. oz
                  </div>
                </div>

                <div className="text-[9px] text-charcoal/60 font-mono tracking-wider">
                  100% THUẦN CHAY VIỆT NAM
                </div>
              </div>
            </div>

            <p className="text-[11px] text-warm-ivory/50 mt-2 text-center italic">
              *Hình ảnh minh họa ý tưởng sản phẩm (Product Concept Mockup)
            </p>
          </div>
        </div>

        {/* Hero Footer Bar */}
        <div className="pb-4 flex items-center justify-between text-xs text-warm-ivory/60 border-t border-warm-ivory/15 pt-4 z-10">
          <div className="font-mono text-[11px] flex items-center gap-2 text-golden-yellow">
            <span className="w-2 h-2 rounded-full bg-golden-yellow animate-pulse" />
            <span>01 / 17 · INTRO STORYTELLING</span>
          </div>

          <div className="flex items-center gap-2 text-warm-ivory/80">
            <span>Cuộn chuột xuống để tiếp tục hành trình</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};
