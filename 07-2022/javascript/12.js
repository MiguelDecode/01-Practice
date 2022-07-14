/* Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const isPrime = (number = undefined) => {
  if (number === undefined)
    return console.log("No has ingresado ningún número");
  if (typeof number !== "number")
    return console.log("El tipo de dato introducido no es un número");
  if (number === 1) return console.log("El número 1 no es un valor válido");
  if (number === 0) return console.log("El número 0 no es un valor válido");
  if (Math.sign(number) === -1)
    return console.log("No se admiten números negativos");

  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  console.log(prime);
};

isPrime(7);
isPrime(385);
isPrime(13);
isPrime(17);
isPrime(19);
isPrime(-7);
/* isPrime(true)
isPrime()
isPrime(1)
console.log(isPrime(13)); */
