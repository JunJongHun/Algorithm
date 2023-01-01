// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

data = input[1].split(" ").map(Number);
check = input[3].split(" ").map(Number);

let answer = [];
let m = new Map();

for (const i of data) {
  if (m.has(i)) m.set(i, m.get(i) + 1);
  else m.set(i, 1);
}

for (const i of check) {
  if (m.has(i)) answer.push(m.get(i));
  else answer.push(0);
}

console.log(answer.join(" "));
