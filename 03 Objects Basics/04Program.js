// Dynamic nature of objects

const circle = {
  radius: 2
};

// This will add another property to the object circle i.e, color = 'blue'
circle.color = 'blue';
console.log(circle);

// similarly we can add methods to the object circle
circle.draw = function() {
  console.log('draw method for circle');
};

console.log(circle);

// You can also delete different properties and methods of an object

delete circle.color;
console.log(circle);
