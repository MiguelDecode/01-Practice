// Solicita un nombre, la edad y muestra por consola el mensaje "Hola _____, tienes _____ anos y el ano que viene tendras ____ anos" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strigns

let name = prompt("Introduce un nombre:")
let age = parseInt(prompt("Introduce tu edad:"))

console.log(`Hola ${name}, tienes ${age} anos y el ano que viene tendras ${age + 1} anos.`)