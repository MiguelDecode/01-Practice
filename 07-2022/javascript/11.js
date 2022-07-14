/* Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (number = undefined) => {
  if (number === undefined) return console.log('No has introducido ningún número');
  if (typeof number !== 'number') return console.log('El valor introducido no es un número');
  if (Math.sign(number) === -1 || Math.sign(number) === 0) return console.log('No se puede calcular el factorial de numeros negativos o cero');

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;    
  }

  console.log(result);
}

factorial(5);
factorial(12);
factorial(120);
factorial();
factorial(true);
factorial(0);
factorial(-45);
