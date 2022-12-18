function createPerson(name, surname) {
  return {
    name,
    surname,
  };
}

const createPerson2 = (name, surname) => ({ name, surname });

const person = createPerson("Miguel", "Decode");
console.log(person);

const person2 = createPerson2("Ana", "Pazos");

console.log(person2);

function printArguments() {
  console.log(arguments);
}

const printArguments2 = () => console.log(arguments);

printArguments(10, true, false, "Miguel", "Hello");
// printArguments2(10,true,false,'Ana', 'Goodbye') Una función de flecha no tiene argumentos.

const print = (edad, ...args) => {
  return args;
};

const arguments = print(10, true, false, "Miguel", "Goodbye");
console.log(arguments); // El primer paramétro no entra en arguments.

const argumentsArr = [...arguments];
console.log(argumentsArr);

const [married, isLive, name, greet] = print(
  10,
  true,
  false,
  "Miguel",
  "Hello"
);
console.log({ married, isLive, name, greet });

const { surname: newSurname } = createPerson("Miguel", "Decode");
console.log({ newSurname });

const tony = {
  name: "Tony Stark",
  codeName: "Ironman",
  dead: false,
  age: 40,
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

// const printProperties = (character) => {
//   console.log(character.name);
//   console.log(character.codeName);
//   console.log(character.dead);
//   console.log(character.age);
//   console.log(character.suits);
// };

const printProperties = ({name, codeName, dead, age = uknow, suits}) => {
  console.log(name)
  console.log(codeName)
  console.log(dead)
  console.log(age)
  console.log(suits)
}