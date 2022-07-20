/* Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

const returnMaxMin = (arr = undefined) => {
  if (arr === undefined) return console.log("No has introducido ningún valor");
  if (arr.length === 0) return console.log("Tu array no contiene ningún valor");
  if (!(arr instanceof Array))
    return console.log("El tipo de dato introducido no es un array");
  for (const number of arr) {
    if (typeof number !== "number") {
      return console.log("Uno de los datos de tu arreglo no es un número");
    }
  }

  console.log(`Número máximo: ${Math.max(...arr)} - Número mínimo: ${Math.min(...arr)}`);
};

returnMaxMin([1,4,5,99,-60]);
returnMaxMin([1,4,5,99,-60, 'hello']);
returnMaxMin('hello')
returnMaxMin()
returnMaxMin([])
