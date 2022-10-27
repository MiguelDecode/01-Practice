// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function parity(num) {
  if (typeof num !== "number") return console.log("No has introducido un número");

  if (num % 2 === 0) return console.log("El número introducido es primo");
  
  return console.log("El número introducido no es primo");
}

parity(29);
parity(7)
parity(8)
parity('hello')
parity(true)
