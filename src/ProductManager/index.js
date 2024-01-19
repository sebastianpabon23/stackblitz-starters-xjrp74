// src/index.js

// Importa la clase ProductManager desde el archivo ProductManager.js.
const ProductManager = require('./src/ProductManager');

// Crea una nueva instancia de ProductManager.
const productManager = new ProductManager();

// Añade productos al gestor de productos utilizando el método addProduct.
productManager.addProduct('Laptop', 1500, 30);    // Añade una laptop con precio de 1500 y stock de 30.
productManager.addProduct('Teléfono', 800, 100);  // Añade un teléfono con precio de 800 y stock de 100.
productManager.addProduct('Tablet', 600, 50);     // Añade una tablet con precio de 600 y stock de 50.

// Muestra la lista de productos existentes en la consola.
console.log('Lista de productos:', productManager.listProducts());

// Busca un producto por nombre (en este caso, 'Teléfono') utilizando el método findProduct.
const product = productManager.findProduct('Teléfono');
// Muestra en consola el producto encontrado.
console.log('Producto encontrado:', product);

// Actualiza el stock de un producto específico (en este caso, 'Laptop') utilizando el método updateStock.
productManager.updateStock('Laptop', 25); // Actualiza el stock de 'Laptop' a 25.
// Muestra en consola la lista de productos después de la actualización del stock.
console.log('Lista de productos después de actualizar el stock:', productManager.listProducts());

// Elimina un producto por nombre (en este caso, 'Tablet') utilizando el método deleteProduct.
productManager.deleteProduct('Tablet');
// Muestra en consola la lista de productos después de eliminar un producto.
console.log('Lista de productos después de eliminar un producto:', productManager.listProducts());
