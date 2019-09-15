const _radius = new WeakMap();
// WeakMap is an object where keys are object and value could be anything
// keys are weak
// Defining private method using WeakMap

const _move = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    // calling move method here
    _move.get(this);
    console.log('draw');
    console.log(_radius.get(this));
  }
}

const c = new Circle(1);
console.log(c.draw());
