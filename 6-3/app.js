let input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = parseInt(input[0]);

function hanCheck(N) {
  let hansoo = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      hansoo++;
    } else {
      const numArr = i
        .toString()
        .split('')
        .map(num => parseInt(num));
      if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
        hansoo++;
      }
    }
  }
  console.log(hansoo);
}

hanCheck(N);