let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) console.log(num);
console.log('--------------------');

numbers.forEach(number => console.log(number));
console.log('--------------------');

// Here we've used call back function
numbers.forEach((number, index) => console.log(index, number));
