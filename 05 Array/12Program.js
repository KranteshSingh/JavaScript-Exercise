const numbers = [1, 2, 3, 4, -9, 3, -3];

let filtered = numbers.filter(function(value) {
  return value % 2 == 0;
});

console.log(filtered);
