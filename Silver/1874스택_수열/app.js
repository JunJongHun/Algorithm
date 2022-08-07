// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number);

let answer = [];
let stack = [];
let count = 1;

for (let i = 0; i < input.length; i++) {
  if (i === 0 || input[i] > input[i - 1]) {
    if (count > input[i]) return console.log("NO");
    while (count <= input[i]) {
      answer.push("+");
      stack.push(count++);
    }
    answer.push("-");
    stack.pop();
  } else if (input[i] < input[i - 1]) {
    while (true) {
      if (stack.length === 0) return console.log("NO");
      answer.push("-");
      if (stack.pop() === input[i]) break;
    }
  }
}

console.log(answer.join("\n"));
