import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { travelPhrases } from "../data/travelPhrases";
import { useState } from "react";
export default function PhrasesPage() {
    const [category, setCategory] = useState("airport");
    return (_jsxs("div", { style: { padding: 20, maxWidth: 700, margin: "0 auto" }, children: [_jsx("h1", { children: "Travel Phrases \u2708\uFE0F" }), _jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), children: [_jsx("option", { value: "airport", children: "Airport" }), _jsx("option", { value: "hotel", children: "Hotel" }), _jsx("option", { value: "restaurant", children: "Restaurant" }), _jsx("option", { value: "emergency", children: "Emergency" })] }), _jsx("div", { style: { marginTop: 20 }, children: travelPhrases[category].map((p, i) => (_jsxs("div", { style: {
                        border: "1px solid #ddd",
                        padding: 12,
                        marginBottom: 10,
                        borderRadius: 8,
                    }, children: [_jsxs("p", { children: [_jsx("b", { children: "EN:" }), " ", p.en] }), _jsxs("p", { children: [_jsx("b", { children: "ES:" }), " ", p.es] }), _jsxs("p", { children: [_jsx("b", { children: "FR:" }), " ", p.fr] }), _jsxs("p", { children: [_jsx("b", { children: "DE:" }), " ", p.de] })] }, i))) })] }));
}
