/* Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const randomNumber = (minNumber = undefined, maxNumber = undefined) => {
  if(minNumber === undefined) return console.log('No has ingresado el número mínimo');
  if(maxNumber === undefined) return console.log('No has ingresado el número máximo');
  if(typeof minNumber !== 'number') return console.log('No has ingresado un número como valor de mínimo');
  if(typeof maxNumber !== 'number') return console.log('No has ingresado un número como valor de máximo');

  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
}

console.log(randomNumber(501,600));
console.log(randomNumber(0, 100));
console.log(randomNumber('hello', true));