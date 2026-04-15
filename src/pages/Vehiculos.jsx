import { useState, useEffect } from "react";
import { getVehiculos, saveVehiculos } from "../services/storage";

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [form, setForm] = useState({ placa: "", marca: "", modelo: "" });

  useEffect(() => {
    setVehiculos(getVehiculos());
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const guardar = (e) => {
    e.preventDefault();

    const nuevo = { ...form, id: Date.now() };
    const data = [...vehiculos, nuevo];

    saveVehiculos(data);
    setVehiculos(data);

    setForm({ placa: "", marca: "", modelo: "" });
  };

  return (
    <div className="container">
      <h2>Vehículos</h2>

      <form className="form-container" onSubmit={guardar}>
        <input name="placa" placeholder="Placa" onChange={handleChange} />
        <input name="marca" placeholder="Marca" onChange={handleChange} />
        <input name="modelo" placeholder="Modelo" onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {vehiculos.map((v) => (
          <li key={v.id}>🚗 {v.placa} - {v.marca} - {v.modelo}</li>
        ))}
      </ul>
    </div>
  );
}