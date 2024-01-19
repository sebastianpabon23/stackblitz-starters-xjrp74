import { FruitBasket } from './FruitBasket';

describe('FruitBasket', () => {
  it('should start with five fruits', () => {
    const basket = new FruitBasket();
    expect(basket.countFruits()).toBe(5);
  });

  it('should add fruits to the basket', () => {
    const basket = new FruitBasket();
    basket.addFruit('Mango');
    basket.addFruit('Papaya');

    expect(basket.countFruits()).toBe(7); // 5 iniciales + 2 añadidas
  });

  it('should remove a fruit from the basket', () => {
    const basket = new FruitBasket();
    basket.removeFruit('Naranja');

    expect(basket.countFruits()).toBe(4); // 5 iniciales - 1 quitada
    expect(basket.fruits).not.toContain('Naranja');
  });

  it('should return the correct number of fruits after various operations', () => {
    const basket = new FruitBasket();
    basket.addFruit('Mango');
    basket.addFruit('Papaya');
    basket.removeFruit('Naranja');
    basket.removeFruit('Manzana');

    expect(basket.countFruits()).toBe(5); // 5 iniciales + 2 añadidas - 2 quitadas
  });

  it('should return true if the basket is empty after removing all fruits', () => {
    const basket = new FruitBasket();
    basket.removeFruit('Manzana');
    basket.removeFruit('Banana');
    basket.removeFruit('Naranja');
    basket.removeFruit('Pera');
    basket.removeFruit('Uva');

    expect(basket.isEmpty()).toBeTruthy();
  });

  it('should return false if the basket is not empty', () => {
    const basket = new FruitBasket();
    basket.addFruit('Mango');

    expect(basket.isEmpty()).toBeFalsy();
  });
});
