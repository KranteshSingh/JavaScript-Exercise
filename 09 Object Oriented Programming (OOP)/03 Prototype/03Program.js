let person = { name: 'Krantesh' };
let objectBase = Object.getPrototypeOf(person);

console.log(objectBase);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // returns an object which we call property descriptor

console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: false, // cannot change the value of the property
  enumerable: false, // cannot enumerate this property
  configurable: false // we cannot delete this property
});

person.name = 'Mosh';

console.log(person);
console.log(Object.keys(person));
