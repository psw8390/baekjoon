const input = require('fs').readFileSync('./input.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let split = input[i].split(' ');
  const num1 = Number(split[0]);
  const num2 = Number(split[1]);
  console.log(num1+num2);
}