// Spread Operator

const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(numbers);
console.log(...numbers);

const addNumbers = (a,b,c) => {
  console.log(a+b+c)
}

addNumbers(1,2,3);

const numbersToAdd = [1,2,3,4,5];

addNumbers(numbersToAdd);
addNumbers(...numbersToAdd)

numbers.push(...numbersToAdd);
console.log(numbers);

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
let arrayConcat = array1.concat(array2);
console.log(arrayConcat);
let arrayConcat2 = [...array1,...array2];
console.log(arrayConcat2);

const restParms = (...numbers) => {
  console.log(numbers);
}
restParms(1,2,3,4,'pepe','tuan',8);

console.log(Math.max(numbers));
console.log(Math.min(numbers));

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log(new Set(numbers));
console.log([...new Set(numbers)]);
