let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let realScore = input[1].split(' ');

const maxValue = Math.max(...realScore);
let changedScore = [];


for(let i = 0; i < input[0]; i++) {
  if(realScore[i] <= maxValue) {
    changedScore.push(realScore[i]/maxValue*100);
  }
}

const reducer = (x, y) => x + y;
console.log(changedScore.reduce(reducer)/input[0]);