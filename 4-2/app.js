let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const inputCount = input.length;
let i = 0;
while(i < inputCount) {
  let numbers = input[i].split(' ');
  console.log(Number(numbers[0]) + Number(numbers[1]));
  i++;
}