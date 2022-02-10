// Solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longuitud de la palabra.  

let palabra = prompt('Introduce una palabra para saber sus consonantes, sus vocales y su longuitud')

let consonantes = 0
let vocales = 0

for (const letra of palabra) {
    if (letra == 'a'|| letra == 'o' || letra == 'e' || letra== 'u' || letra== 'i') {
        consonantes++
    } else {
        vocales++
    }
}

console.log(`La palabra ${palabra} tiene ${palabra.length} letras y de ellas ${consonantes} son consonantes y ${vocales} son vocales.`)