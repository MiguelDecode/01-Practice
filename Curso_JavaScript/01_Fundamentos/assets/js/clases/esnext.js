class Rectangle {
  #area = 0;

  constructor(base = 0, height = 0) {
    this.base = base;
    this.height = height;

    this.#area = base * height;
  }

  doubleArea() {
    console.log(this.#area * 2);
  }
}

const rectangle = new Rectangle(10, 15);
// rectangle.#area = 100;

console.log(rectangle);
rectangle.doubleArea();