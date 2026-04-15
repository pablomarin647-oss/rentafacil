import { useState, useEffect } from "react";
import { getUsuarios, saveUsuarios } from "../services/storage";

export default function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    telefono: ""
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setUsuarios(getUsuarios());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = () => {
    if (!form.nombre || !form.documento || !form.telefono) return;

    let data = [...usuarios];

    if (editId !== null) {
      data = data.map((u) =>
        u.id === editId ? { id: editId, ...form } : u
      );
    } else {
      data.push({ id: Date.now(), ...form });
    }

    saveUsuarios(data);
    setUsuarios(data);
    setForm({ nombre: "", documento: "", telefono: "" });
    setEditId(null);
  };

  const eliminar = (id) => {
    const data = usuarios.filter((u) => u.id !== id);
    saveUsuarios(data);
    setUsuarios(data);
  };

  const editar = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  return (
    <div>
      <h2>Usuarios</h2>

      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="documento" value={form.documento} onChange={handleChange} placeholder="Documento" />
      <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" />

      <button onClick={guardar}>
        {editId ? "Editar" : "Agregar"}
      </button>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} - {u.documento} - {u.telefono}
            <button onClick={() => editar(u)}>Editar</button>
            <button onClick={() => eliminar(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}