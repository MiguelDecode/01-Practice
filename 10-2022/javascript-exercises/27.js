// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

function sortNumbers(numbers) {
  if (!(numbers instanceof Array))
    return console.log("No has pasado un tipo de dato válido para calcular");

  if (numbers.length === 0) return console.log("Tu array no contiene valores");

  for (const num of numbers) {
    if (typeof num !== "number")
      return console.log("El valor del array no es un número");
  }

  const ascendente = [...numbers].sort((a, b) => a - b)

  const descendente = [...numbers].sort((a, b) => b - a);

  let result = {
    ascendente,
    descendente,
  };

  console.log(result);
}

sortNumbers([7, 5, 7, 8, 6]);
sortNumbers();
sortNumbers([]);
sortNumbers([true, false, "hello"]);
sortNumbers([-3, 8, -89, 87, 28, 92]);
