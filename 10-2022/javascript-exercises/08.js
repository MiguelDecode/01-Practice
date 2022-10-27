// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function revertText(str) {
  if (typeof str !== "string" || str === "")
    return console.log("No has introducido una cadena de texto válida");
    
  // Usando métodos
  // let revertStr = str.split("").reverse().join('');

  // Iterando con Arrays
  /* let strToArray = [];
  let revertArray = [];
  let arrayToString = "";

  for (let i = 0; i < str.length; i++) {
    strToArray.push(str[i]);
  }

  for (let j = str.length; j > 0; j--) {
    let last = strToArray.pop();
    revertArray.push(last);
  }

  for (let z = 0; z < revertArray.length; z++) {
    arrayToString += revertArray[z];
  }

  console.log(arrayToString); */

  // Iterando sobre un String
  let revertStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revertStr += str[i];
  }

  console.log(revertStr);
}

revertText("Hola Mundo");
revertText("");
revertText(3)
revertText('Revertir')
