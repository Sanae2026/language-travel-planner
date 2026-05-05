import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (_jsxs("nav", { style: { padding: 12, display: "flex", gap: 12, borderBottom: "1px solid #ccc" }, children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/quiz", children: "Quiz" }), _jsx(Link, { to: "/phrases", children: "Phrases" })] }));
}
