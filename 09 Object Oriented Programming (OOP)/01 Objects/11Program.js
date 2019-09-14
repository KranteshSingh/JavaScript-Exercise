// OOP Core Concept - Abstraction Implementation

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  /*
    this.getDefaultLocation = function() {
    return defaultLocation;
    };
  */

  this.draw = function() {
    console.log('draw method');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error('Invalid Location');
      defaultLocation = value;
    }
  });
}

// Object.defineProperty is used to set getter so that we can access the read only property
// getter is a function that is used to read a property
const circle = new Circle(23);
console.log(circle.defaultLocation);
circle.defaultLocation = 1;
console.log(circle);
