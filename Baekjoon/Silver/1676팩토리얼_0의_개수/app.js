// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;
for (let i = 1; i <= Number(N); i++) {
  let k = i;
  while (k !== 0) {
    if (k % 5 === 0) {
      k = parseInt(k / 5);
      count++;
    } else {
      break;
    }
  }
}

console.log(count);
