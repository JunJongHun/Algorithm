// 1. 입국심사관이 n명을 심사하는데 걸리는 시간 범위를 구한다
// 2. 이분탐색을 통해 정해진 시간내에 몇명을 심사 할 수 있는지 판단
// 3. 판단한 결과가 n명보다 많으면 시간을 줄인다 -> 더 최소로 할 수 있지 않나?
// 4. 판단 결과가 n 명보다 적으면 시간을 늘린다 -> 시간이 더 필요한데?

function solution(n, times) {
  times.sort((a, b) => a - b);

  const timeRange = [];

  for (let i = 1; i <= n * times[times.length - 1]; i++) {
    timeRange.push(i);
  }

  let leftIndex = 0;
  let rightIndex = timeRange.length - 1;
  let midIndex;
  let sum = 0;

  while (leftIndex < rightIndex) {
    sum = 0;
    midIndex = Math.floor((leftIndex + rightIndex) / 2);

    times.forEach((time) => {
      sum += Math.floor(timeRange[midIndex] / time);
    });
    // console.log(timeRange[midIndex], sum);
    if (sum > n) rightIndex = midIndex - 1;
    else leftIndex = midIndex + 1;
  }

  return timeRange[midIndex];
}

const times = [7, 10];
const n = 6;

console.log(solution(n, times));
