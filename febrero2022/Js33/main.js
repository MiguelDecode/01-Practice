// //1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

let entrada = 'Pedro y su llavero'

function miFuncion (entrada) {
    if (typeof entrada === 'string') {
        console.log(entrada.length)
    } else {
        console.log('Introduce un tipo de dato string')
    }
}

miFuncion(entrada);