let number = 20;
let result = "";

for (let i = 0; i < number; i++) {
  // Manejo de lineas
  let newLine = "\n";

  for (let j = 0; j < number; j++) {
    // Manejo de una sola línea

    if (i % 2 === 0) {
      // Línea par
      if (j % 2 === 0) {
        result += "#";
      } else {
        result += " ";
      }
    } else {
      // Línea impar
      if (j % 2 === 0) {
        result += ' '
      } else {
        result += '#'
      }
    }
  }
  result += newLine;
}

console.log(result);
