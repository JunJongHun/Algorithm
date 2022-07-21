// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");
const { DefaultSerializer } = require("v8");

//input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), split()을 사용해서 Array로 저장
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

input = input.map((v) => Number(v));
// console.log(input); // input 값 확인용

let output = sloution(input[0], input[1]); // solution에 파라미터 넣어주기
console.log(output); //출력값

///////////////////////////////////////////////////////////////
// 문제 로직 구현

function sloution(a, b) {
  let answer;
  let dp = Array.from(Array(a + 1), () => new Array(b + 1).fill(0));
  // console.log(dp);

  function DFS(N, K) {
    if (dp[N][K] !== 0) return dp[N][K];

    if (N === K) {
      dp[N][K] = 1;
      return 1;
    }
    if (K === 1 || N - K === 1) {
      dp[N][K] = N;
      return N;
    }
    if (K === 0) {
      dp[N][K] = 1;
      return 1;
    }
    if (dp[N][K] === 0) {
      return (dp[N][K] = DFS(N - 1, K) + DFS(N - 1, K - 1));
    }
  }
  answer = DFS(a, b);
  // console.log(dp);

  return answer;
}
