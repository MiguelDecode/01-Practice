// Crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares y el tercero impares, ambos estaran vacios. Despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el array de pares y si es impar en el array de impares. Muestra por consola: - la multiplicacion que se produce junto con su resultado con el formato 2 x 3 = 6
// -el array de pares e impares

const numbers = [3, 43, 21, 20, 56, 79]
let pares = []
let impares = []
let result

for (const number of numbers) {
    let random = Math.round(Math.random() * 10 + 1)
    let result = number * random
    console.log(`${number} * ${random} = ${result}`)
    if (result % 2 == 0) {
        pares.push(result)
    } else {
        impares.push(result)
    }
}

console.log(pares)
console.log(impares)
