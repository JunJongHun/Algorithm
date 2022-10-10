class MinHeap {
  constructor() {
    this.node = [];
  }
  add(n) {
    this.node.push(n);
    this.bubbleUp();
  }
  bubbleUp(index = this.node.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.node[index] < this.node[parentIndex]) {
      let temp = this.node[index];
      this.node[index] = this.node[parentIndex];
      this.node[parentIndex] = temp;
      this.bubbleUp(parentIndex);
    }
  }
  bubbleDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return;
    else if (!this.node[rightChildIndex]) {
      if (this.node[index] > this.node[leftChildIndex]) {
        [this.node[index], this.node[leftChildIndex]] = [
          this.node[leftChildIndex],
          this.node[index],
        ];
        this.bubbleDown(leftChildIndex);
      }
    }

    if (this.node[leftChildIndex] < this.node[rightChildIndex]) {
      if (this.node[index] > this.node[leftChildIndex]) {
        [this.node[index], this.node[leftChildIndex]] = [
          this.node[leftChildIndex],
          this.node[index],
        ];
        this.bubbleDown(leftChildIndex);
      }
    } else {
      if (this.node[index] > this.node[rightChildIndex]) {
        [this.node[index], this.node[rightChildIndex]] = [
          this.node[rightChildIndex],
          this.node[index],
        ];
        this.bubbleDown(rightChildIndex);
      }
    }
  }
}

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(Number);

let minheap = new MinHeap();

let answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    if (minheap.node[0]) {
      answer.push(minheap.node[0]);
      if (minheap.node.length === 1) minheap.node.pop();
      else {
        minheap.node[0] = minheap.node.pop();
        minheap.bubbleDown();
      }
    } else {
      answer.push(0);
    }
  } else {
    minheap.add(input[i]);
  }
}

console.log(answer.join("\n"));
