import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (email && pass) {
      localStorage.setItem("auth", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Completa los campos");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={login}>
        <input className="form-control mb-2" placeholder="Correo" onChange={(e)=>setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Contraseña" onChange={(e)=>setPass(e.target.value)} />
        <button className="btn btn-success">Entrar</button>
      </form>
    </div>
  );
}