function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

// we want new circleBase Object that refers to shapeBase instead of object base
// Circle.prototype.constructor
// new Circle.prototype.constructor(3) => new Circle(3)
Circle.prototype = Object.create(Shape.prototype); // returns an object that refers to shapeBase
Circle.prototype.constructor = Circle;

// As best practice when we reset the prototype of a function we should also reset the constructor

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(44);
