class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //Instance method
  draw() {
    console.log('Hello');
  }
  // Static Method - Utility function
  static parse(str) {
    const radius = JSON.parse(str).radius;

    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius : 1"}');
console.log(circle);

class Math2 {
  static avg() {
    console.log('123');
  }
}

Math2.avg();
