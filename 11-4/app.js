const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  function whiteFirstPaint(y, x) {
  let counter = 0;
   
  for (let i = y; i < y + 8; i++)
  for (let j = x; j < x + 8; j++)
  if (input[i][j] !== whiteFirst[i - y][j - x]) counter++;
   
  return counter;
  }
   
  function blackFirstPaint(y, x) {
  let counter = 0;
   
  for (let i = y; i < y + 8; i++)
  for (let j = x; j < x + 8; j++)
  if (input[i][j] !== blackFirst[i - y][j - x]) counter++;
   
  return counter;
  }
   
  for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
  minArr.push(whiteFirstPaint(i, j));
  minArr.push(blackFirstPaint(i, j));
  }
  }
   
  console.log(Math.min.apply(null, minArr));