import { useState, useEffect } from "react";
import { getUsuarios, getVehiculos, getReservas, saveReservas } from "../services/storage";

export default function Reservas() {
  const [usuarios, setUsuarios] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [reservas, setReservas] = useState([]);

  const [form, setForm] = useState({
    usuario: "",
    vehiculo: "",
    fechaInicio: "",
    fechaFin: "",
    valor: ""
  });

  useEffect(() => {
    setUsuarios(getUsuarios());
    setVehiculos(getVehiculos());
    setReservas(getReservas());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = () => {
    const data = [...reservas, form];
    saveReservas(data);
    setReservas(data);
    setForm({ usuario: "", vehiculo: "", fechaInicio: "", fechaFin: "", valor: "" });
  };

  const eliminar = (index) => {
    const data = reservas.filter((_, i) => i !== index);
    saveReservas(data);
    setReservas(data);
  };

  return (
    <div>
      <h2>Reservas</h2>

      {/* USUARIOS */}
      <select name="usuario" onChange={handleChange}>
        <option>Seleccionar usuario</option>
        {usuarios.map((u, i) => (
          <option key={i} value={u.nombre}>
            {u.nombre}
          </option>
        ))}
      </select>

      {/* VEHICULOS */}
      <select name="vehiculo" onChange={handleChange}>
        <option>Seleccionar vehículo</option>
        {vehiculos.map((v, i) => (
          <option key={i} value={v.placa}>
            {v.marca} - {v.placa}
          </option>
        ))}
      </select>

      <input type="date" name="fechaInicio" onChange={handleChange} />
      <input type="date" name="fechaFin" onChange={handleChange} />
      <input name="valor" placeholder="Valor" onChange={handleChange} />

      <button onClick={guardar}>Crear reserva</button>

      <ul>
        {reservas.map((r, i) => (
          <li key={i}>
            {r.usuario} - {r.vehiculo} - {r.fechaInicio} → {r.fechaFin} - ${r.valor}
            <button onClick={() => eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}