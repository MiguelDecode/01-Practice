// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function countReapeatWord(str, word) {
  if (typeof str !== "string" || str === "")
    return console.log("No has ingresado una cadena de texto válida");

  if (typeof word !== "string" || word === "")
    return console.log(
      "No has introducido una palabra o palabras válidas para buscar el número de veces que se repite"
    );

  const arrayStr = str.split(" ");
  console.log(arrayStr);

  /*  let count = 0;
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] === word) {
      count++;
    }
  }

  console.log(count); */

  let count = 0;

  arrayStr.filter((el) => {
    if (el === word) count++;
  });

  console.log(count);
}

countReapeatWord("hola mundo adios mundo", "mundo");
countReapeatWord("hello hello dello hello dello hello", "hello");
countReapeatWord("");
countReapeatWord("hola mundo hola mundo", 3);
countReapeatWord('hola mundo hola mundo')
