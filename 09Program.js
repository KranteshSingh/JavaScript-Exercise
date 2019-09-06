let values = [1, 2, 3, 0, false, null, 'NaN'];

console.log(countTruthy(values));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
