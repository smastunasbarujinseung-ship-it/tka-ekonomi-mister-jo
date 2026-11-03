import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateAnswer, calculateEvaluation } from './scoring';
import { Question } from '../types';

const mockPG: Question = {
  id: 1,
  category: 'Konsep Dasar Ilmu Ekonomi',
  categoryIndex: 1,
  type: 'PG',
  cognitiveLevel: 'HOTS - Penalaran',
  abilityIndicator: 'Menghitung biaya peluang',
  ttsIntroduction: 'Mari cermati soal ini.',
  stimulus: { text: 'Stimulus wacana peluang kerja.' },
  questionPrompt: 'Berapakah biaya peluang?',
  options: [
    { key: 'A', text: 'Rp3.000.000' },
    { key: 'B', text: 'Rp5.000.000' },
    { key: 'C', text: 'Rp7.000.000' },
    { key: 'D', text: 'Rp8.000.000' },
    { key: 'E', text: 'Rp10.000.000' },
  ],
  correctAnswer: 'C',
  explanation: {
    problemUnderstanding: 'Memahami kasus',
    economicConcept: 'Biaya peluang adalah kesempatan terbaik yang dikorbankan',
    steps: ['Pilih nilai tertinggi yang ditinggalkan'],
    optionAnalysis: [{ key: 'C', text: 'Rp7.000.000', isCorrect: true, reason: 'Nilai tertinggi yang dikorbankan' }],
    conclusion: 'Biaya peluang tidak dijumlahkan',
    ttsScript: 'Biaya peluang adalah nilai kesempatan terbaik yang dilepaskan.'
  },
  quickStrategy: {
    title: 'Strategi Cepat',
    shortcut: 'Ambil angka tertinggi yang ditinggalkan',
    ruleOfThumb: 'Jangan dijumlahkan',
    ttsScript: 'Pilih kesempatan terbaik yang ditinggalkan.'
  }
};

const mockPGK: Question = {
  id: 2,
  category: 'Konsep Dasar Ilmu Ekonomi',
  categoryIndex: 1,
  type: 'PGK',
  cognitiveLevel: 'HOTS - Analisis Data',
  abilityIndicator: 'Mengidentifikasi arus circular flow',
  ttsIntroduction: 'Perhatikan diagram alir.',
  stimulus: { text: 'Diagram interaksi 4 sektor' },
  questionPrompt: 'Manakah pernyataan yang benar mengenai interaksi RTK dan RTP?',
  options: [
    { key: 'A', text: 'Pernyataan 1' },
    { key: 'B', text: 'Pernyataan 2' },
    { key: 'C', text: 'Pernyataan 3' },
    { key: 'D', text: 'Pernyataan 4' },
    { key: 'E', text: 'Pernyataan 5' },
  ],
  correctAnswer: ['A', 'C', 'D'],
  explanation: {
    problemUnderstanding: 'Periksa aliran faktor produksi dan pasar barang',
    economicConcept: 'Circular Flow Diagram',
    steps: ['Analisis A, C, D'],
    conclusion: 'RTK menerima balas jasa',
    ttsScript: 'RTK menyediakan faktor produksi.'
  },
  quickStrategy: {
    title: 'Strategi Cepat',
    shortcut: 'Ingat arus barang berlawanan dengan arus uang',
    ruleOfThumb: 'Arus uang mengalir ke penyedia',
    ttsScript: 'Arus uang selalu mengalir berlawanan arah arus barang.'
  }
};

