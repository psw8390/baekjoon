const input = require('fs').readFileSync('./input.txt').toString();

let answer = '';

for (i = 1; i <= input; i++) {
  answer += i + "\n";
}
console.log(answer);