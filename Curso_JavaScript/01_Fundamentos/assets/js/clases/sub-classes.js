class Person {
  static _count = 0; // Static Property
  static get count() {
    return Person._count + " instances";
  }

  static message() {
    console.log(this.name);
    console.log("Hello everyone, I'm a static method");
  }

  name = "";
  alias = "";
  sentence = "";
  food = "";

  constructor(
    name = "Unknown",
    alias = "Without alias",
    sentence = "No sentence"
  ) {
    this.name = name;
    this.alias = alias;
    this.sentence = sentence;

    Person._count++;
  }

  set setFavouriteFood(food) {
    this.food = food.toUpperCase();
  }

  get getFavouriteFood() {
    return `The favourite food of ${this.name} is ${this.food}`;
  }

  whoami() {
    console.log(`I'm ${this.name} and my identity is ${this.alias}`);
  }

  mySentence() {
    this.whoami();
    console.log(`${this.alias} say: ${this.sentence}`);
  }
}

class Hero extends Person {
  clan = "null";

  constructor(name, alias, sentence) {
    super(name, alias, sentence);

    this.clan = "The avengers";
  }

  whoami() {
    console.log(`I'm ${this.name}, ${this.clan}`);
    super.whoami();
  }
}

const spiderman = new Hero(
  "Peter Parker",
  "SpiderMan",
  "I'm your friendly neighbourd Spiderman"
);

console.log(spiderman);
spiderman.whoami();
