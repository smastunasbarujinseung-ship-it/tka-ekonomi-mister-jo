import React from 'react';
import { Volume2, Award, CheckCircle2, XCircle, TrendingUp, AlertTriangle, ArrowRight, BookOpen, RotateCcw } from 'lucide-react';
import { EvaluationResult } from '../types';
import { ttsEngine } from '../utils/tts';

interface ProgressViewProps {
  evaluation: EvaluationResult;
  onContinueQuiz: () => void;
  onConfirmReset: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  evaluation,
  onContinueQuiz,
  onConfirmReset
}) => {
  const handlePlayEvaluationAudio = () => {
    ttsEngine.speak(evaluation.ttsSummary, 'Evaluasi Hasil Belajar Bersama Mister Jo');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Mentor Evaluation Banner */}
      <div className="mb-8 bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold px-2.5 py-1 bg-emerald-700/60 text-emerald-200 rounded-md border border-emerald-500/30">
              LAPORAN PRESTASI BELAJAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-white">
              Evaluasi Penguasaan TKA Ekonomi 2026
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base mt-1">
              Bimbingan & Analisis Potensi bersama Mister Jo
            </p>
          </div>

          <button
            onClick={handlePlayEvaluationAudio}
            className="flex items-center gap-3 px-5 py-3 bg-white text-emerald-900 hover:bg-emerald-50 font-bold rounded-2xl shadow-lg transition-all cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="text-sm">Dengarkan Evaluasi Audio</span>
          </button>
        </div>
      </div>

      {/* Main Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {/* Tier Card */}
        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              KATEGORI KELAYAKAN
            </span>
            <div className="mt-2 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {evaluation.tier}
                </h3>
                <span className="text-xs font-bold text-emerald-700">
                  Target Standar TKA 2026
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {evaluation.tierDescription}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
            "{evaluation.misterJoMessage}"
          </div>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            TOTAL SKOR AKHIR
          </span>
          <div className="my-2">
            <span className="text-5xl font-black text-emerald-700 tracking-tight font-mono">
              {evaluation.totalScore}
            </span>
            <span className="text-lg text-slate-400 font-bold ml-1">/ 100</span>
          </div>
          <div className="text-xs text-slate-500">
            {evaluation.answeredCount} dari {evaluation.totalQuestions} Soal telah dijawab ({evaluation.percentage}% tuntas).
          </div>
        </div>

        {/* Accuracy Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            RINCIAN KETEPATAN
          </span>
          <div className="space-y-2.5 my-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Benar Sempurna
              </span>
              <span className="font-mono font-bold text-slate-900">{evaluation.correctCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-amber-700 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> Skor Parsial
              </span>
              <span className="font-mono font-bold text-slate-900">{evaluation.partialCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-rose-700 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> Salah / Belum
              </span>
              <span className="font-mono font-bold text-slate-900">
                {evaluation.totalQuestions - evaluation.correctCount - evaluation.partialCount}
              </span>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Penilaian transparan berbasis ketepatan penalaran.
          </div>
        </div>
      </div>

      {/* Strength & Weakness Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Strongest Topics */}
        <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <h4 className="text-lg font-bold text-emerald-950">Materi Paling Dikuasai</h4>
          </div>
          {evaluation.strongestCategories.length > 0 ? (
            <ul className="space-y-2 text-sm text-emerald-900 font-medium">
              {evaluation.strongestCategories.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">
              Selesaikan lebih banyak nomor soal untuk mengidentifikasi materi yang paling kamu kuasai.
            </p>
          )}
        </div>

        {/* Weakest Topics & Recommendations */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <h4 className="text-lg font-bold text-amber-950">Materi Perlu Penguatan</h4>
          </div>
          {evaluation.weakestCategories.length > 0 ? (
            <ul className="space-y-2 text-sm text-amber-900 font-medium">
              {evaluation.weakestCategories.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">
              Belum ada materi lemah yang terdeteksi, atau kamu belum mengerjakan soal terkait.
            </p>
          )}
          <p className="mt-4 pt-3 border-t border-amber-200/60 text-xs font-semibold text-amber-900">
            Rekomendasi Mister Jo: {evaluation.recommendation}
          </p>
        </div>
      </div>

      {/* 10 Curriculum Topics Performance Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-bold text-slate-900 tracking-tight">
              Distribusi Penguasaan per Bagian Materi
            </h4>
            <p className="text-xs text-slate-500">
              Analisis performa mendalam di 10 domain kurikulum TKA Ekonomi 2026.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-3.5">Bagian Materi</th>
                <th className="px-4 py-3.5 text-center">Jumlah Soal</th>
                <th className="px-4 py-3.5 text-center">Selesai</th>
                <th className="px-4 py-3.5 text-center">Tepat</th>
                <th className="px-6 py-3.5">Tingkat Penguasaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {evaluation.categorySummaries.map((cat) => (
                <tr key={cat.categoryIndex} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    <span className="text-xs text-slate-400 mr-2 font-mono">#{cat.categoryIndex}</span>
                    {cat.categoryName}
                  </td>
                  <td className="px-4 py-4 text-center font-mono font-medium text-slate-600">
                    {cat.totalQuestions}
                  </td>
                  <td className="px-4 py-4 text-center font-mono font-medium text-slate-600">
                    {cat.completedQuestions}
                  </td>
                  <td className="px-4 py-4 text-center font-mono font-bold text-emerald-700">
                    {cat.correctQuestions}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                          style={{ width: `${cat.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold font-mono text-slate-700 w-10">
                        {cat.percentage}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-200">
        <button
          onClick={onConfirmReset}
          className="px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:bg-rose-50 text-slate-600 hover:text-rose-700 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Seluruh Progres</span>
        </button>

        <button
          onClick={onContinueQuiz}
          className="px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-md shadow-emerald-700/20 active:scale-98 transition-all cursor-pointer"
        >
          <span>Lanjutkan Latihan 30 Soal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
