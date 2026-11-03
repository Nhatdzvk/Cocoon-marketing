import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const BigIdeaSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mocRef = useRef<HTMLDivElement>(null);
  const huongRef = useRef<HTMLDivElement>(null);
  const lanhRef = useRef<HTMLDivElement>(null);
  const unifiedRef = useRef<HTMLDivElement>(null);
  const keyMsgRef = useRef<HTMLDivElement>(null);
  const botanicalsRef = useRef<HTMLDivElement>(null);

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

      // 0% - 30%: MỘC, HƯƠNG, LÀNH 3 cards enter with their unique visual styles
      tl.fromTo(mocRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.2 }, 0);
      tl.fromTo(huongRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.2 }, 0.08);
      tl.fromTo(lanhRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.2 }, 0.16);

      // 30% - 65%: The 3 cards shift towards each other and fade into unified Title
      tl.to([mocRef.current, huongRef.current, lanhRef.current], { opacity: 0, scale: 0.85, duration: 0.2 }, 0.35);
      tl.fromTo(
        unifiedRef.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 0.25 },
        0.42
      );

      // 55% - 85%: 4 botanicals appear around title
      tl.fromTo(botanicalsRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25 }, 0.55);

      // 75% - 100%: Key message revealed at bottom
      tl.fromTo(keyMsgRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.2 }, 0.75);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="big-idea"
      aria-label="Big Idea Moc Huong Lanh Scroll Storytelling"
      className="relative min-h-[260vh] bg-charcoal text-warm-ivory border-b border-botanical-green/20"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-warm-ivory/15 pb-3 z-20">
          <span className="font-mono text-xs text-golden-yellow font-semibold uppercase tracking-wider">
            CHƯƠNG 11 / 17 · BIG IDEA
          </span>
          <span className="text-xs text-warm-ivory/50 font-mono">
            Hội tụ 3 thành tố: Mộc – Hương – Lành
          </span>
        </div>

        {/* Central Stage */}
        <div className="my-auto relative w-full max-w-5xl mx-auto min-h-[460px] flex items-center justify-center z-10">
          {/* 3 Pillar Cards: MỘC, HƯƠNG, LÀNH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* MỘC */}
            <div
              ref={mocRef}
              className="p-8 rounded-3xl bg-warm-ivory/5 border border-warm-ivory/15 space-y-3 opacity-0"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold text-golden-yellow">
                MỘC
              </div>
              <div className="font-mono text-xs text-warm-ivory/50 uppercase tracking-widest">
                CỎ CÂY BẢN ĐỊA
              </div>
              <p className="text-xs text-warm-ivory/80 leading-relaxed font-light">
                Cỏ cây mộc mạc từ nguyên liệu thực vật Việt: hoa hồng Cao Bằng, sen Hậu Giang, bưởi vườn nhà và cà phê Tây Nguyên.
              </p>
            </div>

            {/* HƯƠNG */}
            <div
              ref={huongRef}
              className="p-8 rounded-3xl bg-warm-ivory/5 border border-warm-ivory/15 space-y-3 opacity-0"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold text-warm-ivory">
                HƯƠNG
              </div>
              <div className="font-mono text-xs text-warm-ivory/50 uppercase tracking-widest">
                LÀN SƯƠNG BỐN MÙA
              </div>
              <p className="text-xs text-warm-ivory/80 leading-relaxed font-light">
                Làn sương thơm thanh mát gói trọn sắc thái bốn mùa của dải đất Việt: sương xuân, nắng hạ, chiều thu và se lạnh ngày đông.
              </p>
            </div>

            {/* LÀNH */}
            <div
              ref={lanhRef}
              className="p-8 rounded-3xl bg-warm-ivory/5 border border-warm-ivory/15 space-y-3 opacity-0"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold text-golden-yellow">
                LÀNH
              </div>
              <div className="font-mono text-xs text-warm-ivory/50 uppercase tracking-widest">
                100% THUẦN CHAY
              </div>
              <p className="text-xs text-warm-ivory/80 leading-relaxed font-light">
                Cam kết cốt lõi của Cocoon: thuần chay an toàn, không cồn gắt, dịu êm vỗ về làn da nhạy cảm và tâm trí giữa nhịp sống bận rộn.
              </p>
            </div>
          </div>

          {/* Unified Big Idea Title & Botanicals Orbit (Revealed in phase 2) */}
          <div
            ref={unifiedRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 opacity-0 pointer-events-none"
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-golden-yellow font-semibold">
              Ý TƯỞNG LỚN CỦA DỰ ÁN
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-warm-ivory leading-none">
              MỘC HƯƠNG LÀNH
            </h2>

            {/* 4 Botanicals Orbit Pill */}
            <div
              ref={botanicalsRef}
              className="flex items-center gap-2 flex-wrap justify-center pt-2 opacity-0"
            >
              <span className="px-3 py-1 rounded-full bg-warm-ivory/10 text-xs font-mono text-golden-yellow border border-golden-yellow/30">
                🌸 Xuân · Hoa hồng Cao Bằng
              </span>
              <span className="px-3 py-1 rounded-full bg-warm-ivory/10 text-xs font-mono text-rose border border-rose/30">
                🌿 Hạ · Sen Hậu Giang
              </span>
              <span className="px-3 py-1 rounded-full bg-warm-ivory/10 text-xs font-mono text-pomelo-green border border-pomelo-green/30">
                🍃 Thu · Bưởi Việt
              </span>
              <span className="px-3 py-1 rounded-full bg-warm-ivory/10 text-xs font-mono text-amber-600 border border-amber-600/30">
                ☕ Đông · Cà phê Đắk Lắk
              </span>
            </div>
          </div>
        </div>

        {/* Key Message Footer Revealed */}
        <div
          ref={keyMsgRef}
          className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 text-center space-y-2 max-w-3xl mx-auto w-full z-20 opacity-0"
        >
          <div className="font-serif italic text-2xl sm:text-4xl text-golden-yellow font-normal">
            “Khẽ chạm làn sương, thơm hương lành mãi”
          </div>
          <div className="text-[11px] font-mono text-warm-ivory/50 uppercase tracking-widest">
            KEY MESSAGE · COCOON VEGAN BODY MIST
          </div>
        </div>
      </div>
    </div>
  );
};
