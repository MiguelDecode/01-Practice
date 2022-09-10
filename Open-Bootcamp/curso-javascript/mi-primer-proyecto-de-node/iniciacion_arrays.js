// Listas, array o arreglo

const arr1 = [1, "hola", true];
const arr2 = new Array(2, "goodbye", false);
console.log(arr2);
const arr3 = new Array(4);
console.log(arr3);
arr3[0] = 3;
console.log(arr3);

const arr4 = ["a", "b", "c", arr3];
console.log(arr4);

// Objetos

const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiaomi",
  isWhite: "false",
  contacts: ["Gorka", "Martín", "Raúl"],
  components: {
    brand: "Sandisk",
    storage: 32,
  },
};

movil.year = 2019;
movil.brand = "Samsung";

console.log(movil.altura);
console.log(movil.anchura, movil.components.brand);
console.log(movil.year);
console.log(movil.brand);

// Fechas
// Existen librerías de apoyo como moment.js

const date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay()); // Considerando que los dias empiezan en 0.
console.log(date.getMonth());
console.log(date.getFullYear());

const init = new Date(10); // Se pasa el parametro en milisegundos.
console.log(init);

const birth = new Date("April 11 1986");
console.log(birth);

const date_data = new Date(2022, 08, 15);
console.log(date_data);
