import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Quiz from "./components/Quiz"
import PhrasesPage from "./pages/PhrasesPage"
import Home from "./pages/Home"
import Login from "./pages/Login"

function Navbar() {
  const location = useLocation()
  const links = [
    { to: "/", label: "🏠 Home" },
    { to: "/phrases", label: "🗣️ Phrases" },
    { to: "/quiz", label: "🧠 Quiz" },
    { to: "/login", label: "👤 Login" },
  ]

  return (
    <nav style={{
      display: "flex",
      gap: 4,
      padding: "12px 24px",
      background: "var(--bg-card, #fff)",
      borderBottom: "1px solid var(--border)",
      boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      alignItems: "center",
    }}>
      <span style={{ fontWeight: 700, fontSize: 18, color: "#2563eb", marginRight: 16 }}>✈️ LTP</span>
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          style={{
            padding: "6px 14px",
            borderRadius: 10,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: location.pathname === l.to ? 600 : 400,
            background: location.pathname === l.to ? "rgba(37,99,235,0.1)" : "transparent",
            color: location.pathname === l.to ? "#2563eb" : "var(--text)",
            transition: "all 0.2s",
          }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/phrases" element={<PhrasesPage />} />
      </Routes>
    </BrowserRouter>
  )
}