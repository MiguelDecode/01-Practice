// Crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares y el tercero impares. ambos estaran vacios. Despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el array de pares y si es impar en el array de impares. Muestra por consola: 

// - La multiplicacion que se produce junto con su resultado con el formato 2 x 4 = 8 
// - El array de pares e impares

let numeros = [1, 2, 3, 4, 5]
let pares = []
let impares = []

for (numero of numeros) {
    let aleatorio = Math.round(Math.random() * (10 - 1) + 1)
    console.log(`El resultado de ${numero} x ${aleatorio} es ${numero * aleatorio}.`)
    if (numero * aleatorio % 2 === 0) {
        pares.push(numero * aleatorio)
    } else {
        impares.push(numero * aleatorio)
    }
}

console.log(pares)
console.log(impares)