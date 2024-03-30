const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

let q = 0;

const binarySearch = (n) => {
  let left = 0;
  let right = n;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (Math.pow(mid, 2) > n) {
      right = mid - 1;
    } else if (Math.pow(mid, 2) < n) {
      left = mid + 1;
      result = mid + 1;
    } else {
      result = mid;
      break;
    }
  }

  return result;
};

console.log(binarySearch(N));
