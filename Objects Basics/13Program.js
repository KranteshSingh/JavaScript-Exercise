const now = new Date(); // Today is 13-09-2019 Friday
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 0);

console.log(now.getDate()); // Returns 13
console.log(now.getDay()); // 5 as Friday
console.log(now.getFullYear()); // 2019
console.log(now.getMilliseconds());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.toDateString());
console.log(now.setFullYear(2019));
console.log(now.toISOString());
