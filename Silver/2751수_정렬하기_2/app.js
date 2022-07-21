// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input 가공부분
input = input.map((v) => Number(v));
input.shift();

sloution(input); // solution에 파라미터 넣어주기

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(arr) {
  arr.sort((a, b) => a - b);
  for (const i of arr) {
    console.log(i);
  }
  return;
}
