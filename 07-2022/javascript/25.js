/* Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

const deleteDuplicated = (arr = undefined) => {
  if (arr === undefined)
    return console.log("No has introducido ningún arreglo");

  if (arr.length === 0)
    return console.log("No has introducido ningún valor dentro del array");

  if (arr.length === 1)
    return console.log("El arreglo debe tener al menos dos posiciones");

  if (!(arr instanceof Array))
    return console.log("No has introducido un array");

  console.log({
    original: arr,
    withoutDuplicates: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });

  console.log([...new Set(arr)]);
};

deleteDuplicated(["x", 10, "x", 2, "10", 10, true, true]);
deleteDuplicated()
deleteDuplicated('Hello')
deleteDuplicated([])
deleteDuplicated([3])
