// while programming for some reason we want to jump to next iterations
let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// while programming for some reasons we may want to break out of loop for some conditions
let j = 0;
while (j <= 10) {
  if (j === 5) break;
  console.log(j);
  j++;
}
