let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let num = Number(input);
let line1 = input[0].split(' ');
let line2 = input[1].split(' ');
let n = Number(line1[0]);
let x = Number(line1[1]);
let result = '';

for(let i = 0; i < n; i++) {
  if(line2[i] < x){
    result = result + line2[i] + ' ';
  }
}
console.log(result);

