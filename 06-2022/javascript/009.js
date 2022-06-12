// Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto suceda, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

let contador = 0;
let resultado = 0;

while (resultado < 50) {
  let numero = parseInt(prompt("Introduce un números hasta llegar a 50"));
  if (numero < 50) {
    resultado += numero;
    contador++;
  } else {
    console.log("No debes introducir un número que exceda el limite de 50");
    break
  }
}

console.log(
  `Se han sumado ${contador} números y el resultado total de la suma se queda en ${resultado}`
);
