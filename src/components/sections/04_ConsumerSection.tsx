import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SourceBadge } from '../SourceBadge';

gsap.registerPlugin(ScrollTrigger);

interface ConsumerSectionProps {
  onOpenSource: (id: string) => void;
}

export const ConsumerSection: React.FC<ConsumerSectionProps> = ({ onOpenSource }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const kw1Ref = useRef<HTMLDivElement>(null);
  const kw2Ref = useRef<HTMLDivElement>(null);
  const kw3Ref = useRef<HTMLDivElement>(null);
  const kw4Ref = useRef<HTMLDivElement>(null);
  const convergenceRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=220%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0% - 25%: INGREDIENTS rises from bottom, then softens
      tl.fromTo(kw1Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.2 }, 0);
      tl.to(kw1Ref.current, { opacity: 0.15, scale: 0.95, duration: 0.15 }, 0.22);

      // 25% - 50%: VEGAN rises from bottom
      tl.fromTo(kw2Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.2 }, 0.25);
      tl.to(kw2Ref.current, { opacity: 0.15, scale: 0.95, duration: 0.15 }, 0.47);

      // 50% - 75%: TRANSPARENCY rises from bottom
      tl.fromTo(kw3Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.2 }, 0.5);
      tl.to(kw3Ref.current, { opacity: 0.15, scale: 0.95, duration: 0.15 }, 0.72);

      // 70% - 90%: LOCAL rises from bottom
      tl.fromTo(kw4Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.2 }, 0.72);
      tl.to(kw4Ref.current, { opacity: 0.15, scale: 0.95, duration: 0.1 }, 0.88);

      // 85% - 100%: Convergence equation & Grand Quote
      tl.fromTo(
        convergenceRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.2 },
        0.85
      );
      tl.fromTo(
        quoteRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.15 },
        0.9
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="consumer"
      aria-label="Consumer Shift Typography Scroll Storytelling"
      className="relative min-h-[280vh] bg-charcoal text-warm-ivory border-b border-botanical-green/20"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-warm-ivory/15 pb-3 z-20">
          <span className="font-mono text-xs text-golden-yellow font-semibold uppercase tracking-wider">
            CHƯƠNG 04 / 17 · CONSUMER SHIFT
          </span>
          <span className="text-xs text-warm-ivory/50 font-mono">
            Chuyển dịch hành vi tiêu dùng thế hệ mới
          </span>
        </div>

        {/* Central Kinetic Keywords Stage */}
        <div className="my-auto relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[460px] z-10">
          {/* Keyword 1: INGREDIENTS */}
          <div
            ref={kw1Ref}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none opacity-0"
          >
            <div className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-warm-ivory/30 uppercase">
              INGREDIENTS
            </div>
            <div className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 backdrop-blur-md max-w-sm pointer-events-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-bold text-golden-yellow">72%</span>
                <SourceBadge sourceId="S07" onOpenSource={onOpenSource} />
              </div>
              <h4 className="font-serif font-bold text-base text-warm-ivory">Đọc kỹ bảng thành phần</h4>
              <p className="text-xs text-warm-ivory/70 leading-relaxed">
                Người tiêu dùng Việt soi xét từng chiết xuất trước khi mua (Q&Me 2024). 48% ưu tiên công thức sạch, tối giản (Mintel 2024).
              </p>
            </div>
          </div>

          {/* Keyword 2: VEGAN */}
          <div
            ref={kw2Ref}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none opacity-0"
          >
            <div className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-golden-yellow/30 uppercase">
              VEGAN
            </div>
            <div className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 backdrop-blur-md max-w-sm pointer-events-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-bold text-golden-yellow">52,1%</span>
                <SourceBadge sourceId="S09" onOpenSource={onOpenSource} />
              </div>
              <h4 className="font-serif font-bold text-base text-warm-ivory">Tìm kiếm nhãn “Tự nhiên”</h4>
              <p className="text-xs text-warm-ivory/70 leading-relaxed">
                41,4% Gen Z tìm kiếm sản phẩm không độc hại; trực tiếp thúc đẩy sự ưu tiên đối với mỹ phẩm thuần chay (Misaeshop 2024).
              </p>
            </div>
          </div>

          {/* Keyword 3: TRANSPARENCY */}
          <div
            ref={kw3Ref}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none opacity-0"
          >
            <div className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-botanical-green/40 uppercase">
              TRANSPARENCY
            </div>
            <div className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 backdrop-blur-md max-w-sm pointer-events-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-bold text-golden-yellow">65%</span>
                <SourceBadge sourceId="S08" onOpenSource={onOpenSource} />
              </div>
              <h4 className="font-serif font-bold text-base text-warm-ivory">Minh bạch & Có pháp lý rõ ràng</h4>
              <p className="text-xs text-warm-ivory/70 leading-relaxed">
                Gen Z chỉ chọn thương hiệu có chứng chỉ kiểm định rõ ràng; 56% ưu tiên sản phẩm dành riêng cho da nhạy cảm (Mintel 2024).
              </p>
            </div>
          </div>

          {/* Keyword 4: LOCAL */}
          <div
            ref={kw4Ref}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none opacity-0"
          >
            <div className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-rose/30 uppercase">
              LOCAL
            </div>
            <div className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 backdrop-blur-md max-w-sm pointer-events-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-bold text-golden-yellow">85%</span>
                <SourceBadge sourceId="S13" onOpenSource={onOpenSource} />
              </div>
              <h4 className="font-serif font-bold text-base text-warm-ivory">Ủng hộ Vocal for Local</h4>
              <p className="text-xs text-warm-ivory/70 leading-relaxed">
                Người tiêu dùng Việt ưu tiên nguyên liệu bản địa quen thuộc và câu chuyện văn hóa chân thực (NIQ 2025). 62% tin tưởng thương hiệu nội địa (Q&Me).
              </p>
            </div>
          </div>

          {/* Convergence Centerstage */}
          <div
            ref={convergenceRef}
            className="absolute z-20 text-center space-y-4 max-w-3xl opacity-0 pointer-events-none"
          >
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-golden-yellow font-semibold">
              CÔNG THỨC NIỀM TIN HỘI TỤ
            </div>
            <div className="font-serif text-3xl sm:text-5xl font-bold text-warm-ivory leading-tight">
              THUẦN CHAY <span className="text-golden-yellow">×</span> THỰC VẬT VIỆT <span className="text-golden-yellow">×</span> MINH BẠCH
            </div>
          </div>
        </div>

        {/* Grand Takeaway Quote */}
        <div
          ref={quoteRef}
          className="p-6 rounded-2xl bg-warm-ivory/10 border border-warm-ivory/15 text-center space-y-2 max-w-3xl mx-auto w-full z-20 opacity-0"
        >
          <p className="font-serif text-xl sm:text-2xl font-bold text-golden-yellow leading-relaxed italic">
            “Người tiêu dùng không chỉ muốn thơm.<br />
            Họ muốn biết mình đang đưa điều gì lên cơ thể.”
          </p>
          <div className="text-[11px] font-mono text-warm-ivory/50 uppercase tracking-widest">
            KEY TAKEAWAY · ĐỘNG LỰC DẪN DẮT QUYẾT ĐỊNH MUA CỦA GEN Z
          </div>
        </div>
      </div>
    </div>
  );
};
