// Removing Elements
let numbers = [1, 2, 3, 4, 5, 6];

// From end
console.log(numbers.pop());
console.log(numbers);

//From beginning
console.log(numbers.shift());
console.log(numbers);

//From middle
//deleting the elements starting from index 2 to no. of elements procedding it
console.log(numbers.splice(2, 1));
console.log(numbers);
