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

let count = 0;
for (let i = 60; i <= 100 && i >= 60; i++) {
  if (isPrime(i)) {
    count = count + i;
  }
}

console.log(count);