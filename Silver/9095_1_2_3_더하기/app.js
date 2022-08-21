// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = [];
let max = Math.max(...input);
let dp = Array.from({ length: max + 1 }, () => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < dp.length; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (const i of input) {
  answer.push(dp[i]);
}

console.log(answer.join("\n"));
