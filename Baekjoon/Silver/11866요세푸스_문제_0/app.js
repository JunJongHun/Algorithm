class NodeQueue {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    let nodeQueue = new NodeQueue(value);
    if (this.size == 0) {
      this.head = nodeQueue;
    } else {
      this.tail.next = nodeQueue;
    }
    this.tail = nodeQueue;
    this.size++;
  }
  dequeue() {
    if (this.size == 0) {
      return null;
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size == 0) {
      this.tail = null;
    }
    return value;
  }
  isEmpty() {
    return this.size == 0;
  }
}
// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let queue = new Queue();
let answer = [];

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.size > 0) {
  for (let i = 1; i <= K; i++) {
    if (i === K) answer.push(queue.dequeue());
    else queue.enqueue(queue.dequeue());
  }
}
console.log("<" + answer.join(", ") + ">");
