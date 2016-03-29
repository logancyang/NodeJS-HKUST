var argv = require('yargs')
  .usage('Usage: node $0 --l=[num] --b=[num]')
  .demand(['l', 'b'])
  .argv;  // This argv has properties l and b as numbers

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

solveRect(argv.l, argv.b);