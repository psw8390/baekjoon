let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}
