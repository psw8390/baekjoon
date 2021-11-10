const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');


for (let sides of input) {
  const strToInt = sides.split(' ').map(num => Math.pow(parseInt(num), 2));
  const firstSidePow = strToInt.shift();
  const secondSidePow = strToInt.shift();
  const thirdSidePow = strToInt.shift();
  if (firstSidePow === 0 && secondSidePow === 0 && thirdSidePow === 0) {
    break;
  }

  if (
    firstSidePow + secondSidePow === thirdSidePow ||
    firstSidePow + thirdSidePow === secondSidePow ||
    secondSidePow + thirdSidePow === firstSidePow
  ) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}