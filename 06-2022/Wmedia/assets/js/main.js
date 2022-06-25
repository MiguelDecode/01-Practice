/* const API = "https://randomuser.me/api/?results=50";

async function getData() {
  const response = await fetch(API);
  const { results: users } = await response.json();
  showUsers(users);
}

function showUsers(users) {
  users.forEach((user) => {
    const picture = user.picture.medium;
    const img = document.createElement("IMG");
    img.src = picture;
    document.body.appendChild(img)
  });
}

getData();
 */

//  Este tipo de métodos que mutan el array original.
const colores = ["rojo", "verde", "azul"];
console.log(colores);
colores.unshift("turquesa");
console.log(colores);
colores.shift();
console.log(colores);
colores.push("amarillo");
console.log(colores);
colores.pop();
console.log(colores);

// Método para no mutar el array
const color = "amarillo";
const colores2 = [color, ...colores];
console.log(colores, colores2);
const colores3 = [...colores, "rosa"];
console.log(colores3);

// Operador Spread
console.log(...colores);

// El método splice muta el array original
colores.splice(2, 0, "negro");
console.log(colores);

colores.splice(2, 1);
console.log(colores);

// El método slice no muta el array original
console.log(colores.slice(0, 2));
console.log(colores);

const colores4 = [
  // Seleccionamos los primeros indices
  ...colores.slice(0, 3),
  // Colocamos el valor a añadir
  "magenta",
  // Terminamos añadiendo el resto de valores del array
  ...colores.slice(2),
];
// De esta manera creamos un nuevo array sin mutar el original.
console.log(colores4);

// No mutando el original
const colores5 = [...colores4.slice(1)];
console.log(colores5);
console.log(colores4);

colores5.pop();
console.log(colores5);

// Eliminar al final sin mutar el original
const colores7 = [...colores5.slice(0, colores.length - 1)];
console.log(colores7);

// Eliminar elementos de un índice sin mutar el original
const index = 1;
const colores8 = [
  // cortar el inicio
  ...colores5.slice(0, index),
  // añadir la parte final
  ...colores5.slice(index + 1),
];
console.log(colores8);

const coloresMayuscula = colores.map((element) => element.toUpperCase());
console.log(colores, coloresMayuscula);

const months = ["Jan", "March", "April", "June"];
// Splice muta el array original
const newMonths = months.splice(1, 2);
console.log(newMonths, months);

const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
console.log(nombres.slice(2, 3));
console.log(nombres[2]);
console.log(nombres);

console.log(colores);
console.log(colores.indexOf("verde"));

const animals = ["Gato", "Perro", "Pez", "Gallina"];

const eliminarElemento = (array, elemento) => {
  // Sería recomendable añadir unas validaciones previas
  if (array.indexOf(elemento) === -1) {
    return "No se ha encontrado el elemento a borrar";
  } else {
    const index = array.indexOf(elemento);
    return array.splice(index, 1);
  }
};

console.log(eliminarElemento(animals, "Gallina"));
console.log(animals);

console.log(animals.includes("Gato"));

const numbers = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

const number = numbers.findIndex(isLargeNumber);

console.log(numbers[number]);

// Encontrar elementos

const colors = [
  { id: 1, nombre: "rojo" },
  { id: 2, nombre: "verde" },
  { id: 3, nombre: "azul" },
  { id: 4, nombre: "amarillo" },
  { id: 5, nombre: "turquesa" },
];

const verde = colors.find((color) => color.nombre === "verde");
console.log(verde.nombre);

const filtrados = colors.filter(n => n.nombre.length > 5)
console.log(filtrados);

const original = ['rojo', true, 99]
const copia2 = Array.from(original)
console.log(copia2);
const copia = [...original]
console.log(copia, original);

