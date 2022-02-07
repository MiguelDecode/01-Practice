// Escribe un programa que pida un numero entero mayor que cero y calcule su factorial. 
//     El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad. 
//     factorial 5 = 5*4*3*2*1 = 120

let number = parseInt(prompt("Introduce un numero y te dire su factorial"))
let total = 1

for (let i = number; i > 1; i--) {
    total *= i
}

console.log(total)




