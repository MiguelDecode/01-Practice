// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function countCharacters(str) {
  if (typeof str !== "string" || str === '')
    return console.log("No has introducido una cadena de texto");

  console.log(str.length);
}

countCharacters("Hola Mundo");
countCharacters("Miguel Decode write a sentence in javascript");
countCharacters(32);
countCharacters(true);
countCharacters("39837");
countCharacters('')
