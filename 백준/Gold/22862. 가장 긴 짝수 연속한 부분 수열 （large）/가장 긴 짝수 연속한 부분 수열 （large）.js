const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, K] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

const arr = input.map((v) => v.split(' ').map((n) => Number(n)));

const a = [...arr[0]];

let left = 0;
let right = 0;
let evenCount = 0;
let max = 0;

while (left < N && right < N) {
  if (a[right] % 2 === 1) evenCount++;

  while (evenCount > K) {
    if (a[left] % 2 === 1) evenCount--;
    left++;
  }

  max = Math.max(max, right - left + 1);

  right++;
}

console.log(max - evenCount > 0 ? max - evenCount : 0);
