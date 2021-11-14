const fs = require('fs');
const { parse } = require('path');
const input = fs.readFileSync('./input.txt').toString().trim();

let result = 1;

for(let i = 1; i <= input; i++) {
  result = result * i
}

console.log(result);