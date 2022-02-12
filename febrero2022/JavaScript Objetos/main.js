//Ejemplo de un objeto. Clave y valor
const person = {
  name: 'Juan',
  age: 26,
  sons: ['Laura', 'Diego']
}
console.log(person)

//Imprimir los valores de las keys
console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person.sons);
console.log(person.sons[0]);
console.log(person.sons[1]);

//Imprimir todas las keys
for (const key in person) {
  console.log(key);
}

//Imprimir los valores de las keys
for (const key in person) {
  console.log(person[key]);
}

//Imprime los valores dentro del array
for (const son of person.sons) {
  console.log(son)
}
//Imprime los indices del array
for (const son in person.sons) {
  console.log(son)
}

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(' y ')}`)