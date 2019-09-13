let x = 10;
let y = x;

console.log(x);
console.log(y);

// When we created x variable, 10 is copied into it as its value.

let a = { value: 1 };
let b = a;
a.value = 30;
console.log(a);
console.log(b);

// When we create object then that object address is stored into the a

// Primitives are copied by their values
// Reference or Object Types are copied by their reference

let number = 10;
function increase(number) {
  number++;
}
increase(number); // Output - 10
console.log(number);

let obj = { value: 10 };
function decrease(obj) {
  obj.value--;
}
decrease(obj);
console.log(obj); // Output - 9
