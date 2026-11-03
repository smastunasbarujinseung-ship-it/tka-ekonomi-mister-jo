import React from 'react';
import { X, Zap, Volume2, CheckCircle2 } from 'lucide-react';
import { QuickStrategy } from '../types';
import { ttsEngine } from '../utils/tts';

interface QuickStrategyModalProps {
  strategy: QuickStrategy | null;
  questionNumber: number;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickStrategyModal: React.FC<QuickStrategyModalProps> = ({
  strategy,
  questionNumber,
  isOpen,
  onClose
}) => {
  if (!isOpen || !strategy) return null;

  const handlePlayStrategyAudio = () => {
    ttsEngine.speak(strategy.ttsScript, `Strategi Cepat Soal #${questionNumber}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header with lightning badge */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-teal-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/30">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-200">
                TIPS UJIAN KILAT · SOAL #{questionNumber}
              </span>
              <h3 className="text-xl font-black tracking-tight">{strategy.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Strategi Cepat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audio Bar */}
        <div className="px-6 py-4 bg-emerald-50/80 border-b border-emerald-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <span>Dengarkan Trik Langsung dari Mister Jo</span>
          </div>
          <button
            onClick={handlePlayStrategyAudio}
            className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Putar Suara</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          {/* Formula Shortcut Box */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Cara Cepat / Shortcut Ujian:</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-mono">
              {strategy.shortcut}
            </p>
          </div>

          {/* Rule of Thumb */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Hukum Dasar yang Harus Diingat:</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {strategy.ruleOfThumb}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            Paham, Lanjutkan Soal
          </button>
        </div>
      </div>
    </div>
  );
};
