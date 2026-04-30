import { useState } from "react"
import { vocabulary } from "../data/vocabulary"

type Lang = "en" | "fr" | "de"

export default function Quiz() {
  const [lang, setLang] = useState<Lang>("en")
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const current = vocabulary[lang][index]

  const answer = (opt: string) => {
    if (opt === current.answer) setScore((s) => s + 1)
    setIndex((i) => (i + 1) % vocabulary[lang].length)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Language Quiz 🌍</h1>

      <div style={styles.card}>
        <select
          style={styles.select}
          value={lang}
          onChange={(e) => {
            setLang(e.target.value as Lang)
            setIndex(0)
            setScore(0)
          }}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>

        <h2 style={styles.question}>{current.question}</h2>

        <div style={styles.options}>
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(opt)}
              style={styles.button}
            >
              {opt}
            </button>
          ))}
        </div>

        <div style={styles.score}>
          Score: <strong>{score}</strong>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f5f7ff, #e8ecff)",
    fontFamily: "system-ui",
  },

  title: {
    fontSize: 32,
    marginBottom: 20,
    color: "#1f1f2e",
  },

  card: {
    background: "white",
    padding: 24,
    borderRadius: 16,
    width: 360,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  select: {
    width: "100%",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #ddd",
  },

  question: {
    fontSize: 20,
    marginBottom: 16,
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  button: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    transition: "0.2s",
  },

  score: {
    marginTop: 16,
    fontSize: 18,
  },
}