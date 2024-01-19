// tests/ProductManager.test.js

// Importa la clase ProductManager desde su archivo para poder probar sus métodos.
const ProductManager = require('../src/ProductManager');

// describe es una función de Jest que define un bloque de pruebas para un componente o unidad específica (en este caso, ProductManager).
describe('ProductManager', () => {
    // Declara una variable que almacenará la instancia de ProductManager.
    let productManager;

    // beforeEach es una función de Jest que se ejecuta antes de cada caso de prueba.
    // Se utiliza para configurar el entorno de pruebas.
    beforeEach(() => {
        // Crea una nueva instancia de ProductManager antes de cada prueba.
        productManager = new ProductManager();
    });

    // test es una función de Jest que define un caso de prueba individual.
    // Este caso de prueba verifica que se pueda añadir un producto correctamente.
    test('should add a product', () => {
        // Añade un producto usando el método addProduct de la instancia de ProductManager.
        productManager.addProduct('Laptop', 1500, 30);
        // expect es una función de Jest que se utiliza para hacer afirmaciones sobre el resultado de las operaciones.
        // En este caso, se espera que el arreglo de productos tenga una longitud de 1 después de añadir un producto.
        expect(productManager.products.length).toBe(1);
    });

    // Se pueden añadir más casos de prueba para probar otros métodos de ProductManager.
    // ...
});
