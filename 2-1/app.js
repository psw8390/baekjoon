const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const Num1 = Number(input[0]);
const Num2 = Number(input[1]);

if (Num1 > Num2) {
  console.log('>');
} else if (Num1 < Num2) {
  console.log('<');
} else if (Num1 == Num2) {
  console.log('==');  
}