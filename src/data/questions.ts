import { Question } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const allQuestions: Question[] = [...questionsPart1, ...questionsPart2];

export function getQuestionById(id: number): Question | undefined {
  return allQuestions.find(q => q.id === id);
}

export function getQuestionByIndex(index: number): Question | undefined {
  return allQuestions[index];
}

export const TOTAL_QUESTIONS = allQuestions.length;
