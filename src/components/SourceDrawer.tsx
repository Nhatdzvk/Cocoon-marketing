import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Search, CheckCircle2, AlertTriangle, BookOpen } from 'lucide-react';
import { sourcesData } from '../data/sources';

interface SourceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSourceId: string | null;
}

export const SourceDrawer: React.FC<SourceDrawerProps> = ({
  isOpen,
  onClose,
  selectedSourceId,
}) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'verified' | 'check'>('all');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && selectedSourceId) {
      setTimeout(() => {
        const el = document.getElementById('source-item-' + selectedSourceId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, [isOpen, selectedSourceId]);


  if (!isOpen) return null;

  const list = Object.values(sourcesData).filter((s) => {
    const term = search.toLowerCase();
    const match = s.id.toLowerCase().includes(term) || s.title.toLowerCase().includes(term) || s.publisher.toLowerCase().includes(term) || s.excerpt.toLowerCase().includes(term);
    if (!match) return false;
    if (filter === 'verified') return s.isVerified && !s.needsVerification;
    if (filter === 'check') return s.needsVerification;
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-charcoal/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-warm-ivory h-full shadow-2xl flex flex-col border-l border-botanical-green/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-botanical-green/15 bg-white/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-botanical-green/10 text-botanical-green">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="source-drawer-title" className="font-serif text-lg font-bold text-charcoal">
                Mục lục & Nguồn số liệu
              </h2>
              <p className="text-xs text-charcoal/70">
                Trích xuất từ Document 3.docx (Cocoon Body Mist)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng bảng tra cứu"
            className="p-1.5 rounded-full text-charcoal/70 hover:text-charcoal hover:bg-botanical-green/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 border-b border-botanical-green/10 bg-warm-ivory space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              type="text"
              placeholder="Tìm kiếm mã nguồn (S01, S02...), nhà nghiên cứu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-lg border border-botanical-green/20 focus:outline-none focus:ring-2 focus:ring-botanical-green text-charcoal"
            />
          </div>
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={'px-2.5 py-0.5 rounded-full font-medium transition-colors ' + (filter === 'all' ? 'bg-botanical-green text-warm-ivory' : 'bg-charcoal/5 text-charcoal/70')}
            >
              Tất cả ({Object.keys(sourcesData).length})
            </button>
            <button
              onClick={() => setFilter('verified')}
              className={'px-2.5 py-0.5 rounded-full font-medium transition-colors flex items-center gap-1 ' + (filter === 'verified' ? 'bg-botanical-green text-warm-ivory' : 'bg-charcoal/5 text-charcoal/70')}
            >
              <CheckCircle2 className="w-3 h-3" /> Đã kiểm chứng
            </button>
            <button
              onClick={() => setFilter('check')}
              className={'px-2.5 py-0.5 rounded-full font-medium transition-colors flex items-center gap-1 ' + (filter === 'check' ? 'bg-golden-yellow text-charcoal' : 'bg-charcoal/5 text-charcoal/70')}
            >
              <AlertTriangle className="w-3 h-3" /> Cần xác minh
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {list.map((s) => {
            const isTarget = selectedSourceId === s.id;
            return (
              <div
                key={s.id}
                id={'source-item-' + s.id}
                className={'p-3.5 rounded-xl border text-xs transition-all ' + (isTarget ? 'bg-botanical-green/10 border-botanical-green shadow-sm ring-2 ring-botanical-green/40' : 'bg-white border-botanical-green/15')}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-botanical-green text-warm-ivory font-mono font-bold text-[11px]">
                      {s.id}
                    </span>
                    <span className="font-semibold text-charcoal">{s.publisher}</span>
                    {s.year && <span className="text-[10px] text-charcoal/50">({s.year})</span>}
                  </div>
                  {s.needsVerification ? (
                    <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">
                      Cần xác minh trước công bố
                    </span>
                  ) : (
                    <span className="text-[10px] text-botanical-green bg-botanical-green/10 px-1.5 py-0.5 rounded-full">
                      ✓ Đã xác thực
                    </span>
                  )}
                </div>
                <h4 className="font-serif font-bold text-sm text-charcoal mb-1">{s.title}</h4>
                <p className="bg-warm-ivory/70 p-2 rounded text-charcoal/80 italic mb-2 border-l-2 border-botanical-green">
                  “{s.excerpt}”
                </p>
                <p className="text-charcoal/70 text-[11px] mb-2">
                  <strong>Bối cảnh:</strong> {s.context}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-charcoal/5">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-botanical-green hover:underline font-medium"
                    >
                      <span>Xem link gốc</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-charcoal/40 italic text-[11px]">Dữ liệu nội bộ / Không kèm URL</span>
                  )}
                  <span className="text-[10px] text-charcoal/40 font-mono">ID: {s.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 border-t border-botanical-green/15 bg-white/70 text-center text-[11px] text-charcoal/60">
          Nguyên tắc: Không bịa nguồn · Không sửa số liệu · Bảo đảm 100% dữ liệu Word Document 3.docx
        </div>
      </div>
    </div>
  );
};
