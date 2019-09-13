// When we use ...args in function's parameter then we call it rest operator

function sum(...args) {
  console.log(args);
  // args will be converted into an array from comma separated values
  return args.reduce((a, c) => a + c);
}

console.log(sum(1, 2, 3, 4, 4, 5, 6, 7, 8));

// When we apply ...args(rest operator) to a function parameter, then rest operator will put them in an array

function totalBill(discount, ...prices) {
  const total = prices.reduce((a, c) => a + c);
  return total * (1 - discount);
}

console.log(totalBill(0.1, 23, 43, 54, 66, 78));
