import { Question, UserAnswerRecord, EvaluationResult, CategorySummary } from '../types';

/**
 * Evaluates a single question's answer and returns score (0 to 1) and correctness.
 */
export function evaluateAnswer(question: Question, answer: {
  selected?: string | string[];
  statements?: Record<string, boolean>;
}): { isCorrect: boolean; score: number } {
  if (question.type === 'PG') {
    const selected = answer.selected;
    const isCorrect = typeof selected === 'string' && selected === question.correctAnswer;
    return {
      isCorrect,
      score: isCorrect ? 1 : 0
    };
  }

  if (question.type === 'PGK') {
    const selected = Array.isArray(answer.selected) ? answer.selected : [];
    const correctList = Array.isArray(question.correctAnswer) ? question.correctAnswer : [];
    
    // Sort and compare arrays for exact match
    const sortedSelected = [...selected].sort();
    const sortedCorrect = [...correctList].sort();
    const isExact = sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((val, idx) => val === sortedCorrect[idx]);

    // Calculate score: accurate selections with deduction for false positives
    const correctSelectedCount = selected.filter(k => correctList.includes(k)).length;
    const wrongSelectedCount = selected.filter(k => !correctList.includes(k)).length;
    
    let score = 0;
    if (correctList.length > 0) {
      score = Math.max(0, (correctSelectedCount - wrongSelectedCount) / correctList.length);
    }
    // Round to 2 decimals
    score = Math.round(score * 100) / 100;

    return {
      isCorrect: isExact,
      score: isExact ? 1 : score
    };
  }

  if (question.type === 'BS') {
    const stmts = question.statements || [];
    const userStmts = answer.statements || {};
    
    if (stmts.length === 0) return { isCorrect: false, score: 0 };

    let correctCount = 0;
    stmts.forEach(stmt => {
      if (userStmts[stmt.id] === stmt.correctAnswer) {
        correctCount += 1;
      }
    });

    const isAllCorrect = correctCount === stmts.length;
    const score = Math.round((correctCount / stmts.length) * 100) / 100;

    return {
      isCorrect: isAllCorrect,
      score
    };
  }

  return { isCorrect: false, score: 0 };
}

export const CATEGORY_NAMES: Record<number, string> = {
  1: 'Konsep Dasar Ilmu Ekonomi',
  2: 'Permintaan, Penawaran & Keseimbangan Pasar',
  3: 'Pendapatan Nasional & Pembangunan Ekonomi',
  4: 'Ketenagakerjaan',
  5: 'Indeks Harga & Inflasi',
  6: 'Bank Sentral & Kebijakan Moneter',
  7: 'Kebijakan Fiskal & Perpajakan',
  8: 'Badan Usaha & Koperasi',
  9: 'Perdagangan Internasional',
  10: 'Akuntansi Dasar'
};

/**
 * Calculates overall evaluation from answers map and all questions.
 */
