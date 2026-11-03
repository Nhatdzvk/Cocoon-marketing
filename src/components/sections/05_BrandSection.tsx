import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { SourceBadge } from '../SourceBadge';

gsap.registerPlugin(ScrollTrigger);

interface BrandSectionProps {
  onOpenSource: (id: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ onOpenSource }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const skinRef = useRef<HTMLDivElement>(null);
  const hairRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lipRef = useRef<HTMLDivElement>(null);
  const botanicalsRef = useRef<HTMLDivElement>(null);
  const bodyMistCenterRef = useRef<HTMLDivElement>(null);
  const finaleRef = useRef<HTMLDivElement>(null);

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

      // 0% - 30%: 4 product categories move into stage from 4 corners
      tl.fromTo(skinRef.current, { opacity: 0, x: -120, y: -60 }, { opacity: 1, x: 0, y: 0, duration: 0.25 }, 0);
      tl.fromTo(hairRef.current, { opacity: 0, x: 120, y: -60 }, { opacity: 1, x: 0, y: 0, duration: 0.25 }, 0.05);
      tl.fromTo(bodyRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.25 }, 0.1);
      tl.fromTo(lipRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.25 }, 0.15);

      // 25% - 55%: Botanicals surround the ecosystem
      tl.fromTo(botanicalsRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25 }, 0.25);

      // 50% - 80%: Body Mist rises to central focus, older categories dim
      tl.fromTo(
        bodyMistCenterRef.current,
        { opacity: 0, scale: 0.5, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3 },
        0.5
      );
      tl.to([skinRef.current, hairRef.current, lipRef.current], { opacity: 0.35, scale: 0.95, duration: 0.2 }, 0.55);
      tl.to(bodyRef.current, { borderColor: '#586B46', duration: 0.2 }, 0.55);

      // 80% - 100%: Finale quote appears
      tl.fromTo(finaleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.2 }, 0.8);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="brand"
      aria-label="Brand Ecosystem Scroll Storytelling"
      className="relative min-h-[260vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 05 / 17 · BRAND UNDERSTANDING
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-charcoal/50 font-mono hidden sm:inline">3 Chứng nhận quốc tế độc lập</span>
            <SourceBadge sourceId="S14" onOpenSource={onOpenSource} />
          </div>
        </div>

        {/* Central Ecosystem Canvas */}
        <div className="my-auto relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[440px] z-10">
          {/* Central Core: Cocoon Identity */}
          <div className="text-center space-y-2 z-10">
            <div className="w-14 h-14 rounded-full bg-botanical-green text-warm-ivory flex items-center justify-center font-serif font-bold text-2xl mx-auto shadow-lg">
              C
            </div>
            <h3 className="font-serif font-bold text-2xl text-charcoal tracking-wide">
              COCOON VIETNAM
            </h3>
            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-botanical-green">
              <span>The Vegan Society</span> · <span>Leaping Bunny</span> · <span>PETA</span>
            </div>
          </div>

          {/* Category 1: Skincare (Top Left) */}
          <div
            ref={skinRef}
            className="absolute top-4 left-4 sm:left-12 p-4 rounded-2xl bg-white/90 border border-botanical-green/20 shadow-md max-w-[200px] text-xs opacity-0"
          >
            <div className="font-mono text-[10px] text-botanical-green font-bold uppercase">DANH MỤC 01</div>
            <div className="font-serif font-bold text-sm text-charcoal">SKINCARE</div>
            <div className="text-[11px] text-charcoal/60 mt-0.5">Bí đao, Nghệ Hưng Yên, Hoa hồng Cao Bằng</div>
          </div>

          {/* Category 2: Haircare (Top Right) */}
          <div
            ref={hairRef}
            className="absolute top-4 right-4 sm:right-12 p-4 rounded-2xl bg-white/90 border border-golden-yellow/30 shadow-md max-w-[200px] text-xs opacity-0"
          >
            <div className="font-mono text-[10px] text-golden-yellow font-bold uppercase">DANH MỤC 02</div>
            <div className="font-serif font-bold text-sm text-charcoal">HAIRCARE</div>
            <div className="text-[11px] text-charcoal/60 mt-0.5">Nước dưỡng tóc tinh dầu bưởi Việt Nam</div>
          </div>

          {/* Category 3: Body Care (Bottom Center) - The Anchor */}
          <div
            ref={bodyRef}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-2xl bg-white border-2 border-botanical-green shadow-lg max-w-xs text-xs text-center opacity-0 z-20"
          >
            <div className="font-mono text-[10px] text-botanical-green font-bold uppercase">DANH MỤC CỐT LÕI</div>
            <div className="font-serif font-bold text-base text-charcoal">BODY CARE</div>
            <div className="text-[11px] text-charcoal/70 mt-0.5">Tẩy da chết cà phê Đắk Lắk & Bơ dưỡng thể</div>
          </div>

          {/* Category 4: Lip Care (Top Center) */}
          <div
            ref={lipRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-white/80 border border-charcoal/10 shadow-xs text-xs text-center opacity-0"
          >
            <div className="font-mono text-[9px] text-charcoal/50 uppercase">DANH MỤC 04</div>
            <div className="font-serif font-bold text-xs text-charcoal">LIP CARE · Dầu dừa Bến Tre</div>
          </div>

          {/* Botanicals Orbit Ring */}
          <div
            ref={botanicalsRef}
            className="absolute inset-0 pointer-events-none flex items-center justify-around opacity-0"
          >
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-warm-ivory border border-botanical-green/30 text-botanical-green shadow-xs">
              🌿 Sen Hậu Giang
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-warm-ivory border border-golden-yellow/30 text-golden-yellow shadow-xs">
              ☕ Cà phê Đắk Lắk
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-warm-ivory border border-rose/30 text-rose shadow-xs">
              🌸 Hoa hồng Cao Bằng
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-warm-ivory border border-pomelo-green/30 text-pomelo-green shadow-xs">
              🍃 Bưởi Việt
            </span>
          </div>

          {/* Central Body Mist Revealed at Finale */}
          <div
            ref={bodyMistCenterRef}
            className="absolute z-30 p-5 rounded-3xl bg-botanical-green text-warm-ivory shadow-2xl border border-golden-yellow/40 text-center space-y-2 opacity-0 max-w-xs"
          >
            <Sparkles className="w-5 h-5 text-golden-yellow mx-auto" />
            <div className="font-mono text-[10px] uppercase font-bold text-golden-yellow tracking-widest">
              SẢN PHẨM MỚI HOÀN TOÀN
            </div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-warm-ivory">
              COCOON VEGAN BODY MIST
            </div>
            <div className="text-xs text-warm-ivory/80 italic font-serif">
              Mộc Hương Lành · Sắc hương 4 mùa thực vật Việt
            </div>
          </div>
        </div>

        {/* Finale Statement Card */}
        <div
          ref={finaleRef}
          className="p-5 rounded-2xl bg-charcoal text-warm-ivory text-center space-y-1 max-w-2xl mx-auto w-full z-20 opacity-0 shadow-lg"
        >
          <div className="font-serif text-lg sm:text-xl font-bold text-warm-ivory">
            “Cocoon đã sở hữu câu chuyện nguyên liệu.<br />
            <span className="text-golden-yellow italic font-normal">
              Bước tiếp theo là biến câu chuyện ấy thành hương thơm.”
            </span>
          </div>
          <div className="text-[10px] font-mono text-warm-ivory/50 uppercase tracking-widest pt-1">
            CHIẾN LƯỢC MỞ RỘNG DANH MỤC THUẦN CHAY
          </div>
        </div>
      </div>
    </div>
  );
};
