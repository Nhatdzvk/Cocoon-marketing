import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Sparkles } from 'lucide-react';
import { SourceBadge } from '../SourceBadge';

gsap.registerPlugin(ScrollTrigger);

interface MarketSectionProps {
  onOpenSource: (id: string) => void;
}

export const MarketSection: React.FC<MarketSectionProps> = ({ onOpenSource }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const chartPathRef = useRef<SVGPathElement>(null);

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

      // Step 1 is visible at start (Global Beauty 552B -> 575.6B)
      // Step 1 fades out, Step 2 (VN TMĐT 74.4k tỷ) fades in
      tl.to(step1Ref.current, { opacity: 0, y: -40, scale: 0.9, duration: 0.2 }, 0.2);
      tl.fromTo(step2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.25);

      // Step 2 fades out, Step 3 (Global Fragrance 58.9B -> 89.4B) fades in
      tl.to(step2Ref.current, { opacity: 0, y: -40, scale: 0.9, duration: 0.2 }, 0.45);
      tl.fromTo(step3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.5);

      // Step 3 fades out, Step 4 (VN Fragrance 3.3k tỷ & Statista 3B) fades in
      tl.to(step3Ref.current, { opacity: 0, y: -40, scale: 0.9, duration: 0.2 }, 0.7);
      tl.fromTo(step4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.75);

      // Animate Growth Line Path in background
      if (chartPathRef.current) {
        const pathLength = chartPathRef.current.getTotalLength() || 600;
        gsap.set(chartPathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        tl.to(chartPathRef.current, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);
      }

      // Final Conclusion reveal
      tl.fromTo(conclusionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.2 }, 0.85);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="market"
      aria-label="Market Opportunity Scroll Storytelling"
      className="relative min-h-[300vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Animated Background Growth Curve */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 800 400" fill="none">
            <path
              ref={chartPathRef}
              d="M 50 350 C 200 320, 350 250, 500 180 C 650 110, 720 70, 750 40"
              stroke="#586B46"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-10">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 03 / 17 · MARKET OPPORTUNITY
          </span>
          <span className="text-xs text-charcoal/50 font-mono">
            Dữ liệu phát triển tuần tự theo tiến trình cuộn
          </span>
        </div>

        {/* Main Stage Grid: Fixed Title on Left, Dynamic Data on Right */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
          {/* Left Fixed Editorial Title */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
              CƠ HỘI THỊ TRƯỜNG BÙNG NỔ
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-charcoal">
              Thị trường mở lối,<br />
              nhu cầu hương thơm<br />
              tăng trưởng vượt bậc.
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
              Cuộn chuột để theo dõi dữ liệu thị trường toàn cầu và Việt Nam được tái hiện theo từng mốc nghiên cứu.
            </p>
          </div>

          {/* Right Dynamic Stage Container */}
          <div className="lg:col-span-7 relative min-h-[380px] flex items-center">
            {/* Step 1: Global Beauty & Personal Care */}
            <div
              ref={step1Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/20 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-botanical-green uppercase">
                  MỐC 01 · THỊ TRƯỜNG TOÀN CẦU
                </span>
                <SourceBadge sourceId="S02" onOpenSource={onOpenSource} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-charcoal/50 uppercase">BEAUTY & PERSONAL CARE TOÀN CẦU</div>
                <div className="font-serif text-4xl sm:text-6xl font-bold text-charcoal tracking-tight">
                  552B → <span className="text-botanical-green">575,6</span>
                </div>
                <div className="text-sm font-sans font-medium text-charcoal/70">
                  tỷ USD (2025 → 2026) · <strong className="text-botanical-green font-mono">CAGR 4,27%</strong> (2026–2034)
                </div>
              </div>

              <p className="text-xs text-charcoal/75 leading-relaxed border-t border-charcoal/10 pt-3">
                Thị trường chăm sóc sắc đẹp và cá nhân toàn cầu duy trì quy mô khổng lồ và tăng trưởng ổn định.
              </p>
            </div>

            {/* Step 2: VN E-Commerce Beauty */}
            <div
              ref={step2Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-golden-yellow/40 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  MỐC 02 · THƯƠNG MẠI ĐIỆN TỬ VIỆT NAM
                </span>
                <SourceBadge sourceId="S01" onOpenSource={onOpenSource} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-charcoal/50 uppercase">NGÀNH LÀM ĐẸP TRÊN TMĐT VIỆT NAM</div>
                <div className="font-serif text-4xl sm:text-6xl font-bold text-charcoal tracking-tight">
                  <span className="text-amber-700">74,4</span> nghìn tỷ
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-golden-yellow/20 text-charcoal font-mono text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
                  <span>TĂNG GẦN 30% SO VỚI 2024</span>
                </div>
              </div>

              <p className="text-xs text-charcoal/75 leading-relaxed border-t border-charcoal/10 pt-3">
                Metric ghi nhận ngành làm đẹp là trụ cột tăng trưởng chính; doanh thu khử mùi tăng 8% trong quý III/2025.
              </p>
            </div>

            {/* Step 3: Global Fragrance Market */}
            <div
              ref={step3Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-rose/30 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose uppercase">
                  MỐC 03 · THỊ TRƯỜNG HƯƠNG THƠM TOÀN CẦU
                </span>
                <SourceBadge sourceId="S05" onOpenSource={onOpenSource} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-charcoal/50 uppercase">THỊ TRƯỜNG FRAGRANCE TOÀN CẦU</div>
                <div className="font-serif text-4xl sm:text-6xl font-bold text-charcoal tracking-tight">
                  58,9 → <span className="text-rose">89,4</span>
                </div>
                <div className="text-sm font-sans font-medium text-charcoal/70">
                  tỷ USD (2025 → 2033) · <strong className="text-rose font-mono">CAGR 5,5%</strong>
                </div>
              </div>

              <p className="text-xs text-charcoal/75 leading-relaxed border-t border-charcoal/10 pt-3">
                Grand View Research ghi nhận nhu cầu cá nhân hóa mùi hương và nước hoa tiện dụng tăng nhanh trên toàn cầu.
              </p>
            </div>

            {/* Step 4: Fragrance & Personal Care Vietnam */}
            <div
              ref={step4Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/40 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-botanical-green uppercase">
                  MỐC 04 · BÁN LẺ HƯƠNG THƠM VIỆT NAM
                </span>
                <SourceBadge sourceId="S06" onOpenSource={onOpenSource} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-charcoal/50 uppercase">DOANH SỐ BÁN LẺ FRAGRANCE TẠI VIỆT NAM</div>
                <div className="font-serif text-4xl sm:text-6xl font-bold text-botanical-green tracking-tight">
                  3,3 nghìn tỷ
                </div>
                <div className="text-xs font-mono text-charcoal/70">
                  VNĐ (2025) · Tăng 8% so với năm trước · Kantar ghi nhận chăm sóc cá nhân tăng +12%/năm (dẫn đầu FMCG).
                </div>
              </div>

              <div className="text-[11px] font-mono text-charcoal/60 border-t border-charcoal/10 pt-2 flex items-center justify-between">
                <span>Statista dự báo Mỹ phẩm VN: <strong>3 tỷ USD (2026)</strong></span>
                <SourceBadge sourceId="S03" onOpenSource={onOpenSource} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Conclusion Revealed by Scroll */}
        <div
          ref={conclusionRef}
          className="p-5 rounded-2xl bg-charcoal text-warm-ivory flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg z-10 opacity-0"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-golden-yellow shrink-0" />
            <div className="font-serif text-base sm:text-lg font-bold">
              “Thị trường đang mở rộng · Nhu cầu tạo hương đang tăng · Khoảng trống đang hình thành.”
            </div>
          </div>
          <span className="text-[11px] font-mono text-golden-yellow shrink-0">
            CƠ HỘI ĐỘC BẢN CHO COCOON
          </span>
        </div>
      </div>
    </div>
  );
};
