// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

N = N.split(" ").map(Number);
input = input.map((v) => v.split(" ").map(Number));

let graph = [];
let check = [];

for (let i = 0; i <= N[0]; i++) {
  graph.push([]);
  check.push(false);
}

for (const [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

function DFS(n) {
  check[n] = true;
  console.log(`${n} -> `);
  for (let i = 0; i < graph[n].length; i++) {
    let next = graph[n][i];
    if (!check[next]) {
      DFS(next);
    }
  }
}
let cnt = 0;
for (let i = 1; i <= N[0]; i++) {
  if (!check[i]) {
    DFS(i);
    cnt++;
  }
}

console.log(cnt);
