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
const { isAnyArrayBuffer } = require("util/types");
const { DefaultSerializer } = require("v8");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));

let N;
[N, ...input] = input;

let graph = Array.from(Array(N[0] + 1), () => []);
let ch = Array.from({ length: N[0] + 1 }, () => false);
let answer = [];
for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

function DFS(n) {
  answer.push(n);
  ch[n] = true;

  for (const i of graph[n]) {
    if (ch[i] === false) DFS(i);
  }
}
DFS(N[2]);
console.log(answer.join(" "));

graph = Array.from(Array(N[0] + 1), () => []);
ch = Array.from({ length: N[0] + 1 }, () => false);
let queue = new Queue();
answer = [];
for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

function BFS(n) {
  ch[n] = true;

  queue.enqueue(n);

  while (queue.size() > 0) {
    let x = queue.dequeue();
    answer.push(x);
    for (const i of graph[x]) {
      if (ch[i] === false) {
        queue.enqueue(i);
        ch[i] = true;
      }
    }
  }
}

BFS(N[2]);
console.log(answer.join(" "));
