const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("/n");
input = input
  .toString()
  .split(" ")
  .map((v) => Number(v));

// console.log(input);

console.log(sloution(input[0], input[1], input[2], input[3]));

function sloution(x, y, w, h) {
  let answer = Math.min(x, y, w - x, h - y);
  return answer;
}
