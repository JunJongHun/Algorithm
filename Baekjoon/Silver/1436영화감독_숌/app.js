// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

let output = sloution(input); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(N) {
  let answer;
  let count = 0;
  let number = 666;
  while (true) {
    if (String(number++).includes("666")) count++;
    if (count === N) {
      answer = number--;
      break;
    }
    // console.log(number);
  }
  answer = number;
  return answer;
}
