const express = require("express");
const { createProduct } = require("../controllers/productController.js");
const { upload } = require("../settings/uploadConfig.js");
const router = express.Router();

// Endpoint para crear un producto
router.post("/", upload.single("image"), createProduct);

module.exports = router;
