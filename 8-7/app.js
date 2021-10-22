const fs = require('fs');
let SUGAR = Number(fs.readFileSync('./input.txt'));

const BIG = 5;
const SMALL = 3;

let bigMax = Math.floor(SUGAR / BIG);
while(bigMax >= 0) {
  let temSugar = SUGAR - bigMax * BIG;
  if(temSugar % SMALL === 0) {
    console.log(bigMax + temSugar / SMALL);
    return;
  } else {
    bigMax--;
  }
}
console.log(-1);