const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString();

N = Number(input);

let left = 1;
let right = 1;
let sum = 1;
let answer = 0;

while (left <= N && right <= N) {
  if (sum === N) {
    answer++;
    sum -= left++;
  } else if (sum > N) sum -= left++;
  else sum += ++right;
}

console.log(answer);
