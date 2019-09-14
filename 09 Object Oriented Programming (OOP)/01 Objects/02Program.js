// Factory Function
function createSquare(sideLength) {
  return {
    sideLength,
    draw: function() {
      console.log('draw method');
    }
  };
}

const mySquare = createSquare(5);
console.log(mySquare);
