const me = {
  firstName: 'Krantesh',
  lastName: 'Singh',
  fullName() {
    return `${me.firstName} ${me.lastName}`;
  }
};
console.log(me.fullName());

// getters => access properties of an object
// setters => change (mutate) them
// with getters and setters we can read the it like a property
const person = {
  firstName: 'Shahrukkh',
  lastName: 'Khan',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);
person.fullName = 'Bruce Wayne';
console.log(person);
