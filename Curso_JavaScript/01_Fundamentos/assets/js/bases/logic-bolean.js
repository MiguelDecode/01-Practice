const returnTrue = () => {
  console.log("Regresa True");
  return true;
};

const returnFalse = () => {
  console.log("Regresa False");
  return false;
};

console.log("Not o la negación");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!returnFalse());
console.log(!returnTrue());

console.log("And");
console.log(true && true);
console.log(true && false);
console.log(true && !false);
console.log(returnFalse() && regresaTrue());
console.log(returnTrue() && returnFalse());

console.log(true && true && true && false);

returnTrue() && returnFalse();
returnFalse() && returnTrue();

console.warn("OR");

console.log(true || false);
console.log(false || false);
console.log(true || true);

console.log(returnTrue() || returnFalse());

console.log(true || false || false || false);

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo"; // true
const a2 = false && "Hola Mundo" && "Miguel";
const a3 = 'Juan' && 'Maria' && false && 'Marcos' && 'Marta'
console.log(a1);
console.log(a2);
console.log(a3)

const a4 = soyFalso || 'Ya no soy Falso'
const a5 = soyFalso || 'Ya no soy Falso' || soyUndefined || 'Juan'
console.log(a4, a5)

if(true || true || true || false) {
  console.log('Hacer algo')
} else {
  console.log('No hacer algo')
}
