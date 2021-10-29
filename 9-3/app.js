const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

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

let sosu = [];
for (let i = 0; i <= input; i++) {
  if (isPrime(i)) {
    sosu.push(i);
  }
}

for(let i = 0; i < sosu.length; i++) {
  while(input % sosu[i] === 0) {
    input = input / sosu[i];
    console.log(sosu[i]);
  }
}