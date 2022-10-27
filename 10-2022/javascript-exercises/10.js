// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function isPalindrome(str) {
  if (typeof str !== "string" || str === "")
    return console.log("No has introducido una cadena de texto válida");

  let revertStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revertStr += str[i];
  }

  console.log(str.toLowerCase() === revertStr.toLowerCase());
}

isPalindrome("Salas");
isPalindrome("Palindrome");
isPalindrome("Hola me em aloH");
isPalindrome('')
isPalindrome(38)
isPalindrome('848')
