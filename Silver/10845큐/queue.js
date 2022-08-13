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

  backadd(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  frontadd(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.front -= 1;
      this.storage[this.front] = value;
    }
  }

  popright() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.rear];
      delete this.storage[this.rear];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.rear];
      delete this.storage[this.rear];
      this.rear -= 1;
    }
    return temp;
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

let queue = new Queue();
queue.frontadd(1);
queue.backadd(2);
queue.backadd(3);
queue.frontadd(4);
console.log(queue);
console.log(queue.popleft());
console.log(queue);
console.log(queue.popright());
console.log(queue);
