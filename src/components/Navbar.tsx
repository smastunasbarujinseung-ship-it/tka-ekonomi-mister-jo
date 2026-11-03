import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'quiz' | 'guide' | 'progress';
  onSelectTab: (tab: 'home' | 'quiz' | 'guide' | 'progress') => void;
  answeredCount: number;
  totalQuestions: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  answeredCount,
  totalQuestions
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                EKONOMI JENIUS
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold text-emerald-700 ml-2 py-0.5 px-2 bg-emerald-50 rounded-md border border-emerald-200/60">
                TKA 2026
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: 4 Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <button
            onClick={() => onSelectTab('home')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentTab === 'home'
                ? 'text-emerald-700 border-b-2 border-emerald-600'
                : 'hover:text-slate-900'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => onSelectTab('quiz')}
            className={`whitespace-nowrap transition-colors py-1 flex items-center gap-1.5 ${
              currentTab === 'quiz'
                ? 'text-emerald-700 border-b-2 border-emerald-600'
                : 'hover:text-slate-900'
            }`}
          >
            <span>Latihan 30 Soal</span>
            {answeredCount > 0 && (
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">
                {answeredCount}/{totalQuestions}
              </span>
            )}
          </button>
          <button
            onClick={() => onSelectTab('guide')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentTab === 'guide'
                ? 'text-emerald-700 border-b-2 border-emerald-600'
                : 'hover:text-slate-900'
            }`}
          >
            Panduan Belajar
          </button>
          <button
            onClick={() => onSelectTab('progress')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentTab === 'progress'
                ? 'text-emerald-700 border-b-2 border-emerald-600'
                : 'hover:text-slate-900'
            }`}
          >
            Progres Belajar
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectTab(currentTab === 'quiz' ? 'progress' : 'quiz')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-xl shadow-md shadow-emerald-700/20 transition-all whitespace-nowrap cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{answeredCount > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
