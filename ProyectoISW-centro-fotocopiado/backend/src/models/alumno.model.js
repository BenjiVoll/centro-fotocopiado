const Alumno = new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      rut: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
  );