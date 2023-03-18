function solution(numlist, n) {
    let answer = [];
    
    let d = numlist.map(x=>Math.abs(n-x));
    
    answer = d.map((x,i)=>[x,numlist[i]]);
    answer.sort((a,b)=>{
        if(a[0]===b[0]) return b[1]-a[1]
        else return a[0]-b[0]
    });
    
    
    return answer.map(x=>x[1]);
}