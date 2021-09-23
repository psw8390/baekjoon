let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let result = [];

input.forEach(x => {
  const num = x % 42;

  if(result.indexOf(num) === -1) {
    result.push(num);
  }
});

console.log(result.length);