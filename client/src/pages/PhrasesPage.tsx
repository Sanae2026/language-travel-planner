import { travelPhrases } from "../data/travelPhrases"
import { useState } from "react"

type Category = keyof typeof travelPhrases

const LANG_CONFIG: Record<string, { code: string; label: string; flag: string }> = {
  en: { code: "en-US", label: "English", flag: "🇬🇧" },
  es: { code: "es-ES", label: "Español", flag: "🇪🇸" },
  fr: { code: "fr-FR", label: "Français", flag: "🇫🇷" },
  de: { code: "de-DE", label: "Deutsch", flag: "🇩🇪" },
}

function SpeakButton({ text, lang }: { text: string; lang: string }) {
  const [speaking, setSpeaking] = useState(false)

  const speak = () => {
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = LANG_CONFIG[lang].code
    utterance.rate = 0.9
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      onClick={speak}
      title={`Escuchar en ${LANG_CONFIG[lang].label}`}
      style={{
        background: speaking ? "#aa3bff" : "transparent",
        border: `1px solid ${speaking ? "#aa3bff" : "#ddd"}`,
        borderRadius: 6,
        padding: "2px 8px",
        cursor: "pointer",
        fontSize: 14,
        transition: "all 0.2s",
        color: speaking ? "#fff" : "#666",
      }}
    >
      {speaking ? "⏹" : "🔊"}
    </button>
  )
}

export default function PhrasesPage() {
  const [category, setCategory] = useState<Category>("airport")

  const categories: { key: Category; label: string; icon: string }[] = [
    { key: "airport", label: "Airport", icon: "✈️" },
    { key: "hotel", label: "Hotel", icon: "🏨" },
    { key: "restaurant", label: "Restaurant", icon: "🍽️" },
    { key: "emergency", label: "Emergency", icon: "🚨" },
  ]

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1>Travel Phrases</h1>

      {/* Tabs de categoría */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "1px solid #ddd",
              background: category === c.key ? "#aa3bff" : "transparent",
              color: category === c.key ? "#fff" : "inherit",
              cursor: "pointer",
              fontWeight: category === c.key ? 600 : 400,
              transition: "all 0.2s",
            }}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Frases */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {travelPhrases[category].map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 12,
              background: "var(--bg, #fff)",
            }}
          >
            {(Object.keys(LANG_CONFIG) as (keyof typeof p)[]).map((lang) => (
              <div
                key={lang}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18, width: 28 }}>{LANG_CONFIG[lang as string].flag}</span>
                <span style={{ flex: 1, fontSize: 15 }}>{p[lang]}</span>
                <SpeakButton text={p[lang] as string} lang={lang as string} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
