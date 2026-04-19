import { useEffect, useState } from "react";
import { getQuiz } from "../api/client";

export default function Quiz() {
  const [quiz, setQuiz] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<null | "correct" | "wrong">(null);

  const loadQuiz = () => {
    getQuiz("english").then(setQuiz);
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  const answer = (option: string) => {
    if (option === quiz.correct) {
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback(null);
      loadQuiz();
    }, 800);
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz</h2>
      <h3>{quiz.question}</h3>

      {quiz.options.map((opt: string, i: number) => (
        <button
          key={i}
          onClick={() => answer(opt)}
          style={{
            display: "block",
            margin: "8px 0",
            padding: "10px",
            width: "100%",
            background:
              feedback &&
              ((opt === quiz.correct && feedback === "correct") ||
                (opt !== quiz.correct && feedback === "wrong"))
                ? opt === quiz.correct
                  ? "lightgreen"
                  : "salmon"
                : "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          {opt}
        </button>
      ))}

      <p>Puntuación: {score}</p>
    </div>
  );
}