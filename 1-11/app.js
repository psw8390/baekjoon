const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const Num1 = input[0];
const Num2 = input[1];

const oneNum = Num1 * (Num2 % 10);
const tenNum = Num1 * parseInt(Num2 % 100 / 10);
const hundredNum = Num1 * parseInt(Num2 /100);
const sum = oneNum + (tenNum * 10) + (hundredNum * 100);

console.log(oneNum);
console.log(tenNum);
console.log(hundredNum);
console.log(sum)