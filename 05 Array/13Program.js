// Mapping an array

const numbers = [1, 2, 3, 4];

let filtered = numbers.filter(function(value) {
  return value % 2 == 0;
});

// map method is used to map every element of an array to something we want
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);

const html = '<ul>' + items.join() + '</ul>';
console.log(html);

const items2 = filtered.map(n => {
  return { value: n };
});
console.log(items2);

// Chaining - calling one method after another method returns the value is known as chaining

let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const chainedResult = someNumbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 3)
  .map(obj => obj.value);

console.log(chainedResult);