export function calculateEvaluation(
  questions: Question[],
  answers: Record<number, UserAnswerRecord>
): EvaluationResult {
  const totalQuestions = questions.length;
  let totalScoreRaw = 0;
  let correctCount = 0;
  let partialCount = 0;
  let incorrectCount = 0;
  let answeredCount = 0;

  // Category tracking
  const catMap: Record<number, { total: number; completed: number; correct: number; score: number }> = {};
  for (let i = 1; i <= 10; i++) {
    catMap[i] = { total: 0, completed: 0, correct: 0, score: 0 };
  }

  questions.forEach(q => {
    const cat = q.categoryIndex;
    if (catMap[cat]) {
      catMap[cat].total += 1;
    }

    const ans = answers[q.id];
    if (ans && ans.isChecked) {
      answeredCount += 1;
      totalScoreRaw += ans.score;

      if (catMap[cat]) {
        catMap[cat].completed += 1;
        catMap[cat].score += ans.score;
        if (ans.isCorrect) {
          catMap[cat].correct += 1;
        }
      }

      if (ans.isCorrect) {
        correctCount += 1;
      } else if (ans.score > 0) {
        partialCount += 1;
      } else {
        incorrectCount += 1;
      }
    }
  });

  // Total score scaled to 100
  const totalScore = totalQuestions > 0 ? Math.round((totalScoreRaw / totalQuestions) * 100) : 0;
  const percentage = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  // Determine tier
  let tier: EvaluationResult['tier'] = 'PERLU PENGUATAN KONSEP';
  let tierColor = 'text-rose-600 bg-rose-50 border-rose-200';
  let tierDescription = 'Kamu perlu memperkuat dasar-dasar konsep ekonomi dan memperbanyak latihan penalaran stimulus.';
  let misterJoMessage = 'Jangan berkecil hati! Mempelajari ekonomi adalah proses membangun cara berpikir. Cermati kembali setiap pembahasan dan strategi cepat dari Mister Jo, lalu coba kerjakan ulang soal-soal tersebut.';

  if (totalScore >= 90) {
    tier = 'EKONOM JENIUS';
    tierColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    tierDescription = 'Luar biasa! Penguasaan materi, penalaran matematis, dan analisis datamu berada pada level tertinggi.';
    misterJoMessage = 'Selamat! Kamu telah membuktikan kemampuan berpikir kritis seorang ekonom sejati. Kamu sangat siap menghadapi TKA Ekonomi 2026 dengan hasil maksimal!';
  } else if (totalScore >= 80) {
    tier = 'ANALIS EKONOMI ANDAL';
    tierColor = 'text-teal-700 bg-teal-50 border-teal-300';
    tierDescription = 'Sangat baik! Daya analitis dan kemampuan menghubungkan data dengan konsep ekonomi sudah sangat matang.';
    misterJoMessage = 'Bagus sekali! Kamu memiliki intuisi ekonomi yang tajam. Pertahankan fokusmu dan teliti sedikit lagi pada perhitungan kompleks untuk mencapai nilai sempurna!';
  } else if (totalScore >= 70) {
    tier = 'CALON EKONOM HEBAT';
    tierColor = 'text-cyan-700 bg-cyan-50 border-cyan-300';
    tierDescription = 'Kemampuanmu sudah cukup solid, hanya membutuhkan sedikit peningkatan pada soal-soal analisis grafik dan perhitungan.';
    misterJoMessage = 'Pencapaian yang menjanjikan! Pelajari lebih lanjut bagian strategi cepat Mister Jo untuk memangkas waktu pengerjaan dan meminimalkan kesalahan.';
  } else if (totalScore >= 60) {
    tier = 'TERUS BERLATIH';
    tierColor = 'text-amber-700 bg-amber-50 border-amber-300';
    tierDescription = 'Kamu sudah memahami konsep dasar, namun masih sering terkecoh pada stimulus data dan pilihan jawaban pengecoh.';
    misterJoMessage = 'Teruslah berlatih! Kuncinya adalah tidak terburu-buru. Baca grafik dan tabel dengan saksama sebelum melompat ke kesimpulan.';
  }

  // Build category summaries
  const categorySummaries: CategorySummary[] = Object.keys(catMap).map(key => {
    const idx = Number(key);
    const data = catMap[idx];
    const catPercentage = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
    return {
      categoryIndex: idx,
      categoryName: CATEGORY_NAMES[idx] || `Bagian ${idx}`,
      totalQuestions: data.total,
      completedQuestions: data.completed,
      correctQuestions: data.correct,
      totalScore: Math.round(data.score * 10) / 10,
      percentage: catPercentage
    };
  });

  // Sort categories to find strengths & weaknesses
  const completedCategories = categorySummaries.filter(c => c.completedQuestions > 0);
  const sortedByPerf = [...completedCategories].sort((a, b) => b.percentage - a.percentage);

  const strongestCategories = sortedByPerf.slice(0, 3).filter(c => c.percentage >= 60).map(c => c.categoryName);
  const weakestCategories = [...sortedByPerf].reverse().slice(0, 3).filter(c => c.percentage < 75).map(c => c.categoryName);

  const recommendation = weakestCategories.length > 0
    ? `Prioritaskan penguatan materi pada: ${weakestCategories.join(', ')}. Pelajari kembali grafik dan analisis kasus pada topik tersebut.`
    : 'Hebat! Penguasaan materimu merata di seluruh bagian. Pertahankan konsistensi belajarmu!';

  const ttsSummary = `Hasil evaluasi belajarmu telah dihitung. Total skormu adalah ${totalScore} dari 100 dengan kategori ${tier}. ` +
    `Kamu telah menjawab dengan tepat sebanyak ${correctCount} soal dari total ${totalQuestions} soal. ` +
    misterJoMessage + ' ' + recommendation;

  return {
    totalScore,
    correctCount,
    partialCount,
    incorrectCount,
    answeredCount,
    totalQuestions,
    percentage,
    tier,
    tierColor,
    tierDescription,
    misterJoMessage,
    categorySummaries,
    strongestCategories,
    weakestCategories,
    recommendation,
    ttsSummary
  };
}
