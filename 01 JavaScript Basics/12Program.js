// Logical Operators
// Logical AND (&&)

console.log(true && true);
console.log(false && true);

//Logical OR (||)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.llog(eligibleForLoan);

//Logical NOT (!)

let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);
