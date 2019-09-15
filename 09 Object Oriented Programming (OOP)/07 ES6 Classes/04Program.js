'use strict';

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
// Method Call
c.draw(); // Calling a method on an object

const draw = c.draw;
console.log(draw); // Returns the window object

//Function Call - calling this function as standalone function
draw();
