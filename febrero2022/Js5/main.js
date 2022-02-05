// Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero primo o no
// Un numero primo es aquel que solo es divisible por si mismo y la unidad

let numero = parseInt(prompt("Introduce un numero para saber si es primo"))
let primo = 0;


if(numero === 1) console.log("El numero 1 no es valido")
else{
    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(`${numero} no es un numero primo`)
            primo++
            break
        }
    }
}

if(primo == 0) console.log(`${numero} es primo`)