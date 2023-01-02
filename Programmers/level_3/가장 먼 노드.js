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
    const rv = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return rv;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    return this.queue[this.front];
  }
}

function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);

  let count = Array.from({ length: n + 1 }, () => 0);
  let check = Array.from({ length: n + 1 }, () => false);

  let q = new Queue();

  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  q.enqueue(1);

  while (!q.isEmpty() > 0) {
    let v = q.dequeue();
    check[v] = true;

    for (const i of graph[v]) {
      if (check[i] === false) {
        q.enqueue(i);
        check[i] = true;
        count[i] = count[v] + 1;
      }
    }
  }

  let max = Math.max(...count);

  return count.filter((v) => v === max).length;
}

const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, edge));
