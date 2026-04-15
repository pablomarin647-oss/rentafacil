const guardar = () => {
  if (!form.placa || !form.marca || !form.modelo) return;

  let data = [...vehiculos];

  if (editId !== null) {
    data = data.map((v) =>
      v.id === editId ? { ...form, id: editId } : v
    );
  } else {
    data.push({ id: Date.now(), ...form });
  }

  saveVehiculos(data);
  setVehiculos(data);
  setForm({ placa: "", marca: "", modelo: "" });
  setEditId(null);
};