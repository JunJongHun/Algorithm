// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let list = [];
let WB = [0, 0];
let flag = true;
for (const a of input) {
  list.push(a.split(" ").map(Number));
}

function repeat(n, y, x) {
  let count = 0;
  let stdNumber = list[y][x];
  for (let i = y; i < y + n; i++) {
    for (let j = x; j < x + n; j++) {
      if (stdNumber === list[i][j]) {
        count++;
      }
    }
  }
  if (count === n * n) WB[stdNumber]++;
  else {
    n = n / 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        repeat(n, y * i, x * j);
      }
    }
  }
}

//전체 확인
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (list[0][0] !== list[i][j]) {
      flag = false;
      break;
    }
  }
}

if (flag) {
  WB[list[0][0]]++;
} else {
  n = n / 2;
  repeat(n, 0, 0);
  repeat(n, n, 0);
  repeat(n, 0, n);
  repeat(n, n, n);
}
console.log(WB.join("\n"));
