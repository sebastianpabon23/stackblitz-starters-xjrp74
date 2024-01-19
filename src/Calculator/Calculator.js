// Definición de la clase Calculator.
class Calculator {
    // Método para sumar dos números.
    // Recibe dos parámetros numéricos: a y b.
    add(a, b) {
        // Devuelve la suma de a y b.
        return a + b;
    }

    // Método para restar dos números.
    // Recibe dos parámetros numéricos: a y b.
    subtract(a, b) {
        // Devuelve la resta de a menos b.
        return a - b;
    }

    // Método para multiplicar dos números.
    // Recibe dos parámetros numéricos: a y b.
    multiply(a, b) {
        // Devuelve la multiplicación de a y b.
        return a * b;
    }

    // Método para dividir dos números.
    // Recibe dos parámetros numéricos: a y b.
    divide(a, b) {
        // Primero, verifica si b es cero para evitar la división por cero.
        if (b === 0) {
            // Si b es cero, lanza un error indicando "División por cero".
            throw new Error('División por cero');
        }
        // Si b no es cero, realiza la división de a entre b y devuelve el resultado.
        return a / b;
    }
}

// Exporta la clase Calculator para que pueda ser importada y utilizada en otros archivos.
module.exports = Calculator;

