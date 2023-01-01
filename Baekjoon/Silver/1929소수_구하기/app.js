// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = [];
let primeNumber = Array.from({ length: M + 1 }, () => true);
primeNumber[0] = false;
primeNumber[1] = false;
for (let i = 2; i < primeNumber.length; i++) {
  if (primeNumber[i] === true) {
    for (let j = 2; i * j < primeNumber.length; j++) {
      primeNumber[i * j] = false;
    }
  }
}

for (let i = N; i <= M; i++) {
  if (primeNumber[i]) answer.push(i);
}
console.log(answer.join("\n"));
