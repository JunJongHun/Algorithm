// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input 가공부분
input = input.map(Number);

// console.log(input); // input 값 확인용

sloution(input); // solution에 파라미터 넣어주기

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(data) {
  let T = data.shift();
  let floor = 0;
  let ho = 0;

  let arr = Array.from(Array(15), () => Array(15).fill(0));
  for (let i = 0; i < arr[0].length; i++) {
    arr[i][0] = 1;
    arr[0][i] = i + 1;
  }
  // console.log(arr);
  for (let i = 1; i <= 14; i++) {
    for (let j = 1; j <= 14; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
    }
  }

  // console.log(arr);
  while (data.length !== 0) {
    floor = data.shift();
    ho = data.shift();
    console.log(arr[floor][ho - 1]);
    // console.log(data);
  }

  return;
}
