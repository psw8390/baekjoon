const { count } = require('console');
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let multiply = String(input[0] * input[1] * input[2]);
multiply = (multiply.split(''));

let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;

for(let i = 0; i < multiply.length; i++) {
  if(multiply[i] == '0') {
    count0 = count0 + 1;
  } else if (multiply[i] == '1') {
    count1 = count1 + 1;
  } else if (multiply[i] == '2') {
    count2 = count2 + 1;
  } else if (multiply[i] == '3') {
    count3 = count3 + 1;
  } else if (multiply[i] == '4') {
    count4 = count4 + 1;
  } else if (multiply[i] == '5') {
    count5 = count5 + 1;
  } else if (multiply[i] == '6') {
    count6 = count6 + 1;
  } else if (multiply[i] == '7') {
    count7 = count7 + 1;
  } else if (multiply[i] == '8') {
    count8 = count8 + 1;
  } else if (multiply[i] == '9') {
    count9 = count9 + 1;
  }
}

console.log(count0);
console.log(count1);
console.log(count2);
console.log(count3);
console.log(count4);
console.log(count5);
console.log(count6);
console.log(count7);
console.log(count8);
console.log(count9);

