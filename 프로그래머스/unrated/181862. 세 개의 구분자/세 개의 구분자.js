function solution(myStr) {
    const result = myStr.replace(/[abc]/g,' ').split(' ').filter(v=>v);
    return result.length ? result : ["EMPTY"];
}