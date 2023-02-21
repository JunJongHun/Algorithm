function solution(n) {

  let check = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 2; i <= n; i++) {
    if (check[i]) {
      for (let j = 2; i * j <= n; j++) {
        check[i * j] = false;
      }
    }
  }



  return check.filter(v=>v===true).length;
}
