import React from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, XCircle } from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';

interface QuestionNavGridProps {
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  answers: Record<number, UserAnswerRecord>;
}

export const QuestionNavGrid: React.FC<QuestionNavGridProps> = ({
  questions,
  currentIndex,
  onSelectIndex,
  answers
}) => {
  const answeredCount = Object.values(answers).filter(a => a.isChecked).length;
  const totalQuestions = questions.length;
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5">
      {/* Header & Mini Stats */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
            NAVIGASI 30 SOAL
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-900">
            Daftar Soal Latihan
          </h4>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
            {answeredCount}/{totalQuestions} Selesai ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-emerald-600 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Number Badges 1-30 */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-5 gap-2">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const isCurrent = idx === currentIndex;
          const isAnswered = ans && ans.isChecked;
          const isCorrect = isAnswered && ans.isCorrect;
          const isPartial = isAnswered && !ans.isCorrect && ans.score > 0;
          const isWrong = isAnswered && ans.score === 0;

          let btnColor = 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100';
          if (isCurrent) {
            btnColor = 'ring-2 ring-emerald-600 bg-white text-emerald-800 font-extrabold shadow-sm';
          }
          if (isCorrect) {
            btnColor = isCurrent
              ? 'ring-2 ring-emerald-600 bg-emerald-700 text-white font-extrabold'
              : 'bg-emerald-600 text-white border-emerald-600 font-bold';
          } else if (isPartial) {
            btnColor = isCurrent
              ? 'ring-2 ring-amber-500 bg-amber-500 text-white font-extrabold'
              : 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
          } else if (isWrong) {
            btnColor = isCurrent
              ? 'ring-2 ring-rose-500 bg-rose-600 text-white font-extrabold'
              : 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={`h-10 rounded-xl border text-xs sm:text-sm flex flex-col items-center justify-center transition-all cursor-pointer ${btnColor}`}
              title={`Soal #${q.id}: ${q.category} (${q.type})`}
              aria-label={`Pilih Soal nomor ${q.id}`}
            >
              <span>{q.id}</span>
              <span className="text-[9px] uppercase tracking-tighter opacity-80 leading-none">
                {q.type}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-slate-200" />
          <span>Belum dijawab</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-emerald-600" />
          <span>Benar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span>Sebagian</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span>Salah</span>
        </div>
      </div>
    </div>
  );
};
