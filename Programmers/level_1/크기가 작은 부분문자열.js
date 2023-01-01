function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    answer += parseInt(t.slice(i, i + p.length)) <= parseInt(p) ? 1 : 0;
  }

  return answer;
}

const t = "3141592";
const p = "271";

console.log(solution(t, p));
