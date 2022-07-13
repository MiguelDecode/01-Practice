/* Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const separateText = (text = undefined, separator = undefined ) => {
  if(typeof text !== 'string' || text === undefined || typeof separator !== 'string' || separator === undefined) {
    console.log('Alguno de tus datos no es válido o no ha sido introducido')
  } else {
    console.log(text.split(separator));
  }
}

separateText('Hola que tal', ' ');
separateText()
separateText(3,8)
separateText('Hello world, do you have a good morning', ',')