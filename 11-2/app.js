const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const input = 216;
const constructorArr = [];

function d(n) {
  const N = n.toString().split('');
  return n + N.reduce((acc, num) => (acc += parseInt(num)), 0);
}

for (let i = 1; i <= input; i++) {
  if (d(i) === input) {
    constructorArr.push(i);
  }
}

if (constructorArr.length) {
  console.log(Math.min.apply(null, constructorArr));
} else {
  console.log(0);
}cd