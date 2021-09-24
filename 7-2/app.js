let input = require('fs').readFileSync('./input.txt').toString().split('\n');

let number = input[1].split('');
let sum = 0;

for (let i = 0; i < input[0]; i++) {
  sum = sum + Number(number[i]);
}

console.log(sum);