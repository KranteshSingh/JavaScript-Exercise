let circle = {
  radius: 2,
  location: {
    x: 3,
    y: 4
  },
  draw: function() {
    console.log('I am draw method');
  }
};

console.log(circle.radius); // Accessing the radius property of circle object
console.log(circle.location);
console.log(circle.draw);

circle.radius = 4; // Changing radius to 4
console.log(circle.radius);
