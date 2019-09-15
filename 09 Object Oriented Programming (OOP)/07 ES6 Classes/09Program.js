class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    console.log('Circle Move');
  }
}

const c = new Circle();
console.log(c.move());
