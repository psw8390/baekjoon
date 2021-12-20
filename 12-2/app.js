const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const N = input.shift();

let results = '';
input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

console.log(results);
