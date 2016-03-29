var rect = require('./rectangle-2');

function solveRect(l, b) {
  console.log('Solving for rectangle with l = ' + l + ' and b = ' + b);
  
  // The 3rd param is a callback function
  rect(l, b, function(err, rectangle) {
    if (err) {
      console.log(err);
    } else {
      console.log('The area is ' + rectangle.area());
      console.log('The perimeter is ' + rectangle.perimeter());
    }
  });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);