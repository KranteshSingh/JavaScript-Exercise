// OOP Core Concept - Abstraction Implementation
// Scope - variable validity dies out side block
// Closure - What variables will be accessible to the inner function from parent function

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 }; // We should hide this property
  let computeOptimumLocation = function() {
    // We shoud hide this method from the consumer of the object
    //..
  };
  this.draw = function() {
    computeOptimumLocation();
    console.log('draw method');
    // this.radius // Accessing the property using 'this'
    // defaultLocation // Accessing the variable
  };
}

const circle = new Circle(23);
// Now we will be able to acces only radius property and draw method
console.log(circle.draw());
console.log(circle.radius);
