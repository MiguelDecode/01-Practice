// Escribir un programa en JavaScript que recorra un arreglo y genere un histograma en base a los números de este. El arreglo se llama myArray y contiene 10 elementos que corresponden a números enteros del 1 al 5. Un histograma representa que tanto un elemento aparece en un conjunto de datos (Debe mostrar la frecuencia para todos los números del 1 al 5, incluso si no están presentes en el arreglo). Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería asi:

// 1: *
// 2: 
// 3: 
// 4:
// 5: *



// for (let i = 1; i <= 5; i++) {
//   let idx = myArray.indexOf(i);
//   let contador = 0;
//   while (idx != -1) {
//     idx = myArray.indexOf(i, idx + 1);
//     contador++;
//   }
//   console.log(`El numero ${i} se repite ${contador} veces`);
// }

let myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];

let myHistory = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: ''
}

for (let i of myArray) { 
  // i coje el valor del indice de myArray.
  //Si el array es let myArray las vueltas darian como resultado i=1,i=2,i=1,i=3,i=3,i=1,i=2,i=1,i=5,i=1
  myHistory[i] += '#' // Añade el string '#' al array myHistory en el indice indicado por i.
  //Esto daria como resultado: myHistory[1]; myHistory[2]; myHistory[1]; myHistory[3]; myHistory[3]; myHistory[1]; myHistory[2]; myHistory[1];myHistory[5]; myHistory[1]
  //Esto añadiria un # por cada vez que el iterador pase per el indice indicado.
}
console.log(myHistory)


// for (let i = 1; i <= 5; i++) {
//   let idx = myArray.indexOf(i);
//   while (idx != -1) {
//     console.log(idx)
//     idx = myArray.indexOf(i, idx + 1)
//   }
// }


// let myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];
// let numero = 1;

// let idx = myArray.indexOf(numero);
// let contador = 0;
// while (idx != -1) {
//   idx = myArray.indexOf(numero, idx + 1)
//   contador++
// }
// console.log(`El numero ${numero} se repite ${contador} veces`);