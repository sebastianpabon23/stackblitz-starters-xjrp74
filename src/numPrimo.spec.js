import esPrimo from './numPrimo';
describe('esPrimo', () => {
  it('debe devolver true para los números primos', () => {
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
    expect(esPrimo(5)).toBe(true);
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(11)).toBe(true);
  });

  it('debe devolver false para los números no primos', () => {
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(6)).toBe(false);
    expect(esPrimo(8)).toBe(false);
    expect(esPrimo(10)).toBe(false);
  });
});
