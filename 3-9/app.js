let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

let num = Number(input);
let result = '';

for(let i = 0; i < num; i++) {
  for(let j = 0; j <= i; j++) {
    result = result + '*';
  }
  result = result + '\n';
}

console.log(result);