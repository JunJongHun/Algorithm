class MaxHeap {
  constructor() {
    this.node = [];
  }

  insert(value) {
    this.node.push(value);
    this.bubbleUp();
  }

  extract() {
    let len = this.node.length;

    if (len === 0) return 0;
    else if (len === 1) return this.node.pop();
    else {
      let value = this.node[0];
      this.node[0] = this.node.pop();
      this.bubbleDown();
      return value;
    }
  }

  bubbleUp(index = this.node.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.node[index] > this.node[parentIndex]) {
      [this.node[index], this.node[parentIndex]] = [
        this.node[parentIndex],
        this.node[index],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let nowIndex = index;

    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return;
    if (!this.node[rightChildIndex]) {
      if (this.node[nowIndex] < this.node[leftChildIndex])
        nowIndex = leftChildIndex;
    }
    if (this.node[leftChildIndex] > this.node[rightChildIndex]) {
      if (this.node[nowIndex] < this.node[leftChildIndex])
        nowIndex = leftChildIndex;
    } else {
      if (this.node[nowIndex] < this.node[rightChildIndex])
        nowIndex = rightChildIndex;
    }

    if (nowIndex !== index) {
      let tmp = this.node[nowIndex];
      this.node[nowIndex] = this.node[index];
      this.node[index] = tmp;
      this.bubbleDown(nowIndex);
    }
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];
let maxheap = new MaxHeap();

input = input.map(Number);
let [d, ...data] = input;

for (const n of data) {
  if (n === 0) {
    answer.push(maxheap.extract());
  } else {
    maxheap.insert(n);
  }
}

console.log(answer.join("\n"));
