import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getPhrases } from "../api/client";
export default function PhraseList() {
    const [phrases, setPhrases] = useState([]);
    useEffect(() => {
        getPhrases("english").then((data) => {
            setPhrases(data.phrases);
        });
    }, []);
    return (_jsxs("div", { style: { padding: "20px" }, children: [_jsx("h2", { children: "Frases en ingl\u00E9s" }), phrases.map((phrase, i) => (_jsx("p", { children: phrase }, i)))] }));
}
