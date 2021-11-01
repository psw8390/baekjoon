const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(num => parseInt(num));


const MAX = 1000000;
let M = input.shift();
let N = input.shift();
let isPrimeArr = new Array(N + 1);
let square = 0;

isPrimeArr.fill(true);
isPrimeArr[0] = isPrimeArr[1] = false;
console.log(isPrimeArr);
 
for (let i = 2; i < N + 1; i++) {
  if (isPrimeArr[i]) {
  if (parseInt(Math.pow(i, 2)) > MAX) {
    break;
  } else {
   for (square = parseInt(Math.pow(i, 2)); square < N + 1;) {
    isPrimeArr[square] = false;
    square += i;
      }
    }
  }
}
 
for (let i = M; i < N + 1; i++) {
  if (isPrimeArr[i]) {
    console.log(i);
  }
}