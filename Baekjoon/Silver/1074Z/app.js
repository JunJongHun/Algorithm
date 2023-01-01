// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, r, c] = input[0].split(" ").map((e) => +e);

let result = 0;

function recursion(length, y, x) {
  if (length === 0) return;

  let new_length = Math.floor(Math.pow(2, length - 1) / 2);
  let skip = Math.pow(4, length - 1);

  //   console.log(new_length, skip);
  if (r < y && c < x) {
    recursion(length - 1, y - new_length, x - new_length);
  } else if (r < y && c >= x) {
    result += skip;
    recursion(length - 1, y - new_length, x + new_length);
  } else if (r >= y && c < x) {
    result += skip * 2;
    recursion(length - 1, y + new_length, x - new_length);
  } else {
    result += skip * 3;
    recursion(length - 1, y + new_length, x + new_length);
  }
}
let length = Math.pow(2, n);

recursion(n, length / 2, length / 2);
console.log(result);
