const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

const arr = input.map((v) => v.split(' ').map((n) => Number(n)));

const a = [...arr[0]];

let answer = 0;
let max = 0;

let left = 0;
let right = 0;
let limit = M;
let sum = a[right];

while (left < a.length && right < a.length) {
  const len = right - left + 1;

  if (len < limit) sum += a[++right];
  else if (len > limit) sum -= a[left++];
  else {
    if (max < sum) {
      answer = 1;
      max = sum;
    } else if (max === sum) answer++;

    sum -= a[left++];
  }
}

console.log(max === 0 ? 'SAD' : `${max}\n${answer}`);
