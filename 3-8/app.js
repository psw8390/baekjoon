const input = require('fs').readFileSync('./input.txt').toString().split('\n');

for(i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  let num1 = Number(num[0]);
  let num2 = Number(num[1]);
  let sum = num1 + num2;
  console.log(`Case #${i}: ${num1} + ${num2} = ${sum}`);
}