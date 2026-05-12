import { travelPhrases } from "../data/travelPhrases"
import { useState } from "react"

type Category = keyof typeof travelPhrases

const LANG_CONFIG: Record<string, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  es: { label: "Español", flag: "🇪🇸" },
  fr: { label: "Français", flag: "🇫🇷" },
  de: { label: "Deutsch", flag: "🇩🇪" },
}

function SpeakButton({ category, index, lang }: { category: string; index: number; lang: string }) {
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const src = `/audio/${category}_${index + 1}_${lang}.mp3`
    const audio = new Audio(src)
    setPlaying(true)
    audio.play()
    audio.onended = () => setPlaying(false)
    audio.onerror = () => setPlaying(false)
  }

  return (
    <button
      onClick={play}
      title={`Escuchar en ${LANG_CONFIG[lang].label}`}
      style={{
        background: playing ? "#aa3bff" : "transparent",
        border: `1px solid ${playing ? "#aa3bff" : "#ddd"}`,
        borderRadius: 6,
        padding: "2px 8px",
        cursor: "pointer",
        fontSize: 14,
        transition: "all 0.2s",
        color: playing ? "#fff" : "#666",
      }}
    >
      {playing ? "⏹" : "🔊"}
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
                <SpeakButton category={category} index={i} lang={lang as string} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}