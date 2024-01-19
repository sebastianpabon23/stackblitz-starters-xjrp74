// src/ProductManager.js

// Define la clase ProductManager.
class ProductManager {
    // Constructor de la clase. Se ejecuta al instanciar la clase.
    constructor() {
        this.products = []; // Inicializa un arreglo vacío para almacenar los productos.
    }

    // Método para agregar un producto al arreglo de productos.
    addProduct(name, price, stock) {
        const product = { // Crea un objeto de producto con las propiedades nombre, precio y stock.
            name: name,
            price: price,
            stock: stock
        };
        this.products.push(product); // Agrega el objeto de producto al arreglo de productos.
    }

    // Método para buscar un producto por su nombre.
    findProduct(name) {
        return this.products.find(product => product.name === name); // Retorna el primer producto que coincida con el nombre proporcionado.
    }

    // Método para actualizar el stock de un producto específico.
    updateStock(name, newStock) {
        const product = this.findProduct(name); // Busca el producto por nombre.
        if (product) { // Si el producto existe,
            product.stock = newStock; // actualiza su stock al valor de newStock.
        }
    }

    // Método para eliminar un producto por su nombre.
    deleteProduct(name) {
        this.products = this.products.filter(product => product.name !== name); // Reasigna el arreglo de productos al resultado de filtrar el producto con el nombre proporcionado.
    }

    // Método para listar todos los productos.
    listProducts() {
        return this.products; // Retorna el arreglo de productos.
    }
}

// Exporta la clase ProductManager para que pueda ser importada y utilizada en otros archivos.
module.exports = ProductManager;
