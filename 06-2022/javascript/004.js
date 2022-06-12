// Solicita un nombre, la edad y muestra por consola el mensaje 'Hola ----, tienes ---- años y el año que viene tendrás ---- años.'
// Realiza el ejercicio con prompt(mensaje) y haz uso de template strings.

let name = prompt("Hola cual es tu nombre?");
let age = parseInt(prompt("Cuantos años tienes?"));

window.alert(
  `Hola ${name}, tienes ${age} años y el año que viene tendrás ${age + 1}`
);


