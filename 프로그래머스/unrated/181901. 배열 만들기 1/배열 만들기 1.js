function solution(n, k) {
    const answer = [];
    for(let i =0; i<=n; i+=k){
        answer.push(i);
    }
    return answer.slice(1);
}