import React from 'react';
import { X, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ttsEngine } from '../utils/tts';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz: () => void;
}

export const GUIDE_NARRATION_TEXT = 
  "Teman-teman, cara belajar di aplikasi ini sangat sederhana. Kamu cukup membaca stimulus, mendengarkan arahan Mister Jo, kemudian mencoba menyelesaikan soal secara mandiri. " +
  "Jangan terburu-buru membuka pembahasan. Berikan kesempatan kepada otakmu untuk berpikir terlebih dahulu. " +
  "Setelah menjawab, kamu dapat mempelajari pembahasan lengkap dan strategi cepat. Dengan demikian, kamu tidak hanya mengetahui jawaban, tetapi juga memahami proses berpikir seorang analis ekonomi. " +
  "Semua progres belajar akan tersimpan secara otomatis di perangkatmu.";

const GUIDE_STEPS = [
  'Tekan tombol "Mulai Belajar" di halaman utama.',
  'Pilih nomor soal yang ingin dikerjakan (tersedia 1 hingga 30).',
  'Dengarkan narasi pengantar audio dari Mister Jo.',
  'Baca teks stimulus dengan saksama dan cermati tabel atau grafik ekonomi yang disertakan.',
  'Analisis informasi, data, atau persamaan matematis yang tersedia.',
  'Pilih jawaban (Pilihan Ganda, Pilihan Ganda Kompleks, atau Benar-Salah).',
  'Tekan tombol "Periksa Jawaban" untuk mengecek kebenaran jawabanmu secara instan.',
  'Pelajari pembahasan mendalam yang terstruktur dari bagian A sampai E.',
  'Tekan tombol "Strategi Cepat Mister Jo" untuk memahami rumus kilat dan tips ujian.',
  'Lanjutkan ke soal berikutnya hingga seluruh 30 soal terselesaikan.'
];

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  onStartQuiz
}) => {
  if (!isOpen) return null;

  const handlePlayGuideAudio = () => {
    ttsEngine.speak(GUIDE_NARRATION_TEXT, 'Panduan Belajar Bersama Mister Jo');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-teal-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">PANDUAN BELAJAR BERSAMA MISTER JO</h3>
              <p className="text-xs text-emerald-200">10 Langkah Strategis Menaklukkan TKA Ekonomi 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup Panduan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audio Narator Card */}
        <div className="p-5 bg-emerald-50/80 border-b border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Narasi Audio Panduan</span>
            <p className="text-xs sm:text-sm text-slate-700 italic mt-0.5">
              "Teman-teman, cara belajar di aplikasi ini sangat sederhana..."
            </p>
          </div>
          <button
            onClick={handlePlayGuideAudio}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Dengarkan Arahan</span>
          </button>
        </div>

        {/* 10 Steps List */}
        <div className="p-6 max-h-[55vh] overflow-y-auto space-y-3">
          {GUIDE_STEPS.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onStartQuiz();
            }}
            className="px-5 py-2.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md shadow-emerald-700/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Mulai Belajar Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
