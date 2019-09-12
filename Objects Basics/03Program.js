// constructor function to create objects

// camelNotation: oneTwoThreeFour
// Pascal Notation : OneTwoThree

// In constructor functions we use different approach to initialise object by using 'this' keyword
// 'this' is a reference to the object that is executing this piece of code
function CreateCircle(radius) {
  // Adding property to the empty object using this keyword
  this.radius = radius;
  this.draw = function() {
    console.log('Hi there');
  };

  // return this -> this happens underthehood
}

const circle1 = new CreateCircle(3);
console.log(circle1);

console.log(circle1.radius);

// new keyword creates new empty javascript object
// const new = {}

// and then to this new empty object it sets the properties that we'd defined in constructor using 'this' keyword
// and then this new object return from the constructor
// and then it will point to circle1 variable
