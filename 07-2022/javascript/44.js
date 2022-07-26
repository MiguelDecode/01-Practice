// Propiedades dinámicas de los objetos

const objUsers = {
  propiedad: "valor",
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "valor de id aleatorio",
};
console.log(objUsers);

const users = ["Jon", "Irma", "Miguel", "Kala", "Arya"];

users.forEach((user, index) => (objUsers[`id_${index}`] = user));

console.log(objUsers);
