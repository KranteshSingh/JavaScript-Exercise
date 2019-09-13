const circle = {
  radius: 1,
  draw() {
    console.log('draw method');
  }
};

const another = {};

for (let key in circle) another[key] = circle[key];

console.log(another);

// For copying or cloning object properties & method
const someOther = Object.assign({}, circle);

// Using spread operator to spread the properties and method of circle into coolObj
const coolObj = { ...circle };
