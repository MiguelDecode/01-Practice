/* Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const separatePairsOdd = (arr = undefined) => {
  if (arr === undefined) return console.log("No has introducido ningún valor");
  if (arr.length === 0)
    return console.log("No has introducido ningún valor dentro del array");
  if (!(arr instanceof Array))
    return console.log("No has introducido un array");

  let pairs = [];
  let odd = [];

  for (const iterator of arr) {
    if (typeof iterator !== "number")
      return console.log("Alguno de los valores de tu arreglo no es un número");
    if (iterator % 2 === 0) {
      pairs.push(iterator);
    } else {
      odd.push(iterator);
    }
  }

  /* console.log({
    pairs: arr.filter((n) => n % 2 === 0),
    odd: arr.filter((n) => n % 2 !== 0),
  }); */

  console.log({ arr, pairs, odd });
};

separatePairsOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
separatePairsOdd([7, 5, 7, 8, 6]);
