import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, AlertCircle, Zap, ArrowLeft, ArrowRight, RotateCcw, BookOpen, Layers } from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';
import { EconomicChart } from './EconomicChart';
import { ExplanationPanel } from './ExplanationPanel';
import { QuickStrategyModal } from './QuickStrategyModal';
import { ttsEngine } from '../utils/tts';
import { evaluateAnswer } from '../utils/scoring';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  answerRecord?: UserAnswerRecord;
  onSaveAnswer: (questionId: number, record: UserAnswerRecord) => void;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  answerRecord,
  onSaveAnswer,
  onPrev,
  onNext,
  onFinish
}) => {
  // Local state for interactive choices before/after submission
  const [selectedPG, setSelectedPG] = useState<string>(
    typeof answerRecord?.selected === 'string' ? answerRecord.selected : ''
  );
  const [selectedPGK, setSelectedPGK] = useState<string[]>(
    Array.isArray(answerRecord?.selected) ? answerRecord.selected : []
  );
  const [statementAnswers, setStatementAnswers] = useState<Record<string, boolean>>(
    answerRecord?.statements || {}
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showQuickStrategy, setShowQuickStrategy] = useState<boolean>(false);

  // Sync state if question changes
  React.useEffect(() => {
    setSelectedPG(typeof answerRecord?.selected === 'string' ? answerRecord.selected : '');
    setSelectedPGK(Array.isArray(answerRecord?.selected) ? answerRecord.selected : []);
    setStatementAnswers(answerRecord?.statements || {});
    setShowExplanation(false);
    setShowQuickStrategy(false);
  }, [question.id, answerRecord]);

  const handlePlayIntroductionAudio = () => {
    ttsEngine.speak(question.ttsIntroduction, `Pengantar Soal #${question.id} bersama Mister Jo`);
  };

  const handleTogglePGK = (key: string) => {
    if (answerRecord?.isChecked) return; // locked after check unless reset
    setSelectedPGK(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const handleSelectBS = (stmtId: string, val: boolean) => {
    if (answerRecord?.isChecked) return;
    setStatementAnswers(prev => ({
      ...prev,
      [stmtId]: val
    }));
  };

  const handleCheckAnswer = () => {
    const rawAnswer = {
      selected: question.type === 'PG' ? selectedPG : selectedPGK,
      statements: statementAnswers
    };
    const evalRes = evaluateAnswer(question, rawAnswer);

    const record: UserAnswerRecord = {
      selected: question.type === 'PG' ? selectedPG : selectedPGK,
      statements: statementAnswers,
      isChecked: true,
      isCorrect: evalRes.isCorrect,
      score: evalRes.score,
      submittedAt: new Date().toISOString()
    };

    onSaveAnswer(question.id, record);
    // Automatically reveal explanation for immediate learning feedback
    setShowExplanation(true);
  };

  const handleResetCurrent = () => {
    setSelectedPG('');
    setSelectedPGK([]);
    setStatementAnswers({});
    setShowExplanation(false);
    onSaveAnswer(question.id, {
      selected: question.type === 'PG' ? '' : [],
      statements: {},
      isChecked: false,
      isCorrect: false,
      score: 0
    });
  };

  const isChecked = !!answerRecord?.isChecked;
  const isCorrect = isChecked && !!answerRecord?.isCorrect;
  const isPartial = isChecked && !answerRecord?.isCorrect && (answerRecord?.score || 0) > 0;
  const isWrong = isChecked && (answerRecord?.score || 0) === 0;

  // Validation to enable Check Answer button
  const canCheck = 
    (question.type === 'PG' && selectedPG !== '') ||
    (question.type === 'PGK' && selectedPGK.length > 0) ||
    (question.type === 'BS' && Object.keys(statementAnswers).length === (question.statements?.length || 3));

  return (
    <article className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Top Meta: Number, Category, Question Type & Cognitive Level */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-emerald-700 text-white font-extrabold text-base flex items-center justify-center shadow-sm">
            {question.id}
          </span>
          <div>
            <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
              {question.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Soal {currentIndex + 1} dari {totalQuestions}</span>
              <span>·</span>
              <span className="font-semibold text-slate-700">Tipe: {
                question.type === 'PG' ? 'Pilihan Ganda (1 Jawaban)' :
                question.type === 'PGK' ? 'Pilihan Ganda Kompleks (Multi Jawaban)' :
                'Tabel Benar - Salah (3 Pernyataan)'
              }</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200">
            {question.cognitiveLevel}
          </span>
        </div>
      </div>

      {/* Indikator Kemampuan */}
      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
        <span className="font-bold text-slate-800">Indikator Kemampuan: </span>
        <span>{question.abilityIndicator}</span>
      </div>

      {/* Narasi Audio Pengantar Mister Jo */}
      <div className="mt-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Arahan Awal Mister Jo:
            </span>
            <p className="text-sm text-slate-700 italic mt-0.5 leading-relaxed">
              "{question.ttsIntroduction}"
            </p>
          </div>
        </div>
        <button
          onClick={handlePlayIntroductionAudio}
          className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Dengarkan Arahan</span>
        </button>
      </div>

      {/* STIMULUS UTAMA */}
      <div className="mt-6 p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-2">
          STIMULUS KASUS EKONOMI
        </span>
        <div className="text-slate-800 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
          {question.stimulus.text}
        </div>

        {/* Tables in Stimulus */}
        {question.stimulus.tables && question.stimulus.tables.map((table, tIdx) => (
          <div key={tIdx} className="mt-4 overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-800">
              {table.title}
            </div>
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                <tr>
                  {table.headers.map((h, hIdx) => (
                    <th key={hIdx} className="px-3.5 py-2.5 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3.5 py-2.5 text-slate-700 font-medium">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Custom SVG Economic Chart */}
        {question.stimulus.chart && (
          <EconomicChart config={question.stimulus.chart} />
        )}
      </div>

      {/* PERTANYAAN (QUESTION PROMPT) */}
      <div className="mt-6 mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
          {question.questionPrompt}
        </h3>
      </div>

      {/* JAWABAN INTERAKTIF BERDASARKAN TIPE SOAL */}

      {/* 1. Tipe PG (Pilihan Ganda Biasa) */}
      {question.type === 'PG' && question.options && (
        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selectedPG === opt.key;
            let optStyle = 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-slate-800 bg-white';
            if (isSelected) {
              optStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600 font-semibold';
            }
            if (isChecked) {
              if (opt.key === question.correctAnswer) {
                optStyle = 'border-emerald-600 bg-emerald-100 text-emerald-950 ring-2 ring-emerald-600 font-bold';
              } else if (isSelected && !isCorrect) {
                optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
              }
            }

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => !isChecked && setSelectedPG(opt.key)}
                disabled={isChecked}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${optStyle}`}
              >
                <span className={`w-8 h-8 rounded-xl text-sm font-black flex items-center justify-center shrink-0 mt-0.5 ${
                  isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {opt.key}
                </span>
                <span className="text-base sm:text-lg leading-relaxed flex-1">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* 2. Tipe PGK (Pilihan Ganda Kompleks) */}
      {question.type === 'PGK' && question.options && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 mb-2">
            💡 Petunjuk: Soal ini memiliki lebih dari satu pernyataan benar. Centang semua opsi yang kamu anggap benar!
          </div>

          {question.options.map((opt) => {
            const isSelected = selectedPGK.includes(opt.key);
            const isCorrectOption = Array.isArray(question.correctAnswer) && question.correctAnswer.includes(opt.key);

            let optStyle = 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-slate-800 bg-white';
            if (isSelected) {
              optStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600 font-semibold';
            }
            if (isChecked) {
              if (isCorrectOption) {
                optStyle = 'border-emerald-600 bg-emerald-100 text-emerald-950 ring-2 ring-emerald-600 font-bold';
              } else if (isSelected && !isCorrectOption) {
                optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
              }
            }

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleTogglePGK(opt.key)}
                disabled={isChecked}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${optStyle}`}
              >
                <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isSelected ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {isSelected && <span className="text-xs font-black">✓</span>}
                </div>
                <div className="flex-1">
                  <span className="font-bold text-slate-900 mr-2">{opt.key}.</span>
                  <span className="text-base sm:text-lg leading-relaxed">{opt.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* 3. Tipe Benar-Salah (3 Pernyataan Independen) */}
      {question.type === 'BS' && question.statements && (
        <div className="space-y-4">
          <div className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 mb-2">
            💡 Tentukan BENAR atau SALAH secara mandiri untuk setiap pernyataan di bawah ini!
          </div>

          {question.statements.map((stmt, sIdx) => {
            const currentVal = statementAnswers[stmt.id];
            const isAnswered = currentVal !== undefined;
            const isStmtCorrect = isChecked && currentVal === stmt.correctAnswer;

            return (
              <div
                key={stmt.id}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-1">
                    Pernyataan {sIdx + 1}
                  </span>
                  <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                    {stmt.text}
                  </p>
                  {isChecked && (
                    <div className="mt-2 text-xs font-semibold flex items-center gap-2">
                      <span className={isStmtCorrect ? 'text-emerald-700' : 'text-rose-600'}>
                        {isStmtCorrect ? '✓ Jawabanmu Tepat' : '✕ Jawabanmu Kurang Tepat'}
                      </span>
                      <span>· Kunci: {stmt.correctAnswer ? 'BENAR' : 'SALAH'}</span>
                    </div>
                  )}
                </div>

                {/* Dual Buttons: BENAR vs SALAH */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSelectBS(stmt.id, true)}
                    disabled={isChecked}
                    className={`px-4 py-2.5 rounded-xl font-extrabold text-sm transition-all cursor-pointer ${
                      currentVal === true
                        ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700'
                        : 'bg-white border border-slate-300 text-slate-700 hover:border-emerald-600'
                    }`}
                  >
                    BENAR
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectBS(stmt.id, false)}
                    disabled={isChecked}
                    className={`px-4 py-2.5 rounded-xl font-extrabold text-sm transition-all cursor-pointer ${
                      currentVal === false
                        ? 'bg-rose-700 text-white shadow-sm ring-2 ring-rose-700'
                        : 'bg-white border border-slate-300 text-slate-700 hover:border-rose-600'
                    }`}
                  >
                    SALAH
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FEEDBACK STATUS AFTER CHECKING */}
      {isChecked && (
        <div className={`mt-6 p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          isCorrect
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : isPartial
            ? 'bg-amber-50 border-amber-300 text-amber-950'
            : 'bg-rose-50 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
            ) : isPartial ? (
              <AlertCircle className="w-8 h-8 text-amber-600 shrink-0" />
            ) : (
              <XCircle className="w-8 h-8 text-rose-600 shrink-0" />
            )}
            <div>
              <h4 className="text-lg font-black tracking-tight">
                {isCorrect ? 'JAWABAN BENAR! LUAR BIASA!' : isPartial ? 'SEBAGIAN BENAR (SKOR PARSIAL)' : 'JAWABAN BELUM TEPAT'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Skor yang kamu dapatkan: <strong className="font-extrabold text-slate-900">{Math.round((answerRecord?.score || 0) * 100)} / 100</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>{showExplanation ? 'Tutup Pembahasan' : 'Buka Pembahasan Lengkap'}</span>
            </button>
            <button
              onClick={() => setShowQuickStrategy(true)}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>STRATEGI CEPAT</span>
            </button>
          </div>
        </div>
      )}

      {/* ACTION BAR: Check Answer, Retry, Strategi Cepat */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {!isChecked ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!canCheck}
              className={`px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-md cursor-pointer ${
                canCheck
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20 active:scale-98'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              Periksa Jawaban
            </button>
          ) : (
            <button
              onClick={handleResetCurrent}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kerjakan Soal Ini</span>
            </button>
          )}

          {/* Shortcut strategy trigger */}
          <button
            onClick={() => setShowQuickStrategy(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Strategi Cepat Mister Jo</span>
          </button>
        </div>

        {/* Previous and Next Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
              currentIndex === 0
                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={onNext}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md shadow-emerald-700/20 transition-colors cursor-pointer"
            >
              <span>Selesai & Evaluasi</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* IN-DEPTH EXPLANATION ACCORDION PANEL */}
      {showExplanation && (
        <ExplanationPanel
          explanation={question.explanation}
          questionNumber={question.id}
          questionType={question.type}
          onOpenQuickStrategy={() => setShowQuickStrategy(true)}
        />
      )}

      {/* STRATEGI CEPAT MODAL */}
      <QuickStrategyModal
        strategy={question.quickStrategy}
        questionNumber={question.id}
        isOpen={showQuickStrategy}
        onClose={() => setShowQuickStrategy(false)}
      />
    </article>
  );
};
