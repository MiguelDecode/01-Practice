/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

const countCharacters = (text = undefined) => {
  if (typeof text === "string") {
    console.log(text.length);
  } else if (text === undefined) {
    console.log("No has introducido ningun dato");
  } else {
    console.log("No has introducido un tipo de dato válido");
  }
};

countCharacters("Hola Mundo");
countCharacters(8);
countCharacters(true);
countCharacters("Hello world");
countCharacters();
countCharacters("Hola Mundo, hola mundo y hola mundo");

const countCharacters2 = (text = "") =>
  !text
    ? console.warn("No ingresaste ningún dato")
    : console.log(`El total de caracteres es ${text.length}`);


countCharacters2('Hola mundo')