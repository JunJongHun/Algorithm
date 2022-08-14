// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let coin = Number(N.split(" ")[1]);
let answer = 0;
input = input.map(Number);

for (let i = input.length - 1; i >= 0; i--) {
  answer += parseInt(coin / input[i]);
  coin = coin % input[i];
}

console.log(answer);
