// Set

const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  true,
  {},
  {},
  "hola",
  "Hola",
]);
console.log(set);
console.log(set.size); // método para ver la longuitud del set

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(true);
set2.add(false);

console.log(set2);
console.log(set2.size);

for (const item of set) {
  console.log(item);
}

set2.forEach((n) => console.log(n));

console.log(set2[0]); // No funciona en los set

const arr2 = Array.from(set2);
console.log(arr2[2]);
console.log(arr2[4]);

set.delete("Hola");
console.log(set);

console.log(set.has("hola"));
console.log(set.has("hello"));

set2.clear(); // Procede a eliminar todos los valores del set
console.log(set2);
