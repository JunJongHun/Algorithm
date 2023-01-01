// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

num = num.split(" ").map(Number);

let m = new Map();
let count = 0;
let answer = [];
for (let i = 0; i < num[0]; i++) {
  m.set(input[i], 1);
}
for (let i = num[0]; i < input.length; i++) {
  if (m.has(input[i])) {
    count++;
    answer.push(input[i]);
  }
}

console.log(count);

answer.sort();

console.log(answer.join("\n"));
