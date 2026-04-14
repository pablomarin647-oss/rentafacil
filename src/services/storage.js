const get = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// USUARIOS
export const getUsuarios = () => get("usuarios");
export const saveUsuarios = (data) => set("usuarios", data);

// VEHICULOS
export const getVehiculos = () => get("vehiculos");
export const saveVehiculos = (data) => set("vehiculos", data);

// RESERVAS
export const getReservas = () => get("reservas");
export const saveReservas = (data) => set("reservas", data);