import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavGrid } from './components/QuestionNavGrid';
import { GuideModal } from './components/GuideModal';
import { ProgressView } from './components/ProgressView';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { allQuestions, TOTAL_QUESTIONS } from './data/questions';
import { AppProgress, UserAnswerRecord } from './types';
import { loadProgress, saveProgress, clearAppProgress, INITIAL_PROGRESS } from './utils/storage';
import { calculateEvaluation } from './utils/scoring';
import { ttsEngine } from './utils/tts';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'guide' | 'progress'>('home');
  const [progress, setProgress] = useState<AppProgress>(INITIAL_PROGRESS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Initialize progress from localStorage
  useEffect(() => {
    const saved = loadProgress();
    setProgress(saved);
    if (saved.currentQuestionIndex >= 0 && saved.currentQuestionIndex < TOTAL_QUESTIONS) {
      setCurrentQuestionIndex(saved.currentQuestionIndex);
    }
    setIsLoaded(true);
  }, []);

  // Save progress on state change
  const handleSaveAnswer = (questionId: number, record: UserAnswerRecord) => {
    const updatedAnswers = {
      ...progress.answers,
      [questionId]: record
    };

    const newProgress: AppProgress = {
      ...progress,
      answers: updatedAnswers,
      currentQuestionIndex,
      lastUpdated: new Date().toISOString()
    };

    setProgress(newProgress);
    saveProgress(newProgress);
  };

  const handleSelectQuestionIndex = (index: number) => {
    if (index >= 0 && index < TOTAL_QUESTIONS) {
      setCurrentQuestionIndex(index);
      const newProgress: AppProgress = {
        ...progress,
        currentQuestionIndex: index
      };
      setProgress(newProgress);
      saveProgress(newProgress);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      handleSelectQuestionIndex(currentQuestionIndex + 1);
    } else {
      setActiveTab('progress');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      handleSelectQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleConfirmReset = () => {
    clearAppProgress();
    setProgress(INITIAL_PROGRESS);
    setCurrentQuestionIndex(0);
    setActiveTab('home');
    ttsEngine.stop();
  };

  const currentQuestion = allQuestions[currentQuestionIndex] || allQuestions[0];
  const evaluation = calculateEvaluation(allQuestions, progress.answers);
  const answeredCount = Object.values(progress.answers).filter(a => a.isChecked).length;
  const hasSavedProgress = answeredCount > 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'guide') {
            setShowGuideModal(true);
          } else {
            setActiveTab(tab);
          }
        }}
        answeredCount={answeredCount}
        totalQuestions={TOTAL_QUESTIONS}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HeroLanding
            onStartQuiz={() => setActiveTab('quiz')}
            onOpenGuide={() => setShowGuideModal(true)}
            onOpenProgress={() => setActiveTab('progress')}
            onConfirmReset={() => setShowResetModal(true)}
            hasSavedProgress={hasSavedProgress}
            answeredCount={answeredCount}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )}

        {activeTab === 'quiz' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Question Main Panel */}
              <div className="lg:col-span-8">
                <QuestionCard
                  question={currentQuestion}
                  currentIndex={currentQuestionIndex}
                  totalQuestions={TOTAL_QUESTIONS}
                  answerRecord={progress.answers[currentQuestion.id]}
                  onSaveAnswer={handleSaveAnswer}
                  onPrev={handlePrevQuestion}
                  onNext={handleNextQuestion}
                  onFinish={() => setActiveTab('progress')}
                />
              </div>

              {/* Sidebar: Question Matrix 1-30 */}
              <aside className="lg:col-span-4 sticky top-22">
                <QuestionNavGrid
                  questions={allQuestions}
                  currentIndex={currentQuestionIndex}
                  onSelectIndex={handleSelectQuestionIndex}
                  answers={progress.answers}
                />
              </aside>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <ProgressView
            evaluation={evaluation}
            onContinueQuiz={() => setActiveTab('quiz')}
            onConfirmReset={() => setShowResetModal(true)}
          />
        )}
      </main>

      {/* Guide Modal */}
      <GuideModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        onStartQuiz={() => {
          setShowGuideModal(false);
          setActiveTab('quiz');
        }}
      />

      {/* Reset Confirmation Modal */}
      <ResetConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirmReset={handleConfirmReset}
      />

      {/* Floating Audio Player for Mister Jo TTS */}
      <AudioPlayerBar />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <strong className="text-slate-800 font-bold">EKONOMI JENIUS – TKA EKONOMI 2026</strong>
            <span className="mx-2">·</span>
            <span>Dibimbing oleh: Mister Jo</span>
          </div>
          <div className="italic text-slate-400">
            "Berpikir Ekonomis, Bernalar Kritis, Siap Menaklukkan TKA!"
          </div>
        </div>
      </footer>
    </div>
  );
}
