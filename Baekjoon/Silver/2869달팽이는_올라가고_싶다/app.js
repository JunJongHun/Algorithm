// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// input 가공부분
input = input.map((v) => Number(v));

// console.log(input); // input 값 확인용

const up = input[0];
const down = input[1];
const tree = input[2];

let output = sloution(up, down, tree); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(up, down, tree) {
  let answer;

  answer = Math.ceil((tree - down) / (up - down));

  return answer;
}
