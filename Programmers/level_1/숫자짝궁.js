function solution(X, Y) {
  let answer = "";
  let arr = [];

  let yArr = [...Y];

  for (const i of X) {
    let index = yArr.findIndex((e) => e === i);
    if (index === -1) continue;
    arr.push(yArr.splice(index, 1));
  }

  if (arr.length === 0);

  return arr
    .flatMap((v) => v[0])
    .sort((a, b) => b - a)
    .join("");
}

let X = "12321";
let Y = "42531";

console.log(solution(X, Y));
