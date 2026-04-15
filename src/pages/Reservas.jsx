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
      alert("Usuario o vehículo no válido");
      return;
    }

    const nuevaReserva = {
      id: Date.now(),
      usuarioNombre: usuario.nombre,
      vehiculoNombre: vehiculo.placa,
      fechaInicio: form.fechaInicio,
      fechaFin: form.fechaFin
    };

    const data = [...reservas, nuevaReserva];

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
    <div className="container">
      <h2>Reservas</h2>

      {/* FORMULARIO */}
      <form className="form-container" onSubmit={guardar}>
        <select
          name="usuarioId"
          value={form.usuarioId}
          onChange={handleChange}
        >
          <option value="">Seleccionar usuario</option>
          {usuarios.map((u) => (
            <option key={u.id} value={u.id}>
              {u.nombre}
            </option>
          ))}
        </select>

        <select
          name="vehiculoId"
          value={form.vehiculoId}
          onChange={handleChange}
        >
          <option value="">Seleccionar vehículo</option>
          {vehiculos.map((v) => (
            <option key={v.id} value={v.id}>
              {v.placa}
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

        <button type="submit">Crear reserva</button>
      </form>

      {/* LISTA */}
      <ul>
        {reservas.map((r) => (
          <li key={r.id}>
            👤 {r.usuarioNombre} <br />
            🚗 {r.vehiculoNombre} <br />
            📅 {r.fechaInicio} → {r.fechaFin}

            <button onClick={() => eliminar(r.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}