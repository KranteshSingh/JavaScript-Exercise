function start() {
  // scope of constant message is within the start function
  const message = 'You';
}

const another = 'THE TICK';
// Scope of constant another is Global and can be accessed by any functions declared
console.log(another);

// In general you should avoid global variable declaration
// Each person should have their own toothbrush
