// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];
let stack = [];
let check = true;

for (let string of arr) {
  stack = [];
  check = true;
  for (let i of string) {
    if (i === "(") stack.push(i);
    else if (i === ")") {
      if (stack.length === 0) {
        console.log("NO");
        check = false;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) {
    console.log("NO");
    continue;
  }
  if (check) {
    console.log("YES");
    continue;
  }
}
