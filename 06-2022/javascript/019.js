const nombres = ["Juan", "Maria", "Sandra", "Pepe"];
let cadena = "Hola Mundo, hemos llegado";

const word = "Hola Mundo";
console.log(Array.from(word));

console.log(word.split(""));

console.log(word.split(" "));

const letters = ["c", "d", "z", "a"];

console.log(letters.sort());

const numbers = [1, 8, 100, 300, 3];

console.log(numbers.sort());

console.log(numbers.sort((a, b) => a - b));

console.log(numbers);

const numbers2 = [12, 25, 47, 84, 98];

numbers2.forEach((number) => console.log(number * 2));
numbers2.forEach((number, index) =>
  console.log(`${number} está en la posición ${index}`)
);

const words = ["HTML", "CSS", "JavaScript", "PHP"];

console.log(words.some((word) => word.length > 10));
console.log(words.every((word) => word.length > 3));

//.map(callback) Transforma todos los elementos del array y devuelve un nuevo array

const numbers3 = [1, 8, 100, 300, 3, 34, 87, 98];

console.log(numbers3.map((number) => number * 2));
const newNumbers = numbers3.map((number) => number * 2);

// .filter(callback) Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

const newFilter = numbers3.filter((number) => number > 40);
console.log(newFilter);

// .reduce(callback) Reduce todos los elementos del array a un único valor

const newReduce = numbers3.reduce((a, b) => a + b);
console.log(newReduce);

const users = [
  {
    name: 'user 1',
    online: true
  },
  {
    name: 'user 2',
    online: true
  },
  {
    name: 'user 3',
    online: false
  },
  {
    name: 'user 4',
    online: true
  },
  {
    name: 'user 5',
    online: false
  },
  {
    name: 'user 6',
    online: true
  }
]

const usersOnline = users.reduce((cont, user) => {
  if(user.online) cont++
  return cont
},0)

console.log(usersOnline);