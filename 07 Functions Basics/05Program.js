function interest(principal, rate = 7, years = 4) {
  //   rate = rate || 3.5;
  //   years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5));

// After setting default value for a parameter we have to make sure to set default values to later paramters
