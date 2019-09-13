const numbers = [1, 2, 3, 4, 5];

// This will return a string joining the elements of an array
console.log(numbers.join('&'));
console.log(numbers.join('-'));

const message = 'How to learn website developement';
// split method will return an array
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);
