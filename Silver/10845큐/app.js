class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return;
  }

  dequeue() {
    if (this.head === null) {
      this.tail = null;
      return -1;
    } else {
      let value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  getSize() {
    return this.size;
  }

  front() {
    return this.getSize() === 0 ? -1 : this.head.value;
  }

  rear() {
    return this.getSize() === 0 ? -1 : this.tail.value;
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let queue = new Queue();
let result = [];
for (let i of input) {
  i = i.split(" ");

  switch (i[0]) {
    case "push":
      queue.enqueue(i[1]);
      break;
    case "pop":
      result.push(queue.dequeue());
      break;

    case "size":
      result.push(queue.getSize());
      break;

    case "empty":
      result.push(queue.getSize() === 0 ? 1 : 0);
      break;

    case "front":
      result.push(queue.front());
      break;

    case "back":
      result.push(queue.rear());
      break;

    default:
      break;
  }
}

console.log(result.join("\n"));
