// Creating our own prototypical inheritance

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

// we want new circleBase Object that refers to shapeBase instead of object base
Circle.prototype = Object.create(Shape.prototype); // returns an object that refers to shapeBase

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(44);

console.log(s);
console.log(c);

// s inherit from shapeBase
// shapeBase inherit from objectBase

console.log(c.duplicate());
