import { vocabulary } from "../data/vocabulary"

export function generateQuiz(language: "english" | "french" | "german") {

  const words = vocabulary[language]

  return words
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((item) => {

      const options = [
        item.translation,
        ...words
          .filter(w => w.translation !== item.translation)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(w => w.translation)
      ]

      return {
        question: item.word,
        correct: item.translation,
        options: options.sort(() => Math.random() - 0.5)
      }
    })
}