import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ padding: 12, display: "flex", gap: 12, borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/phrases">Phrases</Link>
    </nav>
  )
}