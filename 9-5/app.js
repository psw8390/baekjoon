const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let primeNumArr = [];

function primeNumber(n) {
  if (n < 2) {
    return;
}
 
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    return;
    }
  }
  primeNumArr.push(n);
}

for(let j = 0; j < input.length; j++) { 
  let begin = Number(input[j]) + 1;
  let end = 2 * input[j];
  for (let i = begin; i <= end; i++) {
    primeNumber(i);
  }
  if(primeNumArr.length == 0) {
    return;
  } else {
    console.log(primeNumArr.length);
  }
  primeNumArr = [];
}
