// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let answer = [];
let site = new Map();

for (let i = 1; i <= N; i++) {
  let [a, b] = input[i].split(" ");
  site.set(a, b);
}

for (let i = N + 1; i < input.length; i++) {
  answer.push(site.get(input[i]));
}

console.log(answer.join("\n"));
