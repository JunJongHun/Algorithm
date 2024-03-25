const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, S] = input[0].split(' ').map((v) => Number(v));
const arr = input[1].split(' ').map((v) => Number(v));

let left = 0;
let right = 0;
let sum = arr[right];
let answer = Number.MAX_SAFE_INTEGER;

while (left <= right && right < N) {
  while (sum >= S && left <= right) {
    answer = Math.min(answer, right - left + 1);
    sum -= arr[left++];
  }

  sum += arr[++right];
}

console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
