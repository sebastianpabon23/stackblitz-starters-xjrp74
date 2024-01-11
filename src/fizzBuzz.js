/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */

//export const game = (num) =>{
//  if(num % 3 == 0)
//  return "Fizz";
//};

export const game = (num) => {
  let result = "";
  if (isDivisibleByNumber(num, 3)) {
    result = result.concat("Fizz");
  }
  if (isDivisibleByNumber(num, 5)) {
    result = result.concat("Buzz");
  }
  return getGameResult(result, num);
};
const getGameResult = (result, num) => {
  if (result.length > 0) {
    return result;
  }
  return String(num);
};
const isDivisibleByNumber = (num, divisor) => num % divisor === 0;