//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function miFuncion (string, simbolo) {
    if (typeof string === 'string') {
        console.log(string.split(simbolo))
    } else (
        console.log('Introduce un una cadena de texto')
    )
}

miFuncion('Hola Mundo, que tal les va?', 'o')