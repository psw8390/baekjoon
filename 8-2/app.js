let input = require('fs').readFileSync('./input.txt').toString();

let N = Number(input);

let i = 1;
let sum = 1;

while( sum < N ) {
  sum = sum + ( 6 * i );
  i++;
}

console.log(i);