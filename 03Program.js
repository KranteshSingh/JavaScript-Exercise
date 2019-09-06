// Loops in JavaScript

console.log("Below is output of For Loop");
// For Loop
for (i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

console.log("Below is output of While Loop");
// While Loop
let j = 0;
while (j <= 5) {
  if (j % 2 == 0) console.log(j);
  j++;
}

console.log("Below is output of Do While Loop");
//Do While Loop
let p = 0;
do {
  if (p % 2 !== 0) console.log(p);
  p++;
} while (p <= 5);

// For In Loop We use to iterate over the properties of an object

let person = {
  name: "Krantesh",
  age: 23
};

console.log("Output of For-in Loop");
for (key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "blue", "black", "brown"];
for (let index in colors) {
  console.log(index, colors[index]);
}

for (let color of colors) {
  console.log(color);
}
