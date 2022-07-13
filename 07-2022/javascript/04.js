/* Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repeatText = (text = undefined, numberRepeats = undefined) => {
  if (
    typeof text !== "string" ||
    text === undefined ||
    typeof numberRepeats !== "number" ||
    numberRepeats === undefined ||
    Math.sign(numberRepeats) !== 1
  ) {
    console.log("Alguno de tus datos no es válido o no ha sido introducido");
  } else {
    console.log((text + " ").repeat(numberRepeats));
  }
};

repeatText("Hola Mundo", 3);
repeatText("Hola Mundo", 0);
repeatText(3, 8);
repeatText("Hola mundo");
repeatText("Hola mundo", "cuatro");
