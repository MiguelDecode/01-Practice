// Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no.  
// Un numero primo es aquel que solo es divisible por si mismo y la unidad  

let numero = parseInt(prompt("Introduce un numero para saber si es primo o no"));

if(numero === 1) console.log('El numero uno no es valido')

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        console.log('No es primo')
        break
    } else {
        console.log('Es primo')
        break
    }
}