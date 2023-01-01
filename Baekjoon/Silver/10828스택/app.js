// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 백준 제출할 때는 '\n' 넣어주기
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\r\n");

let stack = [];
let result = [];

for (const i of input) {
  let str = i.split(" ");

  switch (str[0]) {
    case "push":
      stack.push(Number(str[1]));
      break;
    case "pop":
      result.push(stack.length === 0 ? -1 : stack.pop());
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;

    default:
      break;
  }
}

console.log(result.join("\n"));
