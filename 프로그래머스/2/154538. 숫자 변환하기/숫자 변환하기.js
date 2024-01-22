function solution(x, y, n) {
    const memo = new Array(y+1).fill(999);
    
    memo[x] = 0;
    
    for(let i=x; i<y; i++){
        
        if(i+n <= y) memo[i+n] = Math.min(memo[i]+1,memo[i+n]);
        if(i*2 <= y) memo[i*2] = Math.min(memo[i]+1,memo[i*2]);
        if(i*3 <= y) memo[i*3] = Math.min(memo[i]+1,memo[i*3]);
        
    }
    
    return memo[y] === 999 ? -1 : memo[y];
}