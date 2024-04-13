const mongoose = require("mongoose");
const ROLES = require("../constants/roles.constants");
const servicio = new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        required: true,
      },
    },
  );

  export default model("Servicio", ServicioSchema);