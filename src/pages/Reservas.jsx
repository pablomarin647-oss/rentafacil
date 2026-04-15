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

  const calcularDias = (i, f) => {
    const a = new Date(i);
    const b = new Date(f);
    const diff = Math.ceil((b - a) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const guardar = () => {
    if (
      !form.usuarioId ||
      !form.vehiculoId ||
      !form.fechaInicio ||
      !form.fechaFin
    ) {
      alert("Completa todos los campos");
      return;
    }

    const usuario = usuarios.find(
      (u) => String(u.id) === String(form.usuarioId)
    );

    const vehiculo = vehiculos.find(
      (v) => String(v.id) === String(form.vehiculoId)
    );

    if (!usuario || !vehiculo) {
      alert("Usuario o vehículo inválido");
      return;
    }

    const dias = calcularDias(form.fechaInicio, form.fechaFin);
    const valor = dias * (vehiculo.precio || 50000);

    const nueva = {
      id: Date.now(),
      usuarioId: usuario.id,
      usuarioNombre: usuario.nombre,
      vehiculoId: vehiculo.id,
      vehiculoNombre: `${vehiculo.marca} - ${vehiculo.placa}`,
      fechaInicio: form.fechaInicio,
      fechaFin: form.fechaFin,
      dias,
      valor
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

  const eliminar = (id) => {
    const data = reservas.filter((r) => r.id !== id);
    saveReservas(data);
    setReservas(data);
  };

  return (
    <div>
      <h2>Reservas</h2>

      {/* USUARIOS */}
      <select name="usuarioId" value={form.usuarioId} onChange={handleChange}>
        <option value="">Seleccionar usuario</option>
        {usuarios.map((u) => (
          <option key={u.id} value={u.id}>
            {u.nombre}
          </option>
        ))}
      </select>

      {/* VEHICULOS */}
      <select name="vehiculoId" value={form.vehiculoId} onChange={handleChange}>
        <option value="">Seleccionar vehículo</option>
        {vehiculos.map((v) => (
          <option key={v.id} value={v.id}>
            {v.marca} - {v.placa}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="fechaInicio"
        value={form.fechaInicio}
        onChange={handleChange}
      />

      <input
        type="date"
        name="fechaFin"
        value={form.fechaFin}
        onChange={handleChange}
      />

      <button onClick={guardar}>Crear reserva</button>

      <hr />

      <h3>Listado</h3>

      <ul>
        {reservas.map((r) => (
          <li key={r.id}>
            👤 {r.usuarioNombre} <br />
            🚗 {r.vehiculoNombre} <br />
            📅 {r.fechaInicio} → {r.fechaFin} <br />
            💰 ${r.valor} <br />
            <button onClick={() => eliminar(r.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}