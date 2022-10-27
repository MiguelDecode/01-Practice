// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function parity(numbers) {
  if (!(numbers instanceof Array))
    return console.log("No has pasado un tipo de dato válido para calcular");

  if (numbers.length === 0) return console.log("Tu array no contiene valores");

  for (const num of numbers) {
    if (typeof num !== "number")
      return console.log("El valor del array no es un número");
    if (!(num % 1 === 0)) return console.log('El valor del array no es un número entero')
  }

  let result = {
    pares: [],
    impares: [],
  };

  for (const num of numbers) {
    if (num % 2 === 0) result.pares.push(num);
    if (num % 2 !== 0) result.impares.push(num);
  }

  console.log(result)
}

parity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
parity()
parity([])
parity([1,3,'hello'])
parity([3.5, 5, 8])

