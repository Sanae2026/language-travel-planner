import Quiz from "./components/Quiz";
import PhrasesPage from "./pages/PhrasesPage";
import Login from "./pages/Login";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState<"quiz" | "phrases" | "login">("login");

  return (
    <div>
      <nav style={{ display: "flex", gap: 10, padding: 10 }}>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("quiz")}>Quiz</button>
        <button onClick={() => setPage("phrases")}>Travel Phrases</button>
      </nav>

      {page === "login" && <Login />}
      {page === "quiz" && <Quiz />}
      {page === "phrases" && <PhrasesPage />}
    </div>
  );
}