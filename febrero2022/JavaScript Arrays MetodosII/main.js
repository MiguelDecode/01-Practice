let numbers = [11, 22, 93, 44, 54, 564, 45, 89, 127];

let word = 'Hola mundo esto es un string';

console.log(Array.from(word)); // Crea un array con todos los caracteres 
console.log(word.split('')); // Crea un array con todos las caracteres (seraparación nula)
console.log(word.split(' ')); // Crea un array y separa los caracteres cada vez que encuentra un espacio (separación un espacio)
console.log (word.split ('o')); // Ejemplo

const letters = ['s', 'z', 'a', 'c', 'y', 'w'];

console.log(letters);
console.log(letters.sort());
console.log(numbers.sort((a,b) => a - b));
console.log(numbers.sort((a,b) => b - a));

numbers.forEach((element) =>console.log(element));
numbers.forEach((element, index) => console.log(`${element} esta en la posición ${index}`));

const palabras = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(palabras.some(palabra => palabra.length>8)); // Resultado true or false
console.log(palabras.some(palabra => palabra.length>10));
console.log(palabras.every(palabra => palabra.length>3));

numbers.map((number) => console.log(number * 2)); // Recorre el array y realiza la acción especificada
for (const number of numbers) {
  console.log(number * 2)
}

const numbers2 = numbers.filter((number) => number>80); // Filtra los numeros que cumplen la condición y los devuelve en un Array
console.log(numbers2);

console.log(numbers.reduce((a,b) => a + b)); //Suma todos los numeros