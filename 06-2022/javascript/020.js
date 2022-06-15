// SPREAD OPERATOR

const numbers = [-12, 2, 3, 23, 43, 2, 3];

/* console.log(numbers);
console.log(...numbers); */

//Enviar elementos de un array a una función

/* const addNumbers = (a,b,c) => {
  console.log(a+b+c);
}

const numbersToAdd = [1,2,3]

addNumbers(1,2,3); 
addNumbers(numbersToAdd)
addNumbers(...numbersToAdd) */

// Añadir un array a otro array

/* const users = ["Javier", "David", "Rosa", "Juan", "Mercedes"];
const newUsers = ["Marta", "Jaime", "Laura"];

users.push(...newUsers);
users.unshift(...newUsers);
users.splice(2, 0, ...newUsers);

console.log(users); */

//Copiar un array

/* let array1 = [1,2,3,4]
let array2 = [...array1]
console.log(array1); */

//Concatenar arrays

let array1 = [1,2,3,4]
let array2 = [6,7,8,9]

let totalArray = array1.concat(array2)
let spreadArray = [...array1,...array2]
console.log(totalArray);
console.log(spreadArray);

//Enviar un número indefinido de argumentos a una función (parametros REST)

const restParams = (...numbers) => {
  console.log(numbers);
}

restParams()
restParams(1,2,3,4,5,6,7,8,9,10,'etc...')

//Librería Math

console.log(Math.max(1,2,3));
console.log(Math.max(...numbers));

//Eliminar elementos duplicados

console.log(numbers);
console.log(new Set(numbers));
console.log([...new Set(numbers)]);
