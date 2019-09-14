// Functions are Objects
function CreateRectangle(side) {
  this.side = side;
  this.draw = function() {
    console.log('draw method');
  };
}

console.log(CreateRectangle.name);
console.log(CreateRectangle.length);
console.log(CreateRectangle.constructor); // Returns the function that was used to create CreateRectangle

CreateRectangle.call({}, 4); // .call method is use to call a function with first argument as empty object and then pass argument as 4
CreateRectangle.apply({}); // Instead of passing the arguments explicitly we pass them in an array

//When we declare a function internally it goes like this
const circle = Function(
  'radius',
  `this.side = side;
this.draw = function() {
  console.log('draw method');
};`
);
