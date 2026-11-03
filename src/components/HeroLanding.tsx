import React from 'react';
import { Play, BookOpen, BarChart3, RotateCcw, Volume2, CheckCircle2, Award, TrendingUp, Layers } from 'lucide-react';
import { ttsEngine } from '../utils/tts';

interface HeroLandingProps {
  onStartQuiz: () => void;
  onOpenGuide: () => void;
  onOpenProgress: () => void;
  onConfirmReset: () => void;
  hasSavedProgress: boolean;
  answeredCount: number;
  totalQuestions: number;
}

export const OPENING_NARRATION_TEXT = 
  "Halo, selamat datang di Ekonomi Jenius, ruang latihan TKA Ekonomi 2026 bersama Mister Jo! " +
  "Di sini kita tidak hanya belajar menghafalkan definisi ekonomi atau mengingat rumus. " +
  "Kita akan belajar membaca fenomena ekonomi, memahami data, menganalisis grafik, menghitung, membandingkan kebijakan, dan mengambil keputusan secara rasional. " +
  "Ada 30 soal latihan yang telah dirancang untuk mengasah kemampuan berpikir tingkat tinggi. " +
  "Jangan takut kalau awalnya terasa sulit. Mister Jo akan membimbing kamu melalui stimulus, petunjuk, pembahasan mendalam, hingga cara cepat menyelesaikan setiap soal. " +
  "Ingat, seorang ekonom yang hebat bukan hanya mampu menghitung, tetapi juga mampu menjelaskan mengapa suatu fenomena ekonomi terjadi. " +
  "Yuk, kita mulai perjalanan menjadi Ekonom Jenius!";

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onStartQuiz,
  onOpenGuide,
  onOpenProgress,
  onConfirmReset,
  hasSavedProgress,
  answeredCount,
  totalQuestions
}) => {
  const handlePlayOpeningNarration = () => {
    ttsEngine.speak(OPENING_NARRATION_TEXT, 'Pengantar Mentor Mister Jo');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Mentor Welcome Banner & Audio Trigger */}
      <div className="mb-8 bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold px-2.5 py-1 bg-emerald-700/60 text-emerald-200 rounded-md border border-emerald-500/30">
                PANDUAN AUDIO MISTER JO
              </span>
              {hasSavedProgress && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-teal-900/80 text-teal-200 rounded-md border border-teal-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>PROGRES BELAJAR TERSIMPAN</span>
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              "Ekonomi Bukan Sekadar Hafalan. Ekonomi Adalah Seni Membaca Kehidupan."
            </h2>
            <p className="mt-2 text-emerald-100 text-sm sm:text-base leading-relaxed">
              Dengarkan sambutan dan arahan langsung dari Mister Jo untuk mengawali perjalanan belajar 30 soal HOTS TKA Ekonomi 2026.
            </p>
          </div>

          <button
            onClick={handlePlayOpeningNarration}
            className="flex items-center gap-3 px-6 py-3.5 bg-white text-emerald-900 hover:bg-emerald-50 active:scale-95 font-bold rounded-2xl shadow-lg shadow-black/10 transition-all cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base">Putar Suara Mister Jo</span>
          </button>
        </div>
      </div>

      {/* Hero 2-Column Split: Visual Lab & Primary Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Column: Visual Laboratory Illustration */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
              <span>Laboratorium Analisis Ekonomi Digital</span>
              <span>·</span>
              <span>TKA 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              EKONOMI JENIUS
              <span className="block text-emerald-700 text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-1">
                TKA EKONOMI 2026
              </span>
            </h1>
            <p className="mt-2 text-slate-600 font-semibold text-base sm:text-lg">
              Dibimbing oleh: <span className="text-emerald-800 font-bold">MISTER JO</span>
            </p>
            <p className="mt-1 text-slate-500 text-sm italic">
              "Berpikir Ekonomis, Bernalar Kritis, Siap Menaklukkan TKA!"
            </p>
          </div>

          {/* High Fidelity Generated Laboratory Image */}
          <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative group">
            <img
              src="/src/assets/images/mister_jo_economic_hero_1793713376550.jpg"
              alt="Mister Jo mengajar di Laboratorium Analisis Ekonomi Digital"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[340px] transform group-hover:scale-102 transition-transform duration-500"
              onError={(e) => {
                // Fallback graceful banner if image path is altered
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* 3 Core Strengths of the Curriculum */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50">
              <span className="block text-lg font-black text-emerald-700">30 SOAL</span>
              <span className="text-xs text-slate-500 font-medium">HOTS & Penalaran</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50">
              <span className="block text-lg font-black text-teal-700">10 MATERI</span>
              <span className="text-xs text-slate-500 font-medium">Kurikulum Lengkap</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50">
              <span className="block text-lg font-black text-cyan-700">AUDIO TTS</span>
              <span className="text-xs text-slate-500 font-medium">Mentor Interaktif</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Main Action Buttons & Progress Glance */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Navigasi Utama Aplikasi</h3>
              <p className="text-xs text-slate-500 mt-1">
                Pilih menu di bawah untuk memulai sesi latihan mandiri atau melihat rekap evaluasi.
              </p>

              {/* Progress Bar Summary if user has answered */}
              {answeredCount > 0 && (
                <div className="my-5 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex justify-between items-center text-xs font-bold text-emerald-900 mb-1.5">
                    <span>Progres Terkini</span>
                    <span>{answeredCount} dari {totalQuestions} Soal ({Math.round((answeredCount/totalQuestions)*100)}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-emerald-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                      style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* 4 Main Action Buttons */}
              <div className="space-y-3 mt-4">
                {/* 1. MULAI BELAJAR */}
                <button
                  onClick={onStartQuiz}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-800 text-white font-bold hover:from-emerald-800 hover:to-emerald-900 active:scale-98 shadow-md shadow-emerald-800/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <span className="block text-base sm:text-lg font-black tracking-wide">
                        {answeredCount > 0 ? 'LANJUTKAN BELAJAR' : 'MULAI BELAJAR'}
                      </span>
                      <span className="text-xs text-emerald-200 font-normal">
                        Masuk ke ruang latihan 30 soal HOTS
                      </span>
                    </div>
                  </div>
                  <span className="text-emerald-200 group-hover:translate-x-1 transition-transform">→</span>
                </button>

                {/* 2. PANDUAN APLIKASI */}
                <button
                  onClick={onOpenGuide}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50 text-slate-800 font-bold active:scale-98 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-base font-bold text-slate-900">
                        PANDUAN APLIKASI
                      </span>
                      <span className="text-xs text-slate-500 font-normal">
                        10 langkah efektif belajar bersama Mister Jo
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform">→</span>
                </button>

                {/* 3. LIHAT PROGRES BELAJAR */}
                <button
                  onClick={onOpenProgress}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-600 hover:bg-cyan-50/50 text-slate-800 font-bold active:scale-98 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-base font-bold text-slate-900">
                        LIHAT PROGRES BELAJAR
                      </span>
                      <span className="text-xs text-slate-500 font-normal">
                        Skor, kategori evaluasi, dan kelemahan materi
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-cyan-700 group-hover:translate-x-1 transition-transform">→</span>
                </button>

                {/* 4. RESET PROGRES */}
                <button
                  onClick={onConfirmReset}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-600 hover:text-rose-700 font-semibold active:scale-98 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-rose-600">
                      <RotateCcw className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold">RESET SELURUH PROGRES</span>
                      <span className="text-xs text-slate-400 group-hover:text-rose-500 font-normal">
                        Hapus riwayat jawaban dan mulai dari awal
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Offline notice */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Aplikasi berjalan 100% offline via localStorage perangkat.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
