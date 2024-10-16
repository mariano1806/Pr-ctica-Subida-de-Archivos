const crypto = require("crypto"); // Asegúrate de importar 'crypto'

let products = []; // Array para almacenar productos en memoria

const createProduct = (req, res) => {
  const { name, description, price } = req.body;

  // Validación de campos requeridos
  if (!name || !description || !price || !req.file) {
    return res.status(400).json({ error: "Faltan campos requeridos." });
  }

  // Validación del precio para asegurarse de que sea un número
  if (isNaN(price)) {
    return res
      .status(400)
      .json({ error: "El precio debe ser un número válido." });
  }

  // Crear el nuevo producto con un ID único
  const newProduct = {
    id: crypto.randomUUID(), // Generar ID único con 'randomUUID'
    name,
    description,
    price: parseFloat(price), // Convertir el precio a número
    imageUrl: `http://localhost:3000/uploads/${req.file.filename}`, // URL de la imagen
  };

  products.push(newProduct); // Agregar producto al array
  console.log("Producto creado:", newProduct);

  // Devolver el producto creado como respuesta
  res.status(201).json(newProduct);
};

module.exports = { createProduct };
