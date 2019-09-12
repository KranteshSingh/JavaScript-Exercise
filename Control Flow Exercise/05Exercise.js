// Speed Limit = 70
// 5 -> 1 Point
// Math.floor(1.3) -> 1
// 12 Points -> Suspended

let res = checkSpeed(75);
console.log(res);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License Suspended');
    else console.log('Points:', points);
  }
}
