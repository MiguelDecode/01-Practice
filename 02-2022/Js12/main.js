// Solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longuitud de la palabra.

let palabra = prompt("Introduce una palabra para saber sus vocales, consonantes y su longuitud").toLowerCase()

let consonantes = 0
let vocales = 0

for(const letra of palabra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        vocales++
    } else {
        consonantes++
    }
}

console.log(`Tu palabra tiene ${vocales} vocales, tiene ${consonantes} consonantes y tiene un total de ${palabra.length} letras`)

