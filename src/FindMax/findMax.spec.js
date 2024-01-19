import findMax from './findMax';

describe('findMax', () => {
  it('should return undefined for an empty array', () => {
    expect(findMax([])).toBe(undefined);
  });

  it('should return the largest number for a non-empty array', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should return the largest number even if it is not the first element of the array', () => {
    expect(findMax([5, 1, 2, 3, 4])).toBe(5);
  });
});
