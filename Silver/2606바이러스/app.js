class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }

  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);

input = input.map((v) => v.split(" ").map(Number));

let queue = new Queue();
let count = 0;
let graph = Array.from(Array(n + 1), () => []);
let ch = Array.from({ length: n + 1 }, () => false);

for (const [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

queue.add(1);
ch[1] = true;
while (queue.size() > 0) {
  let p = queue.popleft();
  count++;
  for (const i of graph[p]) {
    if (ch[i] === false) {
      queue.add(i);
      ch[i] = true;
    }
  }
}

console.log(count - 1);
