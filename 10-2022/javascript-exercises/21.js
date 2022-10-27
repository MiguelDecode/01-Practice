// Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function countVowalsConsonants(str) {
  if (typeof str !== "string")
    return console.log("No has introducido una cadena de texto válida");

  let vowals = 0;
  let consonants = 0;

  str = str.toLowerCase();

  /* for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') continue
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowals++
      continue
    }
    consonants++
  } */

  for (const letter of str) {
    if (letter === " ") continue;

    if (/[aeiouáéíóú]/.test(letter)) vowals++;
    

    if (/[bcdfghjqlmnñpqrstvxyz]/.test(letter)) consonants++;
    
  }

  console.log(vowals, consonants);
}

countVowalsConsonants("Hola Mundo");
countVowalsConsonants("Hola Mundo HOLA MUNDO");
countVowalsConsonants();
countVowalsConsonants(34);
