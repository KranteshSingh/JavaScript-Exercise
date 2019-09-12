const movie = {
  title: 'Batman',
  director: 'Christopher Nolan',
  releaseYear: 2012,
  category: 'SuperHero'
};

function showProperties(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      console.log(prop, obj[prop]);
    }
  }
}

console.log(showProperties(movie));
