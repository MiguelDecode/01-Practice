/* Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

Zero es par.

Uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto? */

function esPar(num) {
  if (num < 0) return console.log('Los números negativos no son pares o impares')

  // num = Math.abs(num)

  if (num === 0) return true
  if (num === 1) return false
  return esPar(num - 2);
}

console.log(esPar(0))
console.log(esPar(1))
console.log(esPar(2))
console.log(esPar(3))

console.log(esPar(50))
console.log(esPar(75))

console.log(esPar(-1))
