import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          RentaFácil 🚗
        </h1>

        <p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#cbd5f5" }}>
          Alquila vehículos de forma rápida, segura y moderna
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link
            to="/login"
            className="btn"
            style={{
              background: "#3b82f6",
              color: "white",
              margin: "10px",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Iniciar Sesión
          </Link>

          <Link
            to="/register"
            className="btn"
            style={{
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              margin: "10px",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Registrarse
          </Link>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="container text-center mt-5">
        <h2 className="mb-4">¿Qué puedes hacer?</h2>

        <div className="row">
          {[
            { icon: "🚗", title: "Vehículos", text: "Administra vehículos fácilmente" },
            { icon: "👤", title: "Usuarios", text: "Gestiona los usuarios del sistema" },
            { icon: "📅", title: "Reservas", text: "Controla las reservas" }
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div style={{
                background: "#ffffff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                marginBottom: "20px"
              }}>
                <h3>{item.icon}</h3>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INFO */}
      <div style={{
        background: "#f1f5f9",
        padding: "60px 20px",
        textAlign: "center",
        marginTop: "40px"
      }}>
        <h3>Plataforma moderna y fácil de usar</h3>
        <p style={{ color: "#475569", marginTop: "10px" }}>
          Diseñada para mejorar la gestión de alquiler de vehículos de manera eficiente.
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "15px"
      }}>
        <p className="mb-0">© 2026 RentaFácil pablo marin</p>
      </div>

    </div>
  );
}