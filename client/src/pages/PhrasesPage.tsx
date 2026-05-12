import { travelPhrases } from "../data/travelPhrases"
import { useState } from "react"

type Category = keyof typeof travelPhrases

const LANG_CONFIG: Record<string, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  es: { label: "Español", flag: "🇪🇸" },
  fr: { label: "Français", flag: "🇫🇷" },
  de: { label: "Deutsch", flag: "🇩🇪" },
}

const CATEGORY_CONFIG: Record<Category, { label: string; icon: string; image: string; gradient: string }> = {
  airport: {
    label: "Airport",
    icon: "✈️",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&h=220&fit=crop",
    gradient: "linear-gradient(135deg, rgba(14,165,233,0.85), rgba(37,99,235,0.7))",
  },
  hotel: {
    label: "Hotel",
    icon: "🏨",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=220&fit=crop",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.85), rgba(234,88,12,0.7))",
  },
  restaurant: {
    label: "Restaurant",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=220&fit=crop",
    gradient: "linear-gradient(135deg, rgba(239,68,68,0.85), rgba(220,38,38,0.7))",
  },
  emergency: {
    label: "Emergency",
    icon: "🚨",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=700&h=220&fit=crop",
    gradient: "linear-gradient(135deg, rgba(100,116,139,0.85), rgba(51,65,85,0.7))",
  },
}

const TAB_COLORS: Record<Category, string> = {
  airport: "#2563eb",
  hotel: "#f59e0b",
  restaurant: "#ef4444",
  emergency: "#64748b",
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
      title={`Listen in ${LANG_CONFIG[lang].label}`}
      style={{
        background: playing ? "#2563eb" : "transparent",
        border: `1px solid ${playing ? "#2563eb" : "#e2e8f0"}`,
        borderRadius: 8,
        padding: "4px 10px",
        cursor: "pointer",
        fontSize: 14,
        transition: "all 0.2s",
        color: playing ? "#fff" : "#94a3b8",
        minWidth: 36,
      }}
    >
      {playing ? "⏹" : "🔊"}
    </button>
  )
}

export default function PhrasesPage() {
  const [category, setCategory] = useState<Category>("airport")
  const current = CATEGORY_CONFIG[category]

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>

      {/* Header */}
      <h1 style={{ fontSize: 32, marginBottom: 8, color: "var(--text-h)" }}>
        Travel Phrases 🌍
      </h1>
      <p style={{ color: "var(--text)", marginBottom: 24, fontSize: 15 }}>
        Essential phrases for your trip in 4 languages
      </p>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {(Object.keys(CATEGORY_CONFIG) as Category[]).map((key) => (
          <button
            key={key}
            onClick={() => setCategory(key)}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: `2px solid ${category === key ? TAB_COLORS[key] : "var(--border)"}`,
              background: category === key ? TAB_COLORS[key] : "var(--bg-card, #fff)",
              color: category === key ? "#fff" : "var(--text)",
              cursor: "pointer",
              fontWeight: category === key ? 600 : 400,
              fontSize: 14,
              transition: "all 0.2s",
              boxShadow: category === key ? `0 2px 8px ${TAB_COLORS[key]}44` : "none",
            }}
          >
            {CATEGORY_CONFIG[key].icon} {CATEGORY_CONFIG[key].label}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div
        style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 24,
          height: 200,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={current.image}
          alt={current.label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: current.gradient,
            display: "flex",
            alignItems: "flex-end",
            padding: "20px 24px",
          }}
        >
          <div>
            <span style={{ fontSize: 36 }}>{current.icon}</span>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 700, lineHeight: 1 }}>
              {current.label}
            </div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 4 }}>
              {travelPhrases[category].length} phrases
            </div>
          </div>
        </div>
      </div>

      {/* Frases */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {travelPhrases[category].map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid var(--border)",
              padding: "16px 20px",
              borderRadius: 16,
              background: "var(--bg-card, #fff)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              borderLeft: `4px solid ${TAB_COLORS[category]}`,
            }}
          >
            {(Object.keys(LANG_CONFIG) as (keyof typeof p)[]).map((lang) => (
              <div
                key={lang}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                  paddingBottom: 8,
                  borderBottom: lang !== "de" ? "1px solid var(--border)" : "none",
                }}
              >
                <span style={{ fontSize: 20, width: 28 }}>{LANG_CONFIG[lang as string].flag}</span>
                <span style={{ flex: 1, fontSize: 15, color: "var(--text-h)" }}>{p[lang]}</span>
                <SpeakButton category={category} index={i} lang={lang as string} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}