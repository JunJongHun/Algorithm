// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
input = input.map((v) => v.split(" ").map(Number));

let answer = "";
let count = 1;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) count++;
  }
  answer += +count + " ";
  count = 1;
}
console.log(answer);
