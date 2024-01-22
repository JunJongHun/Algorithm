// const fs = require('fs');
// const path = require('path');
// const filePath =
//   process.platform === 'linux'
//     ? '/dev/stdin'
//     : path.join(__dirname, '/example.txt');
// const input = fs.readFileSync(filePath).toString().split('\n');

// const [N, M] = input
//   .shift()
//   .split(' ')
//   .map((v) => parseInt(v));

// const miro = input.map((v) => v.split('').map((v) => +v));

// // 최단거리를 구해야 하므로 BFS를 사용
// // 방문 여부를 체크하기 위해 visited 배열을 사용
// // 거리를 구하기 위해 distance 배열을 사용
// // 상하좌우로 이동할 수 있으므로 dx, dy를 사용
// // 주어진 좌표에 도착하면 종료할지 고려? ( 불필요한 연산을 줄이기 위해 -> 효율성 고려)

// const visited = Array.from(Array(N), () => Array(M).fill(false));
// const distance = Array.from(Array(N), () =>
//   Array(M).fill(Number.MAX_SAFE_INTEGER)
// );
// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// const queue = [];
// queue.push([0, 0]);
// visited[0][0] = true;
// distance[0][0] = 1;

// let answer = 0;

// while (queue.length) {
//   const [y, x] = queue.shift();
//   visited[y][x] = true;

//   for (let i = 0; i < 4; i++) {
//     let [nowY, nowX] = [y + dy[i], x + dx[i]];

//     if (0 <= nowY && nowY < N && 0 <= nowX && nowX < M) {
//       if (visited[nowY][nowX] === false && miro[nowY][nowX] === 1) {
//         queue.push([nowY, nowX]);
//         visited[nowY][nowX] = true;
//         distance[nowY][nowX] = Math.min(
//           distance[nowY][nowX],
//           distance[y][x] + 1
//         );
//       }
//     }
//   }
// }

// console.log(distance[N - 1][M - 1]);

// 위 문제를 dfs로 풀면?
const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const N = parseInt(input.shift());
const map = input.map((v) => v.split('').map((n) => +n));

//상하좌우
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let count = 0;
const answer = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] === 1) {
      dfs(y, x);
      answer.push(count);
      count = 0;
    }
  }
}

function dfs(y, x) {
  if (!(0 <= y && y < N && 0 <= x && x < N)) return;
  if (map[y][x] === 0) return;

  count++;
  map[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    dfs(y + dy[i], x + dx[i]);
  }
}

console.log([answer.length, ...answer.sort((a, b) => a - b)].join('\n'));
