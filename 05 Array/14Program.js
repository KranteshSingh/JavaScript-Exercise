let numbers = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 8, 5, 9, 9, 0];

// With reduce method we can reduce all the element of an array to single value that can be anything
// reduce method takes two parameter
// 1st parameter is callback fn and 2nd parameter is initialiser for accumulator
// if we don't initilize accumulator it will be set to first element of the array
let total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(total);
