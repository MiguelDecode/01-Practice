// Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function numToSquare(arr) {
  if (!(arr instanceof Array))
    return console.log("No has introducido un formato de array válido");

  let arrSquare = [];

  for (const number of arr) {
    if (typeof number !== "number")
      return console.log("Uno de los valores del array no es un número");

    arrSquare.push(Math.pow(number, 2));
  }

  console.log(arrSquare);
}

numToSquare([1, 4, 5]);
numToSquare();
numToSquare([2, "hello", true]);
numToSquare([2, 3, 5, 7]);
