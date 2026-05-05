import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { vocabulary } from "../data/vocabulary";
export default function Quiz() {
    const [lang, setLang] = useState("en");
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const current = vocabulary[lang][index];
    const answer = (opt) => {
        if (opt === current.answer)
            setScore((s) => s + 1);
        setIndex((i) => (i + 1) % vocabulary[lang].length);
    };
    return (_jsxs("div", { style: styles.container, children: [_jsx("h1", { style: styles.title, children: "Language Quiz \uD83C\uDF0D" }), _jsxs("div", { style: styles.card, children: [_jsxs("select", { style: styles.select, value: lang, onChange: (e) => {
                            setLang(e.target.value);
                            setIndex(0);
                            setScore(0);
                        }, children: [_jsx("option", { value: "en", children: "English" }), _jsx("option", { value: "fr", children: "French" }), _jsx("option", { value: "de", children: "German" })] }), _jsx("h2", { style: styles.question, children: current.question }), _jsx("div", { style: styles.options, children: current.options.map((opt, i) => (_jsx("button", { onClick: () => answer(opt), style: styles.button, children: opt }, i))) }), _jsxs("div", { style: styles.score, children: ["Score: ", _jsx("strong", { children: score })] })] })] }));
}
const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7ff, #e8ecff)",
        fontFamily: "system-ui",
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        color: "#1f1f2e",
    },
    card: {
        background: "white",
        padding: 24,
        borderRadius: 16,
        width: 360,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    select: {
        width: "100%",
        padding: 10,
        marginBottom: 16,
        borderRadius: 8,
        border: "1px solid #ddd",
    },
    question: {
        fontSize: 20,
        marginBottom: 16,
    },
    options: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    button: {
        padding: 12,
        borderRadius: 10,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
        transition: "0.2s",
    },
    score: {
        marginTop: 16,
        fontSize: 18,
    },
};
