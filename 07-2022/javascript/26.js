/* Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const calculateAverage = (arr = undefined) => {
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

  console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue) / arr.length);
}

calculateAverage([9,8,7,6,5,4,3,2,1,0]);
calculateAverage()
calculateAverage('Hello')
calculateAverage(['hello'])