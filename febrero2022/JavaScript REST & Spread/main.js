//Rest

let numeros = [1, 5, 87, 98, 35, 6, 83, 23, 9];

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(2, 5));
console.log(sumar(2, 4, 7, 3, 8, 9, 22));
console.log(sumar(...numeros)); // Realiza la suma de los numeros de un Array.

//Spread

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = [...arr1, ...arr2]; // Se utiliza tambien para sumar arreglos en un unico arreglo.
console.log(arr3);
