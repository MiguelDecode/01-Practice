// //1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


//Función Declarada

function miFuncion(entrada = "") {
  if (!entrada) {
    console.warn("No ingresaste ninguna cadena");
  } else if (typeof entrada === "string") {
    console.log(entrada.length);
  } else {
    console.log("Introduce un tipo de dato string");
  }
}

miFuncion("Hola Mundo");
miFuncion(9874578);
miFuncion();

//Función expresada

const contador = (entrada = "") =>
  !entrada
    ? console.warn("No ingresaste ninguna cadena")
    : console.log(entrada.length);

contador();
contador(845478574);
contador("Hola Mundo");
