// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
for (const str of input) {
  let stack = [];
  let check = true;
  for (const i of str) {
    if (i === ".") break;
    if (i === "(" || i === "[") stack.push(i);
    else if (i === ")" || i === "]") {
      if (stack.length === 0) {
        check = false;
        break;
      }
      let p = stack.pop();
      if (i === ")" && p === "(") continue;
      else if (i === "]" && p === "[") continue;
      else {
        check = false;
        break;
      }
    }
  }
  if (stack.length > 0) {
    console.log("no");
  } else if (check === false) {
    console.log("no");
  } else {
    console.log("yes");
  }
}
