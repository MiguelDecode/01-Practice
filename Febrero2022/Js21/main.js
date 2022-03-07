// Escribe un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido. 

let total = 0;
let contador = 0;

while (total < 50) {
    let numero = parseInt(prompt("Introduce un numero para aumentar la suma"))
    total += numero
    contador++
}

console.log(total)
console.log(contador)