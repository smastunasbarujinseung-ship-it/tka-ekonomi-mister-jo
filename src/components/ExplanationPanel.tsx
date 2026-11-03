import React from 'react';
import { Volume2, CheckCircle2, XCircle, Lightbulb, BookOpen, Calculator, Check, ArrowRight } from 'lucide-react';
import { QuestionExplanation, QuestionType } from '../types';
import { ttsEngine } from '../utils/tts';

interface ExplanationPanelProps {
  explanation: QuestionExplanation;
  questionNumber: number;
  questionType: QuestionType;
  onOpenQuickStrategy: () => void;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  explanation,
  questionNumber,
  questionType,
  onOpenQuickStrategy
}) => {
  const handlePlayAudio = () => {
    ttsEngine.speak(explanation.ttsScript, `Pembahasan Soal #${questionNumber} bersama Mister Jo`);
  };

  return (
    <div className="mt-6 rounded-3xl bg-white border border-emerald-300/80 shadow-md overflow-hidden">
      {/* Header with Mister Jo Avatar & TTS Trigger */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-200 border border-white/15">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">
                PEMBAHASAN MENDALAM
              </span>
              <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded text-emerald-100 font-semibold">
                SOAL #{questionNumber}
              </span>
            </div>
            <h3 className="text-xl font-black tracking-tight text-white mt-0.5">
              Analisis Komprehensif Bersama Mister Jo
            </h3>
          </div>
        </div>

        <button
          onClick={handlePlayAudio}
          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Volume2 className="w-4 h-4" />
          <span>Dengarkan Pembahasan</span>
        </button>
      </div>

      {/* Structured Sections A to E */}
      <div className="p-6 space-y-6 text-slate-800">
        {/* A. MEMAHAMI PERMASALAHAN */}
        <section className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white text-xs font-black flex items-center justify-center">
              A
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              MEMAHAMI PERMASALAHAN
            </h4>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pl-9">
            {explanation.problemUnderstanding}
          </p>
        </section>

        {/* B. MENGIDENTIFIKASI KONSEP EKONOMI */}
        <section className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-7 h-7 rounded-lg bg-teal-700 text-white text-xs font-black flex items-center justify-center">
              B
            </span>
            <h4 className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight">
              MENGIDENTIFIKASI KONSEP EKONOMI
            </h4>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pl-9">
            {explanation.economicConcept}
          </p>
        </section>

        {/* C. LANGKAH PENYELESAIAN */}
        <section className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-7 rounded-lg bg-cyan-700 text-white text-xs font-black flex items-center justify-center">
              C
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              LANGKAH PENYELESAIAN & PERHITUNGAN
            </h4>
          </div>
          <div className="pl-9 space-y-2.5">
            {explanation.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed font-medium">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* D. ANALISIS PILIHAN JAWABAN / PERNYATAAN */}
        <section className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-7 rounded-lg bg-slate-800 text-white text-xs font-black flex items-center justify-center">
              D
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {questionType === 'BS' ? 'ANALISIS SETIAP PERNYATAAN' : 'ANALISIS OPSI JAWABAN'}
            </h4>
          </div>

          <div className="pl-9 space-y-3">
            {/* For PG & PGK */}
            {explanation.optionAnalysis && explanation.optionAnalysis.map((item) => (
              <div
                key={item.key}
                className={`p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed ${
                  item.isCorrect
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 ${
                    item.isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.key}
                  </span>
                  <span className="font-bold">{item.isCorrect ? 'PILIHAN TEPAT (BENAR)' : 'PILIHAN KURANG TEPAT'}</span>
                </div>
                <p className="text-xs sm:text-sm mt-1 text-slate-600 pl-8">{item.reason}</p>
              </div>
            ))}

            {/* For Benar-Salah */}
            {explanation.statementAnalysis && explanation.statementAnalysis.map((item, idx) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-white border border-slate-200 text-sm sm:text-base leading-relaxed"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-slate-900">Pernyataan {idx + 1}:</span>
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded ${
                    item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {item.isCorrect ? 'STATUS: BENAR' : 'STATUS: SALAH'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* E. KESIMPULAN KONSEP */}
        <section className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-7 h-7 rounded-lg bg-amber-600 text-white text-xs font-black flex items-center justify-center">
              E
            </span>
            <h4 className="text-base sm:text-lg font-bold text-amber-950 tracking-tight">
              KESIMPULAN KONSEP YANG HARUS DIINGAT
            </h4>
          </div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold pl-9">
            {explanation.conclusion}
          </p>
        </section>

        {/* CTA to Open Strategi Cepat */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onOpenQuickStrategy}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md shadow-amber-400/20 active:scale-98 transition-all cursor-pointer"
          >
            <span>STRATEGI CEPAT MISTER JO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
