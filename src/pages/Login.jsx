import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const userGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (
      userGuardado &&
      userGuardado.correo === correo &&
      userGuardado.pass === pass
    ) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          className="form-control mb-2"
          placeholder="Correo"
          onChange={(e)=>setCorreo(e.target.value)}
        />

        <input
          className="form-control mb-2"
          type="password"
          placeholder="Contraseña"
          onChange={(e)=>setPass(e.target.value)}
        />

        <button className="btn btn-success">Entrar</button>
      </form>
    </div>
  );
}