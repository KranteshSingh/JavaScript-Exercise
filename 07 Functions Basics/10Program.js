// 'this' references to the object that is executing the current function
// method -> obj
// function -> global(window, global)

const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.play(); // Output : video object because 'this' references to the 'video' object that is executing the 'play()' function

function playVideo() {
  console.log(this);
}
playVideo();

// Using Constructor Function

function Laptop(name) {
  this.name = name;
  console.log(this);
}

let myLaptop = new Laptop('Lenovo530S');

let movies = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this.title);
  }
};

console.log(movies.showTags());
