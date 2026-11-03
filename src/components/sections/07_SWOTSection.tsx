import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SWOTSectionProps {
  onOpenSource: (id: string) => void;
}

export const SWOTSection: React.FC<SWOTSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sCardRef = useRef<HTMLDivElement>(null);
  const wCardRef = useRef<HTMLDivElement>(null);
  const oCardRef = useRef<HTMLDivElement>(null);
  const tCardRef = useRef<HTMLDivElement>(null);
  const gapBannerRef = useRef<HTMLDivElement>(null);
  const pivotTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0% - 25%: S from left, W from right
      tl.fromTo(sCardRef.current, { opacity: 0, x: -140 }, { opacity: 1, x: 0, duration: 0.2 }, 0);
      tl.fromTo(wCardRef.current, { opacity: 0, x: 140 }, { opacity: 1, x: 0, duration: 0.2 }, 0.05);

      // 20% - 45%: O from bottom, T from top
      tl.fromTo(oCardRef.current, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 0.2 }, 0.2);
      tl.fromTo(tCardRef.current, { opacity: 0, y: -120 }, { opacity: 1, y: 0, duration: 0.2 }, 0.25);

      // 45% - 75%: 4 blocks move to 4 corners, center reveals "STRATEGIC GAP"
      tl.to(sCardRef.current, { x: -80, y: -40, scale: 0.85, opacity: 0.4, duration: 0.25 }, 0.45);
      tl.to(wCardRef.current, { x: 80, y: -40, scale: 0.85, opacity: 0.4, duration: 0.25 }, 0.45);
      tl.to(oCardRef.current, { x: -80, y: 40, scale: 0.85, opacity: 0.4, duration: 0.25 }, 0.45);
      tl.to(tCardRef.current, { x: 80, y: 40, scale: 0.85, opacity: 0.4, duration: 0.25 }, 0.45);

      tl.fromTo(gapBannerRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25 }, 0.5);

      // 75% - 100%: Strategic Gap expands, reveals transition to Opportunity
      tl.fromTo(
        pivotTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.25 },
        0.75
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="swot"
      aria-label="SWOT Analysis & Strategic Gap Scroll Storytelling"
      className="relative min-h-[300vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 07 / 17 · SWOT & STRATEGIC GAP
          </span>
          <span className="text-xs text-charcoal/50 font-mono">
            Hội tụ bốn chiều để nhận diện khoảng trống chiến lược
          </span>
        </div>

        {/* Central Dynamic Stage with 4 Converging Blocks */}
        <div className="my-auto relative w-full max-w-6xl mx-auto min-h-[460px] flex items-center justify-center z-10">
          {/* S Card (Strengths) */}
          <div
            ref={sCardRef}
            className="absolute top-2 left-2 sm:left-8 p-5 rounded-3xl bg-white border border-botanical-green/30 shadow-md max-w-xs space-y-1.5 opacity-0 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-botanical-green text-warm-ivory font-mono text-xs font-bold">
                STRENGTHS (ĐIỂM MẠNH)
              </span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
              • Tẩy da chết cà phê Đắk Lắk định vị cốt lõi vững chắc.<br />
              • Brand Storytelling nông sản Việt kết nối giới trẻ.<br />
              • Phủ rộng Guardian, Hasaki, Shopee, TikTok Shop.
            </p>
          </div>

          {/* W Card (Weaknesses) */}
          <div
            ref={wCardRef}
            className="absolute top-2 right-2 sm:right-8 p-5 rounded-3xl bg-white border border-coffee-brown/30 shadow-md max-w-xs space-y-1.5 opacity-0 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-coffee-brown text-warm-ivory font-mono text-xs font-bold">
                WEAKNESSES (ĐIỂM YẾU)
              </span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
              • Chưa có vị thế trong phân khúc Fragrance.<br />
              • Yêu cầu cao về R&D độ bám tỏa và phối tầng hương.<br />
              • Bao bì tối giản đối diện nguy cơ hàng nhái.
            </p>
          </div>

          {/* O Card (Opportunities) */}
          <div
            ref={oCardRef}
            className="absolute bottom-2 left-2 sm:left-8 p-5 rounded-3xl bg-white border border-golden-yellow/40 shadow-md max-w-xs space-y-1.5 opacity-0 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-golden-yellow text-charcoal font-mono text-xs font-bold">
                OPPORTUNITIES (CƠ HỘI)
              </span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
              • Khoảng trống Body Mist thuần chay Made in Vietnam.<br />
              • Tiềm năng Cross-sell cực lớn cùng dòng Body Care.<br />
              • Cơ hội xuất khẩu nhờ chứng nhận quốc tế độc lập.
            </p>
          </div>

          {/* T Card (Threats) */}
          <div
            ref={tCardRef}
            className="absolute bottom-2 right-2 sm:right-8 p-5 rounded-3xl bg-white border border-rose/30 shadow-md max-w-xs space-y-1.5 opacity-0 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-rose text-warm-ivory font-mono text-xs font-bold">
                THREATS (THÁCH THỨC)
              </span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
              • Sự thống trị của thương hiệu ngoại (Bath & Body Works).<br />
              • Rủi ro biến động mùa vụ của tinh dầu tự nhiên.<br />
              • Chi phí marketing tiếp cận ban đầu cạnh tranh gay gắt.
            </p>
          </div>

          {/* Center Stage: STRATEGIC GAP Reveal */}
          <div
            ref={gapBannerRef}
            className="p-8 sm:p-12 rounded-3xl bg-charcoal text-warm-ivory shadow-2xl border border-golden-yellow/30 text-center space-y-4 max-w-2xl z-20 opacity-0"
          >
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-golden-yellow font-semibold">
              HỘI TỤ MA TRẬN SWOT · STRATEGIC GAP
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-warm-ivory leading-tight">
              “Cocoon mạnh về Clean Beauty và Body Care,<br />
              <span className="text-golden-yellow italic font-normal">
                nhưng chưa xây dựng vị thế rõ ràng trong Fragrance.”
              </span>
            </h3>

            {/* Pivot to Opportunity */}
            <div
              ref={pivotTextRef}
              className="pt-4 border-t border-warm-ivory/15 flex items-center justify-center gap-3 text-sm sm:text-base text-warm-ivory font-medium opacity-0"
            >
              <span className="text-golden-yellow">Cơ hội độc tôn:</span>
              <ArrowRight className="w-4 h-4 text-golden-yellow" />
              <span className="font-serif italic font-bold text-warm-ivory">
                Body Mist thuần chay mang dấu ấn thực vật Việt Nam
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">S · W · O · T → Strategic Gap → Strategic Opportunity</span>
          <span>Tiếp tục cuộn xuống để khám phá Mục tiêu chiến dịch →</span>
        </div>
      </div>
    </div>
  );
};
