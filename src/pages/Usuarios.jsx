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
    setUsuarios(getUsuarios());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.documento || !form.telefono) return;

    const data = [...usuarios, { ...form, id: Date.now() }];

    saveUsuarios(data);
    setUsuarios(data);

    setForm({ nombre: "", documento: "", telefono: "" });
  };

  const eliminar = (id) => {
    const data = usuarios.filter((u) => u.id !== id);
    saveUsuarios(data);
    setUsuarios(data);
  };

  return (
    <div className="container">
      <h2>Usuarios</h2>

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

        <button type="submit">Guardar</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            👤 {u.nombre} - {u.documento} - {u.telefono}
            <button onClick={() => eliminar(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}