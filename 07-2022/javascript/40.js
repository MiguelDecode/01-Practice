// WeakSets & WeakMaps

/* 
No se puede declarar los elementos de un WeakSet o un WeakMap como un conjunto sino uno por uno con el método .set()
const weakSet = new WeakSet([1,2,3,3,4,5,true,false,false,{},{},'hola','Hola'])

const weakMap = new WeakMap([
  ['name', 'Miguel'],
  ['surname', 'Decode'],
  ['age', 36],
  [null, 'nulo']
])
*/

const weakSet = new WeakSet();

let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

weakSet.add(valor1);
weakSet.add(valor2);
weakSet.add(valor3);

console.log(weakSet);
console.log(weakSet.has(valor1));

//setInterval(() => console.log(WeakSet),10000)

const weakMap = new WeakMap([]);

let key1 = {};
let key2 = {};
let key3 = {};

weakMap.set(key1, 1);
weakMap.set(key2, 2);
weakMap.set(key3, 3);
console.log(weakMap);

console.log(weakMap.has(key1));
console.log(weakMap.get(key2));
console.log(weakMap.delete(key1));

