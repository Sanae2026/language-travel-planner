import { useState, useMemo } from "react"
import { phrases, LangKey } from "../data/vocabulary"

const LANG_LABELS: Record<LangKey, string> = {
  en: "🇬🇧 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
}

const OTHER_LANGS: Record<LangKey, LangKey[]> = {
  en: ["es", "fr", "de"],
  es: ["en", "fr", "de"],
  fr: ["en", "es", "de"],
  de: ["en", "es", "fr"],
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuiz(nativeLang: LangKey, targetLang: LangKey) {
  const selected = shuffle(phrases).slice(0, 10)
  return selected.map((correct) => {
    const wrongs = shuffle(phrases.filter((p) => p[targetLang] !== correct[targetLang]))
      .slice(0, 3)
      .map((p) => p[targetLang])
    return {
      question: correct[nativeLang],
      answer: correct[targetLang],
      options: shuffle([correct[targetLang], ...wrongs]),
      category: correct.category,
    }
  })
}

type Question = ReturnType<typeof buildQuiz>[0]

export default function Quiz() {
  const [nativeLang, setNativeLang] = useState<LangKey>("en")
  const [targetLang, setTargetLang] = useState<LangKey>("es")
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<{ correct: boolean; answer: string; given: string }[]>([])

  const start = () => {
    setQuestions(buildQuiz(nativeLang, targetLang))
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
    setAnswers([])
    setStarted(true)
  }

  const answer = (opt: string) => {
    if (selected) return
    setSelected(opt)
    const correct = opt === questions[index].answer
    if (correct) setScore((s) => s + 1)
    setAnswers((a) => [...a, { correct, answer: questions[index].answer, given: opt }])
  }

  const next = () => {
    if (index + 1 >= questions.length) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }

  const getButtonStyle = (opt: string): React.CSSProperties => {
    if (!selected) return styles.button
    if (opt === questions[index].answer) return { ...styles.button, ...styles.correct }
    if (opt === selected) return { ...styles.button, ...styles.wrong }
    return { ...styles.button, opacity: 0.4 }
  }

  const getResultEmoji = () => {
    const pct = score / 10
    if (pct === 1) return "🏆"
    if (pct >= 0.8) return "🎉"
    if (pct >= 0.6) return "👍"
    if (pct >= 0.4) return "📚"
    return "💪"
  }

  const getResultMsg = () => {
    const pct = score / 10
    if (pct === 1) return "Perfect score!"
    if (pct >= 0.8) return "Great job!"
    if (pct >= 0.6) return "Good effort!"
    if (pct >= 0.4) return "Keep practicing!"
    return "Don't give up!"
  }

  // START SCREEN
  if (!started) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Language Quiz 🌍</h1>
        <div style={styles.card}>
          <p style={{ color: "var(--text)", marginBottom: 24, fontSize: 15 }}>
            Choose your languages and test your knowledge with 10 questions!
          </p>

          <div style={styles.langRow}>
            <div style={styles.langGroup}>
              <label style={styles.label}>I speak</label>
              <select
                style={styles.select}
                value={nativeLang}
                onChange={(e) => {
                  const nl = e.target.value as LangKey
                  setNativeLang(nl)
                  setTargetLang(OTHER_LANGS[nl][0])
                }}
              >
                {(Object.keys(LANG_LABELS) as LangKey[]).map((l) => (
                  <option key={l} value={l}>{LANG_LABELS[l]}</option>
                ))}
              </select>
            </div>
            <div style={{ fontSize: 24, marginTop: 16 }}>→</div>
            <div style={styles.langGroup}>
              <label style={styles.label}>I'm learning</label>
              <select
                style={styles.select}
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value as LangKey)}
              >
                {OTHER_LANGS[nativeLang].map((l) => (
                  <option key={l} value={l}>{LANG_LABELS[l]}</option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={start} style={styles.startBtn}>
            Start Quiz →
          </button>
        </div>
      </div>
    )
  }

  // RESULTS SCREEN
  if (finished) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Results</h1>
        <div style={{ ...styles.card, textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>{getResultEmoji()}</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text-h)", marginBottom: 4 }}>
            {score} / 10
          </div>
          <div style={{ fontSize: 16, color: "var(--text)", marginBottom: 24 }}>
            {getResultMsg()} ({Math.round((score / 10) * 100)}%)
          </div>

          {/* Progress bar */}
          <div style={{ background: "var(--border)", borderRadius: 8, height: 10, marginBottom: 24 }}>
            <div style={{
              background: score >= 8 ? "#22c55e" : score >= 5 ? "#2563eb" : "#ef4444",
              width: `${(score / 10) * 100}%`,
              height: "100%",
              borderRadius: 8,
              transition: "width 0.5s",
            }} />
          </div>

          {/* Answer review */}
          <div style={{ textAlign: "left", marginBottom: 24 }}>
            {questions.map((q, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
                fontSize: 14,
              }}>
                <span>{answers[i]?.correct ? "✅" : "❌"}</span>
                <div>
                  <div style={{ color: "var(--text-h)", fontWeight: 500 }}>{q.question}</div>
                  {!answers[i]?.correct && (
                    <div style={{ color: "#22c55e", fontSize: 13 }}>→ {q.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={start} style={styles.startBtn}>
              Try Again
            </button>
            <button onClick={() => setStarted(false)} style={{ ...styles.startBtn, background: "var(--border)", color: "var(--text-h)" }}>
              Change Language
            </button>
          </div>
        </div>
      </div>
    )
  }

  // QUIZ SCREEN
  const current = questions[index]
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Language Quiz 🌍</h1>
      <div style={styles.card}>

        {/* Progress */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: "var(--text)" }}>Question {index + 1} / 10</span>
          <span style={{ fontSize: 13, color: "var(--text)" }}>Score: {score}</span>
        </div>
        <div style={{ background: "var(--border)", borderRadius: 8, height: 6, marginBottom: 20 }}>
          <div style={{
            background: "#2563eb",
            width: `${((index + 1) / 10) * 100}%`,
            height: "100%",
            borderRadius: 8,
            transition: "width 0.3s",
          }} />
        </div>

        <span style={styles.category}>{current.category}</span>
        <p style={styles.instruction}>Translate to {LANG_LABELS[targetLang]}:</p>
        <h2 style={styles.question}>{current.question}</h2>

        <div style={styles.options}>
          {current.options.map((opt, i) => (
            <button key={i} onClick={() => answer(opt)} style={getButtonStyle(opt)}>
              {opt}
            </button>
          ))}
        </div>

        {selected && (
          <div style={styles.feedback}>
            <span>{selected === current.answer ? "✅ Correct!" : `❌ ${current.answer}`}</span>
            <button onClick={next} style={styles.nextBtn}>
              {index + 1 >= questions.length ? "See Results →" : "Next →"}
            </button>
          </div>
        )}
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
    padding: "20px",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: "var(--text-h)",
  },
  langRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  langGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  select: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid var(--border, #ddd)",
    fontSize: 15,
    background: "var(--bg, #fff)",
    color: "var(--text-h, #000)",
    cursor: "pointer",
  },
  card: {
    background: "var(--bg-card, #fff)",
    border: "1px solid var(--border, #ddd)",
    padding: 28,
    borderRadius: 20,
    width: 420,
    maxWidth: "100%",
    boxShadow: "var(--shadow)",
  },
  category: {
    fontSize: 12,
    background: "rgba(37,99,235,0.1)",
    color: "#2563eb",
    padding: "2px 10px",
    borderRadius: 20,
    display: "inline-block",
    marginBottom: 12,
  },
  instruction: {
    fontSize: 13,
    color: "#888",
    margin: "0 0 8px",
  },
  question: {
    fontSize: 22,
    marginBottom: 20,
    color: "var(--text-h)",
    textAlign: "center",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  button: {
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid var(--border, #ddd)",
    background: "var(--bg, #fff)",
    color: "var(--text-h, #000)",
    cursor: "pointer",
    fontSize: 15,
    transition: "all 0.2s",
    textAlign: "left",
  },
  correct: {
    background: "#dcfce7",
    border: "1px solid #86efac",
    color: "#166534",
  },
  wrong: {
    background: "#fee2e2",
    border: "1px solid #fca5a5",
    color: "#991b1b",
  },
  feedback: {
    marginTop: 16,
    fontSize: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  nextBtn: {
    padding: "8px 20px",
    borderRadius: 8,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
  },
  startBtn: {
    padding: "12px 28px",
    borderRadius: 12,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 700,
    width: "100%",
    marginTop: 8,
  },
}