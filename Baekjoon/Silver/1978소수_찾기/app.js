// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[1].toString().split(" ").map(Number);

// console.log(input); // input 값 확인용

let output = sloution(input); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(arr) {
  let answer = 0;

  let primeDp = [2, 3];

  for (let i = 4; i <= 1000; i++) {
    for (let j = 0; j < primeDp.length; j++) {
      if (i % primeDp[j] === 0) break;
      if (j === primeDp.length - 1) primeDp.push(i);
    }
  }

  for (const num of arr) {
    if (primeDp.includes(num)) answer++;
  }

  return answer;
}
