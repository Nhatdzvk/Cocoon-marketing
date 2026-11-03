import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { risksData } from '../../data/risks';
import { DisclaimerBadge } from '../DisclaimerBadge';
import { BellRing, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const RiskMatrix: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scannerLineRef = useRef<HTMLDivElement>(null);
  const r1Ref = useRef<HTMLDivElement>(null);
  const r2Ref = useRef<HTMLDivElement>(null);
  const r3Ref = useRef<HTMLDivElement>(null);

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

      // Scanner Line moves horizontally across 3 risks
      tl.to(scannerLineRef.current, { left: '85%', ease: 'none', duration: 1 }, 0);

      // Risk 1 (Inventory) active (0% - 35%)
      tl.fromTo(r1Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.2 }, 0.05);
      tl.to(r1Ref.current, { opacity: 0.2, scale: 0.95, duration: 0.15 }, 0.32);

      // Risk 2 (Acceptance) active (35% - 70%)
      tl.fromTo(r2Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.2 }, 0.35);
      tl.to(r2Ref.current, { opacity: 0.2, scale: 0.95, duration: 0.15 }, 0.65);

      // Risk 3 (Marketing Cost) active (70% - 100%)
      tl.fromTo(r3Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.2 }, 0.68);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const r1 = risksData[0];
  const r2 = risksData[1];
  const r3 = risksData[2];

  return (
    <div
      ref={containerRef}
      id="risks"
      aria-label="Risk Management Radar Scroll Storytelling"
      className="relative min-h-[280vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 16 / 17 · RISK MANAGEMENT (QUẢN TRỊ RỦI RO)
          </span>
          <DisclaimerBadge type="hypothesis" text="Đánh giá đề xuất" />
        </div>

        {/* Title & Radar Scanner Bar */}
        <div className="space-y-3 max-w-4xl z-20">
          <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
            ĐƯỜNG QUÉT RỦI RO (RADAR SCAN)
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            Dự báo rủi ro & Phương án giảm thiểu kích hoạt theo scroll
          </h2>
          <div className="relative w-full h-1.5 bg-charcoal/10 rounded-full overflow-hidden">
            <div
              ref={scannerLineRef}
              className="absolute top-0 bottom-0 left-[15%] w-24 bg-golden-yellow rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Dynamic Center Stage for 3 Risks */}
        <div className="my-auto relative w-full max-w-5xl mx-auto min-h-[420px] flex items-center justify-center z-10">
          {/* Risk 1 */}
          <div
            ref={r1Ref}
            className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/30 shadow-2xl space-y-4 flex flex-col justify-between opacity-0"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-botanical-green uppercase">
                  RỦI RO 01 · {r1.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-charcoal/5 font-mono text-xs font-semibold">
                  Xác suất: {r1.probability} · Tác động: {r1.impact}
                </span>
              </div>
              <p className="text-sm text-charcoal/80 mt-2">{r1.riskDescription}</p>
            </div>

            <div className="p-4 rounded-2xl bg-warm-ivory/60 space-y-2 border border-charcoal/5">
              <div className="font-mono text-[10px] text-botanical-green font-bold uppercase">PHƯƠNG ÁN GIẢM THIỂU:</div>
              <ul className="text-xs text-charcoal/80 space-y-1">
                {r1.mitigation.map((m, i) => (
                  <li key={i}>✓ {m}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 text-xs text-amber-900 font-mono">
              <strong>Cảnh báo sớm:</strong> {r1.earlyWarningIndicator}
            </div>
          </div>

          {/* Risk 2 */}
          <div
            ref={r2Ref}
            className="absolute inset-0 p-8 rounded-3xl bg-white border border-golden-yellow/40 shadow-2xl space-y-4 flex flex-col justify-between opacity-0"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  RỦI RO 02 · {r2.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-golden-yellow/20 font-mono text-xs font-semibold text-charcoal">
                  Xác suất: {r2.probability} · Tác động: {r2.impact}
                </span>
              </div>
              <p className="text-sm text-charcoal/80 mt-2">{r2.riskDescription}</p>
            </div>

            <div className="p-4 rounded-2xl bg-warm-ivory/60 space-y-2 border border-charcoal/5">
              <div className="font-mono text-[10px] text-amber-700 font-bold uppercase">PHƯƠNG ÁN GIẢM THIỂU:</div>
              <ul className="text-xs text-charcoal/80 space-y-1">
                {r2.mitigation.map((m, i) => (
                  <li key={i}>✓ {m}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 text-xs text-amber-900 font-mono">
              <strong>Cảnh báo sớm:</strong> {r2.earlyWarningIndicator}
            </div>
          </div>

          {/* Risk 3 */}
          <div
            ref={r3Ref}
            className="absolute inset-0 p-8 rounded-3xl bg-white border border-rose/30 shadow-2xl space-y-4 flex flex-col justify-between opacity-0"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose uppercase">
                  RỦI RO 03 · {r3.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose/10 font-mono text-xs font-semibold text-rose">
                  Xác suất: {r3.probability} · Tác động: {r3.impact}
                </span>
              </div>
              <p className="text-sm text-charcoal/80 mt-2">{r3.riskDescription}</p>
            </div>

            <div className="p-4 rounded-2xl bg-warm-ivory/60 space-y-2 border border-charcoal/5">
              <div className="font-mono text-[10px] text-rose font-bold uppercase">PHƯƠNG ÁN GIẢM THIỂU:</div>
              <ul className="text-xs text-charcoal/80 space-y-1">
                {r3.mitigation.map((m, i) => (
                  <li key={i}>✓ {m}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 text-xs text-amber-900 font-mono">
              <strong>Cảnh báo sớm:</strong> {r3.earlyWarningIndicator}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">Rủi ro 01 → Rủi ro 02 → Rủi ro 03 quét tự động theo scroll</span>
          <span>Tiếp tục cuộn xuống để xem Phần Kết & Tầm nhìn →</span>
        </div>
      </div>
    </div>
  );
};
