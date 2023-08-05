function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let bridgeWeight = [];
  let sum = 0;
  let i = 0;
  while (i < truck_weights.length) {
    if (sum + truck_weights[i] <= weight) {
      bridge.push(truck_weights[i]);
      bridgeWeight.push(truck_weights[i]);
      sum += truck_weights[i];
      i++;
    } else {
      bridge.push(0);
      bridgeWeight.push(0);
    }
    if (bridgeWeight.length === bridge_length) {
      sum -= bridgeWeight.shift();
    }
    answer++;
  }
  return answer + bridge_length;
}
