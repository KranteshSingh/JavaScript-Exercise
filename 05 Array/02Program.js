// Finding Elements
// Finding Elements is little bit tricky means whether we have stored primitive types or reference types

// Finding Primitives in Array

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(3)); // Returns 2
console.log(numbers.indexOf(1)); // Returns 0
console.log(numbers.indexOf(6)); // Return -1

console.log(numbers.lastIndexOf(1)); // Returns 3

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
