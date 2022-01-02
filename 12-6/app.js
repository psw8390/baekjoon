const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

const N = input.shift();
const sortedNumArr = input.sort((a, b) => a - b);
const numMap = {};
