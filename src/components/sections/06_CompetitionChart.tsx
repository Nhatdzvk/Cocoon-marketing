import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { competitorsData } from '../../data/competitors';
import { ShieldCheck, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CompetitionChartProps {
  onOpenSource: (id: string) => void;
}

export const CompetitionChart: React.FC<CompetitionChartProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const xAxisRef = useRef<HTMLDivElement>(null);
  const yAxisRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);
  const cocoonNodeRef = useRef<HTMLDivElement>(null);
  const sweetSpotRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);

  // Coordinates calculation: X (Price 1-5), Y (Vegan 1-5) -> % position
  const getCoords = (x: number, y: number) => {
    const left = ((x - 1.0) / 4.0) * 80 + 10; // 10% to 90%
    const bottom = ((y - 1.0) / 4.0) * 80 + 10; // 10% to 90%
    return { left: `${left}%`, bottom: `${bottom}%` };
  };

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

      // 0% - 25%: Axes draw out
      tl.fromTo(xAxisRef.current, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.25 }, 0);
      tl.fromTo(yAxisRef.current, { scaleY: 0, transformOrigin: 'bottom center' }, { scaleY: 1, duration: 0.25 }, 0.05);

      // 20% - 60%: Competitor brand nodes pop in one by one
      const nodes = nodesRef.current?.children;
      if (nodes) {
        tl.fromTo(
          nodes,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, stagger: 0.08, duration: 0.3 },
          0.2
        );
      }

      // 50% - 75%: Cocoon pops in with glowing ripple
      tl.fromTo(
        cocoonNodeRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1.15, duration: 0.25 },
        0.5
      );

      // 65% - 90%: Competitor nodes fade slightly, sweetspot area expands
      if (nodes) {
        tl.to(nodes, { opacity: 0.4, scale: 0.9, duration: 0.2 }, 0.65);
      }
      tl.fromTo(
        sweetSpotRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.25 },
        0.65
      );

      // 80% - 100%: Conclusion slides up
      tl.fromTo(
        conclusionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.2 },
        0.8
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="competition"
      aria-label="Competitive Landscape Scatter Plot Scroll Storytelling"
      className="relative min-h-[250vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 06 / 17 · COMPETITIVE LANDSCAPE
          </span>
          <span className="text-xs text-charcoal/50 font-mono">
            Biểu đồ phân tán tự hình thành theo tiến trình cuộn
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1 max-w-4xl mx-auto text-center z-10">
          <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
            MA TRẬN ĐỊNH VỊ GIÁ & CAM KẾT VEGAN
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            Khoảng trống chiến lược: Cam kết thuần chay cao & Giá dễ tiếp cận
          </h2>
        </div>

        {/* Central Scatter Plot Canvas */}
        <div className="my-auto relative w-full max-w-4xl h-[360px] sm:h-[420px] mx-auto bg-white/90 rounded-3xl border border-botanical-green/20 p-6 shadow-xl overflow-hidden z-10">
          {/* Sweet Spot Highlight Overlay */}
          <div
            ref={sweetSpotRef}
            className="absolute left-0 bottom-1/2 w-1/2 h-1/2 bg-botanical-green/10 border-r border-t border-dashed border-botanical-green/40 p-3 pointer-events-none opacity-0"
          >
            <span className="text-[10px] font-mono font-bold text-botanical-green uppercase bg-white/90 px-2 py-0.5 rounded shadow-xs">
              ★ VÙNG CƠ HỘI ĐỘC TÔN CHO COCOON
            </span>
          </div>

          {/* X Axis */}
          <div
            ref={xAxisRef}
            className="absolute left-8 right-8 bottom-10 h-0.5 bg-charcoal/20 flex items-center justify-between text-[10px] font-mono text-charcoal/50 px-2"
          >
            <span>GIÁ THẤP (1.0)</span>
            <span className="font-bold text-charcoal">MỨC GIÁ THAM CHIẾU (TRỤC X) →</span>
            <span>GIÁ CAO (5.0)</span>
          </div>

          {/* Y Axis */}
          <div
            ref={yAxisRef}
            className="absolute left-10 top-8 bottom-10 w-0.5 bg-botanical-green/30 flex flex-col items-center justify-between text-[10px] font-mono text-botanical-green py-2"
          >
            <span className="font-bold">VEGAN CAO (5.0)</span>
            <span className="[writing-mode:vertical-lr] rotate-180 font-bold">CAM KẾT VEGAN & CRUELTY-FREE (TRỤC Y)</span>
            <span>VEGAN THẤP (1.0)</span>
          </div>

          {/* Competitor Nodes Container */}
          <div ref={nodesRef} className="absolute inset-0 pointer-events-none">
            {competitorsData.filter((c) => !c.isCocoon).map((c) => {
              const pos = getCoords(c.xScore, c.yScore);
              return (
                <div
                  key={c.id}
                  style={{ left: pos.left, bottom: pos.bottom }}
                  className="absolute -translate-x-1/2 translate-y-1/2 flex flex-col items-center pointer-events-auto group"
                >
                  <div className="w-8 h-8 rounded-full bg-charcoal/10 border border-charcoal/30 flex items-center justify-center font-serif text-xs font-bold text-charcoal shadow-xs group-hover:scale-110 transition-transform">
                    {c.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="mt-1 px-1.5 py-0.5 rounded bg-white/90 text-[10px] font-sans font-semibold text-charcoal/70 shadow-xs whitespace-nowrap border border-charcoal/10">
                    {c.name} ({c.xScore}, {c.yScore})
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cocoon Hero Node */}
          {(() => {
            const cocoon = competitorsData.find((c) => c.isCocoon) || competitorsData[0];
            const pos = getCoords(cocoon.xScore, cocoon.yScore);
            return (
              <div
                ref={cocoonNodeRef}
                style={{ left: pos.left, bottom: pos.bottom }}
                className="absolute -translate-x-1/2 translate-y-1/2 flex flex-col items-center z-30 opacity-0"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-botanical-green text-warm-ivory border-2 border-golden-yellow flex items-center justify-center font-serif text-sm font-bold shadow-xl animate-pulse">
                    COC
                  </div>
                  <div className="absolute -inset-1 rounded-full border-2 border-botanical-green/40 animate-ping pointer-events-none" />
                </div>
                <div className="mt-1 px-2.5 py-1 rounded-full bg-botanical-green text-warm-ivory font-serif text-xs font-bold shadow-md whitespace-nowrap">
                  ★ COCOON (2.5, 5.0)
                </div>
              </div>
            );
          })()}
        </div>

        {/* Conclusion Bar Revealed by Scroll */}
        <div
          ref={conclusionRef}
          className="p-5 rounded-2xl bg-charcoal text-warm-ivory flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl z-20 opacity-0 max-w-4xl mx-auto w-full"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-golden-yellow shrink-0" />
            <div className="font-serif text-sm sm:text-base font-bold">
              “Cocoon sở hữu lợi thế hiếm có: Cam kết thuần chay mạnh với mức giá dễ tiếp cận.”
            </div>
          </div>
          <span className="text-[10px] font-mono text-golden-yellow shrink-0">
            KHOẢNG TRỐNG MỞ RỘNG FRAGRANCE
          </span>
        </div>
      </div>
    </div>
  );
};
