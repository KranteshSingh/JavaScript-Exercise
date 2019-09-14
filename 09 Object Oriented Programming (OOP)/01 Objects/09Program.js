// OOP Core Concept - Abstraction

function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 }; // We should hide this property
  this.computeOptimumLocation = function() {
    // We shoud hide this method from the consumer of the object
    //..
  };
  this.draw = function() {
    this.computeOptimumLocation();
    console.log('draw method');
  };
}

const circle = new Circle(23);
circle.computeOptimumLocation();
circle.draw();
