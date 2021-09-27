const input = require('fs').readFileSync('./input.txt').toString().trim().split(" ");

const reverseInput = input.map(v => [...v].reverse().join(''))
console.log(reverseInput);