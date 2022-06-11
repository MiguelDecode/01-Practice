// Arrays

let array = [];

let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]);
console.log(numeros[3]);

console.log(numeros.length);
console.log(numeros[7]);

console.log(numeros);

numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.unshift(1);
console.log(numeros);

// Metodos

console.log(numeros.length);
console.log(Array.isArray(numeros));
console.log(numeros.shift());
console.log(numeros.unshift(1));
console.log(numeros);
console.log(numeros.pop());
console.log(numeros.push(5));
console.log(numeros);
console.log(numeros.push(6, 7, 8, 9));
console.log(numeros);
console.log(numeros.unshift(0));
console.log(numeros);

console.log(numeros.indexOf(3));
console.log(numeros.indexOf(9));
console.log(numeros.indexOf(23));
// El resultado de un indexOf que no encuentra el elemento indicado será siempre -1.

console.log(numeros.lastIndexOf(8));
// Realiza una busqueda hacia atrás o busca el ultimo elemento que coincide.

numeros.reverse();
console.log(numeros);
numeros.reverse();
console.log(numeros);

const string = numeros.join();
console.log(string);
const string2 = numeros.join("-");
console.log(string2);
const string3 = numeros.join("_");
console.log(string3);

// METODO SPLICE
// .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// a - Indice de inicio
// b - Número de elementos.(opcional)
// items - Elementos a añadir en el caso de que se añadan.(opcional)

const splice = numeros.splice(4);
console.log(splice);
console.log(numeros);

const splice2 = numeros.splice(2, 2);
console.log(numeros);

numeros.push(2, 3, 4, 5, 6, 7, 8, 9);
console.log(numeros);

const splice3 = numeros.splice(9, 1, 10);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.push(9);
console.log(numeros);

const slice = numeros.slice();
console.log(slice);
console.log(numeros);
const slice2 = numeros.slice(2);
console.log(slice2);
const slice3 = numeros.slice(2, 5);
console.log(slice3);
console.log(numeros);
