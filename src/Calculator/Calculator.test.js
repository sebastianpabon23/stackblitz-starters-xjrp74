// Importa la clase Calculator desde el archivo Calculator.js.
const Calculator = require('./Calculator');

// Describe un bloque de pruebas para la clase Calculator.
describe('Calculator', () => {
    // Declara una variable para almacenar la instancia de la calculadora.
    let calculator;

    // Antes de cada prueba, inicializa una nueva instancia de Calculator.
    beforeEach(() => {
        calculator = new Calculator();
    });

    // Define una prueba para la función de suma.
    test('adds 1 + 2 to equal 3', () => {
        // Comprueba que el resultado de la suma de 1 y 2 sea igual a 3.
        expect(calculator.add(1, 2)).toBe(3);
    });

    // Define una prueba para la función de resta.
    test('subtracts 5 - 2 to equal 3', () => {
        // Comprueba que el resultado de la resta de 5 y 2 sea igual a 3.
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    // Define una prueba para la función de multiplicación.
    test('multiplies 2 * 3 to equal 6', () => {
        // Comprueba que el resultado de la multiplicación de 2 por 3 sea igual a 6.
        expect(calculator.multiply(2, 3)).toBe(6);
    });

    // Define una prueba para la función de división.
    test('divides 10 / 2 to equal 5', () => {
        // Comprueba que el resultado de la división de 10 entre 2 sea igual a 5.
        expect(calculator.divide(10, 2)).toBe(5);
    });

    // Define una prueba para la gestión de errores en la función de división.
    test('divides 10 / 0 to throw error', () => {
        // Comprueba que al dividir 10 entre 0 se lance un error con el mensaje 'División por cero'.
        expect(() => {
            calculator.divide
            (10, 0)
        }).toThrow('División por cero');
    });
});