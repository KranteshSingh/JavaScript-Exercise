let person = {
  name: 'Krantesh',
  age: 23,
  email: 'krantesh@gmail.com'
};
// KEYS are called properties of the object
console.log(person);

// Accessing the values of an object
// 1. Using DOT notation
// 2. Using square bracket

person.name = 'Rahul';
console.log(person.name);

person['age'] = 24.5;
console.log(person.age);

// Sometimes we don't know the name of the targeted poperty
