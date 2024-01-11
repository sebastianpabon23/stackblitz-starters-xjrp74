import { sum } from './stringSum';

describe('string sum', () => {
  it('example test', () => {
    expect(sum(false)).toBeFalsy();
  });
  it('should return same number if one of numbers is zero string', () => {
    // ARRANGE
    const num1 = '0';
    const num2 = '2';
    const expectedResult = 2;
    // ACT
    const result = sum(num1, num2);
    // ASSERT
    expect(result).toBe(expectedResult);
  });
  it('should return 12 if one of numbers is 8 string and the other is 4 string', () => {
    // ARRANGE
    const num1 = '8';
    const num2 = '4';
    const expectedResult = 12;
    // ACT
    const result = sum(num1, num2);
    // ASSERT
    expect(result).toBe(expectedResult);
  });
  it('should return 15 if one of numbers is 15 string and the other is a non-natural number string', () => {
    // ARRANGE
    const num1 = '-8';
    const num2 = '15';
    const expectedResult = 15;
    // ACT
    const result = sum(num1, num2);
    // ASSERT
    expect(result).toBe(expectedResult);
  });
  it('should return the sum of "N" string numbers', () => {
    // ARRANGE
    const num1 = '-8';
    const num2 = '15';
    const num3 = '5';
    const expectedResult = 20;
    // ACT
    const result = sum(num1, num2, num3);
    // ASSERT
    expect(result).toBe(expectedResult);
  });
});
