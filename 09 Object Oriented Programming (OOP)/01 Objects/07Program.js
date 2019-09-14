function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10); // creating new object circle

circle.location = { x: 1 }; // adding new property to the object circle
console.log(circle);
delete circle.location; // deleting the existing property to the object circle
