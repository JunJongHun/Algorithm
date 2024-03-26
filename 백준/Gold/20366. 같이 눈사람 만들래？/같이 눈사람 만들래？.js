const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map((v) => Number(v));

arr.sort((a, b) => a - b);

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let left = 0;
    let right = N - 1;
    let sum1 = arr[i] + arr[j];
    let sum2 = 0;

    while (left < right) {
      if (left === i || left === j) {
        left++;
        continue;
      }
      if (right === j || right === i) {
        right--;
        continue;
      }

      sum2 = arr[left] + arr[right];
      min = Math.min(min, Math.abs(sum1 - sum2));

      if (sum1 < sum2) right--;
      else if (sum1 >= sum2) left++;
    }
  }
}

console.log(min);
