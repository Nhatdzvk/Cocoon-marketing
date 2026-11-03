import React, { useState } from 'react';
import { Menu, X, Play, BookOpen, Eye, EyeOff, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isPresentationMode: boolean;
  onTogglePresentation: () => void;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
  onOpenSources: () => void;
}

export const menuChapters = [
  { id: 'hero', number: '00', title: 'Mộc Hương Lành', label: 'Opening Hero' },
  { id: 'overview', number: '01', title: 'Executive Overview', label: 'Tổng quan chiến lược' },
  { id: 'market', number: '02', title: 'Market Opportunity', label: 'Cơ hội thị trường' },
  { id: 'consumer', number: '03', title: 'Consumer Shift', label: 'Hành vi người tiêu dùng' },
  { id: 'brand', number: '04', title: 'Brand Understanding', label: 'Bản sắc Cocoon' },
  { id: 'competition', number: '05', title: 'Competitive Landscape', label: 'Định vị cạnh tranh' },
  { id: 'swot', number: '06', title: 'SWOT & Strategic Gap', label: 'SWOT & Khoảng trống' },
  { id: 'objectives', number: '07', title: 'Objectives & JTBD', label: 'Mục tiêu & JTBD' },
  { id: 'target', number: '08', title: 'Target Customer', label: 'Chân dung khách hàng' },
  { id: 'insight', number: '09', title: 'Insight & Opportunity', label: 'Sự thật ngầm hiểu' },
  { id: 'big-idea', number: '10', title: 'Big Idea', label: 'Ý tưởng lớn Mộc Hương Lành' },
  { id: 'product', number: '11', title: 'Seasons Collection', label: 'Bộ sưu tập 4 Mùa' },
  { id: 'marketing-mix', number: '12', title: 'Marketing Mix 4Ps', label: 'Chiến lược 4Ps' },
  { id: 'imc', number: '13', title: 'IMC Journey', label: 'Lộ trình truyền thông' },
  { id: 'results', number: '14', title: 'Expected Results', label: 'Mục tiêu doanh số & KPI' },
  { id: 'risks', number: '15', title: 'Risk Management', label: 'Quản trị rủi ro' },
  { id: 'closing', number: '16', title: 'Closing & Vision', label: 'Kết luận & Tầm nhìn' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  isPresentationMode,
  onTogglePresentation,
  isReducedMotion,
  onToggleReducedMotion,
  onOpenSources,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectChapter = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-warm-ivory/85 backdrop-blur-md border-b border-botanical-green/10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleSelectChapter('hero')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-botanical-green text-warm-ivory flex items-center justify-center font-serif font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              C
            </div>
            <div>
              <div className="font-serif font-bold text-sm tracking-wider text-charcoal flex items-center gap-1.5">
                <span>COCOON VIETNAM</span>
                <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-botanical-green/10 text-botanical-green font-medium">
                  VEGAN
                </span>
              </div>
              <div className="text-[11px] text-charcoal/60 tracking-tight font-sans">
                Cocoon Vegan Body Mist
              </div>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSources}
            title="Mở bảng tra cứu nguồn dữ liệu"
            aria-label="Mở bảng tra cứu nguồn dữ liệu"
            className="px-3 py-1.5 rounded-full text-xs font-medium text-botanical-green bg-botanical-green/10 hover:bg-botanical-green hover:text-warm-ivory transition-all flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Nguồn số liệu</span>
          </button>

          <button
            type="button"
            onClick={onToggleReducedMotion}
            title={isReducedMotion ? 'Bật lại hoạt ảnh' : 'Chế độ giảm chuyển động'}
            aria-label="Chế độ giảm chuyển động"
            className="p-2 rounded-full text-charcoal/70 hover:text-charcoal hover:bg-botanical-green/10 transition-colors"
          >
            {isReducedMotion ? (
              <EyeOff className="w-4 h-4 text-golden-yellow" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={onTogglePresentation}
            aria-label={isPresentationMode ? 'Thoát chế độ thuyết trình' : 'Bật chế độ thuyết trình'}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
              isPresentationMode
                ? 'bg-golden-yellow text-charcoal shadow-md ring-2 ring-golden-yellow/50'
                : 'bg-charcoal text-warm-ivory hover:bg-charcoal/85'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isPresentationMode ? 'fill-charcoal' : 'fill-warm-ivory'}`} />
            <span className="hidden sm:inline">
              {isPresentationMode ? 'Đang thuyết trình' : 'Thuyết trình'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Mở mục lục toàn màn hình"
            className="p-2 rounded-full text-charcoal hover:bg-botanical-green/10 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mục lục bài thuyết trình"
          className="fixed inset-0 z-50 bg-charcoal text-warm-ivory flex flex-col p-6 sm:p-12 overflow-y-auto animate-fade-in"
        >
          <div className="flex items-center justify-between pb-6 border-b border-warm-ivory/15">
            <div className="flex items-center gap-3">
              <span className="font-serif font-bold text-xl text-golden-yellow">COCOON</span>
              <span className="text-xs text-warm-ivory/60 font-mono">AGENDA / MỤC LỤC CHI TIẾT</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Đóng menu"
              className="p-2 rounded-full hover:bg-warm-ivory/10 transition-colors text-warm-ivory/80 hover:text-warm-ivory"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 flex-1">
            {menuChapters.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectChapter(item.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 group flex items-start gap-4 ${
                    isActive
                      ? 'border-golden-yellow bg-golden-yellow/10'
                      : 'border-warm-ivory/10 hover:border-botanical-green hover:bg-warm-ivory/5'
                  }`}
                >
                  <span className="font-mono text-xs text-golden-yellow pt-0.5 group-hover:scale-110 transition-transform">
                    {item.number}
                  </span>
                  <div>
                    <div className="font-serif text-lg font-bold text-warm-ivory group-hover:text-golden-yellow transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-warm-ivory/60 mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-warm-ivory/15 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-ivory/50 gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-golden-yellow" />
              <span>Cocoon Vegan Body Mist · Big Idea “Mộc Hương Lành”</span>
            </div>
            <div className="font-mono text-[11px]">
              Dữ liệu từ tài liệu nghiên cứu Document 3.docx
            </div>
          </div>
        </div>
      )}
    </>
  );
};
