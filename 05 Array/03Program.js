let courses = [
  {
    id: 1,
    value: 'JavaScript'
  },
  {
    id: 2,
    name: 'Python'
  }
];

console.log(
  courses.includes({
    id: 1,
    name: 'JavaScript'
  })
);

// calling a function inside .find method is called predicate or a call back function
// this function is called back as part of finding the part of an array
console.log(
  courses.find(function(course) {
    return course.name === 'Python';
  })
);

console.log(
  courses.find(function(course) {
    return course.name === 'C++';
  })
);

console.log(
  courses.findIndex(function(course) {
    return course.name === 'C++';
  })
);
