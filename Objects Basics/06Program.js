// Functions are Objects in JavaScript

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle1 = new Circle(3);

console.log(Circle.name);
console.log(Circle.length); // returns the no. of arguments
console.log(Circle.constructor); // Internally JavaScript used Function Constructor to create the Object Circle

const Circle2 = new Function(
  'radius',
  `{
    this.radius = radius;
    this.draw = function() {
      console.log('draw');
    }`
);

circle3 = new Circle2(4);
console.log(circle3);

Circle.call({}, 4); // .call method is used to call function it's similar to the line 25
Circle.apply({}, [1]); // .apply is also use to call function but instead we pass array as an argument
