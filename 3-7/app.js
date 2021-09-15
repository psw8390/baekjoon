const input = require('fs').readFileSync('./input.txt').toString();

for(i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  let sum = Number(num[0]) + Number(num[1]);
  console.log(`Case #${i}: ${sum}`);
}