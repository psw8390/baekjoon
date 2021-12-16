const fs = require('fs');
let input = parseInt(fs.readFileSync('./input.txt').toString().trim());

let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes('666')) {
    input--;
  }
}

console.log(theNumberAtTheEnd);