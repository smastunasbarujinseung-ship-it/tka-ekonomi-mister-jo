import test from 'node:test';
import assert from 'node:assert/strict';
import { allQuestions } from './questions';

test('Verify exact 30 questions distribution and structure', () => {
  assert.equal(allQuestions.length, 30, 'Total questions must be exactly 30');

  const pgList = allQuestions.filter(q => q.type === 'PG');
  const pgkList = allQuestions.filter(q => q.type === 'PGK');
  const bsList = allQuestions.filter(q => q.type === 'BS');

  assert.equal(pgList.length, 10, 'Must have exactly 10 PG questions');
  assert.equal(pgkList.length, 10, 'Must have exactly 10 PGK questions');
  assert.equal(bsList.length, 10, 'Must have exactly 10 Benar-Salah questions');

  // Verify IDs 1 to 30 exist uniquely
  const ids = allQuestions.map(q => q.id);
  assert.equal(new Set(ids).size, 30, 'IDs must be unique from 1 to 30');
  for (let i = 1; i <= 30; i++) {
    assert.ok(ids.includes(i), `Question ID ${i} must exist`);
  }

  // Verify all categories (1 to 10) are represented
  const catIndices = new Set(allQuestions.map(q => q.categoryIndex));
  for (let c = 1; c <= 10; c++) {
    assert.ok(catIndices.has(c), `Category ${c} must be present`);
  }

  // Deep check on each question
  allQuestions.forEach(q => {
    assert.ok(q.stimulus.text.length > 20, `Question ${q.id} must have rich stimulus text`);
    assert.ok(q.ttsIntroduction.length > 10, `Question ${q.id} must have unique TTS introduction`);
    assert.ok(q.explanation.problemUnderstanding.length > 5, `Question ${q.id} must have section A`);
    assert.ok(q.explanation.economicConcept.length > 5, `Question ${q.id} must have section B`);
    assert.ok(q.explanation.steps.length > 0, `Question ${q.id} must have steps in section C`);
    assert.ok(q.explanation.conclusion.length > 5, `Question ${q.id} must have section E conclusion`);
    assert.ok(q.explanation.ttsScript.length > 10, `Question ${q.id} must have explanation TTS script`);
    assert.ok(q.quickStrategy.shortcut.length > 5, `Question ${q.id} must have shortcut`);
    assert.ok(q.quickStrategy.ttsScript.length > 10, `Question ${q.id} must have quick strategy TTS script`);

    if (q.type === 'PG') {
      assert.equal(q.options?.length, 5, `PG Question ${q.id} must have 5 options (A-E)`);
      assert.ok(typeof q.correctAnswer === 'string', `PG Question ${q.id} must have string answer`);
    } else if (q.type === 'PGK') {
      assert.equal(q.options?.length, 5, `PGK Question ${q.id} must have 5 options (A-E)`);
      assert.ok(Array.isArray(q.correctAnswer) && q.correctAnswer.length > 1, `PGK Question ${q.id} must have multiple correct answers`);
    } else if (q.type === 'BS') {
      assert.equal(q.statements?.length, 3, `Benar-Salah Question ${q.id} must have exactly 3 statements`);
      q.statements?.forEach(st => {
        assert.equal(typeof st.correctAnswer, 'boolean', `Statement ${st.id} in Question ${q.id} must have boolean answer`);
      });
    }
  });
});
