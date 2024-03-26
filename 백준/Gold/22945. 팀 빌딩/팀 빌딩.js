const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map((v) => Number(v));

let left = 0;
let right = N - 1;
let answer = 0;

while (left < right) {
  answer = Math.max(
    answer,
    (right - left + 1 - 2) * Math.min(arr[left], arr[right])
  );

  if (arr[left] < arr[right]) left++;
  else right--;
}

console.log(answer);