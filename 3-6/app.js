const input = require('fs').readFileSync('./input.txt').toString();
let answer = '';

for (i = 0; i < input; i++) {
  answer =  answer + (input - i) + "\n";
}

console.log(answer);