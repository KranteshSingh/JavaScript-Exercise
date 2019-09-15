sayHello();
/// Function Declaration - Hoisted
function sayHello() {
  console.log('Hello');
}

sayGoodbye(); // Returns an error

// Function Expression
const sayGoodbye = function() {
  console.log('Say Good Bye');
};

const sama50 = new Animal();
// Class Declaration
class Mobile {
  constructor() {}
}

const rabbit = new Animal();
// Class Expression
const Animal = class {
  constructor() {}
};
