import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import PhrasesPage from "./pages/PhrasesPage";
import Login from "./pages/Login";
export default function App() {
    return (_jsxs(BrowserRouter, { children: [_jsxs("nav", { style: { display: "flex", gap: 10, padding: 10 }, children: [_jsx(Link, { to: "/", children: "Login" }), _jsx(Link, { to: "/quiz", children: "Quiz" }), _jsx(Link, { to: "/phrases", children: "Travel Phrases" })] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/quiz", element: _jsx(Quiz, {}) }), _jsx(Route, { path: "/phrases", element: _jsx(PhrasesPage, {}) })] })] }));
}
