// Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function removePattern(str, pattern) {
  if(typeof str !== 'string' || str === '') return console.log('No has ingresado una cadena de texto válida')

  if(typeof pattern !== 'string' || pattern === '') return console.log('No has ingresado una cadena de texto válida como patrón')

  let regexp = new RegExp(pattern, 'g');

  const newStr = str.replace(regexp, "");

  console.log(newStr);
}

removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
removePattern()
removePattern(34, '3')
removePattern('Enero Febrero Marzo', 3)
removePattern('Mario Luigi Peach', '3')
