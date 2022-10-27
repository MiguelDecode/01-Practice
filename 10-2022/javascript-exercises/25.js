// Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function maxMin(numbers) {
  if (!(numbers instanceof Array))
    return console.log(
      "No has pasado un tipo de dato válido para calcular los máximos y mínimos"
    );

  if (numbers.length === 0) return console.log("Tu array no contiene valores");

  for (const num of numbers) {
    if (typeof num !== "number")
      return console.log("El valor del array no es un número");
  }

  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  console.log(max, min);
}

maxMin([1, 4, 5, 99, -60]);
maxMin([]);
maxMin();
maxMin([1, 2, 3, "hello", true]);
