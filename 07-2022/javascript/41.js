// Iterables and Iterators

const iterable = [1, 2, 3, 4, 5];

const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
