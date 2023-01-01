// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map(Number);

// console.log(input); // input 값 확인용

sloution(input[0], input[1]); // solution에 파라미터 넣어주기

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(a, b) {
  let answer;

  let gcd = GCD(a, b);
  let lcd = gcd * (a / gcd) * (b / gcd);
  console.log(gcd);
  console.log(lcd);
  return;
}

function GCD(a, b) {
  if (a < b) [a, b] = [b, a];
  if (b === 0) return a;
  return GCD(a % b, b);
}
