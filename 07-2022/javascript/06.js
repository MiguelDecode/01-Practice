/* Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const countWords = (text = "", word = "") => {
  if (text === "") return console.log("No ingresaste el texto donde buscar");
  if (typeof text !== "string")
    return console.log(
      "No ingresaste un tipo de dato válido en el campo de texto"
    );
  if (word === "") return console.log("No ingresaste la palabra a buscar");
  if (typeof word !== "string")
    return console.log(
      "No ingresaste un dato válido a buscar debe ser una palabra"
    );

  let i = 0;
  let contador = 0;

  while (i !== -1) {
    i = text.indexOf(word, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(contador);
};

countWords("hola mundo adios mundo", "mundo");
countWords(3);
countWords("hola mundo adios mundo");
countWords("", "hola");
