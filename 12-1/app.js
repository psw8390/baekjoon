const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let N = input.shift();
let result = input.sort((a,b) => a-b);

for(let i = 0; i < N; i++) {
  console.log(result[i]);
}