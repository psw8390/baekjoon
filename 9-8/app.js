var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

let x = [];
let y = [];

for (let i = 0; i <input.length; i++) {
  input[i].split(' ');
  x.push(input[i][0]);
  y.push(input[i][2]);
}

let resultX = [];
let resultY = [];


if(x[0] === x[1]) {
  resultX.push(x[2]);
} else if(x[0] === x[2]) {
  resultX.push(x[1]);
} else if(x[1] === x[2]) {
  resultX.push(x[0]);
}

if(y[0] === y[1]) {
  resultY.push(y[2]);
} else if(y[0] === y[2]) {
  resultY.push(y[1]);
} else if(y[1] === y[2]) {
  resultY.push(y[0]);
}

console.log(`${resultX[0]} ${resultY[0]}`);