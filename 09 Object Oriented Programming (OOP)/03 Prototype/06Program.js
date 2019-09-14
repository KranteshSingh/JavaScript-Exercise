function Circle(radius) {
  this.radius = radius;
  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(3);

// Prototype members
Circle.prototype.draw = function() {
  console.log('draw method');
};

// Returns instance members
console.log(Object.keys(c1));

// Returns all instance and prototype members
for (let key in c1) console.log(key);

//
console.log(c1.hasOwnProperty('radius')); // Returns true
console.log(c1.hasOwnProperty('draw')); // Returns false cuz draw member of prototype
