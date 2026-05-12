import { phrases, LangKey } from "../data/vocabulary"

export function generateQuiz(nativeLang: LangKey, targetLang: LangKey) {
  return phrases
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((phrase) => {
      const wrongs = phrases
        .filter((p) => p[targetLang] !== phrase[targetLang])
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((p) => p[targetLang])

      return {
        question: phrase[nativeLang],
        correct: phrase[targetLang],
        options: [phrase[targetLang], ...wrongs].sort(() => Math.random() - 0.5),
        category: phrase.category,
      }
    })
}
