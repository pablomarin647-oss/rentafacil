import { useState, useEffect } from "react";
import { getUsuarios, saveUsuarios } from "../services/storage";

export default function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({ nombre: "", documento: "", telefono: "" });
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
      data = data.map((u, i) => (i === editId ? form : u));
    } else {
      data.push(form);
    }

    saveUsuarios(data);
    setUsuarios(data);
    setForm({ nombre: "", documento: "", telefono: "" });
    setEditId(null);
  };

  const eliminar = (index) => {
    const data = usuarios.filter((_, i) => i !== index);
    saveUsuarios(data);
    setUsuarios(data);
  };

  const editar = (index) => {
    setForm(usuarios[index]);
    setEditId(index);
  };

  return (
    <div>
      <h2>Usuarios</h2>

      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="documento" placeholder="Documento" value={form.documento} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />

      <button onClick={guardar}>{editId !== null ? "Editar" : "Agregar"}</button>

      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>
            {u.nombre} - {u.documento} - {u.telefono}
            <button onClick={() => editar(i)}>Editar</button>
            <button onClick={() => eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}