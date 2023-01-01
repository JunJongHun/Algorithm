// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

let dp = Array.from({ length: input + 1 }, (v) => 0);

dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < input + 1; i++) {
  if (i % 3 === 0 && i % 2 === 0) {
    dp[i] = Math.min(dp[i / 3], dp[i - 1], dp[i / 2]) + 1;
  } else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
  } else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
  } else {
    dp[i] = dp[i - 1] + 1;
  }
}

console.log(dp[input]);
