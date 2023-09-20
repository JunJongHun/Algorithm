function solution(arr, queries) {
    return queries.map(([s,e,k])=> Math.min(...arr.slice(s,e+1).filter(v=>v>k))).map(v=> v=== Infinity ? -1 : v);
}