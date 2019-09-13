// Testing the elements of an array
let numbers = [1, 2, 3, 4, 5, -6];

const allPositive = numbers.every(value => value >= 0);

const atleastOnePostive = numbers.some(value => value >= 0);

console.log(allPositive);
console.log(atleastOnePostive);
