const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  Categoria: {
    type: String,
    required: true,
  },
  Descripcion: {
    type: String,
    required: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  Minimo: {
    type: Number,
  },
  Precio: {
    type: Number,
    required: true,
  },
});

module.exports = model("Producto", ProductoSchema);