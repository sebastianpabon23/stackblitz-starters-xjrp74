export default adivinarNum;

function adivinarNum(number) {
  let min = 1;
  let max = 100;

  while (min <= max) {
    const adivina = Math.floor((min + max) / 2);

    if (adivina === number) {
      return adivina; // Número adivinado correctamente
    } else if (adivina < number) {
      min = adivina + 1; // Ajusta el mínimo para adivinar más alto
    } else {
      max = adivina - 1; // Ajusta el máximo para adivinar más bajo
    }
  }
  return -1; // En caso de que el número no esté en el rango 1-100
}

// Prueba
const numeroPensado = 42;
const resultado = adivinarNum(numeroPensado);
console.log('Resultado adivina :' + resultado);



