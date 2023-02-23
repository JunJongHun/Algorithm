function solution(cards1, cards2, goal) {
  let stackCards1 = cards1.reverse();
  let stackCards2 = cards2.reverse();
  let check = "Yes";

  for (const word of goal) {
    if (word === stackCards1[stackCards1.length - 1]) {
      stackCards1.pop();
      continue;
    }
    if (word === stackCards2[stackCards2.length - 1]) {
      stackCards2.pop();
      continue;
    }

    check = "No";
    break;
  }

  return check;
}
