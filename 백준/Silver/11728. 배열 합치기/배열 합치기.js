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
const b = [...arr[1]];

console.log([...a, ...b].sort((a, b) => a - b).join(' '));
