const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

let group = 0;

for (let i = 1; i <= input[0]; i++) {
  for(let j = 0; j < input[i].length; j++) {
    console.log(input[i][j]);
    
  }
}