// Map

let map = new Map();

// Agregar valores
map.set("name", "Miguel");
map.set("surname", "Decode");
map.set("age", 36);

console.log(map);
console.log(map.size); // número de elementos
console.log(map.has("name"));

console.log(map.get("name"));
console.log(map.set("name", "Arya"));
console.log(map);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const map2 = new Map([
  ["name", "Miguel"],
  ["surname", "Decode"],
  ["age", 36],
  [null, 'nulo']
]);

console.log(map2);

const keysMap = [...map.keys()]
const valuesMap = [...map.values()]

console.log(keysMap, valuesMap);