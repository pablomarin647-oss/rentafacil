import { useState } from "react";

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [nombre, setNombre] = useState("");

  const agregar = () => {
    if (!nombre) return;
    setVehiculos([...vehiculos, nombre]);
    setNombre("");
  };

  const eliminar = (i) => {
    setVehiculos(vehiculos.filter((_, index) => index !== i));
  };

  return (
    <div className="container mt-5">
      <h2>Vehículos</h2>

      <input className="form-control mb-2" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <button className="btn btn-success mb-3" onClick={agregar}>Agregar</button>

      <ul className="list-group">
        {vehiculos.map((v, i) => (
          <li className="list-group-item d-flex justify-content-between" key={i}>
            {v}
            <button className="btn btn-danger btn-sm" onClick={()=>eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}