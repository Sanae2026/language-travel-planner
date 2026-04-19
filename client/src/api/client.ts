const API_URL = "http://localhost:3000/api";

export type PhraseResponse = {
  language: string;
  phrases: string[];
};

export type QuizResponse = {
  question: string;
  correct: string;
  options: string[];
};

export const getPhrases = async (language: string): Promise<PhraseResponse> => {
  const res = await fetch(`${API_URL}/phrases/${language}`);
  return res.json();
};

export const getQuiz = async (language: string): Promise<QuizResponse> => {
  const res = await fetch(`${API_URL}/phrases/quiz/${language}`);
  return res.json();
};