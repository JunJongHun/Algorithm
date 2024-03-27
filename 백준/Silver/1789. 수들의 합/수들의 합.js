const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

let count = 0;
let sum = 0;

for (let i = 1; ; i++) {
  sum += i;
  count++;
  if (sum > N) {
    count--;
    break;
  }
}

console.log(count);
