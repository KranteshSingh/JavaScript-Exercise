let numbers = [3, 4, 8, 1, 5, 7, 9, 2, 3, 2, 5, 7];

// sort method will convert each element to a string and then sort them accordingly
console.log(numbers.sort());

console.log(numbers.reverse());

let courses = [{ id: 1, name: 'NodeJS' }, { id: 2, name: 'JavaScript' }];

courses.sort(function(a, b) {
  // a < b => -1
  // a > v => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

// Each character in computer is represented as a number internally seaech for ASCII TABLE
