/*
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw method');
  };
}
*/

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log('move method');
    };
  }
  draw() {
    console.log('draw method');
  }
}

const c = new Circle(3);
console.log(c);
