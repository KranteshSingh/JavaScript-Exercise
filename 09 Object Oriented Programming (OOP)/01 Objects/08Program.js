function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(12);

// Using for...in loop to enumerate over the object circle
for (let key in circle) {
  if (typeof circle[key] !== 'function') console.log(circle[key]);
}

// Using Object.keys() method to enumerate over the object circle

let prop = Object.keys(circle); // It will return an array of keys
console.log(prop);

// Checking for a property in an object

if ('radius' in Object) console.log('YES');
