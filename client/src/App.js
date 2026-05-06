import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Quiz from "./components/Quiz";
import PhrasesPage from "./pages/PhrasesPage";
import Login from "./pages/Login";
import { useState } from "react";
export default function App() {
    const [page, setPage] = useState("login");
    return (_jsxs("div", { children: [_jsxs("nav", { style: { display: "flex", gap: 10, padding: 10 }, children: [_jsx("button", { onClick: () => setPage("login"), children: "Login" }), _jsx("button", { onClick: () => setPage("quiz"), children: "Quiz" }), _jsx("button", { onClick: () => setPage("phrases"), children: "Travel Phrases" })] }), page === "login" && _jsx(Login, {}), page === "quiz" && _jsx(Quiz, {}), page === "phrases" && _jsx(PhrasesPage, {})] }));
}
