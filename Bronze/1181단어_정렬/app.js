// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
// console.log(input); // input 값 확인용

sloution(input); // solution에 파라미터 넣어주기

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(arr) {
  let answer;
  answer = new Set(arr);
  answer = Array.from(answer);

  answer.sort((a, b) => {
    if (a.length - b.length !== 0) {
      return a.length - b.length;
    } else {
      if (a > b) return 1;
      else return -1;
    }
  });

  for (const word of answer) {
    console.log(word);
  }
  return;
}
