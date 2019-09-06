const movies = [
  { title: 'a', year: 2001, rating: 4.5 },
  { title: 'b', year: 2001, rating: 4.4 },
  { title: 'c', year: 2003, rating: 3 },
  { title: 'd', year: 2004, rating: 4.7 }
];

// Display all the movies in 2018 with rating > 4
// Sort them by their rating
// Descending Order
// Pick their title and display on the console

const titles = movies
  .filter(m => m.year === 2001 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);
