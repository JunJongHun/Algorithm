class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(v) {
    if (this.front === this.rear) {
      this.store[0] = v;
      this.front = 0;
      this.rear = 1;
    } else this.store[this.rear++] = v;
    this.size++;
  }

  dequeue() {
    if (this.store[this.front] === undefined) {
      return -1;
    } else {
      let data = this.store[this.front];
      delete this.store[this.front++];
      this.size--;
      return data;
    }
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];
input = input.map((v) => v.split(" ").map(Number));

for (let i = 0; i < input.length; i += 2) {
  let queue = new Queue();
  let index = 0;
  let count = 0;
  for (const j of input[i + 1]) {
    queue.enqueue([j, index++]);
  }

  while (true) {
    let max = Math.max(...Object.values(queue.store).map((v) => v[0]));
    let [v, k] = queue.dequeue();

    if (v === max) {
      count++;
      if (k === input[i][1]) {
        answer.push(count);
        break;
      }
    } else queue.enqueue([v, k]);
  }
}

console.log(answer.join("\n"));
