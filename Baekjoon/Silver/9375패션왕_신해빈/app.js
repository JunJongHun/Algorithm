// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let data = [];
let start = 0;
let answer = 1;
while (input.length !== 0) {
  let end = Number(input[0]) + 1;
  data.push(input.splice(start, end));
}

for (const i of data) {
  let m = new Map();
  answer = 1;
  for (let j = 1; j < i.length; j++) {
    let d = i[j].split(" ");
    if (m.has(d[1])) m.set(d[1], m.get(d[1]) + 1);
    else m.set(d[1], 2);
  }

  for (const v of m.values()) {
    answer *= v;
  }

  console.log(answer - 1);
}