const mockBS: Question = {
  id: 3,
  category: 'Permintaan dan Penawaran',
  categoryIndex: 2,
  type: 'BS',
  cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
  abilityIndicator: 'Menentukan pergeseran kurva penawaran',
  ttsIntroduction: 'Cermati fenomena panen raya.',
  stimulus: { text: 'Kasus harga cabai saat panen raya' },
  questionPrompt: 'Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
  statements: [
    { id: 's1', text: 'Pernyataan 1 benar', correctAnswer: true, explanation: 'Karena penawaran bertambah' },
    { id: 's2', text: 'Pernyataan 2 salah', correctAnswer: false, explanation: 'Karena kurva geser ke kanan' },
    { id: 's3', text: 'Pernyataan 3 benar', correctAnswer: true, explanation: 'Karena harga keseimbangan turun' },
  ],
  explanation: {
    problemUnderstanding: 'Kenaikan pasokan menggeser kurva penawaran',
    economicConcept: 'Hukum Penawaran dan Permintaan',
    steps: ['S0 bergeser ke S1'],
    statementAnalysis: [
      { id: 's1', statement: 'Pernyataan 1', isCorrect: true, reason: 'Alasan 1' },
      { id: 's2', statement: 'Pernyataan 2', isCorrect: false, reason: 'Alasan 2' },
      { id: 's3', statement: 'Pernyataan 3', isCorrect: true, reason: 'Alasan 3' },
    ],
    conclusion: 'Kurva penawaran bergeser ke kanan bawah',
    ttsScript: 'Panen raya menambah penawaran dan menurunkan harga pasar.'
  },
  quickStrategy: {
    title: 'Strategi Cepat',
    shortcut: 'Panen berlimpah = S geser kanan = P turun',
    ruleOfThumb: 'Faktor alam memengaruhi sisi penawaran',
    ttsScript: 'Penawaran bertambah menggeser kurva ke kanan dan menurunkan harga.'
  }
};

test('PG evaluation handles correct and incorrect picks', () => {
  const resCorrect = evaluateAnswer(mockPG, { selected: 'C' });
  assert.equal(resCorrect.isCorrect, true);
  assert.equal(resCorrect.score, 1);

  const resWrong = evaluateAnswer(mockPG, { selected: 'A' });
  assert.equal(resWrong.isCorrect, false);
  assert.equal(resWrong.score, 0);
});

test('PGK evaluation correctly compares combinations and gives accurate score', () => {
  const exact = evaluateAnswer(mockPGK, { selected: ['A', 'C', 'D'] });
  assert.equal(exact.isCorrect, true);
  assert.equal(exact.score, 1);

  const partial = evaluateAnswer(mockPGK, { selected: ['A', 'C'] });
  assert.equal(partial.isCorrect, false);
  assert.equal(partial.score, 0.67);

  const withWrong = evaluateAnswer(mockPGK, { selected: ['A', 'B'] });
  assert.equal(withWrong.isCorrect, false);
  // 1 correct (A), 1 wrong (B) -> (1 - 1)/3 = 0
  assert.equal(withWrong.score, 0);
});

test('Benar-Salah evaluation scores each statement independently', () => {
  const allCorrect = evaluateAnswer(mockBS, {
    statements: { s1: true, s2: false, s3: true }
  });
  assert.equal(allCorrect.isCorrect, true);
  assert.equal(allCorrect.score, 1);

  const twoCorrect = evaluateAnswer(mockBS, {
    statements: { s1: true, s2: true, s3: true }
  });
  assert.equal(twoCorrect.isCorrect, false);
  assert.equal(twoCorrect.score, 0.67);
});

test('calculateEvaluation calculates tiers and performance accurately', () => {
  const questions = [mockPG, mockPGK, mockBS];
  const answers = {
    1: { selected: 'C', isChecked: true, isCorrect: true, score: 1 },
    2: { selected: ['A', 'C', 'D'], isChecked: true, isCorrect: true, score: 1 },
    3: { statements: { s1: true, s2: false, s3: true }, isChecked: true, isCorrect: true, score: 1 },
  };

  const evalResult = calculateEvaluation(questions, answers);
  assert.equal(evalResult.totalScore, 100);
  assert.equal(evalResult.tier, 'EKONOM JENIUS');
  assert.equal(evalResult.correctCount, 3);
});
