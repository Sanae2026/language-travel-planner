import Quiz from "./components/Quiz"
import PhrasesPage from "./pages/PhrasesPage"
import { useState } from "react"

export default function App() {
  const [page, setPage] = useState<"quiz" | "phrases">("quiz")

  return (
    <div>
      <nav style={{ display: "flex", gap: 10, padding: 10 }}>
        <button onClick={() => setPage("quiz")}>Quiz</button>
        <button onClick={() => setPage("phrases")}>Travel Phrases</button>
      </nav>

      {page === "quiz" && <Quiz />}
      {page === "phrases" && <PhrasesPage />}
    </div>
  )
}