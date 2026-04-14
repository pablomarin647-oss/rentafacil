import { useState, useEffect } from "react";
import { getVehiculos, saveVehiculos } from "../services/storage";

export default function Vehiculo() {
  const [vehiculos, setVehiculos] = useState([]);
  const [form, setForm] = useState({ placa: "", marca: "", modelo: "" });
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
      data = data.map((v, i) => (i === editId ? form : v));
    } else {
      data.push(form);
    }

    saveVehiculos(data);
    setVehiculos(data);
    setForm({ placa: "", marca: "", modelo: "" });
    setEditId(null);
  };

  const eliminar = (index) => {
    const data = vehiculos.filter((_, i) => i !== index);
    saveVehiculos(data);
    setVehiculos(data);
  };

  const editar = (index) => {
    setForm(vehiculos[index]);
    setEditId(index);
  };

  return (
    <div>
      <h2>Vehículos</h2>

      <input name="placa" placeholder="Placa" value={form.placa} onChange={handleChange} />
      <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} />
      <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} />

      <button onClick={guardar}>{editId !== null ? "Editar" : "Agregar"}</button>

      <ul>
        {vehiculos.map((v, i) => (
          <li key={i}>
            {v.placa} - {v.marca} - {v.modelo}
            <button onClick={() => editar(i)}>Editar</button>
            <button onClick={() => eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}