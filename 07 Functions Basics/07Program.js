const person = {
  firstName: 'Shahrukkh',
  lastName: 'Khan',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (value !== 'string') throw new Error('Value is not a string');
    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter both First Name & Last Name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// if we pass a boolean value or some other value we'll get an error
// in these cases we have to use error handling also called defensive programming

try {
  person.fullName = gvjhbjkn;
} catch (e) {
  alert(e);
}

console.log(person);

// the moment we through an error it is known as exception
// when we through an exception the lines after that are not executed
