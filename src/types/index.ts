export type QuestionType = 'PG' | 'PGK' | 'BS';

export type CognitiveLevel = 
  | 'HOTS - Penalaran'
  | 'HOTS - Analisis Data'
  | 'HOTS - Evaluasi Kebijakan'
  | 'HOTS - Pemecahan Masalah';

export interface QuestionTable {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  note?: string;
}

export type ChartType = 
  | 'demand_supply_shift' 
  | 'circular_flow' 
  | 'lorenz_curve' 
  | 'gdp_growth' 
  | 'inflation_bar' 
  | 'unemployment_stats' 
  | 'trade_balance' 
  | 'accounting_t_account'
  | 'ceiling_floor_price';

export interface EconomicChartConfig {
  type: ChartType;
  title: string;
  caption: string;
  data?: any;
}

export interface StatementItem {
  id: string;
  text: string;
  correctAnswer: boolean; // true = BENAR, false = SALAH
  explanation: string;
}

export interface OptionItem {
  key: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string;
}

export interface OptionAnalysisItem {
  key: string;
  text: string;
  isCorrect: boolean;
  reason: string;
}

export interface StatementAnalysisItem {
  id: string;
  statement: string;
  isCorrect: boolean;
  reason: string;
}

export interface QuestionExplanation {
  problemUnderstanding: string; // A. Memahami Permasalahan
  economicConcept: string;      // B. Mengidentifikasi Konsep Ekonomi
  steps: string[];              // C. Langkah Penyelesaian
  optionAnalysis?: OptionAnalysisItem[]; // D. Analisis Pilihan Jawaban (untuk PG & PGK)
  statementAnalysis?: StatementAnalysisItem[]; // D. Analisis Pernyataan (untuk Benar-Salah)
  conclusion: string;           // E. Kesimpulan Konsep
  ttsScript: string;            // Audio narration script
}

export interface QuickStrategy {
  title: string;
  shortcut: string;
  ruleOfThumb: string;
  ttsScript: string;
}

export interface Question {
  id: number; // 1 to 30
  category: string;
  categoryIndex: number; // 1 to 10
  type: QuestionType;
  cognitiveLevel: CognitiveLevel;
  abilityIndicator: string;
  ttsIntroduction: string;
  stimulus: {
    text: string;
    tables?: QuestionTable[];
    chart?: EconomicChartConfig;
  };
  questionPrompt: string;
  options?: OptionItem[]; // For PG and PGK (A, B, C, D, E)
  statements?: StatementItem[]; // For Benar-Salah (3 statements)
  correctAnswer?: string | string[]; // Single string for PG ('C'), array of strings for PGK (['B', 'D'])
  explanation: QuestionExplanation;
  quickStrategy: QuickStrategy;
}

export interface UserAnswerRecord {
  selected?: string | string[]; // string for PG, string[] for PGK
  statements?: Record<string, boolean>; // id -> boolean for Benar-Salah
  isChecked: boolean;
  isCorrect: boolean;
  score: number; // 0 to 1
  submittedAt?: string;
}

export interface AppProgress {
  answers: Record<number, UserAnswerRecord>;
  unlockedExplanations: number[];
  unlockedQuickStrategies: number[];
  currentQuestionIndex: number;
  lastUpdated: string;
}

export interface CategorySummary {
  categoryIndex: number;
  categoryName: string;
  totalQuestions: number;
  completedQuestions: number;
  correctQuestions: number;
  totalScore: number;
  percentage: number;
}

export interface EvaluationResult {
  totalScore: number; // 0 to 100
  correctCount: number;
  partialCount: number;
  incorrectCount: number;
  answeredCount: number;
  totalQuestions: number;
  percentage: number;
  tier: 'EKONOM JENIUS' | 'ANALIS EKONOMI ANDAL' | 'CALON EKONOM HEBAT' | 'TERUS BERLATIH' | 'PERLU PENGUATAN KONSEP';
  tierColor: string;
  tierDescription: string;
  misterJoMessage: string;
  categorySummaries: CategorySummary[];
  strongestCategories: string[];
  weakestCategories: string[];
  recommendation: string;
  ttsSummary: string;
}
