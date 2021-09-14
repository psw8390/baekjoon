const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

minute = minute - 45;

if(minute < 0) {
  minute = minute + 60;
  hour--;
  if(hour === -1) {
    hour = 23;
  }
}

console.log(hour + ' ' + minute);