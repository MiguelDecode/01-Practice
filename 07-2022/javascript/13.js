/* Programa una función que determine si un numero es par o impar, p.e. miFuncion(29) devolverá Impar */

const parity = (number = undefined) => {
  if (number === undefined)
    return console.log("No has ingresado ningún número");
  if (typeof number !== "number")
    return console.log("El tipo de dato introducido no es un número");
  
  return (number % 2 === 0) ? true : false;
};

console.log(parity(6));
console.log(parity(15));
console.log(parity(100));
parity('hello');
parity('cuatro')
console.log(parity(0));
parity(true);
console.log(parity(999));