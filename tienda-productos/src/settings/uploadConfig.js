const multer = require("multer");
const path = require("node:path");
const crypto = require("crypto");

// Configuración de Multer
// storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/"); // Directorio donde se guardarán los archivos
  },
  filename: (_req, file, cb) => {
    const fileName = crypto.randomUUID() + path.extname(file.originalname); // Invocar randomUUID()
    cb(null, fileName);
  },
});

// limits
const maxMb = 20;
const limits = {
  fileSize: 1024 * 1024 * maxMb, // Limitar el tamaño del archivo a 20MB
};

// fileFilter
const fileFilter = (_req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (mimetype && extname) {
    return cb(null, true); // Aceptar el archivo si cumple con los filtros
  }
  cb(new Error("Error: El archivo debe ser una imagen (jpg, png)."));
};

// Configurar Multer
const upload = multer({
  storage,
  limits,
  fileFilter,
});

module.exports = { upload };
