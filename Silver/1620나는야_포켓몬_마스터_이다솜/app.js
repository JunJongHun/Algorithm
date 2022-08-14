// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [Poket, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

Poket = Poket.split(" ").map(Number);

let answer = [];
let m = new Map();

for (let i = 0; i < Poket[0]; i++) {
  m.set(i + 1, input[i]);
  m.set(input[i], i + 1);
}

for (let i = Poket[0]; i < input.length; i++) {
  let a = isNaN(+input[i]) ? input[i] : +input[i];

  answer.push(m.get(a));
}

console.log(answer.join("\n"));
