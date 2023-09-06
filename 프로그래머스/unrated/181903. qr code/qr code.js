function solution(q, r, code) {
    return [...code].filter((v,i)=>i%q===r).join('');
}