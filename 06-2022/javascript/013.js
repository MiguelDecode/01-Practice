// Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestar por consola:
// - La multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
// - El array de pares y impares

const numbers = [3, 43, 21, 20, 56];
const pares = [];
const impares = [];

const operation = (numbers) => {
  for (const number of numbers) {
    let random = Math.round(Math.random() * 11)
    let resultado = number * random
    console.log(`${number} x ${random} = ${resultado}`);
    if (resultado % 2 === 0) {
      pares.push(resultado)
    } else {
      impares.push(resultado)
    }
  }
}

operation(numbers)
console.log(pares);
console.log(impares);
