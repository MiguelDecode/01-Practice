/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const cutText = (text = "", number = undefined) => {
  if (
    typeof text !== "string" ||
    text === undefined ||
    typeof number !== "number" ||
    number === undefined
  ) {
    console.log("No has introducido ningún dato o no es válido");
  } else {
    console.log(text.slice(0, number));
  }
};

const cutText2 = (text = "", number = undefined) =>
  typeof text !== "string" ||
  text === undefined ||
  typeof number !== "number" ||
  number === undefined
    ? console.log("No has introducido ningún dato o no es válido")
    : console.log(text.slice(0, number));

cutText("Hola Mundo", 4);
cutText();
cutText(32, 4);
cutText("Hola mundo", "cuatro");
cutText(true, false);
cutText('Hola Mundo');
cutText("Viaje antes que destino", 20);

cutText2("Hola Mundo", 4);
cutText2();
cutText2(32, 4);
cutText2("Hola mundo", "cuatro");
cutText2(true, false);
cutText2("Viaje antes que destino", 20);
