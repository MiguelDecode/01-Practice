/* Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

const orderArray = (arr = undefined) => {
  if (arr === undefined)
    return console.log("No has introducido ningún arreglo");

  if (arr.length === 0)
    return console.log("No has introducido ningún valor dentro del array");

  if (!(arr instanceof Array))
    return console.log("No has introducido un array");


  for (const iterator of arr) {
    if (typeof iterator !== "number") {
      return console.log("Alguno de los valores de tu array no es un número");
    }
  }

  return console.log({
    arr,
    asc: arr.map((n) => n).sort((a, b) => a - b),
    desc: arr.map((n) => n).sort((a, b) => b - a),
  });
};

orderArray([7, 5, 7, 8, 6]);
orderArray();
orderArray("Hello");
orderArray([]);
orderArray([2, 4, "hello"]);
