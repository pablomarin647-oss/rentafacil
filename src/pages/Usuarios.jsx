import { useState, useEffect } from "react";
import { getUsuarios, saveUsuarios } from "../services/storage";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({ nombre: "", documento: "", telefono: "" });

  useEffect(() => {
    setUsuarios(getUsuarios());
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const guardar = (e) => {
    e.preventDefault();

    const nuevo = { ...form, id: Date.now() };
    const data = [...usuarios, nuevo];

    saveUsuarios(data);
    setUsuarios(data);

    setForm({ nombre: "", documento: "", telefono: "" });
  };

  return (
    <div className="container">
      <h2>Usuarios</h2>

      <form className="form-container" onSubmit={guardar}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input name="documento" placeholder="Documento" onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>👤 {u.nombre} - {u.documento} - {u.telefono}</li>
        ))}
      </ul>
    </div>
  );
}