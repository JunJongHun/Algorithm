// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = Number(input);

for (let i = 1; i <= input; i++) {
  if (input === Math.pow(i, 2)) return console.log(1);
}

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    if (input === Math.pow(i, 2) + Math.pow(j, 2)) return console.log(2);
  }
}

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    for (let k = 1; k <= input; k++) {
      if (input === Math.pow(i, 2) + Math.pow(j, 2) + Math.pow(k, 2))
        return console.log(3);
    }
  }
}

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    for (let k = 1; k <= input; k++) {
      for (let q = 1; q <= input; q++) {
        if (
          input ===
          Math.pow(i, 2) + Math.pow(j, 2) + Math.pow(k, 2) + Math.pow(q, 2)
        )
          return console.log(4);
      }
    }
  }
}
