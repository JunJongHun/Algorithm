const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const card = input[1].split(' ').map((item) => Number(item));
const M = Number(input[2]);
const target = input[3].split(' ').map((item) => Number(item));

const answer = [];
card.sort((a, b) => a - b);

for (const t of target) {
  let left = 0;
  let right = card.length - 1;
  let mid = Math.floor((left + right) / 2);
  let isTarget = false;

  while (left <= right) {
    if (card[mid] === t) {
      isTarget = true;
      break;
    } else if (card[mid] < t) left = mid + 1;
    else right = mid - 1;

    mid = Math.floor((left + right) / 2);
  }

  answer.push(isTarget ? 1 : 0);
}

console.log(answer.join(' '));
