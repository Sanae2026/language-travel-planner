import { useState, useCallback } from "react"
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

function buildQuestion(nativeLang: LangKey, targetLang: LangKey, index: number) {
  const shuffled = shuffle(phrases)
  const correct = shuffled[index % shuffled.length]

  // Get 3 wrong options from other phrases
  const wrongs = shuffle(shuffled.filter((_, i) => i !== index % shuffled.length))
    .slice(0, 3)
    .map((p) => p[targetLang])

  const options = shuffle([correct[targetLang], ...wrongs])

  return {
    question: correct[nativeLang],
    answer: correct[targetLang],
    options,
    category: correct.category,
  }
}

export default function Quiz() {
  const [nativeLang, setNativeLang] = useState<LangKey>("en")
  const [targetLang, setTargetLang] = useState<LangKey>("es")
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [shuffledPhrases] = useState(() => shuffle(phrases))

  const current = buildQuestion(nativeLang, targetLang, index)

  const answer = (opt: string) => {
    if (selected) return
    setSelected(opt)
    setTotal((t) => t + 1)
    if (opt === current.answer) setScore((s) => s + 1)
  }

  const next = () => {
    setSelected(null)
    setIndex((i) => i + 1)
  }

  const reset = (nl: LangKey, tl: LangKey) => {
    setNativeLang(nl)
    setTargetLang(tl)
    setIndex(0)
    setScore(0)
    setTotal(0)
    setSelected(null)
  }

  const getButtonStyle = (opt: string): React.CSSProperties => {
    if (!selected) return styles.button
    if (opt === current.answer) return { ...styles.button, ...styles.correct }
    if (opt === selected) return { ...styles.button, ...styles.wrong }
    return { ...styles.button, opacity: 0.5 }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Language Quiz 🌍</h1>

      {/* Language selectors */}
      <div style={styles.langRow}>
        <div style={styles.langGroup}>
          <label style={styles.label}>I speak</label>
          <select
            style={styles.select}
            value={nativeLang}
            onChange={(e) => {
              const nl = e.target.value as LangKey
              const tl = OTHER_LANGS[nl][0]
              reset(nl, tl)
            }}
          >
            {(Object.keys(LANG_LABELS) as LangKey[]).map((l) => (
              <option key={l} value={l}>{LANG_LABELS[l]}</option>
            ))}
          </select>
        </div>

        <div style={{ fontSize: 24 }}>→</div>

        <div style={styles.langGroup}>
          <label style={styles.label}>I'm learning</label>
          <select
            style={styles.select}
            value={targetLang}
            onChange={(e) => reset(nativeLang, e.target.value as LangKey)}
          >
            {OTHER_LANGS[nativeLang].map((l) => (
              <option key={l} value={l}>{LANG_LABELS[l]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <span style={styles.category}>{current.category}</span>
        <p style={styles.instruction}>
          Translate to {LANG_LABELS[targetLang]}:
        </p>
        <h2 style={styles.question}>{current.question}</h2>

        <div style={styles.options}>
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(opt)}
              style={getButtonStyle(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {selected && (
          <div style={styles.feedback}>
            {selected === current.answer ? "✅ Correct!" : `❌ The answer was: ${current.answer}`}
            <button onClick={next} style={styles.nextBtn}>
              Next →
            </button>
          </div>
        )}

        <div style={styles.score}>
          Score: <strong>{score}</strong> / {total}
          {total > 0 && (
            <span style={{ marginLeft: 8, color: "#888", fontSize: 14 }}>
              ({Math.round((score / total) * 100)}%)
            </span>
          )}
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
    padding: "20px",
    fontFamily: "system-ui",
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
    background: "var(--bg, #fff)",
    border: "1px solid var(--border, #ddd)",
    padding: 28,
    borderRadius: 16,
    width: 380,
    maxWidth: "100%",
    boxShadow: "var(--shadow)",
    textAlign: "center",
  },
  category: {
    fontSize: 12,
    background: "var(--accent-bg, #f0e8ff)",
    color: "var(--accent, #aa3bff)",
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
    background: "#aa3bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
  },
  score: {
    marginTop: 20,
    fontSize: 18,
    color: "var(--text)",
  },
}