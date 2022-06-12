const person = {
  name: "Juan",
  age: 26,
  sons: ["Laura", "Diego", "Pepe", "Rosa", "Tomás"],
};

console.log(person);

console.log(person.name);
console.log(person["name"]);

for (const key in person) {
  console.log(key);
}

for (const key in person) {
  console.log(person[key]);
}

console.log(person.sons);

for (const son of person.sons) {
  console.log(son);
}

const sons = ["Laura", "Diego", "Pepe", "Rosa", "Tomás"];

for (const son of sons) {
  // Recorre los valores de un array
  console.log(son);
}

for (const son in sons) {
  // Recorre los indices de un array
  console.log(son);
}

