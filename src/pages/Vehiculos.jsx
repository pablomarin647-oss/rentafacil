import { useState, useEffect } from "react";
import { getVehiculos, saveVehiculos } from "../services/storage";

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [form, setForm] = useState({
    placa: "",
    marca: "",
    modelo: ""
  });

  useEffect(() => {
    setVehiculos(getVehiculos() || []);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = (e) => {
    e.preventDefault();

    if (!form.placa || !form.marca || !form.modelo) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoVehiculo = {
      ...form,
      id: Date.now()
    };

    const data = [...vehiculos, nuevoVehiculo];

    saveVehiculos(data);
    setVehiculos(data);

    setForm({ placa: "", marca: "", modelo: "" });
  };

  const eliminar = (id) => {
    const data = vehiculos.filter((v) => v.id !== id);
    saveVehiculos(data);
    setVehiculos(data);
  };

  return (
    <div className="container">
      <h2>Vehículos</h2>

      <form className="form-container" onSubmit={guardar}>
        <input
          name="placa"
          placeholder="Placa"
          value={form.placa}
          onChange={handleChange}
        />

        <input
          name="marca"
          placeholder="Marca"
          value={form.marca}
          onChange={handleChange}
        />

        <input
          name="modelo"
          placeholder="Modelo"
          value={form.modelo}
          onChange={handleChange}
        />

        <button type="submit">Registrar</button>
      </form>

      <ul>
        {vehiculos.map((v) => (
          <li key={v.id}>
            🚗 {v.placa} - {v.marca} - {v.modelo}
            <button onClick={() => eliminar(v.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}