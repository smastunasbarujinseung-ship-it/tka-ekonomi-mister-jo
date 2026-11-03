/**
 * Text-to-Speech Engine for Mister Jo - EKONOMI JENIUS
 * Built with Web Speech API (window.speechSynthesis) with support for id-ID voice,
 * queue management, state listeners, and fallback transcript handling.
 */

export type TTSStatus = 'idle' | 'playing' | 'paused' | 'stopped';

export interface TTSState {
  status: TTSStatus;
  currentText: string;
  currentTitle: string;
  isSupported: boolean;
  rate: number; // 0.8 to 1.2
}

type Listener = (state: TTSState) => void;

class TTSEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private listeners: Set<Listener> = new Set();
  private state: TTSState = {
    status: 'idle',
    currentText: '',
    currentTitle: '',
    isSupported: false,
    rate: 1.0,
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.state.isSupported = true;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize Indonesian voices: 'id-ID', 'id_ID', or names containing Indonesian
    const idVoice = voices.find(v => v.lang.toLowerCase().startsWith('id') || v.lang.includes('ID'));
    if (idVoice) {
      this.indonesianVoice = idVoice;
    } else {
      // Fallback: look for general pleasant natural voice or default
      const defaultVoice = voices.find(v => v.default) || voices[0] || null;
      this.indonesianVoice = defaultVoice;
    }
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l({ ...this.state }));
  }

  public speak(text: string, title: string = 'Panduan Mister Jo', rate: number = 1.0) {
    if (!this.synth || !this.state.isSupported) {
      this.state = {
        ...this.state,
        currentText: text,
        currentTitle: title,
        status: 'idle',
      };
      this.notify();
      return;
    }

    // Cancel any ongoing speech to avoid overlapping
    this.stop();

    if (!text || text.trim().length === 0) return;

    this.state = {
      ...this.state,
      currentText: text,
      currentTitle: title,
      status: 'playing',
      rate,
    };
    this.notify();

    // Clean text of markdown characters for cleaner audio
    const cleanText = text
      .replace(/[*#_`~>]/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (this.indonesianVoice) {
      utterance.voice = this.indonesianVoice;
      utterance.lang = this.indonesianVoice.lang || 'id-ID';
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = rate; // pleasant educator pace
    utterance.pitch = 1.02; // warm teacher tone

    utterance.onend = () => {
      this.state.status = 'idle';
      this.notify();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.state.status = 'idle';
      this.notify();
    };

    this.currentUtterance = utterance;

    // Small delay for browser speech synthesis stability
    setTimeout(() => {
      try {
        this.synth?.speak(utterance);
      } catch (err) {
        console.error('Error in speak:', err);
        this.state.status = 'idle';
        this.notify();
      }
    }, 50);
  }

  public pause() {
    if (this.synth && this.state.status === 'playing') {
      this.synth.pause();
      this.state.status = 'paused';
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.state.status === 'paused') {
      this.synth.resume();
      this.state.status = 'playing';
      this.notify();
    } else if (this.state.currentText && this.state.status === 'idle') {
      this.speak(this.state.currentText, this.state.currentTitle, this.state.rate);
    }
  }

  public replay() {
    if (this.state.currentText) {
      this.speak(this.state.currentText, this.state.currentTitle, this.state.rate);
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (err) {
        // ignore
      }
    }
    this.state.status = 'stopped';
    this.notify();
  }

  public setRate(rate: number) {
    this.state.rate = rate;
    this.notify();
    if (this.state.status === 'playing' && this.state.currentText) {
      this.speak(this.state.currentText, this.state.currentTitle, rate);
    }
  }

  public getState(): TTSState {
    return { ...this.state };
  }
}

export const ttsEngine = new TTSEngine();
