let games = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log(games.length);

let first = games[0];
let last = games[games.length - 1];

console.log(first, last);

games.forEach((game) => console.log(game));

games.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

const newGamesLarge = games.push("F-Zero");
console.log(newGamesLarge)

games.unshift('Pokemón')
console.log(games)

// games.shift()
// games.pop()
console.log(games)

const pos = 2;
const remove = 2;

games.splice(pos,remove)
console.log(games)

const metroidIndex = games.indexOf('Chrono')
// If return -1 is because dont find the value of search.
console.log(metroidIndex)
