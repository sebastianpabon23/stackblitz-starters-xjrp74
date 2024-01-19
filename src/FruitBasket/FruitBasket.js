export class FruitBasket {
  constructor() {
    // Inicializa la canasta con cinco frutas
    this.fruits = ['Manzana', 'Banana', 'Naranja', 'Pera', 'Uva'];
  }

  addFruit(fruit) {
    this.fruits.push(fruit);
  }

  removeFruit(fruit) {
    const index = this.fruits.indexOf(fruit);
    if (index > -1) {
      this.fruits.splice(index, 1);
    }
  }

  countFruits() {
    return this.fruits.length;
  }

  isEmpty() {
    return this.countFruits() === 0;
  }
}

// Ejemplo de uso de la clase FruitBasket
const basket = new FruitBasket();
console.log('Canasta inicial:', basket.fruits);

// Agregar frutas
basket.addFruit('Mango');
basket.addFruit('Papaya');
console.log('Canasta después de agregar frutas:', basket.fruits);

// Quitar una fruta
basket.removeFruit('Naranja');
console.log('Canasta después de quitar una fruta:', basket.fruits);

// Mostrar la cantidad de frutas en la canasta
console.log('Cantidad de frutas en la canasta:', basket.countFruits());

// Comprobar si la canasta está vacía
console.log('¿La canasta está vacía?', basket.isEmpty());
