// Normal Function Declaration
function square(num) {
  return num * num;
}
console.log(square(4));

// Arrow Function
let cube = num => {
  return num * num * num;
};

console.log(cube(4));

// Another Example about implementation of Arrow Function
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
  courses.find(course => {
    return course.name === 'C++';
  })
);

// Even shorter version of arrow function with 1 parameter
console.log(courses.find(course => course.name === 'Python'));
