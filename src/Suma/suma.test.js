const { sum } = require('./suma');

describe('Aritmetica', () => {
  test('sum 1 + 3 equals 4', () => {
    const result = sum(1, 3);
    expect(result).toEqual(4);
  });
  test('sum -4 + -5 equals -9', () => {
    const result = sum(-4, -5);
    expect(result).toEqual(-9);
  });
  test('sum -13 + 20 equals 7', () => {
    const result = sum(-13, 20);
    expect(result).toEqual(7);
  });
});
