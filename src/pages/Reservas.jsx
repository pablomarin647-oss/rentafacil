import { useState, useEffect } from "react";
import {
  getUsuarios,
  getVehiculos,
  getReservas,
  saveReservas
} from "../services/storage";

export default function Reservas() {
  const [usuarios, setUsuarios] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [reservas, setReservas] = useState([]);

  const [form, setForm] = useState({
    usuarioId: "",
    vehiculoId: "",
    fechaInicio: "",
    fechaFin: ""
  });

  useEffect(() => {
    setUsuarios(getUsuarios() || []);
    setVehiculos(getVehiculos() || []);
    setReservas(getReservas() || []);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = (e) => {
    e.preventDefault();

    const usuario = usuarios.find(u => u.id == form.usuarioId);
    const vehiculo = vehiculos.find(v => v.id == form.vehiculoId);

    if (!usuario || !vehiculo) {
      alert("Selecciona usuario y vehículo");
      return;
    }

    const nueva = {
      id: Date.now(),
      usuario: usuario.nombre,
      vehiculo: vehiculo.placa,
      fechaInicio: form.fechaInicio,
      fechaFin: form.fechaFin
    };

    const data = [...reservas, nueva];

    saveReservas(data);
    setReservas(data);

    setForm({
      usuarioId: "",
      vehiculoId: "",
      fechaInicio: "",
      fechaFin: ""
    });
  };

  return (
    <div className="container">
      <h2>Reservas</h2>

      <form className="form-container" onSubmit={guardar}>
        <select name="usuarioId" onChange={handleChange}>
          <option value="">Usuario</option>
          {usuarios.map(u => (
            <option key={u.id} value={u.id}>{u.nombre}</option>
          ))}
        </select>

        <select name="vehiculoId" onChange={handleChange}>
          <option value="">Vehículo</option>
          {vehiculos.map(v => (
            <option key={v.id} value={v.id}>{v.placa}</option>
          ))}
        </select>

        <input type="date" name="fechaInicio" onChange={handleChange} />
        <input type="date" name="fechaFin" onChange={handleChange} />

        <button type="submit">Crear reserva</button>
      </form>

      <ul>
        {reservas.map(r => (
          <li key={r.id}>
            👤 {r.usuario} | 🚗 {r.vehiculo}
          </li>
        ))}
      </ul>
    </div>
  );
}