import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { login, register } from "../auth";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
        try {
            await login(email, password);
            alert("Login correcto");
        }
        catch (error) {
            alert("Error al iniciar sesión");
        }
    };
    const handleRegister = async () => {
        try {
            await register(email, password);
            alert("Usuario creado");
        }
        catch (error) {
            alert("Error al registrarse");
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Login" }), _jsx("input", { type: "email", placeholder: "email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: handleLogin, children: "Login" }), _jsx("button", { onClick: handleRegister, children: "Register" })] }));
}
