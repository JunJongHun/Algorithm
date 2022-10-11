let answer = 0;

for (let i = 13; i <= 17; i++) {
  let m = new Map();
  let num = i;
  let sum = 0;
  for (let j = 2; j <= num; j++) {
    if (num === 1) break;

    if (num % j === 0) {
      if (m.has(j)) m.set(j, m.get(j) + 1);
      else m.set(j, 1);
      num = num / j;
      j--;
    }
  }

  for (let k of m.values()) {
    k++;
    sum += k;
  }

  if (sum % 2 === 0) answer += i;
  else answer -= i;
}

console.log(answer);
