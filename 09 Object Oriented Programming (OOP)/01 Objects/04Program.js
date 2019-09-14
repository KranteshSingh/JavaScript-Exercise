// Every Object in JavaScript has a property called 'constructor'
// constructor references to the function that was used to create that object

function CreateRectangle(side) {
  this.side = side;
  this.draw = function() {
    console.log('draw method');
  };
}

const myRectangle = new CreateRectangle();
console.log(myRectangle.constructor); // It returns the function that was used to create this object

function createSquare(sideLength) {
  return {
    sideLength,
    draw: function() {
      console.log('draw method');
    }
  };
}

const mySquare = createSquare(5);
console.log(mySquare.constructor); // It returns the function Object() that was used to create this object
