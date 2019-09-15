const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Private Method
  [_draw]() {}
}

const c = new Circle(2);

const key = Object.getOwnPropertySymbols(c);
console.log(key);
