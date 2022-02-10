// Escribe un programa que pida un numero entero mayor que cero y calcule su factorial. 
// El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad. 

// 5  5 * 4 * 3 * 2 * 1 = 120

let numero = parseInt(prompt('Introduce un numero y te dire cual es su factorial'))
let factorial = 1;

for (let i = 2; i <= numero; i++) {
    factorial  *= i;
}
console.log(factorial)