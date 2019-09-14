// Prototype is a parent of an another object
let x = {};
console.log(x); // returns the object __proto__ which is the objectBase for all other objects defined in program.
console.log(Object.getPrototypeOf(x));
let y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// this relation of x and y to the prototype object is referred as Protypical Inheritance
