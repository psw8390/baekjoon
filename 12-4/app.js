const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(num => parseInt(num, 10));

const max = Math.max(...input);

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < input.length; i++) {
  array[input[i]]++;
  console.log(array);
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}