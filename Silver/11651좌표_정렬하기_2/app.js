// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...postions] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = "";

postions = postions.map((v) => v.split(" ").map(Number));

postions.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

for (const [x, y] of postions) {
  answer += `${x} ${y}\n`;
}

console.log(answer);
