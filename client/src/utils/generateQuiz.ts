import { vocabulary } from "../data/vocabulary"

export function generateQuiz(language: "en" | "fr" | "de") {

  const words = vocabulary[language]

  return words
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((item) => {

      return {
        question: item.question,
        correct: item.answer,
        options: item.options.sort(() => Math.random() - 0.5)
      }
    })
}