// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arrN = input[1].split(" ").map(Number);
let arrM = input[3].split(" ").map(Number);
let answer = [];

function BinarySearch(left, right, arr, target) {
  while (left <= right) {
    let mid = parseInt((right + left) / 2);

    if (arr[mid] === target) return 1;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return 0;
}

arrN.sort((a, b) => a - b);

for (let target of arrM) {
  answer.push(BinarySearch(0, arrN.length - 1, arrN, target));
}

console.log(answer.join("\n"));
