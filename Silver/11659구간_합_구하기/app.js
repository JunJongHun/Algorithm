// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");
const { off } = require("process");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.split(" ").map(Number);
input = input.map((v) => v.split(" ").map(Number));

let sum = [0];
let answer = [];
arr.reduce((pre, cur) => {
  sum.push(pre + cur);
  return pre + cur;
}, 0);

for (let [s, e] of input) {
  s -= 1;

  answer.push(sum[e] - sum[s]);
}

console.log(answer.join("\n"));
