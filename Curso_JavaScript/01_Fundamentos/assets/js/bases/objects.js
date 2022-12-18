const character = {
  name: "Tony Stark",
  codeName: "Ironman",
  isLive: false,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  address: {
    zip: "10880, 90265",
    city: "Malibu, California",
  },
  // The under line of code is a bad idea
  "last film": "Infinity War",
};

console.log("Nombre:", character.name);
console.log(character);

console.log(character["name"]);
console.log(character.age);

console.log(character.coords.lat);
console.log(character.suits[2]);

console.log(character.suits.length);
console.log(character.suits[character.suits.length - 1]);

const x = "isLive";
console.log(character[x]);

console.log(character["last film"]);

// Más detalles
character.age = null;
console.log(character.age);

delete character.age;
console.log(character.age);

const entriesOdd = Object.entries(character);
console.log(entriesOdd)

character.married = true;
console.log(character.married)

Object.freeze(character)
character.money = 1000000000000000000;

console.log(character.money)
character.address.city = 'Costa Rica'
console.log(character.address)

const properties = Object.getOwnPropertyNames(character)
console.log(properties)
const values = Object.values(character)
console.log(values)

