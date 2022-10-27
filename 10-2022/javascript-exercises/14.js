// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(num) {
  if (typeof num !== "number" || num === undefined)
    return console.log("No has introducido un dato válido como numero");

  let result = 1;

  for (let i = 1; i <= num; i++) result *= i;

  console.log(result);
}

factorial(5);
factorial(12);
factorial(7);
factorial(9);
factorial("hello");
factorial(-3); // Necesario buscar más información
