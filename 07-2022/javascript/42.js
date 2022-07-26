// Generators

function* iterable() {
  yield "hola";

  console.log("Hola consola");

  yield "hola 2";

  console.log("Hola consola seguimos con más instrucciones de nuestro código");

  yield "hola 3";
  yield "hola 4";

  // Yield palabra reservada similar a return dado que devuelve un valor pero por paso de ejecución
}

let iterator = iterable();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* cuadrado(value) {
  yield value * value;
  yield value * value * value;
  yield value * value * value * value;
}

const operation = cuadrado(2);
console.log(operation.next());
console.log(operation.next());
console.log(operation.next());
console.log(operation.next());