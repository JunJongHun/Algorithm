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
const hash = new Map();
let maxLength = 0;

while (left < a.length && right < a.length) {
  while (hash.get(a[right]) === K) {
    hash.set(a[left], hash.get(a[left]) - 1);
    left++;
  }

  maxLength = Math.max(maxLength, right - left + 1);

  hash.set(a[right], (hash.get(a[right]) || 0) + 1);
  right++;
}

console.log(maxLength);
