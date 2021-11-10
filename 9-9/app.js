let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let input2 = input[i].split(' ');
  if(input[i][0] === '0') {
    return;
  } else {
    if (input2[0]*input2[0] + input2[1] * input2[1] === input2[2]*input2[2]) {
      console.log('right');
    } else {
      console.log('wrong');
    }
  }
}
