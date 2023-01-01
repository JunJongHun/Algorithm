// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("/n");

// input 가공부분
input = Number(input);

// console.log(input); // input 값 확인용

let output = sloution(input); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(input) {
  let answer = 0;

  for (let i = 1; i <= input; i++) {
    let N = i;
    let plus = i
      .toString()
      .split("")
      .map((v) => Number(v));

    let sum = N + plus.reduce((pre, cur) => pre + cur, 0);
    // console.log(N, plus, sum);
    if (sum === input) {
      answer = N;
      break;
    }
  }

  return answer;
}
