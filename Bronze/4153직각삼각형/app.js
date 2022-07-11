// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// input 가공부분
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

// console.log(input);

for (let i = 0; i < input.length - 1; i++) {
  let output = sloution(input[i]); // solution에 파라미터 넣어주기
  console.log(output); //출력값
}

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(arr) {
  let answer = "";

  arr.sort((a, b) => a - b);

  if (arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2) answer = "right";
  else answer = "wrong";

  return answer;
}
