console.log(this);
this.place = "Global context";

function greet() {
  console.log(`${this.place}`);
}

greet();

const obj = {
  place: 'Object context'
}

greet.call(obj)
greet.apply(obj)