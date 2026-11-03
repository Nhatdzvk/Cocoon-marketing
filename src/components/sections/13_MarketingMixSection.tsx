import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Tag, Store, Megaphone, Sparkles } from 'lucide-react';
import { DisclaimerBadge } from '../DisclaimerBadge';

gsap.registerPlugin(ScrollTrigger);

export const MarketingMixSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const p4Ref = useRef<HTMLDivElement>(null);
  const centralBottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Stage 1 (0% - 25%): PRODUCT surrounds bottle
      // Bottle rotates slightly, PRODUCT fades out, PRICE fades in (0.25 - 0.5)
      tl.to(p1Ref.current, { opacity: 0, y: -40, duration: 0.2 }, 0.22);
      tl.fromTo(p2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.25);
      tl.to(centralBottleRef.current, { rotate: 5, scale: 1.05, duration: 0.25 }, 0.25);

      // Stage 2 (0.5 - 0.75): PRICE fades out, PLACE fades in
      tl.to(p2Ref.current, { opacity: 0, y: -40, duration: 0.2 }, 0.47);
      tl.fromTo(p3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.5);
      tl.to(centralBottleRef.current, { rotate: -5, scale: 1, duration: 0.25 }, 0.5);

      // Stage 3 (0.75 - 1.0): PLACE fades out, PROMOTION fades in
      tl.to(p3Ref.current, { opacity: 0, y: -40, duration: 0.2 }, 0.72);
      tl.fromTo(p4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25 }, 0.75);
      tl.to(centralBottleRef.current, { rotate: 0, scale: 1.08, duration: 0.25 }, 0.75);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="marketing-mix"
      aria-label="Marketing Mix 4P Scroll Transformation"
      className="relative min-h-[350vh] bg-warm-ivory text-charcoal border-b border-botanical-green/15"
    >
      <div
        ref={stageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-botanical-green/15 pb-3 z-20">
          <span className="font-mono text-xs text-botanical-green font-semibold uppercase tracking-wider">
            CHƯƠNG 13 / 17 · MARKETING MIX (4Ps)
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-charcoal/50 font-mono hidden sm:inline">
              Chuyển đổi 4P tuần tự theo tiến trình cuộn
            </span>
            <DisclaimerBadge type="proposal" text="Đề xuất chiến lược" />
          </div>
        </div>

        {/* Central Stage: Central Bottle on Left, 4P Content on Right */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full z-10">
          {/* Left: Interactive Transformation Bottle */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              ref={centralBottleRef}
              className="relative w-52 h-76 sm:w-60 sm:h-88 flex items-center justify-center transition-transform"
            >
              <div className="absolute inset-0 rounded-full bg-botanical-green/10 blur-xl animate-pulse" />
              <div className="relative z-10 w-40 h-68 sm:w-44 sm:h-76 rounded-3xl bg-white/95 p-4 shadow-xl border border-botanical-green/30 backdrop-blur flex flex-col justify-between items-center text-center">
                <div className="w-6 h-4 rounded-t-md bg-golden-yellow shadow-xs" />
                <div className="space-y-1 py-3 border-y border-charcoal/10 w-full">
                  <div className="text-[9px] font-mono tracking-widest text-charcoal/50">COCOON</div>
                  <div className="font-serif font-bold text-sm text-charcoal">VEGAN BODY MIST</div>
                  <div className="text-[10px] font-serif italic text-botanical-green">Mộc Hương Lành</div>
                  <div className="text-[8px] font-mono text-charcoal/40">250ml · 329.000 VNĐ</div>
                </div>
                <div className="text-[8px] font-mono font-bold text-botanical-green uppercase">
                  4Ps TRANSFORMATION
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic 4P Panel Container */}
          <div className="lg:col-span-7 relative min-h-[420px] flex items-center">
            {/* P1: PRODUCT */}
            <div
              ref={p1Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/20 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-botanical-green uppercase flex items-center gap-1.5">
                    <Package className="w-4 h-4" /> 1. PRODUCT (SẢN PHẨM & DỊCH VỤ)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-botanical-light text-botanical-green">100% THUẦN CHAY</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  Cocoon Vegan Body Mist · BST 4 Mùa
                </h3>
              </div>

              <div className="space-y-2 text-xs text-charcoal/80 leading-relaxed">
                <div>• <strong>4 Mùi hương thực vật Việt:</strong> Hoa hồng Cao Bằng, Sen Hậu Giang, Bưởi Việt, Cà phê Đắk Lắk.</div>
                <div>• <strong>Quy cách:</strong> Full size 250ml & Mini size 75ml bỏ túi. Chai PET tái chế có vòi phun sương.</div>
                <div>• <strong>6 Dịch vụ gia tăng:</strong> Personalized Scent Guidance, Try Before Opening, Body Care Discovery, Botanical Transparency QR, Hội Hóa Bướm, Green Aftercare (Điểm Xanh Online).</div>
              </div>

              <div className="text-[11px] font-mono text-charcoal/50 pt-2 border-t border-charcoal/10">
                Tiếp tục cuộn để xem chiến lược Định giá (Price) →
              </div>
            </div>

            {/* P2: PRICE */}
            <div
              ref={p2Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-golden-yellow/40 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase flex items-center gap-1.5">
                    <Tag className="w-4 h-4" /> 2. PRICE (ĐỊNH GIÁ & BUNDLE)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-golden-yellow/20 text-charcoal font-bold">-15% 4 TUẦN ĐẦU</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  329.000 VNĐ (250ml) · 129.000 VNĐ (75ml)
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-charcoal/80 leading-relaxed">
                <div>• <strong>Định giá thâm nhập:</strong> Giá số 9 dễ tiếp cận với daily users trẻ. Giảm 15% trong 4 tuần đầu ra mắt.</div>
                <div>• <strong>3 Gói Bundle:</strong>
                  <br />- <em>Vườn Hương:</em> Combo 4 minisize (489.000 VNĐ)
                  <br />- <em>Ươm Hương:</em> 1 Full size + Sữa tắm/Tẩy da chết (439k–489k)
                  <br />- <em>Chạm Hương:</em> 1 Full size + 1 Minisize mùi khác (419.000 VNĐ)
                </div>
                <div>• <strong>Đối sánh:</strong> Thấp hơn rõ so với Bath & Body Works (750k/236ml), nhỉnh hơn Hella (280k/250ml).</div>
              </div>

              <div className="text-[11px] font-mono text-charcoal/50 pt-2 border-t border-charcoal/10">
                Tiếp tục cuộn để xem Kênh phân phối (Place) →
              </div>
            </div>

            {/* P3: PLACE */}
            <div
              ref={p3Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-botanical-green/30 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-botanical-green uppercase flex items-center gap-1.5">
                    <Store className="w-4 h-4" /> 3. PLACE (PHÂN PHỐI ĐA KÊNH)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-botanical-light text-botanical-green">OMNICHANNEL</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  Online Chính Hãng & Chuỗi Bán Lẻ
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-charcoal/80 leading-relaxed">
                <div>• <strong>Kênh Online:</strong>
                  <br />- <em>Website Cocoon:</em> Cung cấp Scent Quiz, chính sách đổi mùi nguyên seal.
                  <br />- <em>Shopee Mall:</em> Flash Sale, voucher sàn, freeship, đánh giá uy tín.
                  <br />- <em>TikTok Shop:</em> Livestream Gen Z, review chân thực từ KOL/KOC.
                </div>
                <div>• <strong>Kênh Offline:</strong>
                  <br />- Phủ quầy tester tại Guardian, Sammi Shop, Watsons toàn quốc.
                  <br />- Pop-up booth tại trung tâm thương mại và trường đại học lớn.
                </div>
              </div>

              <div className="text-[11px] font-mono text-charcoal/50 pt-2 border-t border-charcoal/10">
                Tiếp tục cuộn để xem Chiêu thị truyền thông (Promotion) →
              </div>
            </div>

            {/* P4: PROMOTION */}
            <div
              ref={p4Ref}
              className="absolute inset-0 p-8 rounded-3xl bg-white border border-rose/30 shadow-xl space-y-4 flex flex-col justify-between opacity-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose uppercase flex items-center gap-1.5">
                    <Megaphone className="w-4 h-4" /> 4. PROMOTION (CHIÊU THỊ 3 NẤC)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose/10 text-rose font-bold">ĐỀ XUẤT TRIỂN KHAI</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-2">
                  Aware → Educate & Interest → Sustain
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-charcoal/80 leading-relaxed">
                <div>• <strong>Aware:</strong> Digital Video/TVC nông sản 4 mùa, banner mạng xã hội, TikTok Challenge #MocHuongLanh.</div>
                <div>• <strong>Educate & Interest:</strong> Sự kiện trải nghiệm tại shopping mall, quầy thử tester, sampling miễn phí, chuỗi Mega Livestream.</div>
                <div>• <strong>Engage & Sustain:</strong> UGC review nhận hoàn tiền, thẻ thành viên Hội Hóa Bướm, đổi vỏ chai rỗng tại Điểm Xanh Online.</div>
              </div>

              <div className="text-[11px] font-mono text-charcoal/50 pt-2 border-t border-charcoal/10 italic">
                *Tài liệu không bịa đặt số ngân sách hoặc KPI giả định.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 border-t border-botanical-green/15 pt-3 z-20">
          <span className="font-mono text-[11px]">Product → Price → Place → Promotion</span>
          <span>Tiếp tục cuộn xuống để khám phá Lộ trình IMC 3 giai đoạn →</span>
        </div>
      </div>
    </div>
  );
};
