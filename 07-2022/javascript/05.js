/* Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const reverseText = (text = undefined) => {
  text === undefined || typeof text !== "string"
    ? console.warn("No has introducido ningún valor o su tipo no es válido")
    : console.log(text.split("").reverse().join(""));
};

reverseText("Hola Mundo");
reverseText(3);
reverseText("Alohomora");
reverseText(true);
