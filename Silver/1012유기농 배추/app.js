class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.storage = {};
  }

  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }

  enqueue(v) {
    if (this.size() === 0) this.storage["0"] = v;
    else {
      this.rear++;
      this.storage[this.rear] = v;
    }
  }

  dequeue() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
    }
    return temp;
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));

let c = [];
let queue = new Queue();
let graph;
let ch;
let M;
let N;
let num;

for (let i = 0; i < T; i++) {
  let len = input[0].length - 1;
  c.push(input.slice(0, input[0][len] + 1));
  input.splice(0, input[0][len] + 1);
}

for (let i of c) {
  [M, N, num] = i[0];
  graph = Array.from(Array(N), () => Array(M).fill(0));
  ch = Array.from(Array(N), () => Array(M).fill(false));
  let answer = 0;
  for (let j = 1; j < i.length; j++) {
    let [px, py] = i[j];
    graph[py][px] = 1;
  }

  i = i.slice(1, i.length);

  for (let k = 0; k < N; k++) {
    for (let p = 0; p < M; p++) {
      if (graph[k][p] === 1 && ch[k][p] === false) {
        BFS(k, p);
        answer++;
      }
    }
  }
  console.log(answer);
}

function BFS(y, x) {
  let dt = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  queue.enqueue([y, x]);
  ch[y][x] = true;

  while (queue.size() > 0) {
    let [py, px] = queue.dequeue();
    for (const [ay, ax] of dt) {
      dy = py + ay;
      dx = px + ax;

      if (0 <= dy && dy < N && 0 <= dx && dx < M) {
        if (graph[dy][dx] === 1 && ch[dy][dx] === false) {
          queue.enqueue([dy, dx]);

          ch[dy][dx] = true;
        }
      }
    }
  }
}
