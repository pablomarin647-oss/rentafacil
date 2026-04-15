import Usuario from "../pages/Usuarios";
import Vehiculos from "../pages/Vehiculos";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Reservas from "../pages/Reservas";

import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuario />} />
      <Route path="/vehiculos" element={<Vehiculos />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}