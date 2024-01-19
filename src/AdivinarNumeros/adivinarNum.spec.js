import adivinarNum from './adivinarNum';

describe('adivinarNum', () => {
  it('should return the correct number if the player thinks of 1', () => {
    const result = adivinarNum(1);
    expect(result).toBe(1);
  });

  it('should return the correct number if the player thinks of 100', () => {
    const result = adivinarNum(100);
    expect(result).toBe(100);
  });

  it('should return the correct number if the player thinks of a random number', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const result = adivinarNum(randomNumber);
    expect(result).toBe(randomNumber);
  });
});




  