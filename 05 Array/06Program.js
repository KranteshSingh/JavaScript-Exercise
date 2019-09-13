// Emptying an Array

// Solution 1
let numbers = [1, 2, 3, 4, 5];
another = numbers;
numbers = [];
console.log(numbers);
console.log(another);

// Solution 2
let luckyNumbers = [1, 3, 7, 11];
luckyNumbers.length = 0;
console.log(luckyNumbers);

// Solution 3
let awesomeNumbers = [12, 12, 34, 55, 78, 98, 99];
console.log(awesomeNumbers.splice(0, awesomeNumbers.length));
console.log(awesomeNumbers);

// Solution 4
let nmbrs = [1, 2, 3, 4, 5];
while (nmbrs.length > 0) {
  nmbrs.pop();
}
console.log(nmbrs);
