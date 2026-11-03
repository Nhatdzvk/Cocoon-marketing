import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExecutiveOverviewProps {
  onOpenSource: (id: string) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0% - 30%: Marquee stream scrolls horizontally
      tl.fromTo(
        marqueeRef.current,
        { x: '15%' },
        { x: '-15%', ease: 'none', duration: 0.3 },
        0
      );

      // 20% - 60%: 3 Pillars stagger in from below
      const cards = pillarsRef.current?.children;
      if (cards) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: 'none', duration: 0.35 },
          0.2
        );
      }

      // 50% - 90%: Transformation before/after fades in and shifts
      tl.fromTo(
        transformRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: 'none', duration: 0.35 },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="overview"
      aria-label="Executive Overview Scroll Storytelling"
      className="relative min-h-[240vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden"
      >
        {/* Top Eyebrow */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 02 / 17 · EXECUTIVE OVERVIEW
          </span>
          <span className="text-xs text-charcoal/50 font-mono">
            Hành trình chiến lược định vị thương hiệu
          </span>
        </div>

        {/* Big Editorial Statement */}
        <div className="my-auto space-y-6 max-w-6xl mx-auto w-full">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
              TẦM NHÌN CHIẾN LƯỢC
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-charcoal">
              “Từ thế mạnh chăm sóc cơ thể thuần chay<br />
              đến trải nghiệm hương thơm mang bản sắc Việt.”
            </h2>
          </div>

          {/* Marquee Kinetic Stream with scroll scrub */}
          <div className="py-4 border-y border-botanical-green/20 overflow-hidden bg-botanical-green/5 rounded-2xl">
            <div
              ref={marqueeRef}
              className="flex items-center gap-12 text-center font-serif text-2xl sm:text-4xl font-bold text-botanical-green whitespace-nowrap will-change-transform"
            >
              <span>CHĂM DA</span>
              <span className="text-golden-yellow font-sans">→</span>
              <span>THƠM CƠ THỂ</span>
              <span className="text-golden-yellow font-sans">→</span>
              <span>SỐNG XANH</span>
              <span className="text-golden-yellow font-sans">→</span>
              <span>CHĂM DA</span>
              <span className="text-golden-yellow font-sans">→</span>
              <span>THƠM CƠ THỂ</span>
              <span className="text-golden-yellow font-sans">→</span>
              <span>SỐNG XANH</span>
            </div>
          </div>

          {/* 3 Strategic Pillars Revealed by Scroll */}
          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white/80 border border-botanical-green/20 shadow-xs space-y-2">
              <div className="font-mono text-xs font-bold text-botanical-green uppercase">
                01 · CONTINUITY (KẾ THỪA)
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Hệ sinh thái Body Care
              </h3>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Nối dài routine chăm sóc sẵn có: Sữa tắm → Tẩy da chết cà phê → Bơ dưỡng thể → Body Mist, tối ưu hiệu quả lưu hương tự nhiên.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white/80 border border-golden-yellow/30 shadow-xs space-y-2">
              <div className="font-mono text-xs font-bold text-amber-700 uppercase">
                02 · AUTHENTICITY (BẢN SẮC)
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Thực vật & Nông sản Việt
              </h3>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Nguồn cảm hứng từ 4 vùng đất đặc trưng: Vườn hồng Cao Bằng, Đầm sen Hậu Giang, Bưởi non và Cà phê Đắk Lắk.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white/80 border border-rose/30 shadow-xs space-y-2">
              <div className="font-mono text-xs font-bold text-rose uppercase">
                03 · CREDIBILITY (NIỀM TIN)
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                100% Thuần chay Quốc tế
              </h3>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Bảo chứng bởi The Vegan Society, Leaping Bunny và PETA. Không cồn gắt, an toàn dịu lành cho làn da nhạy cảm.
              </p>
            </div>
          </div>

          {/* Transformation Banner (Before vs After) */}
          <div
            ref={transformRef}
            className="p-5 rounded-2xl bg-charcoal text-warm-ivory flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
          >
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-golden-yellow uppercase tracking-widest font-semibold">
                CHUYỂN DỊCH TÂM LÝ KHÁCH HÀNG
              </div>
              <div className="text-sm text-warm-ivory/80 italic">
                Trước: “Mua body mist nhập khẩu nồng gắt, thiếu kết nối nông sản Việt.”
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-golden-yellow shrink-0 hidden md:block" />
            <div className="space-y-1 md:text-right">
              <div className="text-[10px] font-mono text-botanical-green uppercase tracking-widest font-semibold">
                MỤC TIÊU ĐẠT ĐƯỢC
              </div>
              <div className="text-sm font-semibold text-warm-ivory">
                Sau: “Tự hào khoác lên làn hương sương thuần chay từ cỏ cây quê hương.”
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3">
          <span className="font-mono text-[11px]">Continuity · Authenticity · Credibility</span>
          <span>Tiếp tục cuộn xuống để xem dữ liệu thị trường →</span>
        </div>
      </div>
    </div>
  );
};
