import { AppProgress } from '../types';

const STORAGE_KEY = 'ekonomi_jenius_progress_v1';

export const INITIAL_PROGRESS: AppProgress = {
  answers: {},
  unlockedExplanations: [],
  unlockedQuickStrategies: [],
  currentQuestionIndex: 0,
  lastUpdated: new Date().toISOString()
};

export function loadProgress(): AppProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      answers: parsed.answers || {},
      unlockedExplanations: Array.isArray(parsed.unlockedExplanations) ? parsed.unlockedExplanations : [],
      unlockedQuickStrategies: Array.isArray(parsed.unlockedQuickStrategies) ? parsed.unlockedQuickStrategies : [],
      currentQuestionIndex: typeof parsed.currentQuestionIndex === 'number' ? parsed.currentQuestionIndex : 0,
      lastUpdated: parsed.lastUpdated || new Date().toISOString()
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return INITIAL_PROGRESS;
  }
}

export function saveProgress(progress: AppProgress): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const dataToSave: AppProgress = {
      ...progress,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    return true;
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
    return false;
  }
}

export function clearAppProgress(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (err) {
    console.error('Failed to clear app progress:', err);
    return false;
  }
}
