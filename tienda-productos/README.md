# Tienda de Productos - Servidor Express.js

Este es un servidor básico desarrollado con Express.js que permite a los empleados de una tienda agregar productos con imágenes. Las imágenes se almacenan en el servidor en una carpeta de archivos y los productos se almacenan temporalmente en un array en memoria.

Decisiones y Configuraciones

1. Uso de Express.js:

Se decidió utilizar Express.js por su simplicidad y flexibilidad para construir aplicaciones web y APIs REST.
El servidor está organizado en settings,rutas, controladores y middlewares de manera modular para facilitar la escalabilidad del proyecto.

2. Multer para subir archivos:

Se utiliza Multer para gestionar la subida de archivos al servidor. Las imágenes se almacenan en la carpeta uploads y solo se permiten archivos de tipo jpg y png.
La URL de la imagen subida es generada y almacenada junto con el producto.

3. Almacenamiento en memoria:

Los productos se almacenan temporalmente en un array en memoria, ya que el alcance de este proyecto no requiere el uso de una base de datos.
Cada producto tiene un id único generado automáticamente y se almacena junto con su nombre, descripción, precio y la URL de la imagen subida.

4. Manejo de errores:

Se ha implementado un middleware básico para el manejo de errores que captura problemas relacionados con la subida de archivos o la creación de productos.

# Pasos para la instalación:

1-Clona este repositorio o descarga los archivos del proyecto.

2-Instala las dependencias necesarias ejecutando:

npm install

# Cómo Ejecutar el Servidor

1-Asegúrate de estar en la carpeta del proyecto.

2-Ejecuta el servidor con el siguiente comando:

npm run dev

El servidor estará corriendo en http://localhost:3000.

# Para agregar un producto con una imagen, sigue estos pasos:

Utiliza Postman o cualquier cliente HTTP para enviar una solicitud POST a la siguiente URL:

http://localhost:3000/products

En la pestaña Body, selecciona la opción form-data y añade los siguientes campos:

Key Value Type
name Nombre del producto Text
description Descripción del producto Text
price Precio del producto Text
image [Selecciona el archivo] File

Envía la solicitud. Si todo es correcto, recibirás una respuesta con el producto creado, incluyendo la URL de la imagen.

Ejemplo de respuesta esperada:
{
"id": "product-1",
"name": "Producto Ejemplo",
"description": "Este es un producto de ejemplo.",
"price": 100,
"imageUrl": "http://localhost:3000/uploads/ejemplo.jpg"
}
