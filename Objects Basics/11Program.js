//String primitive
const message = 'Krantesh Singh';
console.log(typeof message);

// String Object
const anotherMessage = new String('Rakesh');
console.log(typeof anotherMessage);

// Methods related to String Object
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('K'));
console.log(message.endsWith('H'));
console.log(message.indexOf('Singh'));
console.log(message.replace('singh', 'Batman'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
