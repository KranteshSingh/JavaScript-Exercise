let person = {
  name: 'Krantesh',
  age: 23,
  mobileNo: 7275139737,
  isWorking: true
};

// We want to show all the properties of the person object
for (key in person) {
  console.log(key);
}

// We cannot use person.x to showcase the values of the person object, cuz we don't have x as property
for (x in person) {
  console.log(x, person.x);
}

// It will display all the properties of the person object along with their values
// To display the values of an object using for in loop we use square notation
for (y in person) {
  console.log(y, person[y]);
}

const colors = ['red', 'blue', 'yellow'];

for (let index in colors) {
  console.log(index);
  console.log(index, colors[index]);
}

// To iterate over arrays we use another kind of loop which is for..of loop
