function start() {
  for (let i = 0; i <= 5; i++) console.log(i);

  console.log(i);
}

start();

function starting() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i);
}

starting();

// var - function scoped variable
// ES6 (ES2015) - let, const - block scoped variable

var color = 'red'; // when we declare with var keyword it attaches to the window object of the browser
console.log(window.color);
let age = 23; // When we declare with let keyword it doesn't attaches to the window object of the browser
console.log(window.age);
function sayHi() {
  console.log('Hi');
} // When we declare function, function also attaches to the global object window
