import { useState } from "react";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [nombre, setNombre] = useState("");

  const agregar = () => {
    setReservas([...reservas, nombre]);
    setNombre("");
  };

  const eliminar = (i) => {
    setReservas(reservas.filter((_, index) => index !== i));
  };

  return (
    <div className="container mt-5">
      <h2>Reservas</h2>

      <input className="form-control mb-2" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <button className="btn btn-success mb-3" onClick={agregar}>Agregar</button>

      <ul className="list-group">
        {reservas.map((r, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            {r}
            <button className="btn btn-danger btn-sm" onClick={()=>eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}