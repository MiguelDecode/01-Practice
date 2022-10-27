// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function convertTemperature(num, measure) {
  if (typeof num !== "number")
    return console.log("No has introducido un tipo de número válido");

  measure = measure.toUpperCase();

  if (typeof measure !== "string")
    return console.log(
      "No has introducido un valor correcto de tipo de medida"
    );

  if (measure !== "C" && measure !== "F")
    return console.log(
      "No has introducido un tipo de medidad valida. Las únicas validas son C o F"
    );

  if (measure === "F") {
    console.log((num - 32) * 0.5556);
  }

  if (measure === "C") {
    console.log(num * 1.8 + 32);
  }
}

convertTemperature(0, "C");
convertTemperature(32, "F");
convertTemperature("", "Z");
convertTemperature(32, "c");
convertTemperature(0, "f");
