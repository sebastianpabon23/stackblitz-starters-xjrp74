export default esPrimo;

function esPrimo(numero) {
  for (let i = 2; i <= Math.floor(numero / 2); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
