// Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

// Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.

let suma = 0
let numero = 1000

for (let i = 1; i < numero; i++) {
    if (i % 3 == 0) {
        suma += i
    } else if (i % 5 == 0) {
        suma += i
    } else {
        suma += 0
    }
}

console.log(suma)