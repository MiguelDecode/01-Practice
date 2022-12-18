const theBiggest = (a, b) => {
  return a > b ? a : b;
};

console.log(theBiggest(10, 15));
console.log(theBiggest(15, 30));

const max = (a, b) => (a > b ? a : b);

console.log(max(30, 68));

const isMember = (member) => (member ? "2 Dolars" : "10 Dolars");

console.log(isMember(true));
console.log(isMember(false));

const friend = false;
const arrFriends = [
  "Peter",
  "Tony",
  "Dr. Strange",
  friend ? "Thor" : "Loki",
  (() => "Nick Fury")(),
  max(10, 15),
];

console.log(arrFriends);

const note = 82;
const grade =
  note >= 95
    ? "A+"
    : note >= 90
    ? "A"
    : note >= 85
    ? "B+"
    : note >= 80
    ? "B"
    : note >= 75
    ? "C+"
    : note >= 70
    ? "C"
    : "F";

console.log(grade)
