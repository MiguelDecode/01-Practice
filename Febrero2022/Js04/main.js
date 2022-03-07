// Solicita un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero con el mensaje "es par" o "es impar"
// Si el numero es 5 el resultado sera:
//     1 - es impar
//     2 - es par
    // 3 - es Impar
    // 4 - es par


let number = parseInt(prompt("Introduce un numero para saber todos los numeros pares e impares hasta ese numero"))

for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - es un numero par`)
    } else {
        console.log(`${i} - es un numero impar`)
    }
}
