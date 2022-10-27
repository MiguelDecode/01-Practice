// Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

function convertBase(num, base) {
  if (typeof num !== "number")
    return console.log("No has introducido un dato válido como número");

  if (typeof base !== "number")
    return console.log("No has introducido un dato válido de base como número");

  if (base !== 10 && base !== 2)
    return console.log("Los únicos datos válidos como base son  2 y 10");

  if (base === 2) {
    return console.log(`${num} base ${base} = ${parseInt(num, base)} base 10`);
  }

  if (base === 10) {
    return console.log(`${num} base ${base} = ${num.toString(2)} base 2`);
  }
}

convertBase(100, 2);
convertBase(4,10)
convertBase()
convertBase(100)
convertBase('299', 10)
convertBase(100, 11)

