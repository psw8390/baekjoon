let input = require('fs').readFileSync('./input.txt').toString().split(' ');

const A = input[0];
const B = input[1];
const V = input[2];
 
console.log(Math.ceil((V - B) / (A - B)));