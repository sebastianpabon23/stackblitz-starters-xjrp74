export default findMax;

function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0];

  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

const numbers = [1, 25, 3, 4, 5];

const max = findMax(numbers);

console.log('El valor maximo es: ' + max);
