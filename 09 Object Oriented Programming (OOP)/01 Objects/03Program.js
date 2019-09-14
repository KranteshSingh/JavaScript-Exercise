// Constructor Function

function CreateRectangle(side) {
  this.side = side;
  this.draw = function() {
    console.log('draw method');
  };
}

const myRectangle = new CreateRectangle();
console.log(myRectangle);
