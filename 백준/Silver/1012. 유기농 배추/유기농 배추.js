// dfs, bfs 상관 없어보인다.
// 배추 농장이 여러개 일 수 있다.
// 배추가 어디있는지 맵을 만들자.
// 배추 맵을 하나씩 돌면서 dfs,bfs로 확인

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift();

// 상하좌우
const dyx = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let answer = [];

for (let t = 0; t < T; t++) {
  let [M, N, K] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  let count = 0;
  let pos = [];
  let map = Array.from(Array(N), () => Array(M).fill(0));
  for (let k = 0; k < K; k++) {
    pos.push(
      input
        .shift()
        .split(' ')
        .map((v) => Number(v))
    );
  }

  for (const [x, y] of pos) {
    map[y][x] = 1;
  }

  //dfs
  for (let n = 0; n < N; n++) {
    // y
    for (let m = 0; m < M; m++) {
      // x
      if (map[n][m] === 1) {
        dfs(N, M, n, m, map);
        count++;
      }
    }
  }

  answer.push(count);
}

function dfs(N, M, n, m, map) {
  map[n][m] = 0;

  for (const [dy, dx] of dyx) {
    const [ay, ax] = [n + dy, m + dx];

    if (0 <= ay && ay < N && 0 <= ax && ax < M && map[ay][ax] === 1) {
      dfs(N, M, n + dy, m + dx, map);
    }
  }
}

console.log(answer.join('\n'));
