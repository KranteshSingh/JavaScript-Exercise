// Function Declaration
function walk() {
  console.log('I am walking');
}

// Function Expression / Anonymous Function Expression
// run is referencing the anonymous function so we can call this function using run
let run = function() {
  console.log('I am running');
};
run();

// Named Function Expression
let kick = function kick() {
  console.log('I am Kicking');
};

// Function expression using Arrow Function
let swim = () => {
  console.log('Swim to Save Life');
};

console.log(typeof run);
