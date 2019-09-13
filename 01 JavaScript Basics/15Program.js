// Conditional Statements => if...else

// Hour
// If hour is between 6 AM - 12 PM Good MORNING
// If it is between 12 PM - 6 PM: Good afternoon
// Otherwise: Good evening

let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log('Good Morning');
} else if (hour >= 12 && hour <= 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}
