const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(num => parseInt(num, 10));

const N = input.shift();
