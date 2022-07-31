// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = fs.readFileSync(filePath).toString().trim();
N = Number(N);

let dp = Array.from({ length: 5001 }, (v) => Number.MAX_SAFE_INTEGER);
dp[3] = 1;
dp[5] = 1;

for (let i = 6; i < dp.length; i++) {
  dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
}

dp[N] >= Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(dp[N]);
