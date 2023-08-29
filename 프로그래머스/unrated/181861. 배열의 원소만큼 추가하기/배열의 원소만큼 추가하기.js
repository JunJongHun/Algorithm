function solution(arr) {
    return arr.map(n=>new Array(n).fill(n)).flat(2);
}