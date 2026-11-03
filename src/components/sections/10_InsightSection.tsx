import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const InsightSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const truthRef = useRef<HTMLDivElement>(null);
  const tensionRef = useRef<HTMLDivElement>(null);
  const motivationRef = useRef<HTMLDivElement>(null);
  const opportunityRef = useRef<HTMLDivElement>(null);

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

      // Step 1: TRUTH active at start
      // Step 2: TRUTH slides up, TENSION rises (0.2 - 0.45)
      tl.to(truthRef.current, { y: -80, opacity: 0, duration: 0.2 }, 0.2);
      tl.fromTo(tensionRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25 }, 0.25);

      // Step 3: TENSION splits, MOTIVATION rises (0.45 - 0.7)
      tl.to(tensionRef.current, { scale: 0.9, opacity: 0, duration: 0.2 }, 0.48);
      tl.fromTo(motivationRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25 }, 0.52);

      // Step 4: OPPORTUNITY & Grand Quote reveal (0.7 - 1.0)
      tl.to(motivationRef.current, { opacity: 0, y: -40, duration: 0.15 }, 0.72);
      tl.fromTo(opportunityRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.25 }, 0.76);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="insight"
      aria-label="Customer Insight 4 Steps Scroll Storytelling"
      className="relative min-h-[300vh] bg-[#1A1916] text-warm-ivory border-b border-botanical-green/20"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-warm-ivory/15 pb-3 z-20">
          <span className="font-mono text-xs text-golden-yellow font-semibold uppercase tracking-wider">
            CHƯƠNG 10 / 17 · INSIGHT & OPPORTUNITY
          </span>
          <span className="text-xs text-warm-ivory/50 font-mono">
            Mô hình 4 bước: Truth → Tension → Motivation → Opportunity
          </span>
        </div>

        {/* Dynamic Center Stage */}
        <div className="my-auto relative w-full max-w-5xl mx-auto min-h-[440px] flex items-center justify-center z-10">
          {/* Step 1: TRUTH */}
          <div
            ref={truthRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-botanical-green font-bold">
              BƯỚC 01 · SỰ THẬT HIỂN NHIÊN (TRUTH)
            </span>
            <h3 className="font-serif text-4xl sm:text-6xl font-bold text-warm-ivory max-w-3xl leading-tight">
              Hương thơm là nhu cầu tự tin mỗi ngày của người trẻ.
            </h3>
            <p className="text-sm sm:text-base text-warm-ivory/70 max-w-2xl font-light">
              Body mist là bước chăm sóc thiết yếu giúp làm mới làn da, mang lại cảm giác tươi mát, sạch sẽ suốt ngày dài làm việc năng động.
            </p>
          </div>

          {/* Step 2: TENSION */}
          <div
            ref={tensionRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 opacity-0"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose font-bold">
              BƯỚC 02 · MÂU THUẪN & TRĂN TRỞ (TENSION)
            </span>
            <h3 className="font-serif text-4xl sm:text-6xl font-bold text-warm-ivory max-w-3xl leading-tight">
              Mùi ngoại xa lạ,<br />
              lo ngại cồn gắt & nhanh bay mùi.
            </h3>
            <p className="text-sm sm:text-base text-warm-ivory/70 max-w-2xl font-light">
              Hầu hết body mist nhập khẩu chỉ mang lại phong cách tổng hợp phương Tây, thiếu gắn kết với thiên nhiên Việt Nam và triết lý sống xanh; khách hàng cũng e ngại mùi cồn nồng và khó thử mùi online.
            </p>
          </div>

          {/* Step 3: MOTIVATION */}
          <div
            ref={motivationRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 opacity-0"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-golden-yellow font-bold">
              BƯỚC 03 · ĐỘNG LỰC SÂU XA (MOTIVATION)
            </span>
            <h3 className="font-serif text-4xl sm:text-6xl font-bold text-warm-ivory max-w-3xl leading-tight">
              Khao khát một làn hương thuần khiết từ thực vật Việt.
            </h3>
            <p className="text-sm sm:text-base text-warm-ivory/70 max-w-2xl font-light">
              Mong muốn một dòng body mist 100% thuần chay, lành tính cho làn da, chiết xuất từ nông sản quen thuộc (sen, hoa hồng, bưởi, cà phê) với mức giá dễ tiếp cận để tự hào chăm sóc bản thân mỗi ngày.
            </p>
          </div>

          {/* Step 4: OPPORTUNITY & GRAND INSIGHT QUOTE */}
          <div
            ref={opportunityRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 opacity-0"
          >
            <div className="w-10 h-10 rounded-full bg-golden-yellow/20 text-golden-yellow flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-golden-yellow font-bold">
                BƯỚC 04 · CƠ HỘI ĐỘC TÔN (OPPORTUNITY)
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-warm-ivory leading-tight max-w-4xl">
                “Không chỉ muốn mang theo một mùi hương,<br />
                <span className="text-golden-yellow italic font-normal">
                  tôi muốn mang theo một phần thiên nhiên Việt
                </span><br />
                phù hợp với cách mình chăm sóc bản thân.”
              </h3>
            </div>

            <div className="p-3 px-6 rounded-full bg-botanical-green/30 border border-botanical-green/50 text-xs font-mono text-golden-yellow">
              COCOON VEGAN BODY MIST: CHĂM DA DỊU LÀNH · THƠM HƯƠNG BẢN SẮC
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-warm-ivory/50 border-t border-warm-ivory/15 pt-3 z-20">
          <span className="font-mono text-[11px]">Truth → Tension → Motivation → Opportunity</span>
          <span>Tiếp tục cuộn xuống để khám phá Big Idea “Mộc Hương Lành” →</span>
        </div>
      </div>
    </div>
  );
};
