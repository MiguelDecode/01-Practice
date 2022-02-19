//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function miFuncion(string, repeticiones) {
  let cadena = string + " ";
  console.log(cadena.repeat(repeticiones));
}

miFuncion("Hola Mundo", 23);
