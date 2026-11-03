import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { segmentationQuadrants, personasData } from '../../data/personas';

gsap.registerPlugin(ScrollTrigger);

export const SegmentationMatrix: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const q1CardRef = useRef<HTMLDivElement>(null);
  const qCardsRestRef = useRef<HTMLDivElement>(null);
  const persona1Ref = useRef<HTMLDivElement>(null);
  const persona2Ref = useRef<HTMLDivElement>(null);

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

      // 0% - 25%: Matrix 4 quadrants fly into position
      tl.fromTo(matrixRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.25 }, 0);

      // 25% - 50%: Q1 zooms in, other quadrants fade into background
      tl.to(qCardsRestRef.current, { opacity: 0.2, scale: 0.9, duration: 0.2 }, 0.25);
      tl.to(q1CardRef.current, { scale: 1.08, borderColor: '#586B46', duration: 0.2 }, 0.25);

      // 45% - 75%: Persona 1 (Daily Users: 7-10M) slides in from right
      tl.fromTo(persona1Ref.current, { opacity: 0, x: 120 }, { opacity: 1, x: 0, duration: 0.25 }, 0.45);

      // 70% - 100%: Persona 1 shifts left, Persona 2 (Occasional Users: 5-8M) slides in
      tl.to(persona1Ref.current, { opacity: 0, x: -80, duration: 0.2 }, 0.7);
      tl.fromTo(persona2Ref.current, { opacity: 0, x: 120 }, { opacity: 1, x: 0, duration: 0.25 }, 0.75);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const p1 = personasData[0];
  const p2 = personasData[1];

  return (
    <div
      ref={containerRef}
      id="target"
      aria-label="Target Customer Segmentation Scroll Storytelling"
      className="relative min-h-[280vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 09 / 17 · TARGET CUSTOMER
          </span>
          <span className="text-xs text-charcoal/50 font-mono">
            Ma trận tự phân loại & Chân dung khách hàng tự kích hoạt
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1 max-w-4xl z-20">
          <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
            MA TRẬN PHÂN KHÚC 2×2
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            Tập trung đúng nhóm người dùng nòng cốt: Q1 & Q2
          </h2>
        </div>

        {/* Central Stage: 2x2 Matrix on Left, Persona Cards on Right */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
          {/* Left: 2x2 Matrix Grid */}
          <div ref={matrixRef} className="lg:col-span-6 space-y-3 opacity-0">
            <div className="text-xs font-mono text-charcoal/50 flex items-center justify-between px-1">
              <span>Trục dọc: Tần suất sử dụng hương</span>
              <span>Trục ngang: Ưu tiên thuần chay</span>
            </div>

            <div className="grid grid-cols-2 gap-3 relative">
              {/* Q1: Key Segment */}
              <div
                ref={q1CardRef}
                className="p-5 rounded-2xl bg-white border-2 border-botanical-green shadow-lg space-y-1 z-10 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-warm-ivory px-2 py-0.5 rounded bg-botanical-green">
                    Q1
                  </span>
                  <span className="text-[10px] font-mono font-bold text-botanical-green uppercase">
                    KEY SEGMENT
                  </span>
                </div>
                <div className="font-serif font-bold text-base text-charcoal">Daily Users</div>
                <p className="text-[11px] text-charcoal/70 leading-relaxed">
                  Dùng 5–6 ngày/tuần. Ưu tiên cao thuần chay và thành phần minh bạch.
                </p>
              </div>

              {/* Other Quadrants Container */}
              <div ref={qCardsRestRef} className="contents">
                {/* Q2 */}
                <div className="p-5 rounded-2xl bg-white/70 border border-botanical-green/20 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-charcoal/70 px-2 py-0.5 rounded bg-golden-yellow/20">
                      Q2
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 uppercase">SECONDARY</span>
                  </div>
                  <div className="font-serif font-bold text-base text-charcoal">Occasional Users</div>
                  <p className="text-[11px] text-charcoal/60 leading-relaxed">
                    Dùng 0–2 ngày/tuần. Chuộng sản phẩm mini size và mua theo dịp.
                  </p>
                </div>

                {/* Q4 */}
                <div className="p-4 rounded-2xl bg-white/50 border border-charcoal/10 text-xs space-y-1">
                  <span className="font-mono text-[10px] text-charcoal/50">Q4 · Fragrance Enthusiasts</span>
                  <div className="text-[11px] text-charcoal/60">Tần suất cao, chọn theo mùi hương đại trà.</div>
                </div>

                {/* Q3 */}
                <div className="p-4 rounded-2xl bg-white/50 border border-charcoal/10 text-xs space-y-1">
                  <span className="font-mono text-[10px] text-charcoal/50">Q3 · Conventional</span>
                  <div className="text-[11px] text-charcoal/60">Tần suất thấp, ít quan tâm thuần chay.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Persona Revealed Sequentially */}
          <div className="lg:col-span-6 relative min-h-[380px] flex items-center">
            {/* Persona 1: Daily Users (7-10M) */}
            <div
              ref={persona1Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/30 shadow-2xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-botanical-green text-warm-ivory font-mono text-xs font-bold uppercase">
                    PERSONA 1 · KEY SEGMENT (Q1)
                  </span>
                  <span className="font-serif font-bold text-lg text-botanical-green">
                    Thu nhập: {p1.income}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  {p1.segmentTitle}
                </h3>
                <div className="text-xs text-charcoal/60 font-mono mt-0.5">
                  {p1.age} · {p1.gender} · {p1.occupation} · {p1.location}
                </div>
              </div>

              <div className="space-y-2 text-xs text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                <div>• <strong>Hành vi:</strong> Xịt thơm 5–6 ngày/tuần trước khi đi làm, đi học.</div>
                <div>• <strong>Động lực:</strong> Muốn thơm tho tự tin, an toàn cho da nhạy cảm.</div>
                <div>• <strong>Rào cản:</strong> Lo body mist nhanh bay mùi, nồng cồn.</div>
              </div>

              <div className="pt-2 text-xs font-mono text-botanical-green font-bold">
                Mức độ phù hợp với Cocoon: {p1.fitScore}
              </div>
            </div>

            {/* Persona 2: Occasional Users (5-8M) */}
            <div
              ref={persona2Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-golden-yellow/40 shadow-2xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-golden-yellow text-charcoal font-mono text-xs font-bold uppercase">
                    PERSONA 2 · SECONDARY SEGMENT (Q2)
                  </span>
                  <span className="font-serif font-bold text-lg text-amber-700">
                    Thu nhập: {p2.income}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  {p2.segmentTitle}
                </h3>
                <div className="text-xs text-charcoal/60 font-mono mt-0.5">
                  {p2.age} · {p2.gender} · {p2.occupation} · {p2.location}
                </div>
              </div>

              <div className="space-y-2 text-xs text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                <div>• <strong>Hành vi:</strong> Dùng 0–2 ngày/tuần khi đi chơi, hẹn hò, tiệc tùng.</div>
                <div>• <strong>Động lực:</strong> Hào hứng với chai mini 75ml (129k) và bundle trải nghiệm.</div>
                <div>• <strong>Rào cản:</strong> Sợ mua chai lớn dùng không hết, nhạy cảm về giá.</div>
              </div>

              <div className="pt-2 text-xs font-mono text-amber-700 font-bold">
                Mức độ phù hợp với Cocoon: {p2.fitScore}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">*Phân định rõ 2 persona độc lập với mức thu nhập 7–10M và 5–8M theo tài liệu gốc</span>
          <span>Tiếp tục cuộn xuống để khám phá Customer Insight →</span>
        </div>
      </div>
    </div>
  );
};
