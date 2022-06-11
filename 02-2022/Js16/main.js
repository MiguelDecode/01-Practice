// Solicita un nombre, la edad y muestra por consola el mensaje "Hola ---, tienes --- anos y el ano que viene tendras  --- anos"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los templates strings

let nombre = prompt("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad"));

console.log(`Hola ${nombre}, tienes ${edad} anos y el ano que viene tendras ${edad + 1} anos`)