let input = require('fs').readFileSync('./input.txt').toString().split('\n');

let caseNum = Number(input.shift());

for(let i = 0; i < caseNum; i++) {
  let arr = input[i].split(' ');
  let range = arr[1] - arr[0] - 1;
  console.log(range);
}