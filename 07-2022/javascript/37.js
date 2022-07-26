// Symbol crea una referencia única

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id);
console.log(typeof id2);

const NAME = Symbol('name');
const GREET = Symbol('greet');

const person = {
  [NAME]: "Miguel",
};

// No muestra la key del la propiedad person aunque si el valor
console.log(person);

person.NAME = "Miguel Decode";

console.log(person);
console.log(person.NAME);
console.log(person[NAME]);

person[GREET] = () => console.log("Hello World");
console.log(person);
person[GREET]();

// No recorre los symbol(propiedad privada) solo las propiedades definidas de manera normal
for (const property in person) {
  console.log(property);
  console.log(person[property]);
}

console.log(Object.getOwnPropertySymbols(person))