// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cutStr(str, limit) {
  if(typeof str !== 'string' || str === '') return console.log('No has introducido una cadena de texto')

  if(typeof limit !== 'number' || limit === undefined) return console.log('No has introducido un numero')

  console.log(str.slice(0, limit));
}

cutStr("Hola Mundo", 4);
cutStr("Hello World is a nice day", 20);
cutStr('', 3)
cutStr('Hola Mundo')
cutStr('Hola Mundo', '8')
cutStr(34, 86)
