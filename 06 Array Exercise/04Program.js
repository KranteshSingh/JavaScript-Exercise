const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 5);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid Offset');
    return;
  }

  const output = [...array]; // Copying the array in output
  const element = output.splice(index, 1)[0]; // // return the element that we just deleted
  output.splice(index + offset, 0, element); // Insering the element in the output array
  return output;
}
