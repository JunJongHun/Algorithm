const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map((v) => Number(v));
const x = Number(input[2]);

const hash = new Map();
let answer = 0;
for (const v of arr) {
  const target = x - v;

  if (hash.has(target)) answer++;

  hash.set(v, true);
}

console.log(answer);
