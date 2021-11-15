const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

function factorial(n) {
if (n === 0) {
return 1;
}

if (n < 2) {
return n;
}

return n * factorial(n - 1);
}

console.log(factorial(input));