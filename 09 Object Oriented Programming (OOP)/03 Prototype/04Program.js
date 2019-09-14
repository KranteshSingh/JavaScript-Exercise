let myObj = { name: 'krantesh' };

console.log(Object.getPrototypeOf(myObj)); // same as - myObj.__proto__

// Constructor functions also have prototype (parent)

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle();

// To access prototype of Circle constructor
// parent of an object and prototype of constructor are same
let obj = {};
console.log(Circle.prototype); // same as obj.__proto__

let myArray = [];
console.log(Array.prototype); // same as myArray.__proto__
