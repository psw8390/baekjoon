let input = require('fs').readFileSync('./input.txt').toString().split('\n');

let result = '';

for (let i = 1; i <= input[0]; i++) {
  let divide = input[i].split(' ');
  for (let j = 0; j < divide[1].length; j++) {
    result = result + (divide[1][j].repeat(divide[0]));
  }
  result = result + '\n';
}

console.log(result);