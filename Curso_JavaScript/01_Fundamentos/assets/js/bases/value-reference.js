let a = 10;
let b = a;
a = 30;

console.log(a, b);

let juan = { name: "Juan", age: 35 };

let ana = juan;
ana.name = 'Ana'

console.log(juan, ana);

const changeName = ({...persona}) => {
  persona.name = 'Tony';
  return persona
}

let peter = {name: 'Peter'}
let tony = changeName(peter)

console.log(peter, tony)

let marco = {...juan}
console.log(marco)

const frutas = ['Manzana', 'Pera', 'Piña']

console.time('spread')
const otrasFrutas = [...frutas]; // Al meter la variable en otro arreglo este se convierte en un nuevo arreglo y desvincula la referencia del array original frutas.
console.timeEnd('spread')

console.time('slice')
const otrasFrutas2 = frutas.slice(); // Con slice nos retorna un nuevo array y desvincula a su vez la referencia del array original frutas.
console.timeEnd('slice')

otrasFrutas.push('Mango')
console.log(frutas,otrasFrutas)
console.log(frutas, otrasFrutas, otrasFrutas2)