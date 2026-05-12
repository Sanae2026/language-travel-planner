import { Link } from "react-router-dom"

export default function Home() {
  const cards = [
    {
      to: "/phrases",
      icon: "🗣️",
      title: "Travel Phrases",
      desc: "Essential phrases for airport, hotel, restaurant & emergencies in 4 languages",
      color: "#2563eb",
      bg: "rgba(37,99,235,0.08)",
    },
    {
      to: "/quiz",
      icon: "🧠",
      title: "Language Quiz",
      desc: "Test your vocabulary and improve your language skills with interactive quizzes",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.08)",
    },
  ]

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 16px", textAlign: "center" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
        borderRadius: 24,
        padding: "48px 32px",
        marginBottom: 40,
        boxShadow: "0 8px 32px rgba(37,99,235,0.3)",
      }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>✈️</div>
        <h1 style={{ color: "#fff", fontSize: 36, margin: "0 0 12px", fontWeight: 700 }}>
          Language Travel Planner
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, margin: "0 0 28px" }}>
          Speak like a local in English, Spanish, French & German
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/phrases" style={{
            background: "#fff",
            color: "#1d4ed8",
            padding: "12px 28px",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 16,
          }}>
            Browse Phrases →
          </Link>
          <Link to="/quiz" style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 16,
            border: "1px solid rgba(255,255,255,0.3)",
          }}>
            Take a Quiz
          </Link>
        </div>
      </div>

      {/* Languages */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
        {["🇬🇧 English", "🇪🇸 Español", "🇫🇷 Français", "🇩🇪 Deutsch"].map((lang) => (
          <div key={lang} style={{
            padding: "8px 20px",
            borderRadius: 20,
            border: "1px solid var(--border)",
            background: "var(--bg-card, #fff)",
            fontSize: 15,
            fontWeight: 500,
            color: "var(--text-h)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}>
            {lang}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            style={{
              textDecoration: "none",
              flex: "1 1 280px",
              maxWidth: 320,
              background: "var(--bg-card, #fff)",
              border: `1px solid var(--border)`,
              borderRadius: 20,
              padding: "28px 24px",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              transition: "transform 0.2s, box-shadow 0.2s",
              borderTop: `4px solid ${card.color}`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"
            }}
          >
            <div style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: card.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              marginBottom: 16,
            }}>
              {card.icon}
            </div>
            <div style={{ fontSize: 19, fontWeight: 700, color: "var(--text-h)", marginBottom: 8 }}>
              {card.title}
            </div>
            <div style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6 }}>
              {card.desc}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}