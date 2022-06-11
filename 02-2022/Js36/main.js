//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function miFuncion(string, repeticiones) {
  let cadena = string + " ";
  console.log(cadena.repeat(repeticiones));
}

miFuncion("Hola Mundo", 23);

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");
  if (veces === undefined)
    return console.warn(
      "No ingresaste la cantidad de veces que deseas repetirlo"
    );
  if (veces === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no puede ser negativo");
  let cadena = texto + ". ";
  console.log(cadena.repeat(veces));
};

repetirTexto ('Hola Mundo', 4)