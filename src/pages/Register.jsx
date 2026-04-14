import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const registrar = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !pass) {
      alert("Completa todos los campos");
      return;
    }

    const usuario = { nombre, correo, pass };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Registro exitoso");

    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>

      <form onSubmit={registrar}>
        <input
          className="form-control mb-2"
          placeholder="Nombre"
          onChange={(e)=>setNombre(e.target.value)}
        />

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

        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}