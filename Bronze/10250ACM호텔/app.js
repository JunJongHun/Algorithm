// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// input 가공부분
input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

// console.log(input); // input 값 확인용

const [T] = input.shift();

sloution(T, input);

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(T, input) {
  let answer;

  for (const [h, w, n] of input) {
    let xx = parseInt(n % h) === 0 ? parseInt(n / h) : parseInt(n / h) + 1;
    let yy = parseInt(n % h) === 0 ? h : Number(n % h);
    console.log(`${yy}${xx.toString().padStart(2, 0)}`);
  }

  return answer;
}
