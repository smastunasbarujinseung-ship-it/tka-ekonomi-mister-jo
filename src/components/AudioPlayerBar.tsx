import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Square, ChevronUp, ChevronDown } from 'lucide-react';
import { ttsEngine, TTSState } from '../utils/tts';

export const AudioPlayerBar: React.FC = () => {
  const [ttsState, setTtsState] = useState<TTSState>(ttsEngine.getState());
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const unsubscribe = ttsEngine.subscribe((newState) => {
      setTtsState(newState);
    });
    return unsubscribe;
  }, []);

  if (!ttsState.currentText) {
    return null;
  }

  const isPlaying = ttsState.status === 'playing';
  const isPaused = ttsState.status === 'paused';

  return (
    <aside
      aria-label="Audio Narasi Mister Jo"
      className="fixed bottom-3 right-3 z-30 max-w-lg w-[calc(100vw-1.5rem)] sm:w-auto bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-emerald-500/30 p-3.5 transition-all duration-200"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Mentor Audio Icon & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isPlaying ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-300'
          }`}>
            <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400 tracking-wide">MISTER JO AUDIO</span>
              {isPlaying && (
                <span className="inline-flex items-center gap-0.5" aria-hidden="true">
                  <span className="w-1 h-2.5 bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-3.5 bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2 bg-emerald-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              )}
            </div>
            <p className="text-xs text-slate-200 font-medium truncate max-w-[180px] sm:max-w-xs">
              {ttsState.currentTitle || 'Bimbingan Interaktif'}
            </p>
          </div>
        </div>

        {/* Audio Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {isPlaying ? (
            <button
              onClick={() => ttsEngine.pause()}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              title="Jeda Suara"
              aria-label="Jeda Suara"
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => ttsEngine.resume()}
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              title={isPaused ? "Lanjutkan Suara" : "Putar Suara"}
              aria-label={isPaused ? "Lanjutkan Suara" : "Putar Suara"}
            >
              <Play className="w-4 h-4 fill-current" />
            </button>
          )}

          <button
            onClick={() => ttsEngine.replay()}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            title="Ulangi Narasi"
            aria-label="Ulangi Narasi"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => ttsEngine.stop()}
            className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950/80 text-rose-300 transition-colors"
            title="Hentikan Suara"
            aria-label="Hentikan Suara"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Transcript toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 flex items-center gap-1 transition-colors"
            title="Tampilkan Teks Narasi"
            aria-label="Tampilkan Teks Narasi"
          >
            <span>Teks</span>
            {showTranscript ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Transcript Text Drawer */}
      {showTranscript && (
        <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed max-h-48 overflow-y-auto pr-1">
          <p className="font-semibold text-emerald-400 mb-1">Naskah Penjelasan Mister Jo:</p>
          <p className="italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
            "{ttsState.currentText}"
          </p>
        </div>
      )}
    </aside>
  );
};
