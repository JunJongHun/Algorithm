// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input); // input 값 확인용

let output = sloution(input[1]); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(str) {
  let answer = 0;
  let r = 1;
  let M = 1234567891;

  [...str].forEach((v) => {
    result = (v.charCodeAt(0) - 96) * r;
    r *= 31;
    r %= M;
    answer += result;
  });

  answer %= M;

  return answer;
}
