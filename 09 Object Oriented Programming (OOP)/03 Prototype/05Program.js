// Prototype members vs Instance members

function Circle() {
  // Instance members
  this.radius = radius;

  /*
   this.draw = function() {
     console.log('draw method');
   };
  */
}

// Declaring the draw method in prototype of Circle constructor so the method have only one instance
// Prototype members
Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle();
const c2 = new Circle();

console.log(c1.draw());

/* Essentialy we have 2 kind of properties and methods in javascript 
1. object instance member 
2. Prototype members
*/

// We can overwrite the implementation of prototype methods

Circle.prototype.toString = function() {
  return 'Circle with radius' + this.radius;
};
