let anyVariable = false || true;

let otherVariable = false || 'Krantesh';

console.log(otherVariable);

// Output would be 'Krantesh' because 'Krantesh' is a falsy value

// Type of Values could be in JavaScript

// Falsy (false)
// undefined
// null
// false
// ''
// 0
// NaN

// Anything that is not falsy -> Truthy

let someOtherVariable = false || 'Hello' || 3;

console.log(someOtherVariable);
// Output would be 'Hello' because of Short-Circuiting
