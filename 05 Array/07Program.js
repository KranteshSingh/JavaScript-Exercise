let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];

// Concat two array using concat method
let combined = first.concat(second);
console.log(combined);

// Slice an Array by giving from - to index
let slicedArray = combined.slice(2, 6);
console.log(slicedArray);

// Copy an array using slice method
let copyArray = combined.slice();
console.log(copyArray);

// When we spread an array all its elements are spreded individually
let anotherCombination = [...first, ...second]; // [1,2,3,4,5,6,7,8]
console.log(anotherCombination);

// Another way to copy an array
let copyAnArray = [...combined];
console.log(copyAnArray);
