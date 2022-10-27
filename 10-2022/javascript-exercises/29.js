// Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function average(numbers) {
  if (!(numbers instanceof Array))
    return console.log("No has pasado un tipo de dato válido para calcular");

  if (numbers.length === 0) return console.log("Tu array no contiene valores");

  for (const num of numbers) {
    if (typeof num !== "number")
      return console.log("El valor del array no es un número");
  }

  const total = numbers.reduce((a, b) => a + b);
  const result = total / numbers.length;
  console.log(result);
}

average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
average();
average([true, false, "hello"]);
average([10, 20, 30, 40]);
