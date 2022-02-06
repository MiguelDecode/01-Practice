//Escribe un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido

let suma = 0
let contador = 0

while(suma <= 50) {
    suma += parseInt(prompt("Introduce un numero para anadir a la suma"))
    contador++
}

console.log(`La suma total de es ${suma} y el cantidad de numeros introducidos es ${contador}`)



//let numero = parseInt(prompt("Introduce un numero"))
// if (numero >= 50){
    //     console.log("No puedes introducir un numero que exceda el maximo total")
    // } else {
        //     if (suma <= 50) {
//         suma += numero
//         contador++
//     } else {
//         console.log("Has excedido el total maximo")
//     }
//     console.log(`La suma de los numeros es ${suma} y has introducido un total de ${contador} numeros`)
// }
