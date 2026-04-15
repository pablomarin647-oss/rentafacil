import { useState, useEffect } from "react";
import { getVehiculos, saveVehiculos } from "../services/storage";

export default function Vehiculo() {
  const [vehiculos, setVehiculos] = useState([]);
  const [form, setForm] = useState({
    placa: "",
    marca: "",
    modelo: ""
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setVehiculos(getVehiculos());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = () => {
    if (!form.placa || !form.marca || !form.modelo) return;

    let data = [...vehiculos];

    if (editId !== null) {
      data = data.map((v) =>
        v.id === editId ? { id: editId, ...form } : v
      );
    } else {
      data.push({ id: Date.now(), ...form });
    }

    saveVehiculos(data);
    setVehiculos(data);
    setForm({ placa: "", marca: "", modelo: "" });
    setEditId(null);
  };

  const eliminar = (id) => {
    const data = vehiculos.filter((v) => v.id !== id);
    saveVehiculos(data);
    setVehiculos(data);
  };

  const editar = (vehiculo) => {
    setForm(vehiculo);
    setEditId(vehiculo.id);
  };

  return (
    <div>
      <h2>Vehículos</h2>

      <input name="placa" value={form.placa} onChange={handleChange} placeholder="Placa" />
      <input name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" />
      <input name="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo" />

      <button onClick={guardar}>
        {editId ? "Editar" : "Agregar"}
      </button>

      <ul>
        {vehiculos.map((v) => (
          <li key={v.id}>
            {v.placa} - {v.marca} - {v.modelo}
            <button onClick={() => editar(v)}>Editar</button>
            <button onClick={() => eliminar(v.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}