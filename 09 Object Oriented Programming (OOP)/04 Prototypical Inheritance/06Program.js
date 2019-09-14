//Polymorphism

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constuctor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('duplicate circle');
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('duplicate square');
};

const c = new Circle();

// Each object Circle & Square provides a different implementation of the duplicate function i.e., PolyMorphism
const shapes = [new Square(), new Circle()];
for (let shape of shapes) {
  shape.duplicate();
}
