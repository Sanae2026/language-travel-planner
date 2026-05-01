import Login from "./pages/Login";
import { useState } from "react";
import { login, register } from "../auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login correcto");
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert("Usuario creado");
    } catch (error) {
      alert("Error al registrarse");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}