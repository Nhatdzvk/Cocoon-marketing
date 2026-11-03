import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DisclaimerBadge } from '../DisclaimerBadge';

gsap.registerPlugin(ScrollTrigger);

export const IMCTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const p1ContentRef = useRef<HTMLDivElement>(null);
  const p2ContentRef = useRef<HTMLDivElement>(null);
  const p3ContentRef = useRef<HTMLDivElement>(null);
  const grandSummaryRef = useRef<HTMLDivElement>(null);
  const phase1BadgeRef = useRef<HTMLDivElement>(null);
  const phase2BadgeRef = useRef<HTMLDivElement>(null);
  const phase3BadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Timeline Progress Line stretches from top to bottom
      tl.to(lineProgressRef.current, { scaleY: 1, ease: 'none', duration: 1 }, 0);

      // Phase 1 (0% - 30%): AWARE active
      tl.fromTo(phase1BadgeRef.current, { opacity: 0.3, scale: 0.9 }, { opacity: 1, scale: 1.15, duration: 0.1 }, 0);
      tl.fromTo(p1ContentRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.2 }, 0.05);

      // Transition 1 -> 2 (30% - 60%): P1 fades out and moves up, P2 (EXPERIENCE) enters
      tl.to(p1ContentRef.current, { opacity: 0, y: -60, duration: 0.15 }, 0.28);
      tl.to(phase1BadgeRef.current, { opacity: 0.4, scale: 1, duration: 0.1 }, 0.3);

      tl.fromTo(phase2BadgeRef.current, { opacity: 0.3, scale: 0.9 }, { opacity: 1, scale: 1.15, duration: 0.1 }, 0.35);
      tl.fromTo(p2ContentRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.2 }, 0.38);

      // Transition 2 -> 3 (60% - 85%): P2 fades out, P3 (SUSTAIN) enters
      tl.to(p2ContentRef.current, { opacity: 0, y: -60, duration: 0.15 }, 0.62);
      tl.to(phase2BadgeRef.current, { opacity: 0.4, scale: 1, duration: 0.1 }, 0.65);

      tl.fromTo(phase3BadgeRef.current, { opacity: 0.3, scale: 0.9 }, { opacity: 1, scale: 1.15, duration: 0.1 }, 0.68);
      tl.fromTo(p3ContentRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.2 }, 0.72);

      // Finale (85% - 100%): All 3 highlight and grand summary appears
      tl.to(p3ContentRef.current, { opacity: 0, scale: 0.95, duration: 0.1 }, 0.88);
      tl.to([phase1BadgeRef.current, phase2BadgeRef.current, phase3BadgeRef.current], { opacity: 1, scale: 1.05, duration: 0.1 }, 0.9);
      tl.fromTo(grandSummaryRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.15 }, 0.9);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="imc"
      aria-label="IMC Journey Continuous Scroll Storytelling"
      className="relative min-h-[400vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 14 / 17 · IMC JOURNEY (LỘ TRÌNH TRUYỀN THÔNG TÍCH HỢP)
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-charcoal/50 font-mono hidden sm:inline">
              Cuộn chuột để timeline tự vẽ và chuyển tiếp 3 Phase
            </span>
            <DisclaimerBadge type="proposal" text="Khung chỉ số đề xuất" />
          </div>
        </div>

        {/* Central Stage: Left Timeline Indicator vs Right Dynamic Phase Content */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
          {/* Left: Vertical Timeline Axis with 3 Phase Nodes */}
          <div className="lg:col-span-4 relative flex flex-col justify-between h-[360px] sm:h-[420px] p-4">
            {/* Background Line */}
            <div className="absolute left-8 top-6 bottom-6 w-1 bg-charcoal/10 rounded-full" />
            {/* Active Scrub Line */}
            <div
              ref={lineProgressRef}
              className="absolute left-8 top-6 bottom-6 w-1 bg-botanical-green origin-top scale-y-0 rounded-full shadow-sm"
            />

            {/* Node 1: AWARE */}
            <div
              ref={phase1BadgeRef}
              className="relative z-10 flex items-center gap-4 transition-transform opacity-30"
            >
              <div className="w-12 h-12 rounded-full bg-botanical-green text-warm-ivory flex items-center justify-center font-serif font-bold text-lg shadow-md border-2 border-white">
                01
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-botanical-green uppercase">PHASE 1 (T1–3)</div>
                <div className="font-serif font-bold text-lg text-charcoal">AWARE</div>
                <div className="text-[11px] text-charcoal/60">Đánh thức nhận biết</div>
              </div>
            </div>

            {/* Node 2: EXPERIENCE */}
            <div
              ref={phase2BadgeRef}
              className="relative z-10 flex items-center gap-4 transition-transform opacity-30"
            >
              <div className="w-12 h-12 rounded-full bg-golden-yellow text-charcoal flex items-center justify-center font-serif font-bold text-lg shadow-md border-2 border-white">
                02
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-amber-700 uppercase">PHASE 2 (T4–6)</div>
                <div className="font-serif font-bold text-lg text-charcoal">EXPERIENCE</div>
                <div className="text-[11px] text-charcoal/60">Trải nghiệm & Thử mùi</div>
              </div>
            </div>

            {/* Node 3: SUSTAIN */}
            <div
              ref={phase3BadgeRef}
              className="relative z-10 flex items-center gap-4 transition-transform opacity-30"
            >
              <div className="w-12 h-12 rounded-full bg-rose text-warm-ivory flex items-center justify-center font-serif font-bold text-lg shadow-md border-2 border-white">
                03
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-rose uppercase">PHASE 3 (T7–12)</div>
                <div className="font-serif font-bold text-lg text-charcoal">SUSTAIN</div>
                <div className="text-[11px] text-charcoal/60">Gắn kết & Mua lại</div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Stage Container for Current Active Phase */}
          <div className="lg:col-span-8 relative min-h-[440px] flex items-center">
            {/* Content Phase 1: AWARE */}
            <div
              ref={p1ContentRef}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/30 shadow-2xl space-y-4 flex flex-col justify-between opacity-0 pointer-events-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-botanical-green uppercase">
                    PHASE 1 · THÁNG 1–3
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-botanical-light text-botanical-green font-mono text-xs font-bold">
                    KHỞI ĐỘNG BST
                  </span>
                </div>
                <h3 className="font-serif font-bold text-3xl text-charcoal mt-2">
                  AWARE: Đánh Thức Nhận Biết
                </h3>
                <p className="font-serif text-sm italic text-golden-yellow mt-1">
                  “Khẽ chạm làn sương, thơm hương lành mãi”
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                <div>
                  <strong>Mục tiêu:</strong> Giới thiệu Cocoon chính thức bước vào ngành hàng tạo hương cá nhân thuần chay.
                </div>
                <div>
                  <strong>Hoạt động:</strong> Digital Video/TVC 4 mùa nông sản, Banner phủ sóng, TikTok Challenge #MocHuongLanh cùng KOL/KOC, PR báo chí.
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">TikTok</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Instagram</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Facebook</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Digital Video</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-charcoal/5 text-xs text-charcoal/70 font-mono">
                <strong>Chỉ số theo dõi:</strong> Reach, Video Views, Engagement Rate, Share of Voice (SOV).
              </div>
            </div>

            {/* Content Phase 2: EXPERIENCE */}
            <div
              ref={p2ContentRef}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-golden-yellow/40 shadow-2xl space-y-4 flex flex-col justify-between opacity-0 pointer-events-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                    PHASE 2 · THÁNG 4–6
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-golden-yellow/20 text-charcoal font-mono text-xs font-bold">
                    MÙA HÈ CAO ĐIỂM
                  </span>
                </div>
                <h3 className="font-serif font-bold text-3xl text-charcoal mt-2">
                  EXPERIENCE: Trải Nghiệm Đa Giác Quan
                </h3>
                <p className="font-serif text-sm italic text-amber-700 mt-1">
                  “Thử một chạm, cảm một mùa — Bản phối sương thơm thực vật Việt”
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                <div>
                  <strong>Mục tiêu:</strong> Khách hàng trực tiếp thử mùi trên da và giấy, trải nghiệm độ bám tỏa thực tế.
                </div>
                <div>
                  <strong>Hoạt động:</strong> Pop-up Booth tại TTTM & Đại học, quầy tester tại Guardian/Watsons, Scent Quiz online, chai Mini size 75ml (129k), chính sách Try Before Opening.
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Pop-up Booth TTTM</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Sampling quầy bán lẻ</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Website Scent Quiz</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Mini Size 75ml</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-golden-yellow/10 text-xs text-charcoal/80 font-mono">
                <strong>Chỉ số theo dõi:</strong> Lượng sample phân phối, lượt hoàn thành Scent Quiz, tỷ lệ Trial chuyển sang Mua.
              </div>
            </div>

            {/* Content Phase 3: SUSTAIN */}
            <div
              ref={p3ContentRef}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-rose/30 shadow-2xl space-y-4 flex flex-col justify-between opacity-0 pointer-events-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose uppercase">
                    PHASE 3 · THÁNG 7–12
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose/10 text-rose font-mono text-xs font-bold">
                    MÙA LỄ HỘI CUỐI NĂM
                  </span>
                </div>
                <h3 className="font-serif font-bold text-3xl text-charcoal mt-2">
                  SUSTAIN: Duy Trì & Mua Lại Bền Vững
                </h3>
                <p className="font-serif text-sm italic text-rose mt-1">
                  “Gói trọn yêu thương cùng làn da dịu lành mỗi ngày”
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                <div>
                  <strong>Mục tiêu:</strong> Chuyển thói quen dùng thử thành thói quen nâng niu cơ thể mỗi ngày và mua lại lâu dài.
                </div>
                <div>
                  <strong>Hoạt động:</strong> UGC review chia sẻ trải nghiệm, kích hoạt đặc quyền “Hội Hóa Bướm”, bundle combo Ươm Hương/Vườn Hương, đổi vỏ chai rỗng tại “Điểm Xanh Online”.
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Hội Hóa Bướm</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Điểm Xanh Online</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">Bundle Combo</span>
                  <span className="px-2 py-0.5 rounded bg-warm-ivory text-[10px] font-mono">CRM Chăm sóc</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-rose/10 text-xs text-charcoal/80 font-mono">
                <strong>Chỉ số theo dõi:</strong> Repurchase Rate (tỷ lệ mua lại), AOV (giá trị đơn), lượt đổi vỏ chai Điểm Xanh.
              </div>
            </div>

            {/* Grand Summary Revealed at End of IMC */}
            <div
              ref={grandSummaryRef}
              className="absolute inset-0 p-8 rounded-3xl bg-charcoal text-warm-ivory shadow-2xl border border-golden-yellow/40 flex flex-col justify-between text-center space-y-4 opacity-0 z-30"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-golden-yellow/20 text-golden-yellow flex items-center justify-center mx-auto">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-golden-yellow font-bold">
                  HỘI TỤ CHIẾN DỊCH IMC
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-warm-ivory">
                  “Từ nhận biết, đến trải nghiệm,<br />
                  đến thói quen thân thuộc.”
                </h3>
              </div>

              <div className="py-4 border-y border-warm-ivory/15 grid grid-cols-3 gap-2 font-mono text-xs text-warm-ivory/80">
                <div>
                  <span className="text-golden-yellow font-bold block">01. AWARE</span>
                  <span className="text-[10px] text-warm-ivory/60">Đánh thức nhận biết</span>
                </div>
                <div>
                  <span className="text-golden-yellow font-bold block">02. EXPERIENCE</span>
                  <span className="text-[10px] text-warm-ivory/60">Trải nghiệm & Thử mùi</span>
                </div>
                <div>
                  <span className="text-golden-yellow font-bold block">03. SUSTAIN</span>
                  <span className="text-[10px] text-warm-ivory/60">Gắn kết & Mua lại</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-golden-yellow">
                VÒNG LẶP KHÉP KÍN: TRIAL → ROUTINE → REPURCHASE → ADVOCACY
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">IMC Pinned Storytelling · Scroll Scrub 0.8 · Không dùng tab click</span>
          <span>Tiếp tục cuộn xuống để xem Dashboard kết quả dự phóng →</span>
        </div>
      </div>
    </div>
  );
};
