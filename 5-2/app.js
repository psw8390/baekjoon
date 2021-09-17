let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let count;
let maxNum = Number(input[0]);
for(let i = 0; i < input.length; i++) {
  let number = Number(input[i]);
  if(maxNum <= number) {
    maxNum = number;
    count = i;
  }
}

console.log(maxNum);
console.log(count + 1);