// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((v, i) => i + " " + v);
input = input.map((v) => v.split(" "));

input.sort((a, b) => {
  if (+a[1] === +b[1]) {
    return +a[0] - +b[0];
  } else return +a[1] - +b[1];
});

for (const [n, age, name] of input) {
  console.log(age, name);
}
