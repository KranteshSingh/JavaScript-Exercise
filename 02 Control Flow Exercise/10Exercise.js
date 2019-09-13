const mymarks = [80];

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// Single Responsibility Principle

console.log(calculateGrade(mymarks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  console.log(average);
  if (average < 60) return 'F';
  else if (average < 70) return 'D';
  else if (average < 80) return 'C';
  else if (average < 90) return 'B';
  else return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
    return sum / array.lenth;
  }
}
