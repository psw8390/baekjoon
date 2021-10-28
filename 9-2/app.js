const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

// 소수 판별 함수
function isPrime(n) {
  if (n === 2 || n === 3) {
    return true;
  }

  if (n <= 1 || n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let count = [];
let sum = 0;
for (let i = 60; i <= input[1] && i >= input[0]; i++) {
  if (isPrime(i)) {
    count.push(i);
    sum = sum + i;
  }
}

if(sum === 0){
  console.log(-1);
}else {
  console.log(sum);
  console.log(count[0]);
}