/* Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const isPalindromic = (number = undefined) => {
  if (number === undefined)
    return console.log("No has ingresado ningún número");
  if (typeof number !== "number")
    return console.log("El valor introducido no es un número");

  reverseNumber = number.toString().split("").reverse().join("");
  return number == reverseNumber ? true : false;
};

console.log(isPalindromic(2002));
isPalindromic("hello");
isPalindromic(true);
isPalindromic();
isPalindromic({});
console.log(isPalindromic(3.56));
console.log(isPalindromic(35.53));