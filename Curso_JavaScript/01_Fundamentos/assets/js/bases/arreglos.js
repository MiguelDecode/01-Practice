// const arr = new Array(10);
// console.log(arr)

// const arr = [];

let videogames = ["Mario 3", "Megaman", "Chrono Trigger"];

console.log({ videogames });
console.log(videogames[0]);
console.log(videogames);

videogames[0] = "A link to the Past";
console.log(videogames);

let arrThings = [
  true,
  123,
  "Miguel",
  3 * 3,
  () => {},
  { a: 1, b: 2, c: 3 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

console.log(arrThings);

console.log(arrThings[0]);
console.log(arrThings[2]);
console.log(arrThings[6][3]);
console.log(arrThings[6][4][1]);

