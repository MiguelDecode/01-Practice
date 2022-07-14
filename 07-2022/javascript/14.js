/* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const gradesConvert = (number = undefined, grades = "") => {
  if (number === undefined)
    return console.log("No has introducido los grados a convertir");
  if (typeof number !== "number")
    return console.log("El valor dado de grados no es un número");
  if (grades === "")
    return console.log(
      "No has introducido el a que quieres convertir los grados"
    );
  if (typeof grades !== "string")
    return console.log("El valor dado para convertir no es un tipo válido");
  if (grades !== "Celsius" && grades !== "Fahrenheit")
    return console.log(
      "No has introducido correctamente el tipo de grados a convertir"
    );

  if (grades === "Celsius") {
    resultado = number * (9 / 5) + 32;
    console.log(resultado);
  }

  if (grades === "Fahrenheit") {
    resultado = ((number - 32) * 5) / 9;
    console.log(resultado);
  }
};

gradesConvert(32, "Celsius");
gradesConvert(32, "Fahrenheit");
gradesConvert();
gradesConvert("cuatro", "Celsius");
gradesConvert(36, 'Casi Celsius')
gradesConvert({}, 'Celsius')
