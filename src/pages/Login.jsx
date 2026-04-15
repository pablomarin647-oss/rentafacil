import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("usuario"));

    if (user && user.correo === correo && user.pass === pass) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={login}>
        <input placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}