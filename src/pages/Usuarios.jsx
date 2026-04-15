import { useState, useEffect } from "react";
import { getUsuarios, saveUsuarios } from "../services/storage";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    telefono: ""
  });

  useEffect(() => {
    setUsuarios(getUsuarios() || []);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.documento || !form.telefono) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      ...form
    };

    const data = [...usuarios, nuevoUsuario];

    saveUsuarios(data);
    setUsuarios(data); // 🔥 ESTO ES LO QUE HACE QUE APAREZCA

    setForm({ nombre: "", documento: "", telefono: "" });
  };

  return (
    <div className="container">
      <h2>Usuarios</h2>

      {/* 🔥 NO TOCAMOS CSS */}
      <form className="form-container" onSubmit={guardar}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          name="documento"
          placeholder="Documento"
          value={form.documento}
          onChange={handleChange}
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        {/* 🔥 IMPORTANTE */}
        <button type="submit">Registrar usuario</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            👤 {u.nombre} - {u.documento} - {u.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}