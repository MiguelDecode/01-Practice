class Person {
  name = "";
  alias = "";
  sentence = "";

  constructor(
    name = "Unknown",
    alias = "Without alias",
    sentence = "No sentence"
  ) {
    this.name = name;
    this.alias = alias;
    this.sentence = sentence;
  }

  whoami() {
    console.log(`I'm ${this.name} and my identity is ${this.alias}`);
  }

  mySentence() {
    this.whoami();
    console.log(`${this.alias} say: ${this.sentence}`);
  }
}

const spiderman = new Person(
  "Peter Parker",
  "SpiderMan",
  "I'm your friendly neighbourd Spiderman"
);
console.log(spiderman);

const ironman = new Person("Tony Stark", "Ironman", "I'm Ironman");

spiderman.whoami();
ironman.whoami();

spiderman.mySentence();
ironman.mySentence();
