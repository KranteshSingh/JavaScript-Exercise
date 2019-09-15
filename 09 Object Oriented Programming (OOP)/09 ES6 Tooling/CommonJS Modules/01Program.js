// AMD - Browser
// CommonJS - Nodejs
// UMD - Browser/Nodejs

// Before ES6
// Things that are highly related should go together - Cohesion

const Circle = require('./01Circle');

const c = new Circle(4);
console.log(c.draw());
