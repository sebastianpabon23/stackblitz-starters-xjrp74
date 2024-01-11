/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.

Extra: accept more string numbers to get the addiction
 */
export const sum = ( ... numbers) => {
  return numbers 
          .map(getNumberValue)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

///export const sum = (num1, num2) => {
//  return getNumberValue(num1)+getNumberValue(num2);
//};

const getNumberValue = (num) =>{
  const value = parseInt(num);
  if( value <= 0) return 0
  return value;
}