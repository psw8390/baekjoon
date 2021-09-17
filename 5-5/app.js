let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let result = [];

  for(let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    let remainder = num % 42;
    result.push(remainder);
  }

let count = {};
result.forEach((x) => {
  if(count[x]) {
    count[x] = count[x] + 1;
  }else {
    count[x] = 0 + 1;
  }
});

console.log(count);