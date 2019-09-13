walk(); // we can call walk function before its declaration

function walk() {
  console.log('I am walking');
}

console.log(x); // we cannot call x before its declaration
let x = 2;

run(); // we cannot call run function before its declaration
let run = function() {
  console.log('I am running');
};

// Because when JS engine runs it moves all function declaration to the top
// This is hoisting - moving function to the top of the file while parsing
