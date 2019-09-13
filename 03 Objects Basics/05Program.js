// Constructor Property
// every object in javascript has a property called constructor
// that constructor property references to the function that was used to construct / create that object

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw method');
    }
  };
}

const circle1 = createCircle(2);
console.log(circle1.constructor);

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Hi there');
  };
}

const another = new CreateCircle(1);

// This will return the function that is used to create this object
console.log(another.constructor);

// Whenever we declare any object, string literal, boolean literal there is construction is used to create it
new Object(); // let newObj = {}
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1,2,3,4
