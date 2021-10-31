const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
 
const primeNumArr = [];
let primeNumSum = 0;
 
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
  primeNumSum += n;
}
 
const begin = parseInt(input.shift());
const end = parseInt(input.shift());
 
for (let i = begin; i <= end; i++) {
  primeNumber(i);
}


for(let i = 0; i < primeNumArr.length; i++){
  console.log(primeNumArr[i]);
}