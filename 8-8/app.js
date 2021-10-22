let input = require('fs').readFileSync('./input.txt').toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());