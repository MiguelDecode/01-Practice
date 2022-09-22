let str = "Hola soy un string de texto";

console.log(str.length);

// Obtener partes del string

console.log(str.slice(0, 6));
console.log(str.substring(0, 10));

console.log(str.slice(5, 26));

let cadena = "Hola mi nombre es Miguel Decode";
console.log(cadena);

console.log(cadena.replace("Miguel", "Gorka"));

let textoLargo =
  "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(textoLargo.replace("los", "cinco"));

console.log(textoLargo.replace(/los/g, "cinco"));

console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());

console.log(cadena + ". " + textoLargo);
console.log(`${cadena} ${textoLargo}`);

// Eliminar espacios al inicio y al final

const cadenaConEspacios = "             Hello               World             ";
console.log(cadenaConEspacios.trim());
console.log(cadenaConEspacios.trimStart());
console.log(cadenaConEspacios.trimEnd());

let str4 = "Hola soy el string número 4";

console.log(str4.charAt(3));
console.log(str4[3]);
console.log(str4.split(""));

// Obtener la posición de una palabra en una cadena
let str5 = "Hola soy Gorka y me gusta el surf";
console.log(str5.indexOf("Gorka"));

console.log(textoLargo.match(/no/g));

console.log(textoLargo.includes("los"));

console.log(textoLargo.startsWith("Tito"));

console.log(textoLargo.endsWith("tito"));

