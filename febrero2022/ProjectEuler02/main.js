// Cada nuevo término en la sucesión de Fibonacci se genera sumando los dos términos anteriores. Al comenzar con 1 y 2, los primeros 10 términos serán:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, encuentre la suma de los términos de valor par.

let fibonacci = [1, 2]
let i = 2
let suma = 0

while (fibonacci[i - 1] + fibonacci[i - 2] < 4000000){
    let nuevonumero = fibonacci[i - 2] + fibonacci[i - 1]
    fibonacci.push(nuevonumero) 
    i += 1
}     
for (let j = 0; j < fibonacci.length; j++) {
    if (fibonacci[j] % 2 == 0) {
        suma += fibonacci[j]
    }
}

console.log(fibonacci)
console.log(suma)
