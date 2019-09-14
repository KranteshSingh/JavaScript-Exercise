function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person1 = new Person();
console.log(person1);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);

const goldy = new Goldfish();
console.log(goldy);
