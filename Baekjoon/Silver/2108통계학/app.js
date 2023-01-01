// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(Number);

let answer = [];

input.sort((a, b) => a - b);

console.log(Math.floor(input.reduce((pre, cur) => pre + cur, 0) / N + 0.5));

console.log(input[parseInt(N / 2)]);

let m = new Map();
for (const i of input) {
  if (m.has(i)) m.set(i, m.get(i) + 1);
  else m.set(i, 1);
}
m = [...m];

m.sort((a, b) => {
  if (b[1] === a[1]) return a[0] - b[0];
  else return b[1] - a[1];
});

if (m.length === 1) console.log(m[0][0]);
else console.log(m[0][1] === m[1][1] ? m[1][0] : m[0][0]);

console.log(Math.abs(input[0] - input[input.length - 1]));
