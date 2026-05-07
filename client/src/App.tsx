import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import PhrasesPage from "./pages/PhrasesPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 10, padding: 10 }}>
        <Link to="/">Login</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/phrases">Travel Phrases</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/phrases" element={<PhrasesPage />} />
      </Routes>
    </BrowserRouter>
  );
}