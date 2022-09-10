var variable;
let variableLet;

const variableConst = "Hello World";

var a = 1;
console.log(a);
a = 2;
console.log(a);
a = 3;
console.log(a);

const greet = "Hello guys";
console.log(greet);
// greet = "Welcome" ==> Error messge

let b = 10;
console.log(b);
b = 15;
console.log(b);
b = 20;
console.log(b);

// Var scope global
// Let scope de bloque

var variable = "Hola soy una variable var";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable"; // Aunque declaremos dentro de un bloque la variable esta tiene un scope global y cambia el valor de la variable externamente.
}

console.log(variable);

// Variable let

let ab = "Variable let exterior";

for (var i = 0; i < 3; i++) {
  let ab = "Variable let interior";
  console.log(ab);
}

console.log(ab);

// Type of

console.log(typeof ab);
console.log(typeof a);
console.log(typeof b);
console.log(typeof NaN);
console.log(typeof undefined);
let arr = [2, 3, 5, 8];
console.log(typeof arr);
