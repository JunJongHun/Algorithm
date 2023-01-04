function solution(s) {
  let answer = [-1];

  for (let i = 1; i < s.length; i++) {
    let count = -1;
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) count = i - j;
    }
    answer.push(count);
  }

  return answer;
}

const s = "banana";

console.log(solution(s));
