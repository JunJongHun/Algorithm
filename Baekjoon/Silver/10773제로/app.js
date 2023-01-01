// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number);
let [N, ...input1] = input;
let answer = 0;
let stack = [];

for (const i of input1) {
  if (i === 0) stack.pop();
  else stack.push(i);
}

answer = stack.reduce((pre, cur) => pre + cur, 0);
console.log(answer);
