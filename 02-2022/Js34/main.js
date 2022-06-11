//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//Funcion declarada

function miFuncion(texto, corte) {
  if (typeof texto === "string" && typeof corte === "number") {
    console.log(texto.slice(0, corte));
  } else {
    console.log("Introduce una cadena de texto valida");
  }
}

miFuncion("Hola Mundo", 10);

//Funcion expresada
/*
const separador = (texto = "", corte = undefined) =>
  !texto
    ? console.warn("No ingresaste una cadena de texto")
    : console.log(texto.slice(0, corte));

separador("Hola Mundo", 6);
separador();
separador('Hola Mundo')
*/

const separador = (texto = "", corte = undefined) =>
  !texto
    ? console.warn("No ingresaste una cadena de texto")
    : corte === undefined
    ? console.warn("No ingresaste la longuitud para recortar el texto")
    : console.log(texto.slice(0, corte));

separador("Hola Mundo", 6);
separador();
separador("Hola Mundo");


