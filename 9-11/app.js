const fs = require('fs');
const { parse } = require('path');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const T = parseInt(input.shift());

for(let i = 0; i < T; i++) {
  const xyrxyr = input[i].split(' ').map(num => parseInt(num));
  const x1 = xyrxyr.shift();
  const y1 = xyrxyr.shift();
  let r1 = xyrxyr.shift();
  const x2 = xyrxyr.shift();
  const y2 = xyrxyr.shift();
  let r2 = xyrxyr.shift();

  const dx = x1 - x2;
  const dy = y1 - y2;
  if(r1 > r2) {
    const temp = r1;
    r1 = r2;
    r2 = temp;
  }
  const rSum = (r1 + r2) * (r1 + r2);
  const rSub = (r2 - r1) * (r2 - r1);
  const d = dx * dx + dy * dy;
  
  // 1. 원이 두 점에서 만나는 경우 (두 점)(r2 - r1 < d < r1 + r2)
  if (d < rSum && d > rSub) {
  console.log(2);
  // 2. 두 원이 외접하는 경우 (한 점)( d = r1 + r2)
  // 3. 두 원이 내접하는 경우 (한 점)( d = r2 - r1 && d != 0)
  } else if (d === rSum || (d === rSub && d !== 0)) {
  console.log(1);
  // 4. 하나의 원이 다른 원을 포함하는 경우 (못 만남)( d < r2 - r1 )
  // 5. 두 원이 멀리 떨어져 만나지 않는 경우 (못 만남)( d > r1 + r2 )
  } else if (d < rSub || d > rSum) {
  console.log(0);
  // 6. 두 원이 일치하는 경우 (무수히)( d = 0, r1 = r2 )
  } else if (d === 0) {
  if (r1 === r2) {
  console.log(-1);
  } else {
  console.log(0);
  }
  }
}
