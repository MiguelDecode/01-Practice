/* Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const countConsonantsVowels = (string = '') => {
  if (string === '') return console.log('No has ingresado nada');
  if (typeof string !== 'string') return console.log('El valor ingresado no es una cadena de texto');

  let vowels = 0;
  let consonants = 0;
  string = string.toLocaleLowerCase();

  for (const letter of string) {
    if (/[aeiouáéíóú]/ig.test(letter)) {
      vowels++;
    }

    if (/[bcdfghjklmnñpqrstvxyz]/.test(letter)) {
      consonants++
    }
  }

  console.log(`Consonants = ${consonants} and Vowels = ${vowels}`);

}

countConsonantsVowels('Hola Mundo')
