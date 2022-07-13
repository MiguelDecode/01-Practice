/* Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const isPalindrome = (word = "") => {
  if (word === "")
    return console.log("No has ingresado ninguna palabra a comprobar");
  if (word.length === 1)
    return console.log("Tu palabra al menos debe de tener mas de una letra");
  if (typeof word !== "string")
    return console.log("No has introducido una palabra prueba de nuevo");

  word = word.toLowerCase();
  const wordReverse = word.split("").reverse().join("");

  console.log(word);
  console.log(wordReverse);

  return word === wordReverse ? true : false;
};

console.log(isPalindrome("salas"));
console.log(isPalindrome("cacahuete"));
console.log(isPalindrome('Patatap'));
