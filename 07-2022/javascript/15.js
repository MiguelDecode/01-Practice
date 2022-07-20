/* Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

const convert = (number = undefined, base = undefined) => {
  if (number === undefined) return console.log("No has introducido un número");
  if (base === undefined) return console.log("No has introducido una base");
  if (typeof number !== "number")
    return console.log("No has introducido un tipo de dato válido como número");
  if (typeof base !== "number")
    return console.log("No has introducido una base de tipo número");
  if (base !== 2 && base !== 10)
    return console.log("Solo se admiten como base los números 2 y 10");

  if (base === 2) {
    return console.log(
      `${number} base ${base} = ${parseInt(number, base)} base 10`
    );
  }

  if (base === 10) {
    return console.log(`${number} base ${base} = ${number.toString(2)} base 2`);
  }
};

convert(100, 2);
convert();
convert("2", 5);
convert(100);
convert(100, "3");
convert(4, 10);
convert(100, 3);
