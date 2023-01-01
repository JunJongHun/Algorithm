// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// input 가공부분
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((i) => Number(i)));

// console.log(input); // input 값 확인용

const N = input[0][0];
const M = input[0][1];
const list = input[1];

let output = sloution(N, M, list); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(N, M, list) {
  let answer = 0;
  let max = M;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        let cardSum = list[i] + list[j] + list[k];
        if (cardSum <= M && cardSum >= answer) answer = cardSum;
      }
    }
  }

  return answer;
}
