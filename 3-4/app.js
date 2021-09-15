const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
  let splitNum = input[i].split(' ');
  answer += Number(splitNum[0]) + Number(splitNum[1]) + "\n";
}
console.log(answer);