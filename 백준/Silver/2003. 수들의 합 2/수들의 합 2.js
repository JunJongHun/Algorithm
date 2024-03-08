const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map((el) => parseInt(el));
const arr = input[1].split(' ').map((el) => parseInt(el));

let left = 0;
let right = 0;
let sum = arr[left];
let answer = 0;

while (left < arr.length && right < arr.length) {
  if (sum === M) {
    answer++;
    sum += arr[++right];
  } else if (sum < M) {
    sum += arr[++right];
  } else {
    sum -= arr[left++];
  }
}

console.log(answer);
