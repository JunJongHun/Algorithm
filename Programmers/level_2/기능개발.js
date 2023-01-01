class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    let v = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return v;
  }

  peek() {
    return this.queue[this.front];
  }
}

function solution(progresses, speeds) {
  let answer = [];
  let q = new Queue();
  let count = 0;
  let start = 0;
  for (let i = 0; i < progresses.length; i++) {
    q.enqueue({ progresse: progresses[i], speed: speeds[i], number: i });
  }

  while (q.queue.length > 0) {
    q.queue.forEach((data) => (data.progresse += data.speed));

    if (q.peek().progresse >= 100) {
      while (q.queue.length !== 0 && q.peek().progresse >= 100) {
        q.dequeue();
        count++;
      }
      answer.push(count);
      count = 0;
    }
  }

  console.log(q.queue);
  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
