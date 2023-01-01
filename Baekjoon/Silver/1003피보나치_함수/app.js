// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(Number);
m = Math.max(...input);

let answer = [];
let dp = Array.from({ length: m + 1 }, (v) => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i < dp.length; i++) {
  dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
}

for (const i of input) {
  answer.push(`${dp[i][0]}` + " " + `${dp[i][1]}`);
}

console.log(answer.join("\n"));
