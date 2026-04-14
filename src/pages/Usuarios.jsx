import { useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");

  const agregar = () => {
    setUsuarios([...usuarios, nombre]);
    setNombre("");
  };

  const eliminar = (i) => {
    setUsuarios(usuarios.filter((_, index) => index !== i));
  };

  return (
    <div className="container mt-5">
      <h2>Usuarios</h2>

      <input className="form-control mb-2" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <button className="btn btn-success mb-3" onClick={agregar}>Agregar</button>

      <ul className="list-group">
        {usuarios.map((u, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            {u}
            <button className="btn btn-danger btn-sm" onClick={()=>eliminar(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}