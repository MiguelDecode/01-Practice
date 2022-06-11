let names = ["Paco", "José", "Paula", "María"];

for (const value of names) {
  console.log(value);
}

for (const index in names) {
  console.log(index);
}

for (const index in names) {
  console.log(names[index]);
}

for (const name of names) {
  console.log(name);
}

console.log(typeof(names));

console.log(names[3])

for (const name of names) {
  console.log(typeof(name))
}

// Un array es un tipo especial de objeto pero es importante recordar que es un objeto.

