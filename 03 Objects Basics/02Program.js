// Factory Functions
// They are use to produce objects

function createCircleObject(radius) {
  return {
    radius,
    draw() {
      console.log('Draw Method');
    }
  };
}

const circle1 = createCircleObject(1);
console.log(circle1);

let circle2 = createCircleObject(5);
console.log(circle2);
