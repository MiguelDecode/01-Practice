const cars = ["Ford", "Mazda", "Honda", "Toyota", "Kia"];

let i = 0;

// while (i < cars.length) {
//   console.log(cars[i]);
//   i++;
// }

while(cars[i]) {
  if(i === 1) {
    i++
    continue
  }

  console.log(cars[i])
  i++;
}

console.warn('Do while')

let j = 9;

do {
  console.log(cars[j])
  j++
} while (j < cars.length);
