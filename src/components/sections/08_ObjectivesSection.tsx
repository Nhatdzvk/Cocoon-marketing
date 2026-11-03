import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { DisclaimerBadge } from '../DisclaimerBadge';

gsap.registerPlugin(ScrollTrigger);

export const ObjectivesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const funnelSteps = [
    { code: 'AWARE', label: 'Nhận biết', desc: 'Gắn Cocoon với trải nghiệm “chăm da – thơm cơ thể” và dấu ấn thực vật Việt.' },
    { code: 'EXPERIENCE', label: 'Trải nghiệm', desc: 'Thử mùi hương 4 mùa qua tester, sampling miễn phí và mini size 75ml.' },
    { code: 'TRUST', label: 'Tin tưởng', desc: 'Củng cố niềm tin bằng công thức thuần chay 100%, Leaping Bunny & PETA.' },
    { code: 'TRIAL', label: 'Mua thử', desc: 'Kích thích dùng thử với giá ưu đãi ra mắt -15% và chính sách Try Before Opening.' },
    { code: 'ROUTINE', label: 'Thói quen', desc: 'Đưa sản phẩm vào routine chăm sóc cá nhân hằng ngày cùng combo Body Care.' },
    { code: 'REPURCHASE', label: 'Mua lại & Giới thiệu', desc: 'Tái mua định kỳ qua Hội Hóa Bướm và chương trình đổi vỏ Điểm Xanh.' },
  ];

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

      // Move track horizontally: from 0 to -65%
      tl.to(trackRef.current, { x: '-60%', ease: 'none', duration: 1 }, 0);
      tl.to(dotRef.current, { left: '95%', ease: 'none', duration: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="objectives"
      aria-label="Objectives & JTBD Journey Scroll Storytelling"
      className="relative min-h-[300vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 08 / 17 · OBJECTIVES & JTBD
          </span>
          <DisclaimerBadge type="proposal" text="Hành trình chuyển đổi đề xuất" />
        </div>

        {/* Section Title */}
        <div className="space-y-2 max-w-4xl z-20">
          <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
            HÀNH TRÌNH CHUYỂN HÓA MỤC TIÊU (CONVERSION JOURNEY)
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            AWARE → EXPERIENCE → TRUST → TRIAL → ROUTINE → REPURCHASE
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70">
            Cuộn chuột để di chuyển dọc theo 6 bước chuyển dịch tâm lý và hành vi từ tiếp cận ban đầu đến mua lại trung thành.
          </p>
        </div>

        {/* Glowing Timeline Line with Moving Dot */}
        <div className="relative w-full max-w-6xl mx-auto h-2 bg-charcoal/10 rounded-full my-2 z-20">
          <div className="absolute inset-y-0 left-0 bg-botanical-green rounded-full w-full opacity-30" />
          <div
            ref={dotRef}
            className="absolute top-1/2 -translate-y-1/2 left-[5%] w-5 h-5 rounded-full bg-golden-yellow border-2 border-white shadow-lg animate-pulse"
          />
        </div>

        {/* Horizontal Moving Funnel Track */}
        <div className="my-auto w-full overflow-hidden z-10 py-4">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 will-change-transform w-max px-4"
          >
            {funnelSteps.map((step, idx) => (
              <div
                key={step.code}
                className="w-[300px] sm:w-[360px] p-8 rounded-3xl bg-white border border-botanical-green/20 shadow-xl space-y-4 shrink-0 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-botanical-green px-2.5 py-0.5 rounded-full bg-botanical-light">
                      BƯỚC 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-charcoal/40">JTBD FLOW</span>
                  </div>
                  <h3 className="font-serif font-bold text-3xl text-charcoal tracking-tight">
                    {step.code}
                  </h3>
                  <div className="font-semibold text-sm text-golden-yellow">
                    {step.label}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">Hành trình 6 bước chuyển dịch · Tự động dịch chuyển theo scroll</span>
          <span>Tiếp tục cuộn xuống để xem Ma trận phân khúc khách hàng →</span>
        </div>
      </div>
    </div>
  );
};
