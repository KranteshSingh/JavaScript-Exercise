let movies = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this; // self is referencing the video object
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });
  }
};

movies.showTags();

function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'Krantesh' }); // in call method we can pass object and 'this' will reference that object
playVideo(); // this will references to window object
playVideo.apply({ name: 'Batman' }); // in apply method we can pass multiplt arguments as an array
const fn = playVideo.bind({ name: 'Wayne' }); // in bind method does not call our playVideo function it returns a new function and sets this to point that object permanently
fn();

// so with call, apply, bind method we can set the this argument for a given function

// So we can use .bind method to solve the issue for 'this' keyword

let drama = {
  title: 'awesome title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

drama.showTags();

// Arrow functions inherit from the contaning function in other words 'this' is not rebound to new object

let nautanki = {
  title: 'awesome title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  }
};

nautanki.showTags();
