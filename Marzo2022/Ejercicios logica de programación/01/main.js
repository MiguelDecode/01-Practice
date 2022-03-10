// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Funcion Declarada
// function contar(cadena = "") {
//   if (!cadena) {
//     console.warn("No has ingresado ninguna cadena");
//   } else {
//     console.info(
//       `La cadena ${cadena} tiene una longuitud de ${cadena.length} caracteres`
//     );
//   }
// }

// Funcion Expresada
const contar = (cadena = "") =>
  !cadena
    ? console.warn("No has ingresado ninguna cadena")
    : console.info(
        `La cadena ${cadena} tiene una longuitud de ${cadena.length} caracteres`
      );

contar();
contar("Hola Mundo");
contar("Buenos dias a todo el mundo");
