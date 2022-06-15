/*
FUNCIÓN DECLARADA
 function nombreFuncior(parametro1,parametro2) {
  console.log('Codigo a ejecutar');
}

FUNCIÓN EXPRESADA
const nombreFuncion = (parametro1 + parametro2) => {
  parametro1 + parametro2
} */

function saludar() {
  console.log("Hola");
}

saludar();

const saludar2 = () => console.log("Hola");

saludar2();

const saludarUsuario = (name) => console.log(`Hola ${name} que tal?`);

saludarUsuario("Juan");
saludarUsuario("Marcos");
saludarUsuario("Marta");
saludarUsuario("Isabel");

const suma = (num1, num2) => num1 + num2;

let result = suma(4, 5);

console.log(suma(2, 3));
console.log(result);

