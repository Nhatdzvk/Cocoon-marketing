import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, Package, TrendingUp, Award, Sparkles, Info } from 'lucide-react';
import { quarterlyRoadmap, yearlyTargets } from '../../data/results';
import { DisclaimerBadge } from '../DisclaimerBadge';

gsap.registerPlugin(ScrollTrigger);

export const ResultsDashboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const kpiRowRef = useRef<HTMLDivElement>(null);
  const quartersRef = useRef<HTMLDivElement>(null);
  const disclaimerBoxRef = useRef<HTMLDivElement>(null);

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

      // 0% - 35%: 4 KPI cards stagger in from bottom
      const kpis = kpiRowRef.current?.children;
      if (kpis) {
        tl.fromTo(kpis, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.3 }, 0);
      }

      // 30% - 75%: 4 Quarterly cards stagger in sequentially
      const quarters = quartersRef.current?.children;
      if (quarters) {
        tl.fromTo(quarters, { opacity: 0, y: 60 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }, 0.25);
      }

      // 70% - 100%: Bottom disclaimer box and ambition reveal
      tl.fromTo(disclaimerBoxRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.25 }, 0.7);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="results"
      aria-label="Expected Results Scroll Animated Dashboard"
      className="relative min-h-[280vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 15 / 17 · EXPECTED RESULTS (DỰ BÁO KINH DOANH)
          </span>
          <DisclaimerBadge type="proposal" text="Mục tiêu dự kiến của đề xuất" />
        </div>

        {/* Section Intro */}
        <div className="space-y-1 max-w-4xl z-20">
          <div className="text-xs font-mono uppercase tracking-widest text-botanical-green font-semibold">
            DỰ BÁO 12 THÁNG ĐẦU TIÊN
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            Tiến độ sản lượng & Doanh thu tự hình thành theo tiến trình cuộn
          </h2>
        </div>

        {/* 4 Core KPI Cards */}
        <div ref={kpiRowRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 z-10">
          {/* Revenue */}
          <div className="p-5 rounded-2xl bg-white border border-botanical-green/20 shadow-md space-y-1 opacity-0">
            <span className="font-mono text-[10px] text-charcoal/50 uppercase block">DOANH THU 12 THÁNG</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-botanical-green">2 – 2,1 tỷ VNĐ</div>
            <div className="text-[11px] text-charcoal/60 leading-tight">Mục tiêu doanh thu năm đầu</div>
          </div>

          {/* Volume */}
          <div className="p-5 rounded-2xl bg-white border border-golden-yellow/30 shadow-md space-y-1 opacity-0">
            <span className="font-mono text-[10px] text-charcoal/50 uppercase block">SẢN LƯỢNG KỲ VỌNG</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">~7.000 chai</div>
            <div className="text-[11px] text-charcoal/60 leading-tight">Phân bổ đều qua 4 quý</div>
          </div>

          {/* Margin */}
          <div className="p-5 rounded-2xl bg-white border border-rose/30 shadow-md space-y-1 opacity-0">
            <span className="font-mono text-[10px] text-charcoal/50 uppercase block">BIÊN LỢI NHUẬN RÒNG</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-rose">Khoảng 20%</div>
            <div className="text-[11px] text-charcoal/60 leading-tight">Lợi nhuận ròng ~420 triệu VNĐ</div>
          </div>

          {/* Market Share */}
          <div className="p-5 rounded-2xl bg-white border border-charcoal/20 shadow-md space-y-1 opacity-0">
            <span className="font-mono text-[10px] text-charcoal/50 uppercase block">MỤC TIÊU THỊ PHẦN</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-golden-yellow">10%</div>
            <div className="text-[10px] text-amber-800 leading-tight italic">*Mục tiêu tham vọng đề xuất</div>
          </div>
        </div>

        {/* 4 Quarterly Roadmap Cards */}
        <div ref={quartersRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-10">
          {quarterlyRoadmap.map((item, idx) => (
            <div
              key={item.quarter}
              className="p-5 rounded-2xl bg-white/90 border border-botanical-green/15 shadow-sm space-y-2 opacity-0 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-botanical-green">0{idx + 1} · {item.quarter}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal/5 text-charcoal/60">{item.months}</span>
                </div>
                <div className="font-serif font-bold text-lg text-charcoal">{item.revenueLabel}</div>
                <div className="text-xs font-mono text-golden-yellow font-semibold">{item.volumeLabel}</div>
              </div>
              <p className="text-[11px] text-charcoal/70 border-t border-charcoal/10 pt-2 leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div
          ref={disclaimerBoxRef}
          className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5 z-20 opacity-0"
        >
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span className="text-[11px] leading-relaxed">
            <strong>Ghi chú kế hoạch:</strong> Tất cả kết quả là mục tiêu dự kiến của đề xuất kế hoạch, không phải kết quả kinh doanh đã đạt được. Mục tiêu 10% thị phần cần xác định baseline trước khi phê duyệt.
          </span>
        </div>
      </div>
    </div>
  );
};
