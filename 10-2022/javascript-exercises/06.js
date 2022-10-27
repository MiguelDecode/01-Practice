// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function cutBy(str, cutter) {
  if (typeof str !== "string" || str === "")
    return console.log("No has introducido una cadena de texto");

  if (typeof cutter !== "string")
    return console.log("No has introducido un separador válido");

  console.log(str.split(cutter));
}

cutBy("hola que tal", " ");
cutBy("", "h");
cutBy("hola que tal", 13);
cutBy(34, " ");
