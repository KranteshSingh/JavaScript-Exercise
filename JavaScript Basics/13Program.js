// Logical Operators with Non-Booleans

console.log(false || true);
console.log(false || 'Krantesh');
console.log(false || 1);

// The result of a logical express does not always evaluates to be true or false

// Falsy (false) Values => undefined, null, 0, false, '', NaN
// Anything that is not Falsy -> Truthy

console.log(false || 1 || 2); // Short Circuting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
