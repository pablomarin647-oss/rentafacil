export default function Register() {
  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <input className="form-control mb-2" placeholder="Nombre" />
      <input className="form-control mb-2" placeholder="Correo" />
      <input className="form-control mb-2" type="password" placeholder="Contraseña" />
      <button className="btn btn-primary">Registrarse</button>
    </div>
  );
}